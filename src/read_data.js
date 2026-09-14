import fs from "fs";

const DATA_PATH = "./data/example.json";

const read_data = async () => {
    await fs.readFile(DATA_PATH, "utf8", async (err, data) => {
        if (err) {
            console.log("Failed to read File: " + err);
        } else {
            console.log("JSON data: " + data);
            // TODO
        }
    });
}
