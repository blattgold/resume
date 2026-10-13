
## Usage Ubuntu

1. Install the `nodejs` package if it's not already installed: `sudo apt-get install -y nodejs`.
2. `git clone` this repository and then `cd` into it.
3. Run `npm ci` to install the project dependencies.
4. If not already present, install chromium for headless use with playwright by running `npx playwright install --with-deps chromium`. If unsure whether it is installed or not then you can try running it without this step. If it works then you are good; if it doesn't then you have to install it.
5. Adjust `data/example.json` to your liking.
6. Generate the pdf using `npm run render`; you can find the generated pdf under `dist/cv.pdf`.
