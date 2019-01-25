if %w[development test].include? Rails.env
  require "rubocop/rake_task"

  namespace :lint do
    desc "Run all linters"
    task all: %i[rubocop eslint stylelint]

    RuboCop::RakeTask.new

    desc "Run ESLint"
    task eslint: :environment do
      puts "Running eslint"
      success = system "yarn lint"
      exit 1 unless success
    end

    desc "Run stylelint"
    task stylelint: :environment do
      puts "Running stylelint"
      success = system "yarn lint-styles"
      exit 1 unless success
    end
  end
end
