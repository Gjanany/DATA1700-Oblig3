package com.example.kinobilletter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


import java.util.List;


@SuppressWarnings("ALL")
@Repository
public class BilletterRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBilletter(Billetter billetter){
        String sql= "insert into Billetter (id, film, antall, fornavn, etternavn, epost, tlfnr) VALUES (?,?,?,?,?)";
        db.update(sql,billetter.getId(), billetter.getFilm(), billetter.getAntall(),billetter.getFornavn(),
                billetter.getEtternavn(),billetter.getEpost(),billetter.getTelefonnr());
    }

    public List<Billetter> hentBilletter(){
        String sql = "select * from Billetter order by etternavn";
        List<Billetter> allTickets = db.query(sql,new BeanPropertyRowMapper(Billetter.class));
        return allTickets;
    }

    public void slettBilletter(){
        String sql = "delete from Billetter";
        db.update(sql);
    }



}
