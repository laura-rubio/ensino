import serve from "lume/cms/server/proxy.ts";

export default serve({
  serve: "_cms.lume.ts",
  path: "/admin",
  git: true,
  auth: {
    method: "basic",
    users: { laura: "Gatuna01" }
  },
  env: {
    LUME_LOGS: "error",
  }
});
