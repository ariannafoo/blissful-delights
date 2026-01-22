import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slides } from "../../data/slides.js"

export default function HeroCarousel() {
    const [index, setIndex] = useState(0);

    if (!slides?.length) return null;
    const slide = slides[index % slides.length];

    // Auto rotate slides every 4.5 seconds
    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 4500);

        return () => clearInterval(id);
    }, []);
    return (
        <section className="relative overflow-hidden bg-[#fff6f2]">
            {/* soft background blobs */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#f6e8e8] blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#f5e7df] blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20 z-10">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    {/* LEFT: text */}
                    <div>
                        {/*Tag*/}
                        <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm
                        text-rose-700">
                            {slide.tag}
                        </div>

                        {/*Slide title*/}
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={slide.titleTop + slide.titleAccent + slide.titleBottom}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                                className="mt-6 font-serif text-5xl leading-[1.02] text-[#5c3723] md:text-6xl"
                            >
                                {slide.titleTop}{" "}
                                <span className="text-[#d84a5b]">{slide.titleAccent}</span>{" "}
                                {slide.titleBottom}
                            </motion.h1>
                        </AnimatePresence>

                        {/*Sub text*/}
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={slide.subText}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35, delay: 0.05 }}
                                className="mt-4 max-w-md text-base text-[#6a4b47]"
                            >
                                {slide.subText}
                            </motion.p>
                        </AnimatePresence>

                        {/*Button section - TODO - update button action*/}
                        <div className="mt-8 flex gap-4">
                            {/*Order now button*/}
                            <button className="rounded-xl bg-[#d84a5b] px-6 py-3 cursor-pointer font-semibold
                            text-white shadow-sm transition-transform duration-300 ease-out hover:scale-105">
                                Order Now
                            </button>
                            {/*View collection button*/}
                            <button className="rounded-xl border bg-[#5c3723] px-6 py-3 cursor-pointer font-semibold
                            text-white hover:opacity-90">
                                View Collection
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: image card */}
                    <div className="relative">
                        <div className="rounded-3xl bg-white/35 p-4 shadow-[0_25px_80px_-45px_rgba(0,0,0,0.35)] backdrop-blur">
                            <div className="relative overflow-hidden rounded-3xl">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={slide.image}
                                        src={slide.image}
                                        alt="Chocolate covered strawberries"
                                        className="h-80 w-full object-cover md:h-95"
                                        initial={{ opacity: 0, scale: 1.02 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.45 }}
                                    />
                                </AnimatePresence>

                                {/* price tag */}
                                <motion.div
                                    className="absolute bottom-4 left-4 rounded-2xl bg-white/85 px-5 py-3 shadow"
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="text-xs text-[#6a4b47]">Starting at</div>
                                    <div className="text-2xl font-bold text-[#3b2523]">{slide.price}</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
