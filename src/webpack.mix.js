const mix = require('laravel-mix');

require('laravel-mix-polyfill');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

 let theme = process.env.MIX_THEME_NAME;
 let public = 'web/app';
 let virtualHost = process.env.MIX_SITE_URL;

mix.js(`js/app.js`, `${public}/themes/${theme}/js/app.js`)
.options({
    processCssUrls: false
})
.sass(`scss/styles.scss`, `${public}/themes/${theme}/css/styles.css`)
.js(`js/template-home-page.js`, `${public}/themes/${theme}/js/template-home-page.js`)
.sass(`scss/template-home-page.scss`, `${public}/themes/${theme}/css/template-home-page.css`)
.sourceMaps()
.polyfill({
    enabled: true,
    useBuiltIns: "usage",
    targets: {"firefox": "50", "ie": 11}
 })
 .browserSync({
    proxy: virtualHost,
    files: [`${public}/themes/${theme}/**`]
});