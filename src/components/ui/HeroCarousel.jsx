export default function HeroCarousel() {
    return (
        <section className="relative overflow-hidden bg-[#fff6f2]">
            {/* soft background blobs */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
            </div>

            <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    {/* LEFT: text */}
                    <div>
                        {/*Tag*/}
                        <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm text-rose-700">
                            ✨ Handcrafted with Love
                        </div>

                        {/*Slide title*/}
                        <h1 className="mt-6 font-serif text-5xl leading-[1.02] text-[#3b2523] md:text-6xl">
                            Indulge in <span className="text-[#d84a5b]">Sweet</span> Perfection
                        </h1>

                        {/*Sub text*/}
                        <p className="mt-4 max-w-md text-base text-[#6a4b47]">
                            Premium chocolate-covered strawberries, handcrafted fresh for every celebration.
                        </p>

                        {/*Button section*/}
                        <div className="mt-8 flex gap-4">
                            {/*Order now button*/}
                            <button className="rounded-xl bg-[#d84a5b] px-6 py-3 font-semibold text-white shadow-sm hover:opacity-95">
                                Order Now
                            </button>
                            {/*View collection button*/}
                            <button className="rounded-xl border border-[#3b2523]/30 bg-white/40 px-6 py-3 font-semibold text-[#3b2523] hover:bg-white/60">
                                View Collection
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: image card */}
                    <div className="relative">
                        <div className="rounded-3xl bg-white/35 p-4 shadow-[0_25px_80px_-45px_rgba(0,0,0,0.35)] backdrop-blur">
                            <div className="relative overflow-hidden rounded-3xl">
                                <img
                                    src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1400&q=80"
                                    alt="Chocolate covered strawberries"
                                    className="h-[320px] w-full object-cover md:h-[380px]"
                                />

                                {/* price tag */}
                                <div className="absolute bottom-4 left-4 rounded-2xl bg-white/85 px-5 py-3 shadow">
                                    <div className="text-xs text-[#6a4b47]">Starting at</div>
                                    <div className="text-2xl font-bold text-[#3b2523]">$24.99</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
