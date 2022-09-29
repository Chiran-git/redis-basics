const Sets = (redis) => {
    redis.sadd('tags', 'react native', 'javascript', 'graphql');
    redis.smembers('tags', (err, result) => {
        console.log(result);
    })

    redis.sadd('tags:vue', 'vuex', 'vue store', 'vue router');
    // Copy the content from one tag to another tag
    redis.sunionstore('tags:laravel', 'tags:vue');
    redis.smembers('tags:laravel', (err, result) => {
        console.log(result);
    })

    redis.spop('tags:laravel', (err, result) => {
        console.log(result);
    });

    // Count the number of tags
    redis.scard('tags:laravel', (err, result) => {
        console.log(result)
    });

    redis.sismember('tags', 'javascript', (err, result) => {
        console.log(result);
    })
}

export default Sets;