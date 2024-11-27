package com.projeto.sistema.service;

import com.projeto.sistema.model.Evento;
import com.projeto.sistema.model.Usuario;
import com.projeto.sistema.repository.EventoRepository;
import com.projeto.sistema.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Evento cadastrarEvento(Evento evento, Long usuarioId) {
        // Buscar o usuário pelo ID
        Usuario usuario = usuarioRepository.findById(usuarioId)
                          .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        // Associar o evento ao usuário criador
        evento.getListClientes().add(usuario);

        // Salvar o evento
        return eventoRepository.save(evento);
    }
}
