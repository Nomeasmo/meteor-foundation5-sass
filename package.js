Package.describe({
  summary: "Foundation 5 with Sass support",
  version: "0.1.15",
  git: "https://github.com/matthewforr/meteor-foundation5-sass.git"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');

  api.use("fourseven:scss@0.9.4", ['client', 'server']);
  api.imply('fourseven:scss@0.9.4', ['client', 'server']);
  api.use(['ui', 'jquery', 'templating'], 'client');

  api.addFiles([
    "js/vendor/modernizr.js",
    "js/vendor/fastclick.js",
    "js/foundation/foundation.js",
    "js/foundation/foundation.abide.js",
    "js/foundation/foundation.accordion.js",
    "js/foundation/foundation.alert.js",
    "js/foundation/foundation.clearing.js",
    "js/foundation/foundation.dropdown.js",
    "js/foundation/foundation.equalizer.js",
    "js/foundation/foundation.interchange.js",
    "js/foundation/foundation.joyride.js",
    "js/foundation/foundation.magellan.js",
    "js/foundation/foundation.offcanvas.js",
    "js/foundation/foundation.orbit.js",
    "js/foundation/foundation.reveal.js",
    "js/foundation/foundation.slider.js",
    "js/foundation/foundation.tab.js",
    "js/foundation/foundation.tooltip.js",
    "js/foundation/foundation.topbar.js",
    "kitchensink.html",
    "foundation.js"
  ], "client");

  api.addFiles([
    "_foundation.scss",
    "_settings.scss",
    "scss/_foundation.scss",
    "scss/foundation/_functions.scss",
    "scss/foundation/_settings.scss",
    "scss/foundation/components/_accordion.scss",
    "scss/foundation/components/_alert-boxes.scss",
    "scss/foundation/components/_block-grid.scss",
    "scss/foundation/components/_breadcrumbs.scss",
    "scss/foundation/components/_button-groups.scss",
    "scss/foundation/components/_buttons.scss",
    "scss/foundation/components/_clearing.scss",
    "scss/foundation/components/_dropdown-buttons.scss",
    "scss/foundation/components/_dropdown.scss",
    "scss/foundation/components/_flex-video.scss",
    "scss/foundation/components/_forms.scss",
    "scss/foundation/components/_global.scss",
    "scss/foundation/components/_grid.scss",
    "scss/foundation/components/_icon-bar.scss",
    "scss/foundation/components/_iconbar.scss",
    "scss/foundation/components/_inline-lists.scss",
    "scss/foundation/components/_joyride.scss",
    "scss/foundation/components/_keystrokes.scss",
    "scss/foundation/components/_labels.scss",
    "scss/foundation/components/_magellan.scss",
    "scss/foundation/components/_offcanvas.scss",
    "scss/foundation/components/_orbit.scss",
    "scss/foundation/components/_pagination.scss",
    "scss/foundation/components/_panels.scss",
    "scss/foundation/components/_pricing-tables.scss",
    "scss/foundation/components/_progress-bars.scss",
    "scss/foundation/components/_range-slider.scss",
    "scss/foundation/components/_reveal-new.scss",
    "scss/foundation/components/_reveal.scss",
    "scss/foundation/components/_side-nav.scss",
    "scss/foundation/components/_split-buttons.scss",
    "scss/foundation/components/_sub-nav.scss",
    "scss/foundation/components/_switch.scss",
    "scss/foundation/components/_switches.scss",
    "scss/foundation/components/_tables.scss",
    "scss/foundation/components/_tabs.scss",
    "scss/foundation/components/_thumbs.scss",
    "scss/foundation/components/_toolbar.scss",
    "scss/foundation/components/_tooltips.scss",
    "scss/foundation/components/_top-bar.scss",
    "scss/foundation/components/_type.scss",
    "scss/foundation/components/_visibility.scss",
    "scss/foundation/components/_xy-center.scss",
    "scss/normalize.scss"
  ], "server");
});

Package.onTest(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.use("matthew:foundation5-sass@0.1.15");
  api.use(["fourseven:scss@0.9.5", "tinytest@1.0.0", "test-helpers", "templating"]);

  api.addFiles([
      "test.html",
      "test.scss",
      "test.js"
    ], "client");
});
