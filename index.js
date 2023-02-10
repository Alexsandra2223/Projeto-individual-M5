import readlineSync from "readline-sync";
import chalk from "chalk";


const properties = [];
let input = "";

console.log(chalk.blue("PROGRAMA DE PROPRIEDADES CSS"))

while (input != "sair") {
  properties.push(input);
  input = readlineSync
    .question("Digite uma propriedade CSS: ")
    .toLocaleLowerCase();
}
console.log(chalk.magentaBright.underline(properties.sort().join("\n")));