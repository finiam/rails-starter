# Aurora Rails Starter

This repo contains our basic Rails and React boilerplate. Most of our projects revolved around this setup, with Postgres as a database, Rails as our backend framework with a React SPA at the front.

It includes some sane defaults, including a heavily customized Webpack config, user authentication using Sorcery, testing using Rspec and an Administrate engine to manage Users and other backend models.

You can replace the app name `railsstarter` with your own name, and use it to setup a new project. Use `sed` or another tool to replace instances of `railsstarter` and `RailsStarter`.

## Requisites

To run this project you will need the following tools and runtimes:

- Ruby 2.6.4
- Node 10.\*
- Postgres 10 and greater
- Chromedriver

Here at our team, we use [asdf-vm](https://github.com/asdf-vm/asdf) to manage our Ruby and Node versions, we recommend that heavily. You can install Postgres with `homebrew` and Chromedriver with `homebrew cask`.

Our `bin/setup` script will handle installing Ruby and Node if you have [asdf-vm](https://github.com/asdf-vm/asdf) properly installed.

## Architecture

This default starter configure Webpacker with a single entry point for the frontend app, that being `frontend/index.js`. From there you can do anything. Here we bundle a React application, but you can replace that with any kind of frontend library. There is no server-side rendering.

The main premise of this starter is really simple. Get simple authentication with Sorcery up and running, and use sensible Webpack and feature testing defaults.

## Frontend

The most specialized part of this boilerplate is the frontend build, which is vastly different from a default Rails one (even the Webpacker default).

We use React as our UI framework, but that can be replaced if need be. With our Webpacker config, the following features are enabled:

- CSS modules. Also includes CSS separation during the production phase, splitting all CSS to a separate bundle
- All CSS is processed using PostCSS, our plugins allow you to write "SASS like" stylesheets. We also have some experimental features via `postcss-preset-env`. Check the `postcss.config.js` for the plugins in use.
- Some special rules we use are enabled on the Babel config. **Class properties**, **react-imported-component** which allows us to us the package with the same name to async load React components, and **legacy decorators** for the ocasional high order component. Also, the base `preset-react` and `preset-env` are also enabled. Check `.browserlistrc` to check which browsers are being targeted.
- `babel-loader` and `file-loader` are configured in the `config/webpack/loaders` folder. You can add more loaders here if needed and they will get loaded by `webpacker`. We deleted all the loaders that come with `webpacker` by default, using our own instead.
- Code splitting is achieved with the Babel config mentioned above and `react-imported.component`. Check the example frontend app for usage.
- We also setup `storybook` to mantain the ocasional styleguide. It's configured for React, but again, can be used with other frontend library or framework.

### Browser support

This starter is tested in Chrome, Firefox, Safari and IE11, but we can safely assume that it works in all browsers covered by our `browserslist` specification. We include both `core-js` and `regenerator-runtime` on our frontend bundle. Babel then converts that on individual polyfills, so we only include polyfills we actually need.

## Backend
The only backend logic present is the user authentication. We created a custom session controller to handle logins and logouts using the Sorcery gem. By default the Sorcery gem only:
- protects against brute force attacks
- tracks logins and logouts (time and location)
- session timeouts

We use Rails Session to persist user information, which in turn uses HTTP cookies. The session is valid for exactly one week and it's refreshed everytime a user completes an action (basically on every page visit). When logging out, we can pass a `everywhere` param set to `true` to invalid all of the user sessions.

If you want more Sorcery modules, check out their documentation and implement it. Open up a PR if you think a given task should be already implemented by default. We do not have user confirmation emails, neither forget password logic. Sorcery can handle that but you have to implement it by hand.

Administrate is also installed, allowing users with the admin role to create accounts, as user registrations are disabled by default. The admin dashboard is present at `/admin`.

We configure this on `application.rb`, you can also define on `development.rb`, `test.rb` and `production.rb` files. If your API is going to be exclusively

## Testing

- Uses Rspec as a testing framework, using FactoryBot and Faker to generate records for testing
- Feature tests interacting with the Webpacker bundle using Capybara and Chromedriver
- Sorcery backdoor to bypass authentication during feature tests

Run the script `bin/ci` to run all tests, linters. It's a copy of what you should do on your CI system.

# Developing

Run `bin/setup` to get everything up and running. Then `bin/server` to start hammering away at it.

Also don't forget to setup the default admin user with `rake populate:admin_user`. The default credentials are `admin@mail.com`, the password being `foobar`.

`react-hot-loader` should reload everything you need as you edit stuff in the `frontend` folder. On the Rails side, everything is interpreted live, so no need to restart the server every time you change code, unless you change configs or initializers.

# About

This starter kit is maintained by [Aurora](http://auroradigital.co).
