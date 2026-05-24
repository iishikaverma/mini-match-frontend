import { Link } from "react-router-dom";

const Header = () => {

    return (

        <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 bg-[#1a1a1a] shadow-md">

            <Link to="/">
            <h2 className="text-white text-3xl font-black tracking-wide">
                Mini-Match
            </h2>
            </Link>

            <Link to="/add-candidate">

                <button className="px-4 py-2 border border-blue-400 rounded-md text-sm 
                font-semibold text-blue-400 transition-all duration-200 hover:bg-blue-500
                hover:text-white hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 cursor-pointer">

                    Add Candidate

                </button>

            </Link>

        </header>
    );
};

export default Header;