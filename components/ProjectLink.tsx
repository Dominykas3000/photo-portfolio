import Link from "next/link";

interface ProjectLinkProps {
  id: number;
  project_name: string;
  project_date: string;
  project_thumbnail: string;
}

const ProjectLink = (props: ProjectLinkProps) => {
  const { id, project_name, project_date, project_thumbnail } = props;
  const paddedId = id.toString().padStart(4, "0");
  let dateWithoutDay = project_date.slice(0, -3);

  return (
    <div className="project-card relative p-4 w-auto group">
      <Link href={"project-page/" + id} className="hover:underline">
        <div className="relative flex flex-row gap-1 justify-start items-baseline  h-[18px]">
          <h2 className="text-sm font-light text-gray-400 tracking-[0.4rem]">
            {"[" + paddedId + "]"}
          </h2>
          <h2 className="text-lg font-light tracking-[0.2rem]">
            {project_name}
          </h2>
          <p className="text-sm text-gray-400 tracking-[0.2rem]">
            {dateWithoutDay}
          </p>
        </div>
      </Link>
      <img
        className="fixed z-10 top-1/2 left-1/2 w-full max-w-lg h-auto transform -translate-x-1/2 -translate-y-1/2 hidden opacity-0  duration-300 group-hover:opacity-100 max-h-[70dvh]  transition-all group-hover:block"
        src={project_thumbnail}
        alt={project_name}
      />
    </div>
  );
};

export default ProjectLink;
