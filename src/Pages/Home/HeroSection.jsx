export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Gururaj</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I love transforming ideas into real-world web applications, With a solid foundation in both front-end and back-end development. I focus on writing clean, efficient code and crafting intuitive user experiences.
            <br />
            Let’s build something amazing together.
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            const contactSection = document.getElementById("Contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get In Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
