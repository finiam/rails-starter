source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.6.1"

gem "administrate"
gem "bootsnap", ">= 1.1.0", require: false
gem "clearance"
gem "pg", ">= 0.18", "< 2.0"
gem "puma", "~> 3.11"
gem "rails", "~> 6.0.0.beta3"
gem "react-rails"
gem "webpacker", "~> 4.0.2"

group :development, :test do
  gem "dotenv-rails"
  gem "factory_bot_rails"
  gem "faker"
  gem "pry-byebug"
  gem "pry-rails"
  %w[rspec-core rspec-expectations rspec-mocks rspec-rails rspec-support].each do |lib|
    gem lib, git: "https://github.com/rspec/#{lib}.git", branch: "master"
  end
  gem "rspec-retry"
end

group :development do
  gem "better_errors"
  gem "foreman"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "rubocop"
  gem "rubocop-performance"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "capybara"
  gem "database_cleaner"
  gem "differ"
  gem "selenium-webdriver"
  gem "shoulda-callback-matchers"
  gem "shoulda-matchers"
end

gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]
