import serve from "lume/cms/server/proxy.ts";

export default serve({
  serve: "_cms.lume.ts",
  path: "/admin",
  git: {
    prodBranch: "master",
  },
  auth: {
    method: "basic",
    users: { admin: "admin" }
  },
  env: {
    LUME_LOGS: "error",
  }
});
