import { version } from "os";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config =defineConfig({
  projectId: 'j87zb41z',
  dataset: 'production',
  title : "My personal website",
  apiVersion : "2023-09-07",
  basePath: "/admin",
  plugins: [deskTool()],
  schema:{types:schemas}
})

export default config;