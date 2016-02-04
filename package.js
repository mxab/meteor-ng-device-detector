Package.describe({
  name: 'planettraining:meteor-ng-device-detector',
  version: '2.0.3',
  // Brief, one-line summary of the package.
  summary: 'Wrapped bower components for ng-device-detector including dependencies',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mxab/meteor-ng-device-detector.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.addFiles(
    [
      'bower_components/re-tree/re-tree.js',
      'bower_components/ng-device-detector/ng-device-detector.js'
    ],
    'client');
});
