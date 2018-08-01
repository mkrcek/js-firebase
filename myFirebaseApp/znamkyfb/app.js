
// Z N A M K Y  v   D B

// DB: Firebase, create by Martin 1.8.2018
//
//demo pro Matěje k ukládání managementu známek
// - uloží známku do databáze
// - načte známky z db a vrátí je v 3D Array: znamka | vaha | ID
// - opraví konkrétní známku a váhu, podle jejího ID
// - smaze záznam z databáze. Nadobro. Napořád.
//
// Pokud není "DB" tabulka, tak se vytvoří - např. players


function ulozZnamku(rok, predmet, znamka, vaha) {
//uloží známku do databáze

    let cesta = rok + "/" + predmet;
    let znamkaRef = firebase.database().ref().child(cesta);

    znamkaRef.push ({
        znamka: znamka,
        vaha: vaha
    });
}

function nactiZnamky(rok, predmet) {
//načte známky z db a vrátí je v 3D Array: znamka | vaha | ID

    let cesta = rok + "/" + predmet;
    let znamkaRef = firebase.database().ref(cesta);
    let poleZnamek = [ [], [], [] ];

    znamkaRef.on('child_added', function (data, prevChildKey) {
       let newZnamka = data.val();
       poleZnamek[0].push(newZnamka.znamka);
       poleZnamek[1].push(newZnamka.vaha);
       poleZnamek[2].push(data.key)
    });

    return poleZnamek;
}

function opravZnamku(rok, predmet, id, novaZnamka, novaVaha) {
//opraví konkrétní známku a váhu, podle jejího ID

    let cesta = rok + "/" + predmet;
    let znamkaRef = firebase.database().ref().child(cesta).child(id);
    znamkaRef.update({
        "znamka":novaZnamka,
        "vaha":novaVaha
    });

}

function smazatZnamku(rok, predmet, id) {
//smaze záznam z databáze. Nadobro. Napořád.

    let cesta = rok + "/" + predmet;
    let znamkaRef = firebase.database().ref().child(cesta).child(id);
    znamkaRef.remove();

}

const ROK = '2018p2';
const PREDMET = 'cej';

// ulozZnamku(ROK, PREDMET, 3, 3);

let p = nactiZnamky(ROK, PREDMET);
console.log("ZNAMKY", p);
// opravZnamku(ROK, PREDMET,"-LImkh5OqaQc7lFgmNsl", 9,3 );

smazatZnamku(ROK, PREDMET, "-LIn0_iWXMsVuFekXLQB");


