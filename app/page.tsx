"use client";
import ProjectLink from "@/components/ProjectLink";
import { ProjectLinkSkeleton } from "@/components/skeleton/ProjectLinkSkeleton";
import { ProjectImage } from "@/types/ProjectImage";
import React, { useEffect, useState } from "react";

interface LinkProject {
  id: number;
  attributes: {
    project_name: string;
    project_date: string;
    project_thumbnail: {
      data: ProjectImage;
    };
  };
}

const Home: React.FC = () => {
  const [projects, setProjects] = useState<LinkProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const reqOptions = {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      };

      try {
        const request = await fetch(
          "http://127.0.0.1:1337/api/projects?fields[0]=project_name&fields[1]=project_date&populate=project_thumbnail",
          reqOptions,
        );
        const data = await request.json();
        if (data && data.data) {
          console.log(data.data);
          setProjects(data.data);
        } else {
          console.error("Invalid response format:", data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <main>
      <div className="w-fit flex flex-col justify-start">
        {loading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <ProjectLinkSkeleton key={index} />
          ))
        ) : (
          projects.map((project) => (
            <ProjectLink
              id={project.id}
              key={project.id}
              project_name={project.attributes.project_name}
              project_date={project.attributes.project_date}
              project_thumbnail={
                "http://127.0.0.1:1337" +
                project.attributes.project_thumbnail.data.attributes.formats
                  .small.url
              }
            />
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
