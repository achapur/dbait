module.exports = {
  resolve: {
    fallback: { https: require.resolve("https-browserify") },
    fallback: { http: require.resolve("stream-http") },
    fallback: { https: require.resolve("https-browserify") },
    fallback: { stream: require.resolve("stream-browserify") },
  },
};
