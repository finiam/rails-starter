source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.2"

gem "administrate"
gem "bootsnap", ">= 1.1.0", require: false
gem "pg", ">= 0.18", "< 2.0"
gem "puma", "~> 5.6"
gem "rails", "~> 7.0.3"
gem "sassc", "~> 2.4.0"
gem "sorcery", "~> 0.16"
gem "webpacker", "6.0.0.rc.6"

group :development, :test do
  gem "dotenv-rails"
  gem "factory_bot_rails"
  gem "faker"
  gem "pry-byebug"
  gem "pry-rails"
  gem "rb-readline"
  gem "rspec-rails", "~> 5"
  gem "rspec-retry"
end

group :development do
  gem "better_errors", "2.9.1"
  gem "foreman"
  gem "listen", "~> 3.7", ">= 3.7.1"
  gem "rubocop"
  gem "rubocop-performance"
  gem "rubocop-rails"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "capybara"
  gem "database_cleaner"
  gem "rack_session_access"
  gem "selenium-webdriver"
  gem "shoulda-matchers"
end

gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]
