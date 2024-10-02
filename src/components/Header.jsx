import logo from '../assets/esemje.png';

const Header = () => {
    return (
        <>
        <header className="mt-12">
        <div className="md:flex md:items-center md:justify-center">
        <img
            src={logo}
            alt="Company Profile"
            className="rounded-full shadow-lg w-44 h-44 mb-4 md:mr-8 mx-auto md:mx-0"
        />
        <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-black mb-2">ESEMJE Appliances PVT. LTD.</h1>
            <p className="text-sm md:text-base mb-4">GF-1, Nirman Complex, opp. 1944 The Hocco Kitchen, nr. Bus Stop, Navarangpura Gam, Navrangpura, Ahmedabad, Gujarat 380009</p>
        </div>
        </div>
        </header>
        </>
    );
};

export default Header;
