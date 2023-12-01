import Hero_Image from "../assets/photo-grid.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={Hero_Image}></img>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;
