import proxy from "lume/cms/server/proxy.ts";

Deno.serve({
  handler: proxy({
    serve: "_cms.lume.ts",
    path: "/admin",
    git: true,
  })
})
