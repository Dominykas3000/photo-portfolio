"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Project } from "@/types/Project";
import ImageSlider from "@/components/ImageSlider";

const getItemById = async (id: number) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };

  try {
    const request = await fetch(
      `http://127.0.0.1:1337/api/projects/${id}?populate=*`,
      reqOptions,
    );
    const data = await request.json();
    if (data && data.data) {
      console.log(data.data);
      return data.data;
    } else {
      console.error("Invalid response format:", data);
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export default function ProjectPage() {
  const [project, setProject] = useState<Project | null>(null);
  const router = useParams();
  const id = router.id;

  useEffect(() => {
    if (id) {
      getItemById(Number(id)).then(setProject);
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Project {project.id}</h1>
      <p>{project.attributes.project_name}</p>
      {/* Render other project details here */}

      <h2>Images</h2>

      {/* {project.attributes.project_images.data.map((image) => (
        <img
          src={"http://127.0.0.1:1337" + image.attributes.formats.small.url}
          alt={image.attributes.name}
        />
      ))} */}

      <ImageSlider images={project.attributes.project_images.data} />
    </div>
  );
}
