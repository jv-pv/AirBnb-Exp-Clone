import "./App.css";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Card from "./components/card.jsx";
import data from "./data.js";

function App() {

  const cards = data.map(card => {
    return (
    <Card
    key={card.id}
    coverImg={card.coverImg}
    rating={card.stats.rating}
    reviewCount={card.stats.reviewCount}
    location={card.location}
    title={card.title}
    price={card.price}
    />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="card-container">
      {cards}
      </section>
    </>
  );
}

export default App;
