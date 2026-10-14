import test from "node:test";
import assert from "node:assert";

import { read_data } from "./read_data.ts";

test("read_data falls back to example.json", async () => {
    assert.deepStrictEqual(await read_data(), await read_data("./data/example.json"));
})
