
let deuses = {
    "Luns":{
        "deuses":"Luns á Lúa",
        "descrición":"O luns estaba dedicado á deusa romana Luna, unha deidade primitiva que foi substituída posteriormente pola deusa Diana.",
    },
    "Martes":{
        "deuses":"Martes á Marte",
        "descrición":"O martes estaba dedicado a Marte, o deus da guerra.",
    },
    "Mércores":{
        "deuses":"Mércores á Mercurio",
        "descrición":"O mércores estaba dedicado ao deus romano Mercurio, o deus do comercio.",
    },
    "Xoves":{
        "deuses":"Xoves á Xúpiter",
        "descrición":"O xoves estaba dedicado a Xúpiter, o deus principal e supremo.",
    },
    "Venres":{
        "deuses":"Venres á Venus",
        "descrición":"O venres estaba dedicado á deusa Venus, a deusa do amor e do desexo.",
    },
    "Sábado":{
        "deuses":"Sábado á Saturno",
        "descrición":"O sábado dedicábase ao deus Saturno, aínda que o nome nos chega da cultura xudeo-cristiá onde significa 'día de repouso'.",
    },
    "Domingo":{
        "deuses":"Domingo á Apolo",
        "descrición":"O domingo dedicábase ao deus Apolo, o deus do sol e da sabedoría, motivo polo cal foi elixido polos cristiáns para establecer o Dominus dei ou día do Señor.",
    },

};

let deusesH3 = document.getElementById("deuses__h3");
let deusesP = document.getElementById("deuses__p");

function resultado(nomeBoton){
    switch (nomeBoton) {
        case "Luns":
            deusesH3.textContent = deuses.Luns.deuses;
            deusesP.textContent = deuses.Luns.descrición;
            break;
        case "Martes":
                deusesH3.textContent = deuses.Martes.deuses;
                deusesP.textContent = deuses.Martes.descrición;
            break;
        case "Mércores":
                deusesH3.textContent = deuses.Mércores.deuses;
                deusesP.textContent = deuses.Mércores.descrición;
        break;
        case "Xoves":
            deusesH3.textContent = deuses.Xoves.deuses;
            deusesP.textContent = deuses.Xoves.descrición;
        break;
        case "Venres":
            deusesH3.textContent = deuses.Venres.deuses;
            deusesP.textContent = deuses.Venres.descrición;
        break;
        case "Sábado":
            deusesH3.textContent = deuses.Sábado.deuses;
            deusesP.textContent = deuses.Sábado.descrición;
        break;
        case "Domingo":
            deusesH3.textContent = deuses.Domingo.deuses;
            deusesP.textContent = deuses.Domingo.descrición;
        break;
        default:
            console.log("Error")
            break;
    }
}