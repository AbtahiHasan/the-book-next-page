import { useState } from "react";
import { HiLightningBolt, HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <header className="bg-slate-200">
            <nav className="ui-container px-4 py-6 flex items-center justify-between">
                <h2 className="text-xl font-bold flex gap-1"><HiLightningBolt className="text-[#3b82f6]"/><span>the book next page</span></h2>
               <p className={`text-2xl md:hidden`}>
                {
                   toggle ? <IoMdClose onClick={() => setToggle(!toggle)}/> : <HiOutlineMenuAlt2 onClick={() => setToggle(!toggle)}/>
                }
               </p>
                <ul className={`responsive-nav ${toggle ? "left-0" : "-left-full"}`}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/books">Books</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;