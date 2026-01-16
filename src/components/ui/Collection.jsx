function Collection() {
    return (
        <section id="collection" className="bg-[#fbf7f4] py-20">
            <div className="mx-auto max-w-6xl px-6">

                {/*Top Label*/}
                <div className="flex justify-center">
                    <span className="rounded-full bg-rose-100 px-4 text-sm text-rose-700">
                        Our Collection
                    </span>
                </div>

                {/*Heading*/}
                <h2 className="mt-6 text-center font-serif text-5xl text-[#3b2523]">
                    Handcrafted Favourites
                </h2>

                {/*Subtitle*/}
                <p className="mx-auto mt-4 max-w-2xl text-center text-[#6a4b47]">
                    Each strawberry is carefully selected and dipped by hand, ensuring the perfect chocolate
                    coating every time.
                </p>

                {/*Product Cards - TODO: Add product cards*/}
                <div className="mt-12">
                    Cards coming next...
                </div>

            </div>


        </section>
    );
}

export default Collection;