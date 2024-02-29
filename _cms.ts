import cms from "lume/cms.ts";

const app = cms();

const tags = {
  name: "tags",
  type: "list",
  init(field) {
    field.options = field.cmsContent.data.site.search.values("id", "type=category");
  }
};

app
  .upload("imaxes", "src:img")
  .versioning("master")
  .collection(
    "posts",
    "src:posts/*.md",
    [
      "title: text",
      "summary: textarea",
      tags,
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
    tags,
  ]);

export default app;
