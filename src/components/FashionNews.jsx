// FashionNews.jsx
import aliaImg from "../assets/Alia.png";

const articles = [
 {
  id: 1,
  category: "CANNES",
  title: "Cannes Red Carpet Dominates Global Fashion Headlines",
  description:
    "Luxury silhouettes, archival couture, and cinematic styling redefine this year’s red carpet culture.",
  image: aliaImg,
},

  {
    id: 2,
    category: "RUNWAY",
    title: "Paris Fashion Week Introduces A New Era Of Minimal Couture",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },

  {
    id: 3,
    category: "EDITORIAL",
    title: "Luxury Editorials Shift Towards Dark Romanticism",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },

  {
    id: 4,
    category: "MODEL WATCH",
    title: "Emerging Faces From Asia Are Reshaping Global Fashion",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
  },
];

const FashionNews = () => {
  return (
    <section className="fashion-news">

      <div className="news-header">
        <p>LATEST FASHION INTELLIGENCE</p>

        <h2>
          Global Runway Culture,
          <br />
          Luxury Campaigns &
          <br />
          Editorial Stories
        </h2>
      </div>

      <div className="news-layout">

        {/* LEFT FEATURED ARTICLE */}

        <div className="featured-news">

          <div className="featured-image">
            <img src={articles[0].image} alt="" />
          </div>

          <div className="featured-content">

            <span>{articles[0].category}</span>

            <h3>{articles[0].title}</h3>

            <p>{articles[0].description}</p>

            <button>
              Read Story
            </button>

          </div>

        </div>

        {/* RIGHT SIDE ARTICLES */}

        <div className="side-news">

          {articles.slice(1).map((article) => (
            <div className="side-card" key={article.id}>

              <div className="side-image">
                <img src={article.image} alt="" />
              </div>

              <div className="side-content">

                <span>{article.category}</span>

                <h4>{article.title}</h4>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FashionNews;