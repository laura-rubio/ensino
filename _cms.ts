import cms from "lume/cms.ts";

const app = cms();

app
  .upload("imaxes", "src:img")
  .collection(
    "posts",
    "src:posts/*.md",
    [
      "title: text",
      "summary: textarea",
      "tags: list",
      "draft: checkbox",
      "show_toc: checkbox",
      "content: markdown",
    ],
  )
  .collection("paxinas", "src:pages", [
    "title: text",
    "url: text",
    "content: markdown",
  ])
  .collection("categorías", "src:categories", [
    "title: text",
    "id: text",
    "tags: list",
  ]);

export default app;
