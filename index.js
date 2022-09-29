import Redis from "ioredis";
import Strings from "./strings";
import Hashes from "./hashes";
import Lists from "./lists";
import Sets from "./sets";
import sortedSets from "./sorted-sets";

const redis = new Redis();
redis.flushall;
//Strings(redis);
//Hashes(redis);
//Lists(redis);
//Sets(redis);
sortedSets(redis);