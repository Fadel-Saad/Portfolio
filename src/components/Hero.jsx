function Hero() {
  return (
    <div id="Hero" className="hero mt-7 md:mt-52 scroll-mt-64">
      <div className="flex flex-col gap-20 md:gap-0 md:flex-row justify-around items-center ">
        {/* Hero Left */}
        <div className=" md:ml-15 lg:ml-25 xl:ml-30 2xl:ml-52 w-fit md:w-[40%]">
          {/* desktop version */}
          <h1 className="hidden md:block md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-8 w-fit font-bold">
            Hi,
            <br /> I am <span className="text-primary">Fadel</span>
            <br /> a Software Developer
          </h1>
          {/* mobile version */}
          <h1 className="md:hidden text-center text-3xl mb-5 w-fit font-bold">
            Hi, I am <span className="text-primary">Fadel</span>
            <br /> a Software Developer
          </h1>

          <div className="flex flex-row justify-around  md:justify-start mx-auto md:mx-0 w-[80%] md:w-fit ">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-primary">
              View Profile
            </button>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-secondary btn-outline  md:ml-10">
              Download CV
            </button>
          </div>
        </div>
        {/* Hero Right */}
        <div className="w-[70%] md:w-[32%] flex items-center justify-center  md:mr-10 lg:mr-20 xl:mr-35 2xl:mr-58">
          <img
            src="/profile-pic.png"
            className="w-[90%] h-[90%] relative overflow-clip rounded-full border-1 md:border-2 border-primary"
          />

          <div className="outerCircle h-[280px] w-[280px] sm:h-[460px] sm:w-[460px] md:h-[325px] md:w-[325px] lg:h-[425px] lg:w-[425px] xl:h-[500px] xl:w-[500px] 2xl:h-[625px] 2xl:w-[625px] absolute border-1 md:border-2 border-secondary rounded-full after:bg-primary before:bg-primary"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
