/*mixed message project based on motivation and morning tasks to complete*/
const myMessage = () => {
    //write greetings, etc...and start the morning message first.
    let greetings = ['Hello', 'Ciao', 'Hi', 'Oi', 'Hey'];
    let weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let specialWords = ['great', 'incredible', 'unforgettable', 'awesome', 'splendid'];
    let activity = ['walk outside', 'play basketball', 'go to the beach', 'catch up with freinds', 'go to the gym'];
    //write morning tasks here.
    let quotes = ['Life is good! Go out there and and some fun.', 'get up from, take a cold shower and some good sunlights'];


    //making the messages random.
    let randomGreetings = Math.floor(Math.random() * greetings.length);
    let randomWeekDay = Math.floor(Math.random() * weekDay.length);
    let randomSpecialWords = Math.floor(Math.random() * specialWords.length);
    let randomActivity = Math.floor(Math.random() * activity.length);
    let randomQuotes = Math.floor(Math.random() * quotes.length);

    //output random and adding the messages togheter.
    let myOutput = [];
    myOutput.push(`${greetings[randomGreetings]}! Today is ${weekDay[randomWeekDay]} and it's ${specialWords[randomSpecialWords]} to ${activity[randomActivity]}. "${quotes[randomQuotes]}.`)
    return myOutput;
}
console.log(myMessage());
//Output: it should print a random morning quotes and greetings messages.

