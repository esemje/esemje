import logo from '../assets/esemje.png';
// import logo_1 from '../assets/esemje_1.png';
// import logo_2 from '../assets/esemje_2.png'

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
                <div className="md:text-left text-center">
                    <div>
                        <h1 className="text-4xl md:text-[2.75rem] font-black mb-2 text-[#0863a3]">ESEMJE</h1>
                        <h2 className="text-xl md:text-[1.675rem] font-black text-[#a28d76] mb-4 font-['Inter']">APPLIANCES PVT. LTD.</h2>
                    </div>
                    <p className="text-sm md:text-base mb-4">GF-1, Nirman Complex, opp. 1944 The Hocco Kitchen, nr. Bus Stop, Navarangpura Gam, Navrangpura, Ahmedabad, Gujarat 380009</p>
                </div>
            </div>
        </header>

        {/* <header className="mt-12">
                <img
                    src={logo_1}
                    alt="Company Profile"
                    className="h-32 mb-4 md:mr-8 mx-auto md:mx-0"
                />
                <div className="md:text-left">
                    <p className="text-sm md:text-base mb-4">GF-1, Nirman Complex, opp. 1944 The Hocco Kitchen, nr. Bus Stop, Navarangpura Gam, Navrangpura, Ahmedabad, Gujarat 380009</p>
                </div>
        </header> */}
        </>
    );
};

export default Header;
