/* eslint-disable react/prop-types */

import { ArrowRight } from "lucide-react";

function ProjectCard({ img, title, link }) {
  return (
    <div className="rounded-lg p-3 md:p-5 rlative border border-[#e0dfda] hover:border-primary hover:border-2 bg-base-300 mx-auto overflow-hidden ">
      <div>
        <img src={img} alt="" className="rounded-lg h-50 md:h-60 lg:h-90" />
      </div>
      <div className="flex justify-between items-center mt-5">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">{title}</h3>
        <a
          href={link}
          target="_blank"
          className="flex items-center gap-1 md:gap-2 border rounded-4xl p-2 lg:p-4 h-10 hover:bg-primary hover:border-primary hover:text-base-100"
        >
          <span className="font-semibold text-sm lg:text-base">View Website</span>
          <ArrowRight />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
