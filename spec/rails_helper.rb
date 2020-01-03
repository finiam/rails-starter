# This file is copied to spec/ when you run "rails generate rspec:install"
ENV["RAILS_ENV"] ||= "test"
ENV["NODE_ENV"] ||= "test"
require File.expand_path("../config/environment", __dir__)
# Prevent database truncation if the environment is production
abort("The Rails environment is running in production mode!") if Rails.env.production?
require "spec_helper"
require "rspec/rails"
require "capybara/rails"
require "selenium/webdriver"
require "database_cleaner"
require "rack_session_access/capybara"

Dir[Rails.root.join("spec/support/**/*.rb")].sort.each { |f| require f }

ActiveRecord::Migration.maintain_test_schema!

class JavaScriptError < StandardError; end

RSpec.configure do |config|
  config.include Sorcery::TestHelpers::Rails::Controller, type: :controller
  config.include ControllerMacros, type: :controller
  config.include AuthForFeatures, type: :feature

  config.verbose_retry = true
  config.default_retry_count = 2
  config.exceptions_to_retry = [Net::ReadTimeout]
  config.use_transactional_fixtures = false
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!

  config.after(:each, type: :feature, js: true) do |_spec|
    errors = page.driver.browser.manage.logs.get(:browser).
      select { |e| e.level == "SEVERE" && e.message.present? }.
      map(&:message).
      to_a
    if errors.present?
      Rails.logger.error ActiveSupport::LogSubscriber.new.send(:color, errors.join("\n\n"), :red)
    end
  end
end

Capybara.javascript_driver = :selenium_chrome_headless
Capybara.ignore_hidden_elements = false
Capybara.default_max_wait_time = 4

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec

    with.library :rails
  end
end
