

/*Inputvalidering*/
function checkValid({data, field}) {
    const field_LC = field.toLowerCase();
    const invalid = "#" + field_LC + "invalid"

    if (data === "") {
        $(invalid).html(field + " mangler.");
        return false;
    }
    if (data === ("--Velg " + field_LC + "--")) {
        $(invalid).html("Må velges " + field_LC + " ");
        return false;
    }

    $(invalid).html("");
    return true;

    /*Henter billetter*/
    function hentBilletter() {
        $.get("/hentAlle", function (films) {
            table(films);
        });

    }

    function table(films) {
        let ut = "<table class='table'><th><th>film</th><th>quantity</th><th>firstname</th><th>surname</th><th>email</th><th>phonenr</th>";
        for (const movie of films) {
            ut += "<tr><td>" + movie.film + "</td>" +
                "<td>" + movie.quantity + "</td>" +
                "<td>" + movie.firstname + "</td>" +
                "<td>" + movie.surname + "</td>" +
                "<td>" + movie.email + "</td>" +
                "<td>" + movie.phonenr + "<td>" +
                "<button class='delete' onclick='slettEnBillett(" + films.id + ")'>Slett billetten</button></td></tr>";
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
            $.post("/lagreBilletter", billetter, function () {
                hentBilletter();

            });
            $("#film").val("--velg en film");
            $("#quantity").val("");
            $("#firstname").val("");
            $("#surname").val("");
            $("#email").val("");
            $("#phonenr").val("");

        }
        console.log("film reg")
    }
}

    function slettEnBillett(id) {
        $.get("/SlettEnBillett", function () {
            slettEnBillett()
        });
    }

    function slettBilletter() {
        $.get("/slettBilletter", function () {
            slettBilletter();
        });
}


