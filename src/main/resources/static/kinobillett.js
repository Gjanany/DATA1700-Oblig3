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


 */

function checkValid({data, felt}) {
    // A couple of variables to avoid repetition
    const felt_lc = felt.toLowerCase();
    const error = "#" + felt_lc + "-error"

    if (data === "") {
        $(error).html(felt + " må fylles.");
        return false;
    }
    if (data === ("--Velg " + felt_lc + "--")) {
        $(error).html("Må velge " + felt_lc + ".");
        return false;
    }

    $(error).html("");
    return true;

    /*Henter billetter*/
    function hentAlle() {
        $.get("/hentAlle", function (billetter) {
            formatData(billetter);
        });

    }

    function formatData(films) {
        let ut = "<table class='table table-striped'><th><th>film</th><th>quantity</th><th>firstname</th><th>surname</th><th>email</th><th>phonenr</th>";
        for (const movie of films) {
            ut += "<tr><td>" + movie.film + "</td>" +
                "<td>" + movie.quantity + "</td>" +
                "<td>" + movie.firstname + "</td>" +
                "<td>" + movie.surname + "</td>" +
                "<td>" + movie.email + "</td>" +
                "<td>" + movie.phonenr + "<td>" +
                "<button class='delete' onclick='slettEnBillett("+films.id+")'>Slett billetten</button></td></tr>";
        }
        ut += "</table>";
        $("#kjop").html(ut);
    }

    function kjopBillett() {
        console.log("button activated")
        const film = $("#film").val(), qt = $("#quantity").val(), fn = $("#firstname").val(), sn = $("#surname").val(),
            em = $("#email").val(), ph = $("#phonenr").val();

        let correct =
            checkValid({data: film, felt: "film"}) *
            checkValid({data: qt, felt: "quantity"}) *
            checkValid({data: fn, felt: "firstname"}) *
            checkValid({data: sn, felt: "surname"}) *
            checkValid({data: em, felt: "email"}) *
            checkValid({data: ph, felt: "phonenr"});

        if (correct) {
            const billetter = {
                film: film,
                quantity: qt,
                firstname: fn,
                surname: sn,
                email: em,
                phonenr: ph,

            };
            $.post("/lagre", billetter, function () {
                hentAlle();
                console.log("lagret billetter");
            });
            $("#film").val("-velg film");
            $("#quantity").val("");
            $("#firstname").val("");
            $("#surname").val("");
            $("#email").val("");
            $("#phonenr").val("");


        }
        console.log("film reg")
    }

    function slettEnBillett(id) {
        let url = "/slettEnBillett?id=" + id;
        $.get(url, function () {
            hentAlle();
        });
    }

    function slettBilletter() {
        $.get("/slettBilletter", function () {
            hentAlle();
        });
    }
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
