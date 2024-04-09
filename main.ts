import inquirer from "inquirer"

const currency:  any =  {
    USD: 1, //Base currency
    EUR: 0.91,
    INR: 74.57,
    PKR: 280
};

 let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "enter from currency",
            type: "list",
            choices: ["USD", "EUR", "INR", "PKR"]
        },
        {
            name: "to",
            message: "enter to currency",
            type: "list",
            choices: ["USD", "EUR", "INR", "PKR"]

        },
        {
            name: "amount",
            message: "enter your amount",
            type: " number "

        }
    
    ]
 )

 let fromAmount = currency[userAnswer.from]
 let toAmount = currency[userAnswer.to]
 let amount = userAnswer.amount
 let baseAmount = amount / fromAmount
 let convertedAmount = baseAmount * toAmount
 console.log(convertedAmount)