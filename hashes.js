const Hashes = (redis) => {
    redis.hmset('user:450', 'firstName', 'Chiranjeeb', 'lastName', 'Gogoi', 'age', 1, 'status', 0);
    redis.hincrby('user:450', 'age', 1);
    redis.hgetall('user:450', (err, result) => {
        console.log(result);
    })
}

export default Hashes;