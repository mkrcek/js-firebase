
//používat tak, aby se odkomentovala jen jedna část. Pak ukazuje specifickou činnost
//pokud není "DB" tabulka, tak se vytvoří - např. players

//1.
//console.log(firebase);
//celá db

//2.
// var ref = firebase.database().ref('players');
// console.log(ref);

//3. - vytvoření nového záznamu: SET
// var playersRef = firebase.database().ref('players/');
//
// playersRef.set({
//     Martin: {
//         number:1,
//         age: 44
//     },
//     Pavel: {
//         number: 2,
//         age: 88
//     }
// });

// nebo super jednoducha struktura
// var playersRef = firebase.database().ref('ratingok/');
//
// playersRef.set ({
//     Amanda: 4,
//     John: 9,
//     Peter: 3
// });

//4. - aktualizace
// var martinRef = firebase.database().ref('players/Martin');
//
// martinRef.update({
//     "number":110
// });


//5. vytvoření unikátního UNID záznamu: PUSH

// var playersRef = firebase.database().ref().child('players');
//
// playersRef.push ({
//     name: "Martin",
//     number: 1,
//     age: 22
// });
//
// playersRef.push({
//     name: "Milenka",
//     number: 192,
//     age: 28
// });


// 6.  - najít

// var playersRef = firebase.database().ref().child('players');
// var playersKey = playersRef.key;
// console.log(playersKey);
//
// // 6b.  - transaction: najde "ID" a udělat transakci : age + 1
//
// var martinAgeRef = firebase.database().ref().child('players').child('-LIm6MthHe4MU-qsMmwD').child('age');
// console.log(martinAgeRef);
// martinAgeRef.transaction(function (currentAge) {
//     return currentAge + 1;
// })


//7. ON - read data: vrátí JSON se všemi daty, díky snapshot.val()
// var ref = firebase.database().ref();
// ref.on('value', function (snapshot) {
//     console.log(snapshot.val());
// }, function (error) {
//     console.log("error: " + error.code)
//     }
// )



// 8. seznam všech: s child_added + info, když teď někdo přidá
// var playersRef = firebase.database().ref('players/');
//
// playersRef.on('child_added', function (data, prevChildKey) {
//     var newPlayer = data.val();
//     console.log('name: ', newPlayer.name);
//     console.log('age: ', newPlayer.age);
//     console.log('number: ', newPlayer.number);
//     console.log('Predchazeji hrac: ', prevChildKey);
// });

//EVENT TYPE
//9. právě když byl aktualizovaný záznam: child_changed
// var playersRef = firebase.database().ref("players/");
//
// playersRef.on("child_changed", function(data) {
//     var player = data.val();
//     console.log("The updated player name is " + player.name);
// });
//
// //9.b když byl záznam smazán: child_removed
// playersRef.on("child_removed", function(data) {
//     var deletedPlayer = data.val();
//     console.log(deletedPlayer.name + " has been deleted.");
// });


// 10. detach Callback
// // - nevím co to je za slovo a aktivitu
// var playersRef = firebase.database().ref("players/");
//
// playersRef.on('value', function (data) {
//     console.log(data.val());
// }, function (error) {
//     console.log('error type: ', error.code)
// });
//
// playersRef.off();



//11. třídění

// var playersRef = firebase.database().ref("players/");
//
//podle jmena
// playersRef.orderByChild('name').on('child_added', function (data) {
//     console.log(data.val().name);
// });

// podle klič
// playersRef.orderByKey().on('child_added', function (data) {
//     console.log(data.key);
// })

// sort podle value
// var ratingRef = firebase.database().ref("ratingok/");
//
// ratingRef.orderByValue().on("value", function(data) {
//     data.forEach(function(data) {
//         console.log("The " + data.key + " rating is " + data.val());
//     });
// });

// 12.filtr
// //vyber 2 od začátku databaze
// var firstPlayerRef = firebase.database().ref("players/").limitToFirst(2);
//
//
// //vyber 1 od konce databaze
// var lastPlayerRef = firebase.database().ref('players/').limitToLast(1);
//
// firstPlayerRef.on("value", function(data) {
//     console.log(data.val());
// }, function (error) {
//     console.log("Error: " + error.code);
// });
//
// lastPlayerRef.on("value", function(data) {
//     console.log(data.val());
// }, function (error) {
//     console.log("Error: " + error.code);
// });

// 12b
// var playersRef = firebase.database().ref("players/");

// //setřid podle jmena a zobraz od slova "Martinos"
// playersRef.orderByChild("name").startAt("Martinos").on("child_added", function(data) {
//     console.log("Start at filter: " + data.val().name);
// });
//
// //končí Martinos
// playersRef.orderByChild("name").endAt("Martinos").on("child_added", function(data) {
//     console.log("End at filter: " + data.val().name);
// });

// //konkretni jmeno
// playersRef.orderByChild("name").equalTo("Martin").on("child_added", function(data) {
//     console.log("Equal to filter: " + data.val().name);
// });

//konkretni hodnota - věk začíná od hodnoty 22
// playersRef.orderByChild("age").startAt(28).on("child_added", function(data) {
//     console.log("Age filter: " + data.val().name);
// });


