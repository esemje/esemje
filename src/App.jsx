import { useEffect, useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('https://esemje.github.io/esemje/data.json')
    // fetch('data.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredSections = data?.sections.map(section => ({
    ...section,
    items: section.items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())),
  })).filter(section => section.items.length > 0);

  return (
    <div className="text-gray-800 mx-auto p-4 font-['Poppins']">
      {data ? (
        <>
          <Header companyName={data.companyName} profileImage={data.profileImage} description={data.description} />
          <div className="mt-6 mb-8">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-3 rounded-lg shadow-lg w-full mx-auto"
            />
          </div>
          <main className="mt-12 text-center">
            <div className="md:grid md:grid-cols-2 md:gap-4">
              {filteredSections.length > 0 ? (
                filteredSections.map((section, index) => (
                  <Section key={index} title={section.title} items={section.items} />
                ))
              ) : (
                <p className='text-left'>No results found...</p>
              )}
            </div>
          </main>
          <footer className='mt-8'>
            <Footer />
          </footer>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
