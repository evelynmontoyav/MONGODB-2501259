const { MongoClient } = require ("mongodb");
const {faker} = require ('@faker-js/faker');

//  Connection URI
const uri = "mongodb+srv://Evelyn:1054542694@cluster0.vlo9vuo.mongodb.net/?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run(){
    try{
        await client.connect();
        
        const database = client.db('University');

// --------------------------- INSERT ------------------------------------
// INSERT ONE STUDENTS
        // for (let i=0; i<100; i++){
        //     const Students= {
        //         name: faker.name.firstName(),
        //         lastname: faker.name.lastName(),
        //         email: faker.internet.email(),
        //         edad: faker.datatype.number({
        //             min: 18, 
        //             max: 50
        //         }),
        //         carrera: faker.name.jobTitle()
        //     }
        //     const result = await addstudent(database, 'Students', Students);
        // }


// INSERT MANY TEACHERS
        // for (let i=0; i<50; i++){
        //     const Teachers= [{
        //         name: faker.name.firstName(),
        //         lastname: faker.name.lastName(),
        //         email: faker.internet.email(),
        //         telefono: faker.phone.number(),
        //         asignatura: faker.name.jobTitle()
        //     },{
        //         name: faker.name.firstName(),
        //         lastname: faker.name.lastName(),
        //         email: faker.internet.email(),
        //         telefono: faker.phone.number(),
        //         asignatura: faker.name.jobTitle()
        //     }]
        //     const result = await addteachers(database, 'Teachers', Teachers);
        // }
        // console.log('Profesores agregados');

// INSERT ONE AULAS
        // for (let i=0; i<100; i++){
        //     const Aulas= {
        //         aula: faker.datatype.number({
        //             min: 100, 
        //             max: 199
        //         }),
        //         capacidad: faker.datatype.number({
        //             min: 10, 
        //             max: 100
        //         }),
        //         semestre: faker.random.alphaNumeric({
        //             min: 1, 
        //             max: 12
        //         }),
        //         tipo: faker.name.jobTitle()
        //     }
        //     const result = await addaulas(database, 'Aulas', Aulas);
        // }
        // console.log('Aulas agregados');
    

// --------------------------- FIND ------------------------------------
        // FIND ONE 
        // await Encontrarstudents(client, "Laurel");

        // FIND
        // await Encontrarteachers(client,20)


// --------------------------- UPDATE ------------------------------------

        // UPDATE ONE
        // await actualizaraulas(client, "Regional Interactions Producer", {
        //     aula: 158,
        //     capacidad: 80,
        //     semestre: "primer, cuarto y quinto",
        //     tipo: "Tecnologica"
        // });

        // UPDATE ONE CON UPSERT
        // await actualizaraulas(client, "Laboratorio", {
        //     aula: 111,
        //     capacidad: 60,
        //     semestre: "segundo, tercer y quinto",
        //     tipo: "Laboratorio"
        // });



        // UPDATE MANY
        // await actualizaraulas(client, 50, {
        //     semestre: "Tercer, Cuarto y Septimo"
        // });

        // UPDATE MANY CON UPSERT
        // await actualizaraulas(client, "Admnistrativa", {
        //     aula: 099,
        //     capacidad: 35,
        //     semestre: "Quinto",
        //     tipo: "Administrativa"
        // });


// --------------------------- DELETE ------------------------------------

        // DELETE ONE
        // await eliminarstudent(client, "Wallace");

        // DELETE MANY
        // await eliminarstudent(client, 20);


// --------------------------- LOOKUP ------------------------------------
        // const result = documentlookup (client)
        // result.forEach(element=>{
        //     console.log(element)
        // })


// --------------------------- PIPELINE ------------------------------------
// PIPELINE STUDENTS
    //    const result = await  pipeline(client)
    //    result.forEach(element=>{
    //     console.log(element)
    //    });

// PIPELINE TEACHERS
    //    const result = await  pipeline(client)
    //    result.forEach(element=>{
    //     console.log(element)
    //    });


// --------------------------- DROP ------------------------------------
    await dropcollection(client);
        
    } 
    finally {
        await client.close();
    }
}
run().catch(console.dir);


// CRUD CON NODE.JS

// --------------------------- INSERT ------------------------------------

// INSERT ONE STUDENTS
// const addstudent = (db, collection, Students) => {
//     try{
//         db.collection(collection).insertOne(Students);

//     } catch (error){
//         console.log(error)
//     }
// }


// INSERT MANY TEACHERS
// const addteachers = (db, collection, Teachers) => {
//     try{
//         db.collection(collection).insertMany(Teachers);

//     } catch (error){
//         console.log(error)
//     }
// }


// INSERT ONE AULAS
// const addaulas = (db, collection, Aulas) => {
//     try{
//         db.collection(collection).insertOne(Aulas);

//     } catch (error){
//         console.log(error)
//     }
// }



// --------------------------- FIND ------------------------------------

// FIND ONE
// async function Encontrarstudents(client, nombrestudents) {
//   const result = await client.db("University").collection("Students").findOne(
//     {name:nombrestudents});

//   if(result){
//     console.log(`Se encontro la propiedad nombre: ${nombrestudents}`);
//     console.log(result);
//   }
//   else{
//     console.log(`no se encontro la propiedad nombre: ${nombrestudents}`);
//   }
//  }


// FIND
//  async function Encontrarteachers(client,edad){
//     const result = await client.db("University").collection("Students").find
//     ({name:{$regex : "an"}},{edad:{$gte: edad}}).sort({name: -1}).limit(5);

//     const results = await result.toArray();

//     if (results.length>0){
//       console.log("Los Estudiantes que cumplen los criterios son: ")
//       results.forEach((Students)=>{
//         console.log(`Nombre: ${Students.name} de ${Students.edad} de edad`);
//       })
//     }else{
//       console.log("No se encontraron estudiantes");
//     }
//  }


// --------------------------- UPDATE ------------------------------------

// UPDATE ONE
// async function actualizaraulas(client, tipoaula, aulaactualizada){
//   const result = await client.db("University").collection("Aulas").updateOne(
//     {tipo:tipoaula},{$set:aulaactualizada});
//     console.log(`Se encontro una nueva aula de tipo ${result.tipo}`);
//     console.log(`Se actualizo el aula`);
// }

// UPDATE ONE CON UPSERT
// async function actualizaraulas(client, tipoaula, aulaactualizada){
//   const result = await client.db("University").collection("Aulas").updateOne(
//     {tipo:tipoaula},{$set:aulaactualizada},{ upsert: true });
//     console.log(`Se encontro una nueva aula de tipo ${result.tipo}`);
//     console.log(`Se actualizo el aula`);
// }


// UPDATE MANY
// async function actualizaraulas(client, capacidadaula, aulaactualizada){
//   const result = await client.db("University").collection("Aulas").updateMany(
//     {capacidad:{$gte:capacidadaula}},{$set:aulaactualizada});
//     console.log(`Se encontro una nueva aula de tipo ${result.capacidad}`);
//     console.log(`Se actualizo el aula`);
// }



// UPDATE MANY CON UPSERT
// async function actualizaraulas(client, tipoaula, aulaactualizada){
//   const result = await client.db("University").collection("Aulas").updateMany(
//     {tipo:tipoaula},{$set:aulaactualizada},{ upsert: true });
//     console.log(`Se encontro una nueva aula de tipo ${result.tipo}`);
//     console.log(`Se actualizo el aula`);
// }


// --------------------------- DELETE ------------------------------------

// DELETE ONE
// async function eliminarstudent(client, nombrestudent){
//   const result = await client.db("University").collection("Students").deleteOne(
//     {name:nombrestudent});
//     console.log(`Se elimino el estudiante ${nombrestudent}`);
// }

// DELETE MANY
// async function eliminarstudent(client, edadstudent){
//   const result = await client.db("University").collection("Students").deleteMany(
//     {edad:{$lt:edadstudent}});
//     console.log(`Se eliminaron los estudiantes con una edad menor a ${edadstudent}`);
// }

// --------------------------- LOOKUP ------------------------------------
// const documentlookup = (client)=>{
//     try{
//         const result = client.db("University").collection("Students").aggregate([{
//             $lookup:{
//                 from: "Teachers",
//                 localField: "name",
//                 foreignField: "name",
//                 as: "info"
//             }
//         },
//         {$match:{$expr: {$gte: [{$size:`$${"info}`},1]}}},
//         {$project:{_id:0, info:"$coments.body", name:1, lastname:1, email:1, edad:1, carrera:1 }}
//         ])
//         return result
//     }catch(error){
//         console.log(error)
//     }
// }


// --------------------------- PIPELINES ------------------------------------
// PIPELINES STUDENTS
// const pipeline = (client) =>{
//     try{
//         const result = client.db("University").collection("Students").aggregate(
//             [
//                 {$match: {edad: { $gte: 18}}}, 
//                 {$project: {_id: 0, name: 1, edad: 1}}, 
//                 {$sort: {edad: 1}}, 
//                 {$limit: 6}
//             ])
//             return result
//     }catch(error){
//         console.log(error)
//     }
// }

// PIPELINE TEACHERS
// const pipeline = (client) =>{
//     try{
//         const result = client.db("University").collection("Teachers").aggregate(
//             [
//                 {$match: {name: {$regex: 'e'}}}, 
//                 {$project: { _id: 0, name: 1}}, 
//                 {$sort: {name: -1}}, 
//                 {$limit: 5}
//             ])
//             return result
//     }catch(error){
//         console.log(error)
//     }
// }

// --------------------------- DROP ------------------------------------

// db.collection("Students").drop(function(err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Colección eliminada correctamente");
//     client.close();
//   });
