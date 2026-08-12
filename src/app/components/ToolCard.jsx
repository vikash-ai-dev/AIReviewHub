export default function ToolCard({ tool }) {
  return (
    <article>
        <h2>{tool.name}</h2>
        <p>{tool.description}</p>
        <p>Category: {tool.category}</p>
        <p>Pricing: {tool.pricing}</p>
        <p>Rating: {tool.rating}/5</p>
        <p>Best For: {tool.bestFor}</p>
      
    </article>
  );
}