import site from "./_config.ts";
import cms from "./_cms.ts";
import adapter from "lume/cms/adapters/lume.ts";

export default await adapter({ site, cms });
