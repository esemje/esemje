/* eslint-disable react/prop-types */
const Header = ({ companyName, profileImage, description }) => {
  return (
    <header className="mt-12">
      <div className="md:flex md:items-center md:justify-center">
        <img
          src={profileImage}
          alt="Company Profile"
          className="rounded-full shadow-lg w-44 h-44 mb-4 md:mr-8 mx-auto md:mx-0"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-black mb-2">{companyName}</h1>
          <p className="text-sm md:text-base mb-4">{description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
