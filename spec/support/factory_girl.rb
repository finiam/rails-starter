IGNORED_FACTORIES = %i[].freeze

RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods

  config.before(:suite) do
    DatabaseCleaner.cleaning do
      FactoryBot.lint(FactoryBot.factories.reject { |f| IGNORED_FACTORIES.include?(f.name) })
    end
  end
end
