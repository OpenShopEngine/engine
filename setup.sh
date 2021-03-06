#!/bin/sh

# ERROR CODES:
# 1 - script is running in wrong directory
# 2 - dependencies for setup aren't installed
# 3 - failure with build (also if "ng" is unknown command)

# Initialize submodules
git submodule init || exit 2

# Install global dependencies for build
npm install -g @angular/cli || exit 2

# Setup frontend
cd frontend || exit 1
npm install || exit 2
# Building client apps with different locales
ng build --configuration production || exit 3
ng build --configuration production-ru || exit 3
ng build --configuration production-be || exit 3
cd ..

# Ruby on Rails setup
bundle install
