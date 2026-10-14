import fs from "fs/promises";
import { Validator } from "jsonschema";

import { gen_schema } from "./gen_schema.ts";

import type { CVData } from "./cv_data_types.ts";

const DEFAULT_DATA_PATH = "./data/example.json";

async function read_data_common(path: string): Promise<Object> {
    const data = (await fs.readFile(path)).toString("utf-8");
    const obj = JSON.parse(data);
    return obj;
}

export async function read_data(data_path?: string): Promise<CVData> {
  data_path = (!data_path) ? DEFAULT_DATA_PATH : data_path;

  const schema: Object = gen_schema();
  const data: Object = await read_data_common(data_path);

  const validator = new Validator();
  const result = validator.validate(data, schema);

  if (!result.valid) {
    throw new Error("Failed to validate data: " + result);
  } else {
    return data as CVData;
  }

}
