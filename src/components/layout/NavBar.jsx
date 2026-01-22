import {ShoppingBag} from "lucide-react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        // Nav bar - make sticky
        <nav className="flex items-center justify-between px-10 py-4 bg-[#fff6f2] border-b border-[#f0e0da]">

            {/*Logo*/}
            <div className='text-2xl font-bold font-serif'>
                <span className='text-[#5c3723]'>Blissful</span>
                <span className='text-[#d7425a]'>Delights</span>
            </div>

            {/*Links*/}
            <ul className={
                'flex gap-8 text-[#5c3723]\n' +
                '[&>li]:cursor-pointer\n' +
                ' [&>li]:transition-colors\n' +
                '[&>li:hover]:text-[#d84a5b]'
            }>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>
                    <Link
                        to="/contact"
                        className="text-red-500"
                        onClick={() => console.log("clicked")}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/*Cart*/}
            <div className="relative cursor-pointer">
                <ShoppingBag className="text-[#5c3723]"/>
                <span className="absolute -top-2 -right-2 bg-[#d84a5b] text-white text-xs px-1.5 py-0.5 rounded-full">
                  0
                </span>
            </div>
        </nav>

    );
}

export default NavBar;