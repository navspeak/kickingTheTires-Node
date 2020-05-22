const { MongoClient } = require('mongodb');
const assert = require('assert');
const circulationRepo = require('./repos/circulationRepo');
const data = require('./circulation.json');

const { mongourl } = require('./config') ;
const dbName = "circulation";

async  function main() {
  const client = new MongoClient(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
  await client.connect();

  try {
    console.log(data.length);
    const results = await circulationRepo.loadData( data );
    assert.equal( data.length, results.insertedCount );

    const allData = await circulationRepo.get();
    assert.equal( data.length, allData.length );

    const filteredData = await circulationRepo.get({Newspaper: allData[4].Newspaper});
    assert.deepEqual(filteredData[0], allData[4] );

    const limitData = await circulationRepo.get({}, 3);
    assert.equal(3, limitData.length);


    let id = allData[3]._id.toString();
    const byId = await circulationRepo.getById(id);
    assert.deepEqual(allData[3], byId);

    const newItem =  {
      "Newspaper": "My Paper",
      "Daily Circulation, 2004": 100,
      "Daily Circulation, 2013": 200,
      "Change in Daily Circulation, 2004-2013": 100,
      "Pulitzer Prize Winners and Finalists, 1990-2003": 0,
      "Pulitzer Prize Winners and Finalists, 2004-2014": 1,
      "Pulitzer Prize Winners and Finalists, 1990-2014": 1
    };

    const addedItem = await circulationRepo.add(newItem);
    assert(addedItem._id);
    const addedItemQuery = await circulationRepo.getById(addedItem._id);
    assert.deepEqual(addedItem, addedItemQuery);

    const updatedItem = await circulationRepo.update(addedItem._id,  {
      "Newspaper": "My new Paper",
      "Daily Circulation, 2004": 100,
      "Daily Circulation, 2013": 200,
      "Change in Daily Circulation, 2004-2013": 100,
      "Pulitzer Prize Winners and Finalists, 1990-2003": 0,
      "Pulitzer Prize Winners and Finalists, 2004-2014": 1,
      "Pulitzer Prize Winners and Finalists, 1990-2014": 1
    });
    assert.equal(updatedItem.Newspaper, "My new Paper");

    const newlyUpdatedItem = await circulationRepo.getById(updatedItem._id)
    assert.equal(newlyUpdatedItem.Newspaper, "My new Paper");

    const count = await circulationRepo.remove(updatedItem._id);
    assert.equal(1, count);

    const deletedItem = await circulationRepo.getById(updatedItem._id);
    assert.equal(deletedItem, null);

    const avgFinalists = await circulationRepo.averageFinalists();
    console.log("Average Finalists: " + avgFinalists);

    const avgByChange = await circulationRepo.averageFinalistsByChange();
    console.log(avgByChange);

    await circulationRepo.averageFinalists()


  } catch (error) {
    console.log(error);
  } finally {
    const admin = client.db(dbName).admin();
    await client.db(dbName).dropDatabase();
    //console.log(await admin.listDatabases());
    client.close();
  }



}

main();


