namespace :populate do
  desc "Creates default admin user"
  task admin_user: :environment do
    unless User.find_by(email: "admin@mail.com")
      User.create(
        name: "Admin User",
        email: "admin@mail.com",
        password: "foobar",
        password_confirmation: "foobar",
        role: "admin",
      )

      puts "Created User"
    end
  end
end
