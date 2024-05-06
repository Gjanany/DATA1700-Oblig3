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
        String sql= "insert into Billetter (film, quantity, firstname, surname, email, phonenr) VALUES (?,?,?,?,?,?)";
        db.update(sql, billetter.getFilm(), billetter.getQuantity(),billetter.getFirstname(),
                billetter.getSurname(),billetter.getEmail(),billetter.getPhonenr());
    }

    public List<Billetter> hentBilletter(){
        String sql = "select * from Billetter order by surname";
        List<Billetter> allTickets = db.query(sql,new BeanPropertyRowMapper(Billetter.class));
        return allTickets;
    }


    public void slettBilletter(){
        String sql = "delete from Billetter";
        db.update(sql);
    }

    public void slettEnBillett(int id){
        String sql = "delete from Billetter where id= ?";
    }



}
