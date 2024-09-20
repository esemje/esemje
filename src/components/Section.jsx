/* eslint-disable react/prop-types */
const Section = ({ title, items }) => {
  return (
    <section className="mb-8">
        <p className="text-xl md:text-2xl font-bold mb-4">{title}</p>
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-base">
              {item.name}
            </a>
          </div>
        ))}
      </section>
  );
};

export default Section;
