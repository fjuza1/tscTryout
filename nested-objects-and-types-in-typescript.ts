{
interface Adresa {
    Ulica:string,
    Cislo:number,
    Mesto:string,
    PSC:string,
    Stat:string
}
interface PravnickaOsoba {
    Meno:string,
    Priezvisko:string,
    DatumNarodenia: Date,
    CisloObcanskehoPreukazu: string,
    RodneCislo:string,
    Narodnost: string,
    Adresa: Adresa
    //Adresa?: Adresa
}

let pracovnik1: PravnickaOsoba = {
    Meno: "Jana",
    Priezvisko: "Novakova",
    DatumNarodenia: new Date("1998-05-15"),
    CisloObcanskehoPreukazu: "123456789",
    RodneCislo: "123456/7890",
    Narodnost: "Slovenska",
    Adresa: {
        Ulica: "Hlavna",
        Cislo: 10,
        Mesto: "Bratislava",
        PSC: "81101",
        Stat: "Slovensko"
    }
};
console.log(pracovnik1);
pracovnik1 = {
    ...pracovnik1,
    Adresa: {
        ...pracovnik1.Adresa,
        PSC: "81102" // Update the PSC field
    }
}
console.log(pracovnik1)
}