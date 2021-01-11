require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

module.exports = {
    server: {
        port: process.env.SERVER_PORT || 3000
    },
    redis: {
        uri: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
    }
};
