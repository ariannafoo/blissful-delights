import { useState } from "react";
import { galleryPreview } from "../data/gallery.js";

export default function GalleryPreview() {
    const [active, setActive] = useState(null);

    return (
        <section id="work" className="bg-[#fbf7f4] py-20">
            <div className="mx-auto max-w-6xl px-6">
                {/*Header*/}
                <div className="text-center">
                    {/*Tag*/}
                    <div className="flex justify-center">
                        <span className="rounded-full bg-rose-100 px-4 text-sm text-rose-700">
                            Our Work
                        </span>
                    </div>

                    {/*Heading*/}
                    <h2 className="mt-6 text-center font-serif text-5xl text-[#5c3723]">
                        Sweet Moments Gallery
                    </h2>

                    {/*Subtitle*/}
                    <p className="mx-auto mt-4 max-w-2xl text-center text-[#5c3723]">
                        From intimate celebrations to grand events, see how our chocolate covered strawberries have
                        made every occasion sweeter.
                    </p>
                </div>

                {/*Gallery Grid*/}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryPreview.map((img) => (
                        <button
                            key={img.id} type="button" onClick={() => setActive(img)}
                            // TODO: make transparent
                            className="group overflow-hidden cursor-pointer rounded-3xl bg-white
                            shadow-[0_18px_50px_-35px_rgba(0,0,0,0.35)]"
                        >
                            {/*Image*/}
                            <div className="relative h-64 overflow-hidden">
                                <img src={img.src} alt={img.title} className="h-full w-full object-cover
                                transition-transform duration-300 ease-out group-hover:scale-105"/>
                                {/*TODO: change transition colour*/}
                                <div className="absolute inset-0 bg-black/0 transition" />
                            </div>

                            {/*Image description*/}
                            <div className="p-5 text-left">
                                <p className="font-serif text-lg text-[#5c3723]">{img.title}</p>
                                <p className="mt-1 text-sm text-[#6a4b47]">{img.desc}</p>
                            </div>
                        </button>
                        ))}
                </div>

                {/*Link/CTA to Gallery Page TODO:Edit gallery link*/}
                <div className="mt-10 text-center">
                    <a href="/gallery" className="px-6 py-3 cursor-pointer inline-flex items-center justify-center
                    rounded-xl bg-[#5c3723] px-6 text-sm font-semibold text-white hover:opacity-95">
                        View Full Gallery
                    </a>
                </div>
            </div>

            {/*Image popout - Modal*/}
            {active && (
                <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6"
                     onClick={() => setActive(null)}>

                    <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white"
                    onClick={(e) => e.stopPropagation()}>

                        {/*Model popout*/}
                        <img src={active.src} alt={active.title} className="h-[420px] w-full object-cover"/>
                        <div className="p-6 text-center">
                            <h3 className="font-serif text-2xl text-[#5c3723]">
                                {active.title}
                            </h3>
                            <p className="mt-2 text-sm text-[#5c3723]">{active.desc}</p>

                            <button onClick={() => setActive(null)}
                                    className="mt-6 rounded-xl bg-[#5c3723] px-5 py-2 cursor-pointer text-sm font-semibold text-white">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}