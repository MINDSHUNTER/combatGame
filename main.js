

const prompt = require("prompt-sync")();
console.log("                        🤜🤛 ⚔️ 🎮  Welcome to Street Fighter Battle ! 🎮 ⚔️🤜🤛");

let player1 = "HONDA";
let player1Pv = 50;

let player2 = "BLANKA";
let player2Pv = 50;


let attacks = [
    { name: "Frappe Rapide💢", power: 10, accuracy: 50 },
    { name: "Soin Léger 💢💢", power: -15, accuracy: 33.33 },
    { name: "Coup Puissant💢💢💢", power: 20, accuracy: 33.33 },
    { name: "Frappe Dévastatrice💢💢💢💢", power: 30, accuracy: 25 }
];

while (player1Pv > 0 && player2Pv > 0) {
    console.log("\n" + player1 + " (PV: " + player1Pv + ") vs. " + player2 + " (PV: " + player2Pv + ")\n");


    console.log("Choisissez votre attaque:");

    attacks.forEach((attack, i) => {
        console.log(i + 1 + ". " + attack.name + " - " + attack.power + " PV, Précision: " + attack.accuracy + "%");

    });



    let player1Choice = prompt("Votre choix: ");
    player1Choice = parseInt(player1Choice);


    while (player1Choice < 1 || player1Choice > attacks.length) {
        console.log("Choix invalide");
        console.log("Choisissez votre attaque:");

        attacks.forEach((attack, i) => {
            console.log(i + 1 + ". " + attack.name + " - " + attack.power + " PV, Précision: " + attack.accuracy + "%");
        });
        player1Choice = prompt("Votre choix: ");
        player1Choice = parseInt(player1Choice);
    }


    let player1Attack = attacks[player1Choice - 1];


    let player2Choice = Math.floor(Math.random() * attacks.length);

    let player2Attack = attacks[player2Choice];


    let player1coupChance = Math.random() * 100;
    let player2coupChance = Math.random() * 100;


    if (player1coupChance <= player1Attack.accuracy) {
        let damage = player1Attack.power;
        player2Pv -= damage;
        console.log(player1 + " utilise " + player1Attack.name + " et inflige " + damage + " points de dégâts à " + player2 + "💥💥💥.💥💥💥");
    } else {
        console.log(player1 + " utilise " + player1Attack.name + " mais rate l'attaque.");
    }


    if (player2Pv <= 0)
        break;



    if (player2coupChance <= player2Attack.accuracy) {
        let damage = player2Attack.power;
        player1Pv -= damage;
        console.log(player2 + " utilise " + player2Attack.name + " et inflige " + damage + " points de dégâts à " + player1 + "💥💥💥.");
    } else {
        console.log(player2 + " utilise " + player2Attack.name + " mais rate l'attaque.");

    }
}



if (player1Pv <= 0) {
    console.log(player2 + " 🏆🎉 remporte le combat ! 🏆🎉");
} else {
    console.log(player1 + " 🏆🎉 remporte le combat ! 🏆🎉");
}

