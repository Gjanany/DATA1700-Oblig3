package com.example.kinobilletter;

public class Billetter {

        private int id;
        private String antall;
        private String fornavn;
        private String etternavn;
        private String epost;
        private String telefonnr;


        public Billetter(int id, String film, String antall, String fornavn, String etternavn, String epost, String telefonnr) {
            this.id = id;
            this.antall = antall;
            this.fornavn = fornavn;
            this.etternavn = etternavn;
            this.epost = epost;
            this.telefonnr = telefonnr;
        }

        public Billetter() {
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getAntall() {
            return antall;
        }

        public void setAntall(String antall) {
            this.antall= antall;
        }

        public String getFornavn() {
            return fornavn;
        }

        public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
        }
        public String getEtternavn() {
            return etternavn;
        }
        public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
        }
        public String getEpost() {
            return epost;
        }
        public void setEpost(String epost) {
        this.epost = epost;
        }

        public String getTelefonnr() {
        return telefonnr;
        }
        public void setTelefonnr(String telefonnr) {
            this.telefonnr= telefonnr;
        }


    }

