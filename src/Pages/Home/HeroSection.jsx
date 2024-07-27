export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Alex Molokomme</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full-Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Looking forward to share my experince.
          </p>
        </div>
        <button className="btn btn-primary">MORE INFO</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/code.png" alt="kganshi" />
      </div>
    </section>
  );
}
