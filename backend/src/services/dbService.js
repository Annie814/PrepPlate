const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
var ObjectID = require('mongodb').ObjectID;
const uri = "mongodb+srv://cmdf2022:q7R2Gdm3kSM1JFXV@cluster0.8pqpu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const addValueToMealPlan = async (value) => {
  const insert = async (value) => {
    try {
      await client.connect()
      const database = client.db('prepplate');
      const mealplan = database.collection('mealplan');

      const result = await mealplan.insertOne(value)
      console.log(`A mealplan was inserted with the _id: ${result.insertedId}`);
      return result
    } finally {
      await client.close()
    }
  };
  const result = await insert(value)
  return result;
}

const addValueToRecipes = async (value) => {
  const insert = async (value) => {
    try {
      await client.connect()
      const database = client.db('prepplate');
      const mealplan = database.collection('recipes');
      const IDS = [];

      for (var i = 0; i < value.length; i++) {
        var obj = value[i];
        const result = await mealplan.insertOne(obj);
        IDS.push(`${result.insertedId}`);
        console.log(`A recipe was inserted with the _id: ${result.insertedId}`);
      }
//      console.log(IDS);
      return IDS;
    } finally {
      await client.close()
    }
  };
  const result = await insert(value)
  return result;
}


// const updateValueInDb = async (id, value, isCompleted) => {
//   const update = async (id, value, isCompleted) => {
//     try {
//       await client.connect()
//       const database = client.db('mydb');
//       const todos = database.collection('todos');
//       console.log(id)

//       const filter = { "_id": ObjectID(id) };
//       const options = { upsert: false };
//       const updateDoc = {
//         $set: {
//           "text": value,
//           "isCompleted": isCompleted
//         },
//       };
//       const result = await todos.updateOne(filter, updateDoc, options);
//       console.log(
//         `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
//       );
//       return result
//     } finally {
//       await client.close()
//     }
//   };
//   const result = await update(id, value, isCompleted)
//   return result;
// }

// const deleteValueFromDb = async (id) => {
//   const deleteValue = async (id) => {
//     try {
//       await client.connect()
//       const database = client.db('mydb');
//       const todos = database.collection('todos');
//       console.log(id)

//       const query = { "_id": ObjectID(id) };

//       const result = await todos.deleteOne(query);
//       console.log(
//         `${result.deletedCount} document(s) deleted`,
//       );
//       return result
//     } finally {
//       await client.close()
//     }
//   };
//   const result = await deleteValue(id)
//   return result;
// }


const getAllRecipesFromDb = async () => {      ///need that!!!
  const getAll = async () => {
    try {
      await client.connect()
      const database = client.db('prepplate');
      const mealplan = database.collection('recipes');

      const query = {}
      // const options = { projection: { _id: 1, text: 1, isCompleted: 1 } }
      const cursor = mealplan.find(query).limit(21); //limit add!
      const result = []
      await cursor.forEach((entry) => { console.log(entry); result.push(entry) })

// const getRecipes = async (id) => {
//   const getAll = async (id) => {
//     try {
//       await client.connect()
//       const database = client.db('prepplate');
//       const mealplan = database.collection('mealplan');

//       const query = {'_id': ObjectId(id) }
//       const options = {}
//       const cursor = mealplan.find(query, options);
//       const result = []
//       const recipe_IDs = [];
//       await cursor.forEach((entry) => { 
// //        console.log(entry);
//          result.push(entry) })
// //       console.log(result[0]);
//       for (var i = 0; i < 7; i ++){
//         for(var j = 0; j < 3; j++){
//         recipe_IDs.push(result[0].mealplan[i][j].insertID);
//         } 
//       }
// //      console.log(recipe_IDs);
//       return recipe_IDs
//     } finally {
//       await client.close()
//     }
//   }
//   const result = await getAll(id)
//   return result;
// }

// //getRecipes('62245d75f121617f1fb246f3');

// const getShoppingList = async (ids) => {
//   const getAll = async (ids) => {
//     try {
//       await client.connect()
//       const database = client.db('prepplate');
//       const mealplan = database.collection('recipes');

//       var obj_ids = ids.map(function(id) { return ObjectId(id); });
//       const query = {'_id':{$in:obj_ids}}
//       const options = {}
//       const cursor = mealplan.find(query, options);
//       const result = []

//       await cursor.forEach((entry) => { 
// //        console.log(entry);
//           const ingredients = entry.extendedIngredients;
//           ingredients.forEach(element => {
//          const info = [element.amount, element.unit, element.name]
//          const grocery = info.join(" ");            
//             result.push(grocery)})})
//         //  result.push(entry.extendedIngredients) })
//        console.log(result);

      return result
    } finally {
      await client.close()
    }
  }

  const result = await getAll()
  return result;
}

module.exports = { addValueToMealPlan, addValueToRecipes, getAllRecipesFromDb}

//   const result = await getAll(ids)
//   return result;
// }

// // getShoppingList([
// //   '62245d74f121617f1fb246de',
// //   '62245d74f121617f1fb246de',
// //   '62245d74f121617f1fb246de',
// //   '62245d74f121617f1fb246de',
// //   '62245d74f121617f1fb246df',
// //   '62245d74f121617f1fb246e0',
// //   '62245d74f121617f1fb246de',
// //   '62245d74f121617f1fb246e0',
// //   '62245d74f121617f1fb246e2',
// //   '62245d74f121617f1fb246de',
// //   '62245d74f121617f1fb246e1',
// //   '62245d74f121617f1fb246e4',
// //   '62245d74f121617f1fb246de',
// //   '62245d74f121617f1fb246e2',
// //   '62245d74f121617f1fb246e6',
// //   '62245d74f121617f1fb246de',
// //   '62245d74f121617f1fb246e3',
// //   '62245d74f121617f1fb246e8',
// //   '62245d74f121617f1fb246de',
// //   '62245d74f121617f1fb246e4',
// //   '62245d74f121617f1fb246ea'
// // ])

// module.exports = { addValueToMealPlan, addValueToRecipes, getRecipes, getShoppingList}

