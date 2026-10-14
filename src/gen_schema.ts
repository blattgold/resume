import tsj from "ts-json-schema-generator";
import fs from "fs"

import type { Config } from "ts-json-schema-generator/dist/src/Config";

const CONFIG: Config = {
    path: "src/cv_data_types.ts",
    type: "CVData",
    topRef: false,
    encodeRefs: true,
};

export function gen_schema(): Object {
    const schema = tsj.createGenerator(CONFIG).createSchema(CONFIG.type);
    return schema;
}
