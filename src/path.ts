import { Route } from "next";

export const projectsPath = (): Route => `/` as Route;

export const projectPath = (projectId: string): Route =>
  `/project/${projectId}` as Route;
