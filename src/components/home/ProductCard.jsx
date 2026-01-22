import { Heart, ShoppingBag } from 'lucide-react';

function ProductCard({ product }) {
    return (
        <article
            className="group overflow-hidden rounded-3xl bg-white
            shadow-[0_18px_50px_-35px_rgba(0,0,0,0.35)]
            transition-all duration-500 ease-out
            hover:-translate-y-2"
        >

            {/*Image area*/}
            <div className="relative h-56 overflow-hidden">
                {/*Tag pill*/}
                <span className="absolute left-4 top-4 z-10 rounded-full bg-[#d84a5b] px-3 py-1 text-xs
                font-semibold text-white">
                    {product.tag}
                </span>

                {/*Heart like - TODO: maybe remove*/}
                <button className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/80
                text-[#5c3723] shadow transition hover:bg-[#d84a5b]">
                    <Heart size={18} className="text-[#]"/>
                </button>

                {/*Product image*/}
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform
                duration-300 ease-out group-hover:scale-105"
                />
            </div>

            {/*Card Content*/}
            <div className="p-6">
                {/*Product title*/}
                <h3 className="font-serif text-xl text-[#5c3723] text-center">
                    {product.name}
                </h3>

                {/*Product description*/}
                <p className="mt-2 text-sm text-[#5c3723] line-clamp-2">
                    {product.desc}
                </p>

                {/*Card Price Area*/}
                <div className="mt-5 flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-[#5c3723]">
                        ${product.price}
                    </span>

                </div>
            </div>
        </article>
    );
}

export default ProductCard;