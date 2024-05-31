import site from "./_config.ts";
import cms from "./_cms.ts";
import adapter from "lume/cms/adapters/lume.ts";

cms.options.auth = undefined;

export default await adapter({ site, cms });
