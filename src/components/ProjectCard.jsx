/* eslint-disable react/prop-types */

import { ArrowRight } from "lucide-react";

function ProjectCard({ img, title, link }) {
  return (
    <div className="rounded-lg p-5 rlative border border-[#e0dfda] hover:border-primary hover:border-2 bg-base-300 mx-auto overflow-hidden ">
      <div className="">
        <img src={img} alt="" className="rounded-lg h-90" />
      </div>
      <div className="flex justify-between items-center mt-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <a
          href={link}
          target="_blank"
          className="flex items-center gap-2 border rounded-4xl  p-4 h-10"
        >
          <span>View Website</span>
          <ArrowRight />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
