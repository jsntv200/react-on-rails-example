# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = "1.0"

# Add folder with webpack generated assets to assets.paths
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "webpack")

# Precompile additional assets.
if ENV["REACT_ON_RAILS_ENV"] != "HOT"
  Rails.application.config.assets.precompile += [
    "application-static.js",
    "application-static.css"
  ]
end
