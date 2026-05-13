const collections = [
  {
    title: "Midnight Archive",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Velvet Theory",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Noir Edition",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1200&auto=format&fit=crop",
  },
];

const Collections = () => {
  return (
    <section className="collections">
      <div className="collections-header">
        <p>Featured Collections</p>
        <h2>Curated Editorial Looks</h2>
      </div>

      <div className="collection-grid">
        {collections.map((item, index) => (
          <div className="collection-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="collection-info">
              <h3>{item.title}</h3>
              <p>{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;