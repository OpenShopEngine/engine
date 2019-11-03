# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

Product.create!([
                {name: "Носки. Новый год 2020!", description: "Красивые, теплые, шерстяные и просто замечательные!", price: 8.99, photo: "https://cdn.notonthehighstreet.com/fs/79/16/a258-a78f-476a-ac4b-88a2aa5a5694/original_handmade-wool-socks.jpg", available: 1}
                ])

Role.create!([
  {name: "admin"}
             ])
User.create!([
             {username: "root", password_digest: "$2a$12$DV57cyPC6HZVgv0qA0bvAuWjxbXxE2QT3ixuB87os9T8EUO1Cjlbu", roles: [Role.find(1)]}
             ])

Config.create!([
  {property: "general.title", value: "OpenShop"},
  {property: "general.currency", value: "USD"},
               ])

Locale.create!([
  {title: "English", locale: "base"},
  {title: "Русский", locale: "ru"},
  {title: "Беларуская", locale: "be"},
               ])
