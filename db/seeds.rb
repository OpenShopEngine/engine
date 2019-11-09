# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

Role.create!([
  {name: "admin"},
  {name: "payment_system"}
             ])

User.create!([
             {username: "root", password_digest: "$2a$12$DV57cyPC6HZVgv0qA0bvAuWjxbXxE2QT3ixuB87os9T8EUO1Cjlbu", roles: [Role.find_by(name: "admin")]}
             ])

Config.create!([
  {property: "general.title", value: "OpenShop"},
  {property: "general.currency", value: "USD"},
  {property: "client.experimental.features.checkout", value: "true"},
               ])

Locale.create!([
  {title: "English", locale: "base"},
  {title: "Русский", locale: "ru"},
  {title: "Беларуская", locale: "be"},
               ])

PaymentSystem.create!([
  {name: 'Cash on delivery', provider: '/api/ppu_connector/'}
                      ])
