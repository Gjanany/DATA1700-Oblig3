package com.example.kinobilletter;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RestController
public class BilletterController {


    @Autowired
    BilletterRepository rep;

    @PostMapping("/lagreBilletter")
    public void lagreBilletter(Billetter billetter){
       rep.lagreBilletter(billetter);
    }

    @GetMapping("/hentBilletter")
    public List<Billetter> hentBilletter(){
        return rep.hentBilletter();
    }

    @GetMapping("/slettBilletter")
    public void slettBilletter(){
        rep.slettBilletter();
    }
    @GetMapping("/slettEnBillett")
    public void slettEnBillett(int id){
        rep.slettEnBillett(id);
    }
}





