import tools from "../../data/tools";

export default async function ToolDetails({ params }) {
  const { slug } = await params;

  const tool = tools.find((tool) => tool.slug === slug);

  return (
    <main>
      <h1>{tool.name}</h1>
      <p>{tool.description}</p>
      <p>Category: {tool.category}</p>
      <p>Pricing: {tool.pricing}</p>
      <p>Rating: {tool.rating}/5</p>
      <p>Best For: {tool.bestFor}</p>
    </main>
  );
}