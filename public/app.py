from flask import Flask, jsonify, request, render_template, redirect, url_for
import json

app = Flask(__name__)

# Load initial data from a JSON file
DATA_FILE = 'agencies.json'


def load_data():
    with open(DATA_FILE, 'r') as f:
        return json.load(f)


def save_data(data):
    with open(DATA_FILE, 'w') as f:
        json.dump(data, f, indent=4)


@app.route('/')
def index():
    data = load_data()
    return render_template('index.html', data=data)


@app.route('/add', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        name = request.form['name']
        catalogue = request.form['catalogue']
        
        # Get products from form
        products = []
        product_links = request.form.getlist('product_link[]')
        product_images = request.form.getlist('product_image[]')

        for link, image in zip(product_links, product_images):
            products.append({
                "image": image,
                "alt": link  # Assuming alt text can be the product link
            })

        new_entry = {
            "name": name,
            "products": products,
            "catalogue": catalogue
        }

        data = load_data()
        data.append(new_entry)
        save_data(data)
        return redirect(url_for('index'))

    return render_template('add.html')


@app.route('/edit/<name>', methods=['GET', 'POST'])
def edit(name):
    data = load_data()
    entry = next((item for item in data if item["name"] == name), None)
    if not entry:
        return "Entry not found", 404

    if request.method == 'POST':
        entry['name'] = request.form['name']
        entry['catalogue'] = request.form['catalogue']

        # Update products
        products = []
        product_links = request.form.getlist('product_link[]')
        product_images = request.form.getlist('product_image[]')

        for link, image in zip(product_links, product_images):
            products.append({
                "image": image,
                "alt": link  # Assuming alt text can be the product link
            })

        entry['products'] = products
        save_data(data)
        return redirect(url_for('index'))

    return render_template('edit.html', entry=entry)


@app.route('/delete/<name>', methods=['POST'])
def delete(name):
    data = load_data()
    data = [item for item in data if item["name"] != name]
    save_data(data)
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)
