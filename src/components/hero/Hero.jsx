import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>JOSEPH MEADOWCROFT</h2>
          <h1>Web developer and UI designer</h1>
          <div className="buttons">
            <button>See my latest projects</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
