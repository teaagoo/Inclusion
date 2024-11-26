package com.projeto.sistema.service;

import com.projeto.sistema.model.Evento;
import com.projeto.sistema.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    public Evento cadastrarEvento(Evento evento) {
        return eventoRepository.save(evento);
    }
}
