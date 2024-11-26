 package com.projeto.sistema.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "inicial"; // Página inicial
    }

    @GetMapping("/cadastroUsuario")
    public String cadastrar() {
        return "cadastro"; // Página de cadastro
    }
}
