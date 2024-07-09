module.exports = {
    API_KEY: 'd8426e930df3e81f39f88b422c2e08d0',
    API_SECRET: '16dd108c716f133fabd769f0c698f2c6',
    getRoot() {
        return 'http://ws.audioscrobbler.com/2.0/?format=json&api_key=' + this.API_KEY
    }
}