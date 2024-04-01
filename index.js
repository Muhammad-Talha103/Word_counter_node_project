#! /usr/bin/env node
import inquirer from "inquirer";
let retry = true;
while (retry) {
    const userInput = await inquirer.prompt({
        type: "input",
        name: "userinput",
        message: "Enter your sentence to count letters and words ?"
    });
    let { userinput } = userInput;
    const input = userinput.replace(/\s/g, "");
    const user = input.length;
    console.log("Letters : " + user);
    const words = userinput.split(" ").length;
    console.log("Words : " + words);
    const again = await inquirer.prompt({
        type: "confirm",
        name: "again",
        message: "Did you want to count again ?"
    });
    retry = again.again;
}
