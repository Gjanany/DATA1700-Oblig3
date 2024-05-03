
function kjopBillett() {
    console.log("array activated");
    let billetter = {
    "film": document.getElementById("film").value,
    "quantity": document.getElementById("quantity").value,
    "firstname" : document.getElementById("firstname").value,
    "surname" : document.getElementById("surname").value,
    "phonenr" : document.getElementById("phonenr").value,
    "email": document.getElementById("email").value,
}
    $.post("/lagre", billetter, function (filmer) {
        console.log("sent to base");
        document.getElementById("film").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phonenr").value = "";
    }).fail(function (xhr, status, error) {
        console.error("error, could send not to base", error)
    });
}

function hentBilletter(){
    $.get("/hentAlleBilletter", function (filmer){
        console.log(filmer);
        let ut = "<table class='table table-striped'><tr><th>film</th><th>quantity</th><th>firstname</th><th>surname</th><th>email</th><th>phonenr</th></tr>";
        filmer.forEach(function (films){
            ut += "<tr><td>"+ films.film + "</td>" +
                "<td>" + films.quantity + "</td>" +
                "<td>" + films.firstname + "</td>" +
                "<td>" + films.surname + "</td>" +
                "<td>" + films.email + "</td>" +
                "<td>" + films.phonenr + "<td>" +
                "<button> onclick='updateBillett(" + films.id+ ")'Velg</button></td>" +
                "<td>"+"<button> onclick='slettEnBillett(" + films.id + ")'>Slett valgt</button></td></tr>";
        })
        ut +="</table>";
        document.getElementById("kjop").innerHTML = ut;
    })
}
function updateBillett(id){
    document.getElementById("tickets").innerHTML = id;
    $.get("/getBilletterFromDB?id=" + id , function (films){
        document.getElementById("editFilm").value = films.film;
        document.getElementById("editQuantity").value = films.quantity;
        document.getElementById("editFirstname").value = films.firstname;
        document.getElementById("editSurname").value = films.surname;
        document.getElementById("editEmail").value = films.email;
        document.getElementById("editPhonenr").value = films.phonenr;
    })
    console.log(id);
}

function updateTicket(){
   let billetter = {
        "id": document.getElementById("tickets").innerHTML,
       "film":document.getElementById("editFilm").value,
        "quantity":document.getElementById("editQuantity").value,
        "firstname":document.getElementById("editFirstname").value,
        "surname":document.getElementById("editSurname").value,
        "email":document.getElementById("editEmail").value,
        "phonenr":document.getElementById("editPhonenr").value,

    }
    console.log( document.getElementById("tickets").value);
    console.log(billett);
    $.post("/updateBilletter", billetter, function (movies){})
}
function slettEnBillett(id){
    $.get("/slettEnBillett", function (){
        hentBilletter();
    })
}
function slettBilletter() {
    $.get("/slettAlle", function () {
        hentBilletter();
    });
}
