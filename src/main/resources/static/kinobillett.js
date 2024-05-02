
function checkValid({data, field}) {
    const field_LC = field.toLowerCase();
    const error = "#" + field_LC + "-error"

    if (data === "") {
        $(error).html(field + " må fylles.");
        return false;
    }
    if (data === ("--Velg " + field_LC + "--")) {
        $(error).html("Må velges " + field_LC + ".");
        return false;
    }

    $(error).html("");
    return true;

    /*Henter billetter*/
    function hentBilletter() {
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
                hentBilletter();
                console.log("lagre billetter");
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
            hentBilletter();
        });
    }

    function slettBilletter() {
        $.get("/slettBilletter", function () {
            hentBilletter();
        });
    }
}


