//Q2
let myName = "Shahr Bano";
console.log(`Hello ${myName}, would you like to learn some Python today?`);

//Q3
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.charAt(0).toUpperCase() + myName.slice(1,myName.indexOf(" ")) + myName.charAt(myName.indexOf(" ")+1).toUpperCase() + myName.slice(myName.indexOf(" ")+2));

//Q4
console.log("Albert Einstein once said, \"A person who never made a mistake never tried anything new.\" ");

//Q5
let famous_person = "Albert Eintein";
let msg = famous_person +" once said, \"A person who never made a mistake never tried anything new.\" "
console.log(msg);

//Q6
let nameSample = "  \t\nShahr Bano  \n";
console.log(nameSample);
console.log(nameSample.trim());

//Q7
let add = 7+1;
let sub = 9-1;
let div = 16/2;
let mult = 2*4;

//Q8
console.log(add);
console.log(sub);
console.log(div);
console.log(mult);

//Q9
let favNum = 1;
console.log(`This is my favourite number: ${favNum}`);

//Q10
//This is a single-line comment
/*This is a multi-line comment  */

//Q11
let myFriends= ["Atrab","Sarah","Laiba","Rohma"];
for(let friends of myFriends){
    console.log(friends);
}

//Q12
for(let friends of myFriends){
    console.log(`This is my best friend: ${friends}`);
}

//Q13
let myFavTransport = ["car","bus","motorcycle","scooter","airplane","ship"];

for(let transport of myFavTransport){
    console.log(`I would like to own a ${transport}`);
    console.log(`I would like to take my brother for a ride on a ${transport}`);
}

//Q14
let guestList=["Atrab","Sarah","Laiba","Rohma"]
for(let guest of guestList){
    console.log(`Dear ${guest}! You are invited to my party!!!`);
}

//Q15
let newGuest = "Waina";
let rainCheckGuest= "Laiba";
let popIndex = guestList.indexOf(rainCheckGuest);
guestList.splice(popIndex,1);
guestList.splice(popIndex,0,newGuest);

for(let guest of guestList){
    console.log(`Dear ${guest}! You are invited to my party!!!`);
}
console.log(`${rainCheckGuest} can not make it to today's party...:( `);


//Q16
console.log("We found a bigger dining table!");
//start of the guest list
let newLength= guestList.unshift("Ayesha");
console.log(`length of list ${newLength} and half is ${Math.floor(newLength/2)}`);
//middle of the guest list
guestList[Math.floor(newLength/2)]="Abeer";
//end of the guest list
guestList.push("Zaira");

//Q17
for(let guest of guestList){
    console.log(guest);
}
console.log("We can only invite two people for dinner :(");
for(let i=guestList.length;i>2;i--){
    console.log(`Sorry ! You're not invited to the party lolz :( ${guestList.pop()}`);
}
 for(let guest of guestList){
    console.log(`You're still invited :))) ${guest}`);
}

//Q18
let visitWorld = ["Malaysia","Germany","Australia","Baku","Japan"];
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
console.log(`I am inviting ${guestList.length} number of people to the party.`)

//Q20
console.log("Enter place you want to visit! ");
let placesToVisit : string[] = [];

for(let i=0;i<3;i++){
    placesToVisit[i]="random place ";
}

//Q21
class person {
    name="";
    age=0;
}
console.log("creating person one....");
let p1 = new person();
p1.name="Shahr Bano";
p1.age=19;

//Q22
//changed index error in removal of guest list exercise 

//Q23 & 24
console.log(9 == 10);
console.log('Mary' == "Maryz");
console.log("apple" != "apple");

console.log(9===9);
console.log("Maryz"=="Maryz");
console.log("apple"=="apple");

//Q25
let alien_color: "green"|"yellow"|"red"= "green";

if(alien_color==="green"){
    console.log("You earned 5 points! HUZZAHHH");
}

//Q25
alien_color="red";
function alienPoints25(color:"green"|"yellow"|"red"){
    if(color==="green"){
        console.log("You earned 5 points! HUZZAHHH");
    }
    else if(color==="yellow"){
        console.log("You earned 10 points! HUZZAHHHHHHHHHHHHHHHHH");
    }
    else{
        console.log("You earned 15 points! HUZZAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
    }  
}
alienPoints25(alien_color);

//Q26
function alienPoints26(color:"green"|"yellow"|"red"){
    if(color==="green"){
        console.log("You earned 5 points! HUZZAHHH");
    }
    else{
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
let stage_of_life=2;

function stageOfLife(age:number){
    if(age<=2){
        console.log("You're still a baby...");
    }
    else if(age>=4 && age<13){
        console.log("You're a kid...");
    }
    else if(age>=13 && age<20){
        console.log("You're a teenager");
    }
    else if(age>=20 && age<65){
        console.log("You're an adult");
    }
    else if(age>=65){
        console.log("You're an elder");
    }
}
stageOfLife(stage_of_life);

//Q29
let favFruit = ["Mango","strawberry","kiwi"];

if(favFruit.includes("Mango")){
    console.log("You really like mangoes");
}
if(favFruit.includes("banana")){
    console.log("You really like bananas");
}
if(favFruit.includes("guava")){
    console.log("You really like guava");
}
if(favFruit.includes("kiwi")){
    console.log("You really like kiwis.");
}
if(favFruit.includes("dragonfruit")){
    console.log("You really like dragonfruit!");
}

//Q30
let userNames=["sherry_909","anon_890","admin","aruniero"];

for(let user of userNames){
    if(user=="admin"){
        console.log("Hello admin! Would you like to see a status report?");
    }
    else{
        console.log(`Hello ${user}, thank you for logging in again :)`);
    }
}

//Q31
if(userNames.length===0){
    console.log("We need to find some users!");
}
else{
    for(let i=0;i!=userNames.length;i++){
        userNames.pop();
    }
}


//Q32
let current_users=["sherry_900","anonz890","theChosen","idkIcry","John"];
let new_users=["sherry_900","anonz890","someNewUser","random","JOHN"];

for(let newUser of new_users){
    if(current_users.includes(newUser) || current_users.includes(newUser.toLowerCase()) || current_users.includes(newUser.toUpperCase())) {
        console.log(`Dear ${newUser}! This username is already in use...Choose another one.`);
    }
    else{
        console.log(`The username ${newUser} is available...`);
    }
}

//Q33
let num=[1,2,3,4,5,6,7,8,9];
for(let numberz of num){
    if(numberz === 1){
        console.log("1st");
    }
    else if(numberz===2){
        console.log("2nd");
    }
    else if(numberz===3){
        console.log("3rd");
    }
    else{
        console.log(`${numberz}th`);
    }
}

//Q34
let pizzaNames=["chicken-tikka","cheese-loaded","vegan-lol"];
for(let pizza of pizzaNames){
    if(pizza==="chicken-tikka"){
        console.log("chicken-tikka yum");
    }
    else if(pizza==="cheese-loaded"){
        console.log("super cheesyyyy");
    }
    else if(pizza==="vegain-lol"){
        console.log("vegan good");
    }
}

//Q35
let animals = ["cat","tiger","lion"];
for(let animal of animals){
    if(animal==="cat"){
        console.log("meow meow");
    }
    else if(animal==="tiger"){
        console.log("meowRawr meowRawr");
    }
    else if(animal==="lion"){
        console.log("Rawr Rawr");
    }
}
console.log("They're all cats...i think.");


//Q36
function make_shirt(size:"small"|"medium"|"large",text:string){
    console.log(`Size: ${size} with print of ${text}.`);
}
make_shirt("small","i am doing an assignment");

//Q37
function make_shirtModified(size:"small"|"medium"|"large"="large",text:string="I love Typescript"){
    console.log(`Size: ${size} with print of ${text}.`);
}
make_shirtModified();

//Q38
function describe_city(city:string,country:string="Pakistan"){
    console.log(`${city} is in ${country}`);
}
describe_city("Lahore");
describe_city("Karachi");
describe_city("Metropolis");

//Q39
function city_country(city:string,country:string){
    console.log(`"${city},${country}"`);
}
city_country("Lahore","Pakistan");

//Q40
class musicAlbum {
    artistName=" ";
    albumTitle=" ";
    tracks?:number;
}
let dict1,dict2,dict3 : musicAlbum;
function make_album(artist_name:string,album_title:string,tracks?:number){
    let newAlbum = new musicAlbum();
    newAlbum.artistName=artist_name;
    newAlbum.albumTitle=album_title;
    if(tracks){
        newAlbum.tracks=tracks;
    }
    console.log(newAlbum);
    return newAlbum;
}
dict1=make_album("Fireworks","Katy Perry");
dict2=make_album("Blank Space","Taylor Swift");
dict3=make_album("Random song","some artist",10);

//Q41
let magicianName = ["AwoogaBooga","BoogaAwooga","AZoogaBZooga"];

for(let magician of magicianName){
    console.log(magician);
}

//Q42
function displayMagician(magicianArr:string[]){
    for(let magician of magicianArr){
        console.log(magician);
    }
}

//Q43
magicianName.forEach(function(element,index,magicianName){
    magicianName[index]=`The Great ${element}`;
})
// magicianName.forEach(function(this:string[],magician:string,index:number,arr:string[]){
//     this[index]=`the`
// },magicianName);
displayMagician(magicianName);
//

//Q43
let magicianNameNew = ["AwoogaBooga","BoogaAwooga","AZoogaBZooga"];

function make_great(magicianArr:string[]){
    for(let i=0;i<magicianArr.length;i++){
        magicianArr[i]=`The Great ${magicianArr[i]}`;
    }
    console.log(magicianArr);
    return magicianArr;
}

let copyArr:string[]=magicianNameNew.slice(0);
make_great(copyArr);

displayMagician(copyArr);
console.log("=======");
displayMagician(magicianNameNew);

//44
let sandwichIng=["tomatoes","cauliflower","chicken"];
function makeSandwich(...ing:string[]){
    for(let ingredients of ing){
        console.log(ingredients);
    }
}
makeSandwich("tomatoes","jalapeno","tomatoe","zinger");
makeSandwich("chicken","cheese");


//45
class car {
    manufacturer=" ";
    model_Name=" ";
    extra_features:string[]=[];
}
function make_car(manufacturer:string,model_Name:string,...features:string[]){
    let carz=new car();
    carz.manufacturer=manufacturer;
    carz.model_Name=model_Name;
    if(features){
        for(let feature of features){
            carz.extra_features.push(feature);
        }
    }
    console.log(carz);
    return carz;
}
make_car("Manufacturere","Toyota","Black","big tyres");