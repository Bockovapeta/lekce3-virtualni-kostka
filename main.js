// tady je místo pro náš program
/*

let salary = 30000;
let personName = "Petra";

// plat je větší jak 40 tis. a zároven jméno je Petra, tak se provede následující
if (salary > 40000 && personName === "Petra") {
    console.log('pěkný plat !');
}

//nebo pokud:
else if (salary > 25000) {
    console.log("Ok");
}

//jinak
else {
    console.log("zažádej o zvýšení !");
}

// negace se píše pomocí vykřičníku a musím dát do závorek to, co chci znegovat

// a zároveň píšeme && (musí být pravda obě dvě tvrzení), nebo píšeme pomocí || (buď je pravda jedno nebo druhé) a negace se dává pomocí !

if (!(salary > 40000 && personName === "Petra")) {
    console.log('pěkný plat !');
}


*/



/*

// vygenerování náhodného čísla od 0 do 1
x = Math.random();

//vygenerování náhodného čísla od 0 do 6
x = Math.random() * 6;

//vygenerování náhodného čísla od 0 do 10
x = Math.random() * 10;

// zaokrouhlení nahoru je pomocí Math.round ()
// zakorouhlení vždy dolu je pomocí math.floor ()
// zaorkouhlení nahoru je pomocí math.ceil

*/

/* zaokrouhlení náhodného hodu na kostce směrem nahoru
Math.ceil(math.random() * 6);

hodkostky - když chceme, aby nám nevyšlo číslo 0*6, což je vždycyky 0, tak přičteme jedničku hned a dáme zaokrouhlení směrem dolů:
Math.floor(Math.random() * 6 + 1);
*/



function hodKostkou() {
    let cislo = Math.floor(Math.random() * 6 + 1);
    let kostka = document.querySelector('#kostka');
    let zprava = document.querySelector('#zprava');


    if (cislo === 6) {
        zprava.innerHTML = 'Padla ' + cislo + ', gratuluji, vyhrál/a jsi';
    }


    else {
        zprava.textContent = 'Padla ' + cislo + ', házej dál';
    }

    kostka.src = 'obrazky/' + cislo + '.png';
}
