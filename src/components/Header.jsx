import { useState } from "react";
import { HiLightningBolt, HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <header className="bg-slate-200">
            <nav className="ui-container px-4 py-6 flex items-center justify-between">
                <Link to="/">
                    <h2 className="text-xl font-bold flex gap-1"><HiLightningBolt className="text-[#3b82f6]"/><span>the book next page</span></h2>
                </Link>
               <p className={`text-2xl md:hidden`}>
                {
                   toggle ? <IoMdClose onClick={() => setToggle(!toggle)}/> : <HiOutlineMenuAlt2 onClick={() => setToggle(!toggle)}/>
                }
               </p>
                <ul className={`responsive-nav ${toggle ? "left-0" : "-left-full"}`}>
                    <NavLink onClick={() => setToggle(false)} to="/">Home</NavLink>
                    <NavLink onClick={() => setToggle(false)} to="/books">Books</NavLink>
                    <NavLink onClick={() => setToggle(false)} to="/about">About Us</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;