import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {

    return (
        <footer id="footer" className="bg-transparent">

            {/*Footer Head*/}
            <div className="bg-gradient-to-b from-[#6b3f2a] to-[#492a19]">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    {/*Text*/}
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-white font-serif font-semibold text-5xl">Ready to Make Your Event
                            Unforgettable?
                        </h1>
                        <p className="text-white/80 mt-5 leading-6">
                            Whether it's a small gathering or grand celebration, we'll craft the perfect chocolate covered
                            strawberries just for you. Order now and taste the difference quality makes.
                        </p>
                    </div>

                    {/*Button section*/}
                    <div className="mt-10 mb-20 flex gap-4 justify-center">
                        <button className="rounded-xl bg-[#d84a5b] text-white font-semibold px-6 py-3 cursor-pointer
                        shadow-sm transition-transform duration-300 ease-out hover:scale-105">
                            Start Your Order
                        </button>

                        <button className="rounded-xl text-white bg-[#5c3723] border-white px-6 py-3 cursor-pointer
                    shadow-sm">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            {/*Footer Foot*/}
            <div className="bg-[#5c3723]">
                <div className="mx-auto max-w-7xl px-6 py-14">
                    <div className="grid gap-12 md:grid-cols-2">
                        {/*Beginning*/}
                        <div>
                            {/*Logo*/}
                            <div className="font-serif font-semibold">
                                <span className="text-white">Blissful</span>
                                <span className="text-[#d7425a]">Delights</span>
                            </div>

                            {/*Description*/}
                            <p className="max-w-sm text-sm leading-6 text-white/80 mt-6">
                                Handcrafted chocolate covered strawberries made with love.
                                Perfect for any occasion, big or small.
                            </p>

                            {/*Socials*/}
                            <div className="mt-6 flex gap-4">
                                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15 cursor-pointer hover:bg-white/25 transition">
                                    <Instagram className="h-5 w-5 text-white"/>
                                </div>

                                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15 cursor-pointer hover:bg-white/25 transition">
                                    <Facebook className="h-5 w-5 text-white"/>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-12">
                            {/*Middle - quick links*/}
                            <div className="text-white">
                                <h3 className="font-serif font-semibold">Quick Links</h3>
                                <ul className="text-sm mt-4 space-y-2 text-[#e7d8cf]">
                                    <li><a>Home</a></li>
                                    <li><a>Shop</a></li>
                                    <li><a>About Us</a></li>
                                    <li><a>FAQ</a></li>
                                </ul>
                            </div>

                            {/*End - Contact*/}
                            <div>
                                <h3 className="font-serif font-semibold text-white">Contact Us</h3>

                                <ul className="mt-4 space-y-4 text-sm text-[#e7d8cf]">
                                    <li className="flex items-center gap-3">
                                        <Mail size={18} className="text-[#d84a5b]" />
                                        <span>hello@berrybliss.com</span>
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <Phone size={18} className="text-[#d84a5b]" />
                                        <span>(555) 123-4567</span>
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <MapPin size={18} className="text-[#d84a5b]" />
                                        <span>Los Angeles, CA</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* bottom bar */}
                    <div className="mt-10 border-t border-white/10 pt-6">
                        <div className="flex flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
                            <p>© {new Date().getFullYear()} Blissful Delights. All rights reserved.</p>

                            <div className="flex gap-6">
                                <a href="#" className="transition hover:text-white">
                                    Privacy Policy
                                </a>
                                <a href="#" className="transition hover:text-white">
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}