/* eslint-disable react/prop-types */
function Skill({ icon, skillDesc, marginB = 10 }) {
  return (
    <div className={`flex items-center gap-3 min-w-[35%] mb-12`}>
      <img src={icon} className="w-15" />
      <span className="text-2xl">{skillDesc}</span>
    </div>
  );
}

export default Skill;
