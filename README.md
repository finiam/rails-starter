# SVHealth Rails Starter

This repo contains our basic Rails and React boilerplate. Most of our projects revolved around this setup, with Postgres as a database, Rails as our backend framework with a React SPA at the front.

It includes some sane defaults, including heavily customized Webpack config, user authentication using Clearance and testing using Rspec.

You can replace the app name `railsstarter` with your own name, and use it to setup a new project.

## Requisites

To run this project you will need the following tools and runtimes:

- Ruby 2.6.1
- Node 10.\*
- Postgres 10 and greater
- Chromedriver

Here at our team, we use [asdf-vm](https://github.com/asdf-vm/asdf) to manage our Ruby and Node versions, we recommend that heavily. You can install Posgres with `homebrew` and Chromedriver with `homebrew cask`.

Our `bin/setup` script will handle installing Ruby and Node if you have [asdf-vm](https://github.com/asdf-vm/asdf) properly installed.

## Frontend

The most specialized part of this boilerplate is the frontend build, which is vastly different from a default Rails one (even the Webpacker default).

We use React as our UI framework, but that can be replaced if need be. With our Webpacker config the following features are enabled:

- CSS modules via the `styleName` prop. Also includes CSS separation during production phase, splitting all CSS to a separate bundle
- All CSS is processed using PostCSS, our plugins allow you to write "SASS like" stylesheets. We also have some experimental features via `postcss-preset-env`. Check the `postcss.config.js` for the plugins in use.
- Some special rules we use are enabled on the Babel config. **Class properties** to simplify React class components, **dynamic import** syntax to allow code splitting via lazy-loading and **legacy decorators** for React high order components. Also, the base `preset-react` and `preset-env` are also enabled. Check `.browserlistrc` to check which browsers are being targeted.
- `babel-loader` and `file-loader` are configured in the `config/webpack/loaders` folder. You can add more loaders here if needed and they will get loaded by Webpacker.
- Code splitting is achieved with the Babel config mentioned above and `React.lazy`. Check the example frontend app for usage.
- Seperate entry points for the logged in app and logged out via the `application` and `signed_out` packs.

## Testing

- Uses Rspec as a testing framework, using FactoryBot and Faker to generate records for testing
- Feature/Integration tests interacting with the Webpacker bundle using Capybara and Chromedriver
- Clearance backdoor to bypass authentication during feature tests

# About

This starter kit is maintained by [SVHealth](http://svhealth.io).

If you need to contact the maintainer use or <a href="mailto:contact@svhealth.io">reach out to us</a> if you don't have access.
