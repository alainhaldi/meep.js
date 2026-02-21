import { Route } from "next";

export const projectsPath = (): Route => `/projects` as Route;

export const projectPath = (projectId: string): Route =>
  `${projectsPath()}/project/${projectId}` as Route;

export const upsertProjectPath = (): Route =>
  `${projectsPath()}/project/upsert` as Route;
