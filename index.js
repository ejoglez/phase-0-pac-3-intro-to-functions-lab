const greeting = 'HELLO'

function shout(greeting){
    return greeting.toUpperCase();
}

function whisper(greeting){
    return greeting.toLowerCase();
}

function logShout(greeting){
    console.log(greeting.toUpperCase());
}

logShout(greeting);

function logWhisper(greeting){
    console.log(greeting.toLowerCase());
}

logWhisper(greeting);

const lowercase = 'hello';
const uppercase = 'HELLO';
const dinner =  'Let\'s have dinner tonight!';

function sayHiToHeadphonedRoommate(string){

if (string == lowercase)
return ("I can't hear you!");

else if (string == uppercase)
return ("YES INDEED!");

else (string == dinner)
return ("I would love to!");

}
sayHiToHeadphonedRoommate(lowercase, uppercase, dinner);
