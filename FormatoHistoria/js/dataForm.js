//Eps
let eps = {
    "0" : "Selecciona una por favor",
    "1" : "COOSALUD EPS-S",
    "2" : "NUEVA EPS",
    "3" : "MUTUAL SER",
    "4" : "ALIANSALUD EPS",
    "5" : "SALUD TOTAL EPS S.A",
    "6" : "EPS SANITAS",
    "7" : "EPS SURA",
    "8" : "FAMISANAR ",
    "9" : "SERVICIO OCCIDENTAL DE SALUD EPS SOS",
    "10" : "SALUD MIA",
    "11" : "COMFENALCO VALLE ",
    "12" : "COMPENSAR EPS ",
    "13" : "EPM - EMPRESAS PUBLICAS DE MEDELLIN",
    "14" : "FONDO DE PASIVO SOCIAL DE FERROCARRILES NACIONALES DE COLOMBIA",
    "15" : "CAJACOPI ATLANTICO",
    "16" : "CAPRESOCA",
    "17" : "COMFACHOCO",
    "18" : "COMFAMILIAR DE LA GUAJIRA",
    "19" : "COMFAORIENTE",
    "20" : "EPS FAMILIAR DE COLOMBIA (Antes ComfaSucre) ",
    "21" : "ASMET SALUD ",
    "22" : "ECOOPSOS ESS EPS-S ",
    "23" : "EMSSANAR E.S.S.",
    "24" : "CAPITAL SALUD EPS-S",
    "25" : "SAVIA SALUD EPS",
    "26" : "DUSAKAWI EPSI ",
    "27" : "ASOCIACION INDIGENA DEL CAUCA EPSI ",
    "28" : "ANAS WAYUU EPSI ",
    "29" : "MALLAMAS EPSI",
    "30" : "PIJAOS SALUD EPSI",
}
html = "";
for(var key in eps) {
    html += "<option value" + eps[key] + ">" + eps[key] + "</option>"
}

document.getElementById("eps").innerHTML = html;