# SVHealth Rails Starter

Rails 6 starter with Webpack and React setup.

Features:

* PostCSS modules via the `styleName` prop. Also includes CSS separation during production phase, splitting all CSS to a separate bundle
* RSpec, FactoryBot and Faker integration
* Headless integration test with Chromedriver and Capybara
* User authentication via session. Includes seperate entry points for the logged in app and logged out via the `application` and `signed_out` packs. Signups disabled, most of our projects are invitation only, but it should be easy enough to add that.
