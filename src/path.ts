import { Route } from "next";

export const projectsPath = (): Route => `/projects` as Route;

export const projectPath = (projectId: string): Route =>
  `${projectsPath()}/project/${projectId}` as Route;

export const newProjectPath = (): Route => `${projectsPath()}/new` as Route;
