import { ProjectImage } from "./ProjectImage";

export interface Project {
  id: number;
  attributes: {
    project_name: string;
    project_date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    project_images: {
      data: ProjectImage[];
    };
    project_thumbnail: {
      data: ProjectImage;
    }
  };
}
