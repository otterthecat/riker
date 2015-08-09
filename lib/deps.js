var defaultPackages = [
  {"name" :"chai", "version": "^2.1.0"},
  {"name": "gulp", "version": "^3.8.10"},
  {"name": "gulp-bump", "version": "^0.1.13"},
  {"name": "gulp-complexity", "version": "^0.2.1"},
  {"name": "gulp-eslint", "version": "^0.5.0"},
  {"name": "gulp-istanbul", "version": "^0.2.2"},
  {"name": "jscs-stylish", "version": "^0.3.1"},
  {"name": "mocha", "version": "^2.1.0"},
  {"name": "sinon", "version": "^1.12.2"},
  {"name": "sinon-chai", "version": "^2.7.0"}
];


var frontendPackages = [
  {"name": "browser-sync", "version": "^2.8.2"},
  {"name": "browserify", "version": "^11.0.1"},
  {"name": "browserify-shim", "version": "^3.8.10"},
  {"name": "gulp-stylus", "version": "^2.0.6"},
  {"name": "gulp-uglify", "version": "^1.2.0"},
  {"name": "jeet", "version": "^6.1.2"},
  {"name": "rupture", "version": "^0.6.1"},
  {"name": "vinyl-source-stream", "version": "^1.1.0"}
];

module.exports = {
  'n': defaultPackages,

  'h': defaultPackages.concat(frontendPackages),

  'a': defaultPackages.concat(frontendPackages)
};
