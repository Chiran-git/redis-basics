const Strings = (redis) => {
    redis.set('name', 'Chiranjeeb');
    redis.get('name', (err, result) => {
        console.log(result)
    })

    redis.set('lastName', 'Gogoi', 'EX', 10);

    redis.incrby('age', 1);
    redis.get('age', (err, result) => {
        console.log('Age: ' + result)
    })

    // Add multiple key value
    redis.mset('street', 'Trinayan Path', 'city', 'Guwahati');
    redis.mget('street', 'city', (err, result) => {
        console.log(result)    
    })
}

export default Strings;