source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.0"

gem "administrate"
gem "bootsnap", ">= 1.1.0", require: false
gem "pg", ">= 0.18", "< 2.0"
gem "puma", "~> 5.2"
gem "rails", "~> 6.1.2"
gem "sassc", "~> 2.4.0"
gem "sorcery", git: "https://github.com/Sorcery/sorcery"
gem "webpacker", "6.0.0.beta.6"

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
  gem "listen", ">= 3.0.5", "< 3.6"
  gem "rubocop"
  gem "rubocop-performance"
  gem "rubocop-rails"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
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
