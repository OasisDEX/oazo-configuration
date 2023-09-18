import { constants } from "../helpers/constants";
import { file, serve } from "bun";
import { getConfigMainModules } from "../helpers/get-config-main-modules";

getConfigMainModules().then((modules) => {
  console.log("Available configs:");
  const { environments } = constants;
  modules.forEach((module) => {
    environments.forEach((env) => {
      console.log(`http://localhost:8080/${module}/${module}-${env}.json`);
    });
  });
});

serve({
  port: 8080,
  fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;
    if (!path.includes("json")) {
      return;
    }
    try {
      const fileData = file(`./dist/${path}`);
      return new Response(fileData);
    } catch (error) {
      console.log();
    }
  },
});
