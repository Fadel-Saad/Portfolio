import Skill from "./Skill";

function Skills() {
  return (
    <div id="Skills" className="w-full mt-25 mb-20 lg:mb-35 scroll-mt-30">
      <h2 className="mx-auto w-[50%] text-primary text-center mb-25 text-3xl xl:text-4xl 2xl:text-5xl underline underline-offset-12">
        Skills
      </h2>
      <div className="flex justify-between sm:justify-around mx-0 lg:mx-48">
        {/* front-end section */}
        <div className="w-[48%] sm:w-[45%] flex flex-col bg-base-300 rounded-3xl p-6 lg:p-10 pb-0">
          <div className="flex gap-5 items-center justify-center mb-10 md:mb-15 lg:mb-20">
            <img src="icons/frontend.png" className="w-10 md:w-14 lg:w-18" alt="" />
            <h2 className="text-base sm:text-lg xl:text-2xl 2xl:text-3xl">
              FRONT-END
            </h2>
          </div>
          <div className="flex justify-evenly flex-wrap">
            <Skill icon="icons/react.png" skillDesc="React.JS" />
            <Skill icon="icons/js.png" skillDesc="Javascript" />
            <Skill icon="icons/nextjs.png" skillDesc="Next.JS" />
            <Skill icon="icons/css.png" skillDesc="CSS" />
            <Skill icon="icons/html.png" skillDesc="HTML" />
          </div>
        </div>
        {/* back-end section */}
        <div className="w-[48%] sm:w-[45%] flex flex-col bg-base-300 rounded-3xl p-6 lg:p-10 pb-0 ">
          <div className="flex gap-5 items-center justify-center mb-10 md:mb-15 lg:mb-20">
            <img src="icons/backend.png" className="w-10 md:w-14 lg:w-18" alt="" />
            <h2 className="text-base sm:text-lg xl:text-2xl 2xl:text-3xl">
              BACK-END
            </h2>
          </div>
          <div className="flex justify-evenly flex-wrap">
            <Skill icon="icons/nodejs.png" skillDesc="Node.JS" />
            <Skill icon="icons/express.png" skillDesc="Express.JS" />
            <Skill icon="icons/api.png" skillDesc="APIs" />
            <Skill icon="icons/python.png" skillDesc="Python" />
            <Skill icon="icons/database.png" skillDesc="SQL/MongoDB" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
