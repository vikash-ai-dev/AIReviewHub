import tools from "../data/tools";
import ToolCard from "../components/ToolCard";
export default function Tools() {
    return (
        <main>
            <section>
                <p>AIReviewHub</p>

                <h1>AI Tools</h1>

                <p>
                    Discover AI tools that can help you work, learn, create, and grow.
                </p>

                <div>

                    <input type="text" 
                    
                    placeholder="Search for an AI tool">

                    </input>
                    <button>Search</button>
                </div>
                <section>
                    <h2>Explore by Category</h2>

                    <div>
                        <button>Writing</button>
                        <button>Image Generation</button>
                        <button>Video</button>
                        <button>Coding</button>
                        <button>Audio</button>
                        <button>Productivity</button>
                    </div>
                </section>
                <section>
                    <h2>
                        Featured AI Tools
                    </h2>
                    <div className=" mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {tools.map((tool)=>(
                        <ToolCard key={tool.name} tool={tool}/>
                       )) }

                    </div>
                    

                </section>

            </section>
        </main>
    );
}