//Q2
var myName = "Shahr Bano";
console.log("Hello ".concat(myName, ", would you like to learn some Python today?"));
//Q3
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.charAt(0).toUpperCase() + myName.slice(1, myName.indexOf(" ")) + myName.charAt(myName.indexOf(" ") + 1).toUpperCase() + myName.slice(myName.indexOf(" ") + 2));
//Q4
console.log("Albert Einstein once said, \"A person who never made a mistake never tried anything new.\" ");
//Q5
var famous_person = "Albert Eintein";
var msg = famous_person + " once said, \"A person who never made a mistake never tried anything new.\" ";
console.log(msg);
//Q6
var nameSample = "  \t\nShahr Bano  \n";
console.log(nameSample);
console.log(nameSample.trim());
//Q7
var add = 7 + 1;
var sub = 9 - 1;
var div = 16 / 2;
var mult = 2 * 4;
//Q8
console.log(add);
console.log(sub);
console.log(div);
console.log(mult);
//Q9
var favNum = 1;
console.log("This is my favourite number: ".concat(favNum));
//Q10
//This is a single-line comment
/*This is a multi-line comment  */
//Q11
var myFriends = ["Atrab", "Sarah", "Laiba", "Rohma"];
for (var _i = 0, myFriends_1 = myFriends; _i < myFriends_1.length; _i++) {
    var friends = myFriends_1[_i];
    console.log(friends);
}
//Q12
for (var _a = 0, myFriends_2 = myFriends; _a < myFriends_2.length; _a++) {
    var friends = myFriends_2[_a];
    console.log("This is my best friend: ".concat(friends));
}
//Q13
var myFavTransport = ["car", "bus", "motorcycle", "scooter", "airplane", "ship"];
for (var _b = 0, myFavTransport_1 = myFavTransport; _b < myFavTransport_1.length; _b++) {
    var transport = myFavTransport_1[_b];
    console.log("I would like to own a ".concat(transport));
    console.log("I would like to take my brother for a ride on a ".concat(transport));
}
//Q14
var guestList = ["Atrab", "Sarah", "Laiba", "Rohma"];
for (var _c = 0, guestList_1 = guestList; _c < guestList_1.length; _c++) {
    var guest = guestList_1[_c];
    console.log("Dear ".concat(guest, "! You are invited to my party!!!"));
}
//Q15
var newGuest = "Waina";
var rainCheckGuest = "Laiba";
var popIndex = guestList.indexOf(rainCheckGuest);
guestList.splice(popIndex, 1);
guestList.splice(popIndex, 0, newGuest);
for (var _d = 0, guestList_2 = guestList; _d < guestList_2.length; _d++) {
    var guest = guestList_2[_d];
    console.log("Dear ".concat(guest, "! You are invited to my party!!!"));
}
console.log("".concat(rainCheckGuest, " can not make it to today's party...:( "));
//Q16
console.log("We found a bigger dining table!");
//start of the guest list
var newLength = guestList.unshift("Ayesha");
console.log("length of list ".concat(newLength, " and half is ").concat(Math.floor(newLength / 2)));
//middle of the guest list
guestList[Math.floor(newLength / 2)] = "Abeer";
//end of the guest list
guestList.push("Zaira");
//Q17
for (var _e = 0, guestList_3 = guestList; _e < guestList_3.length; _e++) {
    var guest = guestList_3[_e];
    console.log(guest);
}
console.log("We can only invite two people for dinner :(");
for (var i = guestList.length; i > 2; i--) {
    console.log("Sorry ! You're not invited to the party lolz :( ".concat(guestList.pop()));
}
for (var _f = 0, guestList_4 = guestList; _f < guestList_4.length; _f++) {
    var guest = guestList_4[_f];
    console.log("You're still invited :))) ".concat(guest));
}
//Q18
var visitWorld = ["Malaysia", "Germany", "Australia", "Baku", "Japan"];
console.log(visitWorld);
console.log(visitWorld.slice(0).sort());
console.log(visitWorld);
console.log(visitWorld.slice(0).reverse());
console.log(visitWorld);
console.log(visitWorld.reverse());
console.log(visitWorld.reverse());
console.log(visitWorld.sort());
console.log(visitWorld.reverse());
//Q19: number of ppl invited to party
console.log("I am inviting ".concat(guestList.length, " number of people to the party."));
//Q20
console.log("Enter place you want to visit! ");
var placesToVisit = [];
for (var i = 0; i < 3; i++) {
    placesToVisit[i] = "random place ";
}
//Q21
var person = /** @class */ (function () {
    function person() {
        this.name = "";
        this.age = 0;
    }
    return person;
}());
console.log("creating person one....");
var p1 = new person();
p1.name = "Shahr Bano";
p1.age = 19;
//Q22
//changed index error in removal of guest list exercise 
//Q23 & 24
console.log(9 == 10);
console.log('Mary' == "Maryz");
console.log("apple" != "apple");
console.log(9 === 9);
console.log("Maryz" == "Maryz");
console.log("apple" == "apple");
//Q25
var alien_color = "green";
if (alien_color === "green") {
    console.log("You earned 5 points! HUZZAHHH");
}
//Q25
alien_color = "red";
function alienPoints25(color) {
    if (color === "green") {
        console.log("You earned 5 points! HUZZAHHH");
    }
    else if (color === "yellow") {
        console.log("You earned 10 points! HUZZAHHHHHHHHHHHHHHHHH");
    }
    else {
        console.log("You earned 15 points! HUZZAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
    }
}
alienPoints25(alien_color);
//Q26
function alienPoints26(color) {
    if (color === "green") {
        console.log("You earned 5 points! HUZZAHHH");
    }
    else {
        console.log("You earned 10 points! HUZZAHHHHHHHHHHHHHHHHH");
    }
}
alienPoints26("red");
alienPoints26("green");
//Q27
alienPoints25("red");
alienPoints25("green");
alienPoints25("yellow");
//Q28
var stage_of_life = 2;
function stageOfLife(age) {
    if (age <= 2) {
        console.log("You're still a baby...");
    }
    else if (age >= 4 && age < 13) {
        console.log("You're a kid...");
    }
    else if (age >= 13 && age < 20) {
        console.log("You're a teenager");
    }
    else if (age >= 20 && age < 65) {
        console.log("You're an adult");
    }
    else if (age >= 65) {
        console.log("You're an elder");
    }
}
stageOfLife(stage_of_life);
//Q29
var favFruit = ["Mango", "strawberry", "kiwi"];
if (favFruit.includes("Mango")) {
    console.log("You really like mangoes");
}
if (favFruit.includes("banana")) {
    console.log("You really like bananas");
}
if (favFruit.includes("guava")) {
    console.log("You really like guava");
}
if (favFruit.includes("kiwi")) {
    console.log("You really like kiwis.");
}
if (favFruit.includes("dragonfruit")) {
    console.log("You really like dragonfruit!");
}
//Q30
var userNames = ["sherry_909", "anon_890", "admin", "aruniero"];
for (var _g = 0, userNames_1 = userNames; _g < userNames_1.length; _g++) {
    var user = userNames_1[_g];
    if (user == "admin") {
        console.log("Hello admin! Would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again :)"));
    }
}
//Q31
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i != userNames.length; i++) {
        userNames.pop();
    }
}
//Q32
var current_users = ["sherry_900", "anonz890", "theChosen", "idkIcry", "John"];
var new_users = ["sherry_900", "anonz890", "someNewUser", "random", "JOHN"];
for (var _h = 0, new_users_1 = new_users; _h < new_users_1.length; _h++) {
    var newUser = new_users_1[_h];
    if (current_users.includes(newUser) || current_users.includes(newUser.toLowerCase()) || current_users.includes(newUser.toUpperCase())) {
        console.log("Dear ".concat(newUser, "! This username is already in use...Choose another one."));
    }
    else {
        console.log("The username ".concat(newUser, " is available..."));
    }
}
//Q33
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _j = 0, num_1 = num; _j < num_1.length; _j++) {
    var numberz = num_1[_j];
    if (numberz === 1) {
        console.log("1st");
    }
    else if (numberz === 2) {
        console.log("2nd");
    }
    else if (numberz === 3) {
        console.log("3rd");
    }
    else {
        console.log("".concat(numberz, "th"));
    }
}
//Q34
var pizzaNames = ["chicken-tikka", "cheese-loaded", "vegan-lol"];
for (var _k = 0, pizzaNames_1 = pizzaNames; _k < pizzaNames_1.length; _k++) {
    var pizza = pizzaNames_1[_k];
    if (pizza === "chicken-tikka") {
        console.log("chicken-tikka yum");
    }
    else if (pizza === "cheese-loaded") {
        console.log("super cheesyyyy");
    }
    else if (pizza === "vegain-lol") {
        console.log("vegan good");
    }
}
//Q35
var animals = ["cat", "tiger", "lion"];
for (var _l = 0, animals_1 = animals; _l < animals_1.length; _l++) {
    var animal = animals_1[_l];
    if (animal === "cat") {
        console.log("meow meow");
    }
    else if (animal === "tiger") {
        console.log("meowRawr meowRawr");
    }
    else if (animal === "lion") {
        console.log("Rawr Rawr");
    }
}
console.log("They're all cats...i think.");
//Q36
function make_shirt(size, text) {
    console.log("Size: ".concat(size, " with print of ").concat(text, "."));
}
make_shirt("small", "i am doing an assignment");
//Q37
function make_shirtModified(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love Typescript"; }
    console.log("Size: ".concat(size, " with print of ").concat(text, "."));
}
make_shirtModified();
//Q38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Lahore");
describe_city("Karachi");
describe_city("Metropolis");
//Q39
function city_country(city, country) {
    console.log("\"".concat(city, ",").concat(country, "\""));
}
city_country("Lahore", "Pakistan");
//Q40
var musicAlbum = /** @class */ (function () {
    function musicAlbum() {
        this.artistName = " ";
        this.albumTitle = " ";
    }
    return musicAlbum;
}());
var dict1, dict2, dict3;
function make_album(artist_name, album_title, tracks) {
    var newAlbum = new musicAlbum();
    newAlbum.artistName = artist_name;
    newAlbum.albumTitle = album_title;
    if (tracks) {
        newAlbum.tracks = tracks;
    }
    console.log(newAlbum);
    return newAlbum;
}
dict1 = make_album("Fireworks", "Katy Perry");
dict2 = make_album("Blank Space", "Taylor Swift");
dict3 = make_album("Random song", "some artist", 10);
//Q41
var magicianName = ["AwoogaBooga", "BoogaAwooga", "AZoogaBZooga"];
for (var _m = 0, magicianName_1 = magicianName; _m < magicianName_1.length; _m++) {
    var magician = magicianName_1[_m];
    console.log(magician);
}
//Q42
function displayMagician(magicianArr) {
    for (var _i = 0, magicianArr_1 = magicianArr; _i < magicianArr_1.length; _i++) {
        var magician = magicianArr_1[_i];
        console.log(magician);
    }
}
//Q43
magicianName.forEach(function (element, index, magicianName) {
    magicianName[index] = "The Great ".concat(element);
});
// magicianName.forEach(function(this:string[],magician:string,index:number,arr:string[]){
//     this[index]=`the`
// },magicianName);
displayMagician(magicianName);
//
//Q43
var magicianNameNew = ["AwoogaBooga", "BoogaAwooga", "AZoogaBZooga"];
function make_great(magicianArr) {
    for (var i = 0; i < magicianArr.length; i++) {
        magicianArr[i] = "The Great ".concat(magicianArr[i]);
    }
    console.log(magicianArr);
    return magicianArr;
}
var copyArr = magicianNameNew.slice(0);
make_great(copyArr);
displayMagician(copyArr);
console.log("=======");
displayMagician(magicianNameNew);
//44
var sandwichIng = ["tomatoes", "cauliflower", "chicken"];
function makeSandwich() {
    var ing = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ing[_i] = arguments[_i];
    }
    for (var _a = 0, ing_1 = ing; _a < ing_1.length; _a++) {
        var ingredients = ing_1[_a];
        console.log(ingredients);
    }
}
makeSandwich("tomatoes", "jalapeno", "tomatoe", "zinger");
makeSandwich("chicken", "cheese");
//45
var car = /** @class */ (function () {
    function car() {
        this.manufacturer = " ";
        this.model_Name = " ";
        this.extra_features = [];
    }
    return car;
}());
function make_car(manufacturer, model_Name) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var carz = new car();
    carz.manufacturer = manufacturer;
    carz.model_Name = model_Name;
    if (features) {
        for (var _a = 0, features_1 = features; _a < features_1.length; _a++) {
            var feature = features_1[_a];
            carz.extra_features.push(feature);
        }
    }
    console.log(carz);
    return carz;
}
make_car("Manufacturere", "Toyota", "Black", "big tyres");
