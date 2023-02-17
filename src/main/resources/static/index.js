
const billettArray = [];

let  ut = ""

function kjøpBillett(){

    let Film = document.getElementById("Film").value;

    if(Film == 'Velg film her'){
        return document.getElementById("check_selected").innerHTML = "Må velge en film"
    }

    let Antall = document.getElementById("Antall").value;
    let sjekkAntall = Number(Antall);
    if(isNaN(Antall)){
        return document.getElementById("sjekk_antall").innerHTML = "Må skrive et tall";
    }if(sjekkAntall == ''){
        return document.getElementById("sjekk_antall").innerHTML = "Må skrive noe i antall";
    }

    let Fornavn = document.getElementById("Fornavn").value;
    if(Fornavn == ''){
        return document.getElementById("sjekk_fornavn").innerHTML ="Må skrive noe i fornavn";
    }

    let Etternavn = document.getElementById("Etternavn").value;
    if(Etternavn == ''){
        return document.getElementById("sjekk_etternavn").innerHTML ="Må skrive noe i etternavn";
    }

    let Telefon = document.getElementById("Telefon").value;
    let sjekkTel = Number(Telefon)
    if(isNaN(sjekkTel)){
        return document.getElementById("sjekk_telefon").innerHTML ="Telefon nummer er ikke gyldig";
    }if(Telefon.length !== 8){
        return document.getElementById("sjekk_telefon").innerHTML ="Telefon nummeret må være 8 sifre";
    }if(sjekkTel == ''){
        return document.getElementById("sjekk_telefon").innerHTML ="Må skrive noe i telefonnr";
    }

    let Epost = document.getElementById("Epost").value;
    if(Epost == ''){
        return document.getElementById("sjekk_epost").innerHTML ="Må skrive noe i epost";
    }

    billettArray.push({Film:Film,
        Antall:Antall,
        Fornavn:Fornavn,
        Etternavn:Etternavn,
        Telefon:Telefon,
        Epost:Epost
    });

    ut += "<br/>Film : " + Film +
        "<br/>Antall billetter : " + sjekkAntall +
        "<br/>Fornavn : " + Fornavn +
        "<br/>Etternavn : " + Etternavn +
        "<br/> Tel : " + Telefon +
        "<br/>Epost : " + Epost + "<br/>";

    document.getElementById("resutat").innerHTML = ut + "<br/>";
    document.getElementById("billett_form").reset();

    // getElementById returnerer kun en verdi, og jeg har ikke funnet en metode som kan forkorte følgende koder
    document.getElementById("check_selected").innerHTML = "";
    document.getElementById("sjekk_antall").innerHTML = "";
    document.getElementById("sjekk_fornavn").innerHTML = "";
    document.getElementById("sjekk_etternavn").innerHTML = "";
    document.getElementById("sjekk_telefon").innerHTML = "";
    document.getElementById("sjekk_epost").innerHTML = "";
}

function clearHistory(){

    billettArray.length = 0;
    let slettBillett = document.querySelector('#resutat');
    slettBillett.remove();
    location.reload();


};
