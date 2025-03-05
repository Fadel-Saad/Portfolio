function Hero() {
  return (
    <div className="hero mt-52">
      <div className="flex justify-around items-center ">
        {/* Hero Left */}
        <div className="ml-50 md:ml-15 lg:ml-25 xl:ml-30 2xl:ml-52 w-[20%] md:w-[40%]">
          <h1 className="md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-8 w-fit font-bold">
            Hi,
            <br /> I am <span className="text-primary">Fadel</span>
            <br /> a Software Developer
          </h1>

          <div className="flex flex-row justify-start w-fit">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-primary">
              View Profile
            </button>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-secondary btn-outline ml-2 md:ml-10">
              Download CV
            </button>
          </div>
        </div>
        {/* Hero Right */}
        <div className="w-[15%] md:w-[32%] flex items-center justify-center mr-50 md:mr-10 lg:mr-20 xl:mr-35 2xl:mr-58">
          <img
            src="/profile-pic.png"
            className="w-[90%] h-[90%] relative overflow-clip rounded-full border-1 md:border-2 border-primary"
          />

          <div className="outerCircle h-[140px] w-[140px] md:h-[325px] md:w-[325px] lg:h-[425px] lg:w-[425px] xl:h-[500px] xl:w-[500px] 2xl:h-[625px] 2xl:w-[625px] absolute border-1 md:border-2 border-secondary rounded-full after:bg-primary before:bg-primary"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
