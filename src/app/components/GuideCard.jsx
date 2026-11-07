import Link from "next/link";

const GuideCard = ({guides}) => {
    const cards = guides.map((item) => {
        return (
            <div
                key={item.slug}
                className="w-full flex flex-col bg-[#15151C] border border-zinc-800 rounded-xl overflow-hidden"
            >
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                />
                <div className="p-5 flex flex-col flex-1 gap-3">
                    <div className="flex items-center justify-between">
                        <span className="w-fit rounded-full bg-violet-950 text-violet-300 text-xs font-medium px-3 py-1">
                            {item.category}
                        </span>
                        <span className="text-base text-zinc-400">
                            {item.readingTime}
                        </span>
                    </div>

                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-base text-zinc-400">{item.description}</p>

                    <Link href={`/guides/${item.slug}`} className="text-violet-400 mt-auto pt-2 cursor-pointer hover:text-violet-300 transition-colors">
                        Read Guide →
                    </Link>
                </div>
            </div>
        );
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards}
        </div>
    );
};

export default GuideCard;