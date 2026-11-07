
import Navbar from "@/app/components/Navbar";
import guides from "@/app/data/guides";

const GuideDetails = async ({ params }) => {
    const { slug } = await params;

    const guide = guides.find((item) => {
        return item.slug === slug;
    })
    // console.log("URL slug:", slug);
    // console.log("Available slugs:", guides.map((item) => item.slug));
    // console.log("Found guide:", guide);

    return (
        <main>

            <Navbar />

            <div>

                <section key={guide.slug}
                    className="w-full flex flex-col bg-[#15151C] border border-zinc-800 rounded-xl overflow-hidden">

                    {/* <h1>{guide.title}</h1> */}
                    <p>{guide.description}</p>
                    <p>{guide.category}</p>
                    <p>{guide.readingTime}</p>
                    <img src={guide.image} alt={guide.title}
                        className="w-full h-56 object-cover" />

                </section>

            </div>


        </main>
    );
}

export default GuideDetails;