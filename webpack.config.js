module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.js?$/,
              exclude: /node_modules/,
              loader: 'babel',
              query: {
                presets: ['es2015','react']
              }
            }
        ]
    },
    devServer: {
      contentBase: "./public",
      colors: true,
      historyApiFallback: true,
      inline: true,
      hot:true
    }
};
