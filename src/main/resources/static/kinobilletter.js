
function kjopBillett() {
    console.log("array activated");
    let billetter = {
        "film": document.getElementById("film").value,
        "quantity": document.getElementById("quantity").value,
        "firstname": document.getElementById("firstname").value,
        "surname": document.getElementById("surname").value,
        "phonenr": document.getElementById("phonenr").value,
        "email": document.getElementById("email").value,
    }
    $.post("/lagreBilletter", billetter, function () {
        console.log("sent to base");
        document.getElementById("film").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phonenr").value = "";
    }).fail(function (error) {
        console.error("could send not to base", error)
    });
}

function hentBilletter(){
    $.get("/hentBilletter", function (filmer){
        console.log(filmer);
        let ut = "<table class='table table-striped'><tr><th>film</th><th>quantity</th><th>firstname</th><th>surname</th><th>email</th><th>phonenr</th></tr>";
        filmer.forEach(function (films){
            ut += "<tr><td>"+ films.film + "</td>" +
                "<td>" + films.quantity + "</td>" +
                "<td>" + films.firstname + "</td>" +
                "<td>" + films.surname + "</td>" +
                "<td>" + films.email + "</td>" +
                "<td>" + films.phonenr + "<td>";
        })
        ut +="</table>";
        document.getElementById("kjop").innerHTML = ut;
    })
}
function slettBilletter() {
    $.get("/slettBilletter", function () {
        hentBilletter();
    });
}
