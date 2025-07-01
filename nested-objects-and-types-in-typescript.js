var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var pracovnik1 = {
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
    pracovnik1 = __assign(__assign({}, pracovnik1), { Adresa: __assign(__assign({}, pracovnik1.Adresa), { PSC: "81102" // Update the PSC field
         }) });
    console.log(pracovnik1);
}
