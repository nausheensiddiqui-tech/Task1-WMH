const models = [
  {
    name: "Sophia Laurent",
    city: "Paris",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Ava",
    city: "New York",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Isabella Reed",
    city: "Milan",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  },
];

const FeaturedModels = () => {
  return (
    <section className="featured-models">
      <div className="section-header">
        <p>Featured Talent</p>
        <h2>Faces Defining Modern Fashion</h2>
      </div>

      <div className="models-grid">
        {models.map((model, index) => (
          <div className="model-card" key={index}>
            <img src={model.image} alt={model.name} />

            <div className="model-info">
              <h3>{model.name}</h3>
              <span>{model.city}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedModels;