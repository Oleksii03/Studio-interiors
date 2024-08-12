// import webpack from 'webpack-stream';

// export const js = () => {
//   return app.gulp
//     .src(app.path.src.js, { sourcemaps: app.isDev })
//     .pipe(
//       app.plugins.plumber(
//         app.plugins.notify.onError({
//           title: 'JS',
//           message: 'Error: <%= error.message %>',
//         })
//       )
//     )
//     .pipe(
//       webpack({
//         mode: app.isBuild ? 'production' : 'development',
//         output: {
//           filename: 'app.min.js',
//         },
//       })
//     )
//     .pipe(app.gulp.dest(app.path.build.js))
//     .pipe(app.plugins.browsersync.stream());
// };

import webpack from 'webpack-stream';
import path from 'path';
import { merge } from 'webpack-merge';

export const js = () => {
  const entries = {
    app: path.resolve(app.path.srcFolder, 'js/app.js'),
    about: path.resolve(app.path.srcFolder, 'js/about.js'),
    contacts: path.resolve(app.path.srcFolder, 'js/contacts.js'),
    projects: path.resolve(app.path.srcFolder, 'js/projects.js'),
    blog: path.resolve(app.path.srcFolder, 'js/blog.js'),
    oneNews: path.resolve(app.path.srcFolder, 'js/one-news.js'),
  };

  const webpackConfig = {
    mode: app.isBuild ? 'production' : 'development',
    output: {
      filename: '[name].min.js',
    },
  };

  return app.gulp
    .src(Object.values(entries), { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      webpack(
        merge(webpackConfig, {
          entry: entries,
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
