# facelift
> Quick github-pages generator

<p align="center">
  <img src="extras/facelift-docs-ss2.png" width="100%" />
</p>

<p align="center">
  <a href="https://travis-ci.org/cesarferreira/facelift"><img src="https://travis-ci.org/cesarferreira/facelift.svg?branch=master" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/facelift"><img src="https://img.shields.io/npm/dt/facelift.svg" alt="npm"></a>
  <a href="https://www.npmjs.com/package/facelift"><img src="https://img.shields.io/npm/v/facelift.svg" alt="npm"></a>
  <a href="https://github.com/cesarferreira/facelift/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
</p>

## Install

```sh
npm install -g facelift
```

## Usage

```
Usage

   $ facelift

```

This will use the `facelift.json` file to generate the `docs/` folder with the website content.


## Example of a `facelift.json` for [drone](https://github.com/cesarferreira/drone)

```json
{
    "title": "drone",
    "subtitle": "The missing library manager for Android Developers",
    "installation": "npm i -g drone",
    "screenshot": "http://cesarferreira.com/drone/res/add4.gif",
    "author": {
        "name": "cesar ferreira",
        "thumbnail": "https://pbs.twimg.com/profile_images/884351017097322496/2mmpORsM_400x400.jpg",
        "homepage": "http://cesarferreira.com"
    },
    "highlights": [
        {
            "title": "Features",
            "items": [
                "Blazing fast way to add libraries",
                "No need to search the web for that library",
                "Add multiple dependencies with a one liner",
                "Automated dependency and package management",
                "Automatic import custom urls (e.g. jitpack)",
                "Intuitive, easy-to-learn tool"
            ]
        },
        {
            "title": "Links",
            "items": [
                "GitHub: https://github.com/cesarferreira/drone",
                "npm: https://www.npmjs.com/package/drone"
            ]
        }
    ]
}
```

### `git add` and `push` your code to your `remote`.


### Head to your https://github.com/USERNAME/REPO/settings, scroll down to Github Pages and change the source to __master branch /docs folder__.

<p align="center">
  <img src="extras/settings-gh-pages.png" width="100%" />
</p>

### This will generate this [website](http://cesarferreira.com/drone/)

<p align="center">
  <img src="extras/ss.png" width="100%" />
</p>

## Created by
[Cesar Ferreira](https://cesarferreira.com)

## License
MIT © [Cesar Ferreira](http://cesarferreira.com)
