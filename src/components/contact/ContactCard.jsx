import { contactcards } from "../../data/contactcards.js";

export default function ContactCard({ content }) {
    return (

      <section className="bg-[#f7efe8] py-14">
          <div className="mx-auto w-full max-w-6xl px-6">
            {/*Contact Cards*/}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactcards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                  key={card.id}
                  className="rounded-3xl bg-white px-6 py-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-transform duration-200 hover:-translate-y-1"
                  >
                    {/* Icon bubble */}
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f7d6dc]">
                      <Icon className="h-6 w-6 text-[#c85b70]" />
                    </div>

                    {/* Card title */}
                    <h3 className="font-serif text-xl text-[#2b1b17]">
                      {card.title}
                    </h3>

                    {/* Card subtitl / link -- ternary operator */}
                    {card.href ? (
                      <a
                        href={card.href}
                        className="mt-2 block text-sm font-medium text-[#2b1b17]hover:text-[#c85b70] hover:underline"
                      >
                        {card.subtitle}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm font-medium text-[#2b1b17]">
                        {card.subtitle}
                      </p>
                    )}

                    {/* Card text */}
                    <p className="mt-2 text-sm text-[#8b6f6a]">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
      </section>
    );
}