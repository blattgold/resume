import fs from "fs";

const DATA_PATH = "./data/example.json";

const validate = data => {
  if (!data["person"]) {
      return false;
  }

  const person = data["person"];
  if (!person["name"] || !person["title"]) {
      return false;
  }
}

const read_data = async () => {
    await fs.readFile(DATA_PATH, "utf8", async (err, data) => {
        if (err) {
            console.log("Failed to read File: " + err);
        } else {
            if (!validate(data)) {
                console.log("Invalid data");
                return;
            }

            return data;
        }
    });
}
