
## Usage Ubuntu

1. Install the `nodejs` package if it's not already installed: `sudo apt-get install -y nodejs`.
2. `git clone` this repository and then `cd` into it.
3. Run `npm ci` to install the project dependencies.
4. If not already present, install chromium for headless use with playwright by running `npx playwright install --with-deps chromium`. If unsure whether it is installed or not then you can try running it without this step. If it works then you are good; if it doesn't then you have to install it.
5. Create the data with which to generate the CV with. You can use `data/example.json` as a reference.
6. Use the environment variable `CV_DATA_PATH` to point to your CV Data JSON, for example: `CV_DATA_PATH=./data/my_data.json npm run render`. You can also skip the environment variable, in which case it will use `./data/example.json` as a fallback.
7. After running `npm run render` your CV will be placed in `./dist/cv.pdf`.
