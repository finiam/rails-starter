if %w[development test].include? Rails.env
  require "rubocop/rake_task"

  namespace :lint do
    desc "Run all linters"
    task all: %i[rubocop]

    RuboCop::RakeTask.new
  end
end
