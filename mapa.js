var miMapa = L.map('mapa').setView([-31.7419547, -60.5181459], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Las Palmas FC. Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.dark',
    accessToken: '*****************************************'
}).addTo(miMapa);
 

function httpGetAsync(theUrl, callback, err)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4){
            if (xmlHttp.status == 200)
                callback(xmlHttp.responseText);
            else
                err(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
};

var estiloPopup = {'maxWidth': '700', 'width':"560"}

var iconoBase = L.Icon.extend({
    options: {
        iconSize:     [32, 32],
        iconAnchor:   [16, 16],
        popupAnchor:  [0, 0],
        
    }
});

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {
  estiloPopup = {'maxWidth': '600'}
  var iconoBase = L.Icon.extend({
    options: {
        iconSize:     [32, 32],
        iconAnchor:   [16, 16],
        popupAnchor:  [0, 0]
    }
});
}

var icono = new iconoBase({iconUrl: 'images/LasPalmas3.png'});

function add_marker(diccionario){
    var pos = diccionario["coordenadas"]
    var nombre = diccionario["nombre"]
    var img = diccionario["icono"]
    var telefono = diccionario["telefono"]
    var instagram = diccionario["instagram"]

    alpha = 1
    var data = ""
    data += "<h1>"+nombre+"</h2>"
    if (telefono != ""){
        data += "<p> Tel: "
        data += "<a href=\"tel:+549"+telefono+"\" target=\"_blank\">"+telefono+"</a>"
        data += "</p>"
    }
    if (instagram != ""){
        data += "<p class=\"text\"> Instagram: "
        data += "<a href=\"https://www.instagram.com/"+instagram+"/\" target=\"_blank\">@"+instagram+"</a>"
        data += "</p>"
    }
    
    m = L.marker(pos, {icon: icono, opacity: alpha}).bindPopup(data,estiloPopup).addTo(miMapa);
}

dic = {
    "marcadores": [
        {
            "coordenadas" : [-31.729002, -60.524341],
            "nombre": "Marcos Cecotti",
            "telefono": "3435356550",
            "instagram": "marcosjcecotti"
        },
        {
            "coordenadas" : [-31.7545882,-60.5175926],
            "nombre": "Santiago Romero",
            "telefono": "3434635759",
            "instagram": "sromerow"
        },
        {
            "coordenadas" : [-31.7185569, -60.5111033],
            "nombre": "Federico Muller",
            "telefono": "3434043310",
            "instagram": "pelamuller.3"
        },
        {
            "coordenadas" : [-31.7427343, -60.5042458],
            "nombre": "Gabriel Rabuffetti",
            "telefono": "3434195221",
            "instagram": "gabirabuffetti"
        },
        {
            "coordenadas" : [-31.7395625,-60.5097057],
            "nombre": "Genaro Pezoa",
            "telefono": "3434697193",
            "instagram": "gena_pezoa"
        },
        {
            "coordenadas" : [-31.73454105, -60.51245928],
            "nombre": "Nacho Osorio",
            "telefono": "3434066510",
            "instagram": "osorionacho7"
        },
        {
            "coordenadas" : [-31.7345374,-60.51249361],
            "nombre": "Joaquin Osorio",
            "telefono": "3436219698",
            "instagram": "joacoosorio3"
        },
        {
            "coordenadas" : [-31.73454013, -60.51239705],
            "nombre": "Matias Osorio",
            "telefono": "3436229751",
            "instagram": "matiasosorio_10"
        },
        {
            "coordenadas" : [-31.6523049,-60.7194467],
            "nombre": "Santiago Pollian",
            "telefono": "3447505689",
            "instagram": "santipollian"
        },
        {
            "coordenadas" : [-31.7444238,-60.5475449],
            "nombre": "Quimey Bello",
            "telefono": "3434655105",
            "instagram": "quimeybello"
        },
        {
            "coordenadas" : [-31.7354211, -60.4994542],
            "nombre": "Joaquin Villanueva",
            "telefono": "3434672402",
            "instagram": "joacovillanuev5"
        },
        {
            "coordenadas" : [-31.7347261,-60.5193121],
            "nombre": "Lautaro Cecotti",
            "telefono": "3434666858",
            "instagram": "lautarocecotti"
        },
        {
            "coordenadas" : [-31.7459255, -60.4897638],
            "nombre": "Gonzalo Ledesma",
            "telefono": "3435029761",
            "instagram": "gledesma_"
        },
        {
            "coordenadas" : [-31.737687, -60.4951967],
            "nombre": "Bruno Rizzi",
            "telefono": "3434580656",
            "instagram": "pequerizzi"
        },
        {
            "coordenadas" : [-31.7649551,-60.5337918],
            "nombre": "Juan Grubert",
            "telefono": "3434471142",
            "instagram": "juanigrubert"
        },
        {
            "coordenadas" : [-31.7511896, -60.5314155],
            "nombre": "Tomas Londero",
            "telefono": "3434467856",
            "instagram": "totolondero"
        },
        {
            "coordenadas" : [-31.7671315, -60.5326339],
            "nombre": "Facundo Lopez",
            "telefono": "3435148862",
            "instagram": "faculopez8"
        },
        {
            "coordenadas" : [-31.7239323, -60.5168939],
            "nombre": "Francisco Fernández",
            "telefono": "3435352103",
            "instagram": "franfernandez78"
        },
        {
            "coordenadas" : [-31.7265626, -60.5158348],
            "nombre": "Nahuel Petraglia",
            "telefono": "3435076847",
            "instagram": "nahuelpetraglia"
        },
        {
            "coordenadas" : [-31.7777852, -60.5220787],
            "nombre": "Santiago Tersich",
            "telefono": "3435346999",
            "instagram": "santitersich"
        },
        {
            "coordenadas" : [-31.7351689, -60.5305864],
            "nombre": "Kaos Showroom",
            "telefono": "",
            "instagram": "kaosshowroom"
        },
        {
            "coordenadas" : [-31.746603, -60.507998],
            "nombre": "Pablo Albano",
            "telefono": "3434558518",
            "instagram": "pabloalbanoo"
        },
        {
            "coordenadas" : [-31.755843, -60.521310],
            "nombre": "Lucas Ruffino",
            "telefono": "3435012776",
            "instagram": "ruffinolucas"
        },
        {
            "coordenadas" : [-31.722218, -60.538206],
            "nombre": "Nico Ayala",
            "telefono": "3435213242",
            "instagram": "nicoa7112"
        },
        {
            "coordenadas" : [-31.731439, -60.534551],
            "nombre": "Santi Molina",
            "telefono": "3435227783",
            "instagram": "santimolina10"
        },
        {
            "coordenadas" : [-31.734713, -60.540110],
            "nombre": "Juani Mitre",
            "telefono": "3434053168",
            "instagram": "juanimitre9"
        },
                {
            "coordenadas" : [-31.731671, -60.492605],
            "nombre": "Lucas Marquesin",
            "telefono": "3435023584",
            "instagram": "lucasmarquesin"
        },
        {
            "coordenadas" : [-31.730053, -60.526296],
            "nombre": "Loli Suárez",
            "telefono": "3434677028",
            "instagram": "lolisuarez3"
        },
        {
            "coordenadas" : [-31.770147, -60.525086],
            "nombre": "Florencia Castellani",
            "telefono": "3434504840",
            "instagram": "florcastellani06"
        },
        {
            "coordenadas" : [-31.730276, -60.537538],
            "nombre": "Ani Panozzo",
            "telefono": "3435029314",
            "instagram": "anipanozzo"  
        },
        {
            "coordenadas" : [-31.728791, -60.522855],
            "nombre": "Florencia Caprile",
            "telefono": "3434595203",
            "instagram": "florcaprile_"  
        },
        {
            "coordenadas" : [-31.737924, -60.523580],
            "nombre": "Micaela Zanardi",
            "telefono": "3434163474",
            "instagram": "micazanardi"  
        },
        {
            "coordenadas" : [-31.743389, -60.528946],
            "nombre": "Pilar De Zan",
            "telefono": "3434672499",
            "instagram": "pilar.dezan"  
        },
        {
            "coordenadas" : [-31.738624, -60.488144],
            "nombre": "Lucía Tovane",
            "telefono": "3435334004",
            "instagram": "luciatovane7"  
        },
        {
            "coordenadas" : [-31.733543, -60.518900],
            "nombre": "Emilia Maslein",
            "telefono": "3434615977",
            "instagram": "emimaslein"  
        },
        {
            "coordenadas" : [-31.732659, -60.532155],
            "nombre": "Felicitas Aguilar",
            "telefono": "3435009904",
            "instagram": "feliaguilarf"  
        },
        {
            "coordenadas" : [-31.740536, -60.530698],
            "nombre": "Rosario Candioti",
            "telefono": "3434710309",
            "instagram": "rochucandioti"  
        },
        {
            "coordenadas" : [-31.725850, -60.490069],
            "nombre": "Valentina Vincent",
            "telefono": "3434763835",
            "instagram": "valevincentt"  
        },
        {
            "coordenadas" : [-31.743423, -60.525685],
            "nombre": "Valen Massoni",
            "telefono": "3434471360",
            "instagram": "valenmassoni"  
        },
        {
            "coordenadas" : [-31.722496, -60.539206],
            "nombre": "Gisele Capdevila",
            "telefono": "3434676599",
            "instagram": "giselecapdevila"  
        },
        {
            "coordenadas" : [-31.734600, -60.494867],
            "nombre": "Josefina Burgos",
            "telefono": "3434616126",
            "instagram": "josefinaburgos_"  
        }
    ]
}

function callSucces(response)
{
    data = {}
    var obj = JSON.parse(response)
    ranges = obj["valueRanges"]
    rangeNames = ranges[0]["values"]
    rangeValues = ranges[1]["values"]

    var i;
    for (i = 0; i < rangeNames.length; i++) { 
    name = rangeNames[i][0] + " " + rangeNames[i][1];
    name = name.toUpperCase() 
    value = rangeValues[i]

    data[name] = value
    }
    add_markers_all(data)
}

function callErr(response)
{
    add_markers_all({})
}

var url = "https://sheets.googleapis.com/v4/spreadsheets/1wtQXaQKYulhHDrhislgABsLptjmd-_aXC_AOaEjcxh4/values:batchGet?ranges=B4%3AC41&ranges=I4%3AI41&key=AIzaSyCJO88iNMtyJ8J6XKRYIl2X8uh6JwO2S0s";

httpGetAsync(url, callSucces, callErr)

function add_markers_all(sheet_data = {})
{
    var i;
    for (i = 0; i < dic["marcadores"].length; i++) {

        nombre = dic["marcadores"][i]["nombre"]
        nombre = nombre.toUpperCase()
        add_marker(dic["marcadores"][i])
        
    };
}
