import { HiLightningBolt } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-slate-200">
            <nav className="ui-container px-4 py-6 flex items-center justify-between">
                <h2 className="text-xl font-bold flex gap-1"><HiLightningBolt className="text-[#3b82f6]"/><span>the book next page</span></h2>
                <ul className="flex gap-3 text-lg">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/books">Books</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;