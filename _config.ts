import lume from "lume/mod.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import inline from "lume/plugins/inline.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.6.0/toc.ts";
import nunjucks from "lume/plugins/nunjucks.ts";

const site = lume({
  src: ".",
  dest: "_site",
  location: new URL("https://laurarubio.net/"),
});

site.ignore("README.md")
  .use(slugifyUrls({
    extensions: [".html"],
  }))
  .use(inline())
  .use(nunjucks())
  .use(toc())
  .copy("admin")
  .copy("admin.css", "admin/admin.css")
  .copy("favicon.ico")
  .copy("css")
  .copy("img")
  .copy("js");

export default site;
