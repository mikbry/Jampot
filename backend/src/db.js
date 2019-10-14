import MongoClient from "mongodb";

class Db {
  constructor(name, ip = "localhost") {
    this.name = name;
    this.ip = ip;
  }

  async test() {
    const url = `mongodb://${this.ip}:27017`;
    console.log("db : ", url);
    // Database Name
    const client = await new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log("client : ", client);
    try {
      await client.connect();
      client.db(this.name);
    } catch (err) {
      console.log(err.stack);
    }
    if (client) {
      client.close();
    }
  }
}
export default Db;
