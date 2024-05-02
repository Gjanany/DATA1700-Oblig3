package com.example.kinobilletter;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RestController
public class BilletterController {


    @Autowired
    BilletterController billetterController;

    @PostMapping("/lagreBilletter")
    public void lagreBilletter(Billetter billetter){
       billetterController.lagreBilletter(billetter);
    }

    @GetMapping("/hentBilletter")
    public List<Billetter> hentBilletter(){
        return billetterController.hentBilletter();
    }
    @GetMapping("/hentEnBillett")
    public List<Billetter> hentEnBillett(){
        return billetterController.hentEnBillett();
    }

    @GetMapping("/slettBilletter")
    public void slettBilletter(){
        billetterController.slettBilletter();
    }
    @GetMapping("/slettEnBillett")
    public void slettEnBillett(int id){
        billetterController.slettEnBillett(id);
    }
}





