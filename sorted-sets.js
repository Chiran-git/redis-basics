
const sortedSets = (redis) => {
    redis.zadd('rocket', 1969, 'apollo 11', 1958, 'Deep space', 2008, 'Falcon 1');
    redis.zrange('rocket', 0, -1, (err, result) => {
        console.log(result);
    })

    /*redis.zrange('rocket', 0, -1, withscores, (err, result) => {
        console.log(result);
    })*/
}

export default sortedSets;