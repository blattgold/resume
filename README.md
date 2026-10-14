
# Resume/CV-Generator

A CV generator implemented using web technologies. Uses `astro` as the web framework, styled using css. Playwright is used to open a headless browser instance and then to generate a PDF file based on the website. The CV's data is read from a JSON file which is validated using a JSON schema; said schema is generated at runtime, based on the TypeScript data structures.

## Releases

Under `releases` you will find a PDF file which is generated using the example data. This file is updated automatically after every push to `main`.

## Dependencies

I tried to not depend on too many external libraries, although I did use a couple:
- **astro**: Allows for greater flexibility and modularity compared to static HTML + JS. Components can be developed and changed independently. It also was a good excuse to try something different.
- **jsonschema**: A basic JSON schema validation library. Using JSON schemas is a lot less error prone and simpler than validating each field manually.
- **playwright**: Needed to spawn the web browser and generate the pdf file.
- **ts-json-schema-generator**: By generating the JSON schema at runtime, based on the CV data types, there is only a single source of truth for the desired data structure. It also allows for trivial modifications and adjustments to the data schema, if you, for example, wanted to add another field to one of the components' data.


# Usage

## Ubuntu

1. Install the `nodejs` package if it's not already installed: `sudo apt-get install -y nodejs`.
2. `git clone` this repository and then `cd` into it.
3. Run `npm ci` to install the project dependencies.
4. If not already present, install chromium for headless use with playwright by running `npx playwright install --with-deps chromium`. If unsure whether it is installed or not then you can try running it without this step. If it works then you are good; if it doesn't then you have to install it.
5. Create the data with which to generate the CV with. You can use `data/example.json` as a reference.
6. Use the environment variable `CV_DATA_PATH` to point to your CV Data JSON, for example: `CV_DATA_PATH=./data/my_data.json npm run render`. You can also skip the environment variable, in which case it will use `./data/example.json` as a fallback.
7. After running `npm run render` your CV will be placed in `./dist/cv.pdf`.
