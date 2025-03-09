function About() {
  return (
    <div id="About" className="my-25 lg:my-45 mx-5 lg:mx-38 md:scroll-mt-30">
      <h2 className="text-center text-primary text-3xl xl:text-4xl 2xl:text-5xl underline underline-offset-12 mb-20 lg:mb-40 mx-auto">
        About
      </h2>
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <img
          src="/computer1.jpg"
          className="w-[80%] lg:w-[40%] shadow-2xl rounded-lg mb-10 lg:mb-0"
          alt=""
        />
        <div className="w-[80%] lg:w-[40%] text-justify">
          <p className="lg:text-base xl:text-lg 2xl:text-2xl mb-4 2xl:mb-7">
            A versatile software developer with a passion for crafting seamless
            digital experiences and specializing in creating visually appealing and
            efficient solutions.
          </p>
          <p className="lg:text-base xl:text-lg 2xl:text-2xl">
            My approach combines creativity with technical precision to bring ideas
            to life. Whether it’s designing intuitive UIs or developing robust
            backend systems, I thrive on turning concepts into functional realities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
