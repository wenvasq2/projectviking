import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure"; //top level view of sanity
import schemas from "./sanity/schemas";


const config = defineConfig({
    projectId: "8tm7x9su",
    dataset: "production",
    title:'Project Viking Studio',
    apiVersion: "2024-02-13",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas}
})

export default config;