/*
let kinoArray = [];

function addToArray() {

    console.log("array activated");
    const Film = document.getElementById("film").value;
    const Antall = document.getElementById("quantity").value;
    const Fornavn = document.getElementById("firstname").value;
    const Etternavn = document.getElementById("surname").value;
    const Telefonnr = document.getElementById("phonenr").value;
    const Epost = document.getElementById("email").value;


    kinoArray.push({
        FilmKey: Film, AntallKey: Antall, FornavnKey: Fornavn, EtternavnKey:
        Etternavn, EpostKey: Epost, TelefonnrKey: Telefonnr
    });
    console.log(kinoArray);
    populateHTML(kinoArray);
}
function populateHTML(kinoArray) {
    console.log("kino")
    let html = "<ol>";
    console.log(kinoArray)
    for (let i in kinoArray) {
        console.log(kinoArray[i].FornavnKey);
        html += "<li>" + kinoArray[i].FilmKey + " " + kinoArray[i].AntallKey + " " + kinoArray[i].FornavnKey
            + " " + kinoArray[i].EtternavnKey + " " + kinoArray[i].EpostKey + " " + kinoArray[i].TelefonnrKey + "</li>";

    }
    html += "</ol>"
    document.getElementById("result").innerHTML = html;
    console.log(html);

}
 */
$ (function(){
    hentBilletter();
});

function hentBilletter(){
    $.get("/hentBilletter", function (dataer){
        formaterData(dataer)
    });
}
function formaterData(billettdata){
    let ut = "<select id = 'film'>"+ "<option value=''>Velg film</option>";
    ut += "<tr><th>Antall</th><th>Fornavn</th><th>Etternavn</th>" +
        "<th>Epost</th><th>Telefonnummer</th></tr>";
    for (const billetter of billettdata){
        ut+= "<tr><td>"+ billetter.antall + "</td><td>" + billetter.fornavn +"</td><td>" +
            billetter.etternavn + "</td><td>"+ billetter.epost +
            "</td><td>"+billetter.telefonnr + "</td></tr>"
    }
    ut += "</table>";
    $("#tickettable").html(ut);
}

function deleteAll(){
    $.get("/slettBilletter", function(){
        hentBilletter()
    });
}
/*
    function deleteArray() {
        kinoArray = [];
        populateHTML(kinoArray);
    }

    function validateQuantity(quantity) {
        const regexp = /^[0-9]{1,2}$/;
        const valid = regexp.test(quantity);
        if (!valid) {
            $("#errorQuantity").html("skriv inn et tall mellom 1 og 100")
            return false;
        } else {
            $("#errorQuantity").html("");
            return true;
        }
    }

    function validateFirstname(firstname) {
        const regexp = /^[a-zA-ZæøåÆØÅ. \-]{1,30}$/;
        const valid = regexp.test(firstname);
        if (!valid) {
            $("#errorFirstname").html("navn er påkrevd")
            return false;
        } else {
            $("#errorFirstname").html("");
            return true;
        }
    }

    function validateSurname(surname) {
        const regexp = /^[a-zA-ZæøåÆØÅ. \-]{1,30}$/;
        const valid = regexp.test(surname);
        if (!valid) {
            $("#errorSurname").html("etternavn er påkrevd")
            return false;
        } else {
            $("#errorSurname").html("");
            return true;
        }
    }

    function validateEmail(email) {
        const regexp = /^[a-zA-Z0-9-_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,50}$/;
        const valid = regexp.test(email);
        if (!valid) {
            $("#errorEmail").html("e-post adresse med @ er påkrevd")
            return false;
        } else {
            $("#errorEmail").html("");
            return true;
        }
    }

    function validatePhonenr(phonenr) {
        const regexp = /^[0-9]{8}$/;
        const valid = regexp.test(phonenr);
        if (!valid) {
            $("#errorPhonenr").html("tlfnr med 8 sifre er påkrevd")
            return false;
        } else {
            $("#errorPhonenr").html("");
            return true;
        }
}
 */
