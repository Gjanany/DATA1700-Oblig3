package com.example.kinobilletter;

public class Billetter {

        private int id;
        private String film;
        private String quantity;
        private String firstname;
        private String surname;
        private String email;
        private String phonenr;


        public Billetter(int id, String film, String quantity, String firstname, String surname, String email, String phonenr) {
            this.id = id;
            this.film = film;
            this.quantity = quantity;
            this.firstname = firstname;
            this.surname= surname;
            this.email = email;
            this.phonenr= phonenr;
        }

        public Billetter(){
        }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFilm() {
        return film;
    }
    public void setFilm(String film) {
        this.film = film;
    }

    public String getQuantity() {
            return quantity;
        }

        public void setQuantity(String quantity) {
            this.quantity= quantity;
        }

        public String getFirstname() {
            return firstname;
        }

        public void setFirstname(String firstname) {
        this.firstname = firstname;
        }
        public String getSurname() {
            return surname;
        }
        public void setSurname(String surname) {
        this.surname = surname;
        }
        public String getEmail() {
            return email;
        }
        public void setEmail(String email) {
        this.email = email;
        }

        public String getPhonenr() {
        return phonenr;
        }
        public void setPhonenr(String phonenr) {
            this.phonenr= phonenr;
        }


    }

