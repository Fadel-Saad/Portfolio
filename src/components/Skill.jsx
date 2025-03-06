/* eslint-disable react/prop-types */
function Skill({ icon, skillDesc }) {
  return (
    <div
      className={`flex items-center gap-3 min-w-[80%] lg:min-w-[35%] mb-7 lg:mb-12`}
    >
      <img src={icon} className="w-7 sm:w-10 lg:w-15" />
      <span className="text-sm sm:text-base xl:text-xl 2xl:text-2xl">
        {skillDesc}
      </span>
    </div>
  );
}

export default Skill;
