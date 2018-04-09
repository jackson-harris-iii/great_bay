const inquirer = require('inquirer');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "8889",
    user: "root",
    password: "root",
    database: "great_bay_db",
})

// connection.connect(function(err) {
//     if(err) throw err;

//     console.log("connected as id" + connection.threadId);
//     console.log('welcome to greatBae!')
// })

const prompt = inquirer.createPromptModule();




var whatToDo = [
    {
        type: 'list',
        choices: ['post', 'bid'],
        name: 'choice',
        message: 'what would you like to do?'
    },
]

// var post = [
//     {

//     }
// ]

var bid = [
    {
        type: 'list',
        name: 'choice',
        message: 'What item would you like to bid on?',
    },
    {
        type: 'input',
        name: 'bidAmount',
        message: 'How much would you like to bid on this item?',
    }
]

function welcomeFunction() {
        prompt(whatToDo).then(answers => {

        let choice = answers.choice;
        console.log(choice);
            if (choice === 'bid' ){
                makeBid()
            }
            else if (choice === 'post' ){
                post()
            }
        
        })   
    }

function post() {
    console.log('lets post an item')
}

function makeBid() {
    console.log('lets bid!')
    connection.query("SELECT * FROM items", (err, res) => {
        if (err) {
            console.log(err);
        }
        console.log(res)
        whatToBidOn(res)
        
    });
    
}

function whatToBidOn(items) {
    // console.log('what would you like to big on?')
    let availItems = []
    items.forEach(element => {
        availItems.push(element.itemName)
    });
    bid[0].choices = availItems
    console.log(availItems)
    prompt(bid).then( answers => {
        var currentBid = connection.query("SELECT * FROM items WHERE name = " + answers.choice, (err, res) => {
            if (answers.bidAmount > res[0].currentBid){
                console.log('you are now the highest bidder')
            }
            else {
                console.log("your bid wasn't high enough")
            }
        })
        
    })
}

welcomeFunction()