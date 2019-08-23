# Aurora Rails Starter

This repo contains our basic Rails and React boilerplate. Most of our projects revolved around this setup, with Postgres as a database, Rails as our backend framework with a React SPA at the front.

It includes some sane defaults, including a heavily customized Webpack config, user authentication using Clearance, testing using Rspec and an Administrate engine to manage Users.

You can replace the app name `railsstarter` with your own name, and use it to setup a new project.

## Requisites

To run this project you will need the following tools and runtimes:

- Ruby 2.6.3
- Node 10.\*
- Postgres 10 and greater
- Chromedriver

Here at our team, we use [asdf-vm](https://github.com/asdf-vm/asdf) to manage our Ruby and Node versions, we recommend that heavily. You can install Postgres with `homebrew` and Chromedriver with `homebrew cask`.

Our `bin/setup` script will handle installing Ruby and Node if you have [asdf-vm](https://github.com/asdf-vm/asdf) properly installed.

## Architecture

This default starter makes use of `react-rails` and `webpacker` to prerender two distinct components: `Login` and `App`, with the respective views being `sessions#new` and `home#index`.

By server rendering, we can inject props into the components from the Rails app on the authentication flow, and at the same time keep developing the rest of the project as a SPA.

The choice is yours in that regard. By default, we inject the current_user in the `App` component, from there the sky is the limit. You can keep developing the project with regular Rails views with the `render_react_component` helper, which prerenders components on the server side by default on all environments except `development`. You can also keep developing as a regular SPA and implement a REST API or a GraphQL Schema on the Rails backend.

From rails you can render any component in the `frontend/ssr` directory. Every component here should be "hot" exported with `react-hot-loader` so that hot code reloading works during development. Components here are still just regular `react` components.

The main premise of this starter is really simple. Get simple authentication with Clearance up and running, and use sensible Webpack and testing defaults.

## Frontend

The most specialized part of this boilerplate is the frontend build, which is vastly different from a default Rails one (even the Webpacker default).

We use React as our UI framework, but that can be replaced if need be. With our Webpacker config, the following features are enabled:

- CSS modules via the `styleName` prop. Also includes CSS separation during the production phase, splitting all CSS to a separate bundle
- All CSS is processed using PostCSS, our plugins allow you to write "SASS like" stylesheets. We also have some experimental features via `postcss-preset-env`. Check the `postcss.config.js` for the plugins in use.
- Some special rules we use are enabled on the Babel config. **Class properties** to simplify React class components, **dynamic import** syntax to allow code splitting via lazy-loading and **legacy decorators** for React high order components. Also, the base `preset-react` and `preset-env` are also enabled. Check `.browserlistrc` to check which browsers are being targeted.
- `babel-loader` and `file-loader` are configured in the `config/webpack/loaders` folder. You can add more loaders here if needed and they will get loaded by Webpacker.
- Code splitting is achieved with the Babel config mentioned above and `React.lazy`. Check the example frontend app for usage.
- Separate entry points for the logged in app and logged out via the `application` and `signed_out` packs.
- Even with the pre-rendered components coming from Rails, you can still use `react-router` as usual, building upon the `App` entry point.

## Backend
The only backend logic present is the user authentication. We created a custom session controller to handle logins and logouts using the Rails Session API.

Administrate is also installed, allowing users with the admin role to create accounts, as user registrations are disabled by default. The admin dashboard is present at `/admin`.

## Testing

- Uses Rspec as a testing framework, using FactoryBot and Faker to generate records for testing
- Feature/Integration tests interacting with the Webpacker bundle using Capybara and Chromedriver
- Clearance backdoor to bypass authentication during feature tests

Run the script `bin/local-ci` to run all tests, linters. It's a copy of what you should do on your CI system.

# Developing

Run `bin/setup` to get everything up and running. Then `bin/server` to start hammering away at it.

Also don't forget to setup the default admin user with `rake populate:admin_user`. The default credentials are `admin@mail.com`, the password being `foobar`.

`react-hot-loader` should reload everything you need as you edit stuff in the `frontend` folder. On the Rails side, everything is interpreted live, so no need to restart the server every time you change stuff.


# About

This starter kit is maintained by [Aurora](http://auroradigital.co).

If you need to contact the maintainer use or <a href="mailto:contact@auroradigital.co">reach out to us</a> if you don't have access.
