import fs from "fs/promises";
import { Validator } from "jsonschema";

import type { CVData } from "./cv_data_types";


const SCHEMA_PATH = "./data/schema.json";
const DATA_PATH = "./data/example.json";

async function read_data_common(path: string): Promise<Object> {
    const data = (await fs.readFile(path)).toString("utf-8");
    const obj = JSON.parse(data);
    return obj;
}

export async function read_data(): Promise<CVData> {
  let schema: Object = await read_data_common(SCHEMA_PATH);
  let data: Object = await read_data_common(DATA_PATH);

  console.log(schema);

  let validator = new Validator();
  let result = validator.validate(data, schema);

  if (!result.valid) {
    throw new Error("Failed to validate data: " + result);
  } else {
    return data as CVData;
  }

}
