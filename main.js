const readline = require("readline-sync");
const puppeteer = require('puppeteer');

async function robot(){
    console.log("Bem-vindo ao Robô conversor de moeda!")

    const coin1 = readline.question("Qual moeda deseja converter? ")
    const coin2 = readline.question(`Deseja converter ${coin1} em qual moeda? `)

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${coin1}+em+${coin2}`);
  

    const result = await page.evaluate(() => {return document.querySelector(".DFlfde.SwHCTb").innerHTML;});
    
    console.log(`A conversão de ${coin1} para ${coin2} é: ${result}`)

    await browser.close();
}

robot();
