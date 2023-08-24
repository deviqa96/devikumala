import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://byvide:%40qweqwe122@byvide.y4hv8l9.mongodb.net/byvide?retryWrites=true&w=majority"
//process.env.MONGODB_URI || "";

const client = new MongoClient(connectionString);

let conn;
let db;

try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}
db = conn.db('byvide');


export default db;