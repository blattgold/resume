import { chromium } from "playwright";

import fs from "fs";

(async () => {
    await fs.readFile("./dist/index.html", "utf8", async (err, data) => {
        if (err) {
            console.log("Failed to create PDF: " + err);
        } else {
            const browser = await chromium.launch();
            const page = await browser.newPage();
            await page.setContent(data);
            await page.pdf({ path: "./dist/cv.pdf", printBackground: true, format: 'A4' });
            await browser.close();
        }
    });
})();
