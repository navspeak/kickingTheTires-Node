const { MongoClient, ObjectID } = require('mongodb');
const  mongourl  = 'mongodb://127.0.0.1:27017';
const projectsdata = require("../data/virtualstandups.projects");
const standupsdata = require("../data/virtualstandups.standups");
const teammembersdata = require("../data/virtualstandups.teammembers");

  function loadData(dbName, collectionName, data) {
    return new Promise(async (resolve, reject) => {
      const client = new MongoClient(mongourl, { useNewUrlParser: true, useUnifiedTopology: true});

      try {
        await client.connect();
        const db = client.db(dbName);
        await db.collection(collectionName).removeMany({});
        const result = await db.collection(collectionName). insertMany(data);
        console.log(result.insertedCount);
        client.close();
        resolve(result)
      } catch (error) {
        reject(error);
      } finally {
        client.close();
      }
    });
  }

//console.log(standupsdata);

 loadData('virtualstandups', 'projects' , projectsdata);
 loadData('virtualstandups', 'standups' , standupsdata);
 loadData('virtualstandups', 'teammembers' , teammembersdata);


