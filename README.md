# Belline

## Origin: Headline theme 
Belline forks from Headline, a [Ghost](https://github.com/TryGhost/Ghost) theme built from the ground up for local news. While it can be used for any purpose, the theme takes a thoughtful approach to displaying large amounts of content across various areas of coverage. Headline adapts to your content by showcasing your most written about topics or by giving you the control to decide which topics are front and center.

**Headline demo: https://headline.ghost.io**

## Change list
- replace hardcoded strings (as many as I could find) by [helpers](https://ghost.org/docs/themes/helpers/translate/)
- implement [github actions](#Github-actions-(WIP))

# Headline instructions

1. [Download this theme](https://github.com/TryGhost/Headline/archive/main.zip)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Edition styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/headline.zip`, which you can then upload to your site.

```bash
yarn zip
```

# Github actions (WIP)

## Ghost setup

1. In your online site adminsitration, click on `Integrations` menu
2. Click on the `Add custom integration` link
3. Give your integration a title such as `Github actions`
4. Copy the `Admin API key` and `Admin URL` field values 

## Github setup

1. Under your repository name, click on the `Settings` tab
2. In the left sidebar, click `Secrets`
3. On the right bar, click on `Add a new secret`
4. In the `Name` input box, type `GHOST_ADMIN_API_URL`
5. Type the value for your secret
6. Click Add secret
7. Reapeat for `GHOST_ADMIN_API_KEY` secret

# Contribution

This repo is synced automatically with [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

## Copyright & License

Copyright (c) 2013-2023 bellerad.io - Released under the [MIT license](LICENSE).
