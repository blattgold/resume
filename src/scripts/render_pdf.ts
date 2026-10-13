import { chromium } from "playwright";

import { build } from "astro";

import fs from "fs";

const PATH_DIST: string = "./dist/";
const PATH_TMP: string = PATH_DIST + "tmp/";

(async () => {
    if (!fs.existsSync(PATH_DIST)) {
      fs.mkdirSync(PATH_DIST);
    }

    if (!fs.existsSync(PATH_TMP)) {
        fs.mkdirSync(PATH_TMP);
    }

    await build({ outDir: "./dist/tmp/" });

    fs.readFile(PATH_TMP + "index.html", "utf8", async (err, data) => {
        if (err) {
            console.log("Failed to create PDF: " + err);
        } else {
            const browser = await chromium.launch();
            const page = await browser.newPage();
            await page.setContent(data);
            await page.pdf({ path: "./dist/cv.pdf", printBackground: true, format: 'A4' });
            await browser.close();

            fs.rmSync(PATH_TMP + "index.html");
        }
    });

})();
