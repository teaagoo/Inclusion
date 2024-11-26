package com.projeto.sistema.controller;

import com.projeto.sistema.model.Evento;
import com.projeto.sistema.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/evento")
public class EventoController {

    @Autowired
    private EventoService eventoService;

    @GetMapping("/criar")
    public String formCriarEvento() {
        return "criar-evento"; // Nome do arquivo HTML sem extensão
    }

    @PostMapping("/criar")
    public String criarEvento(@ModelAttribute Evento evento, Model model) {
        eventoService.cadastrarEvento(evento);
        model.addAttribute("mensagem", "Evento criado com sucesso!");
        return "sucesso"; // Redireciona para uma página de sucesso
    }
}
