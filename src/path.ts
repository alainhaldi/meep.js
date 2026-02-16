import { Route } from "next";

export const projectPath = (projectId: string): Route =>
  `/project/${projectId}` as Route;
