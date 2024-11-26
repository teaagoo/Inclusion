package com.projeto.sistema.controller;

import java.io.UnsupportedEncodingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.projeto.sistema.model.Usuario;
import com.projeto.sistema.repository.UsuarioRepository;
import com.projeto.sistema.service.CookieService;

import org.springframework.ui.Model; // Correção aqui

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Método para exibir a página de login
    @GetMapping("/login")
    public String login() {
        return "login"; // Retorna a view de login
    }

    // Método para exibir o dashboard após login
    @GetMapping("/")
    public String dashboard(Model model, HttpServletRequest request) throws UnsupportedEncodingException {
        // Adiciona o nome do usuário (vindo do cookie) ao modelo
        model.addAttribute("nome", CookieService.getCookie(request, "nomeUsuario"));
        return "index"; // Retorna a view de dashboard
    }

    // Método para realizar o login do usuário
    @PostMapping("/logar")
    public String loginUsuario(Usuario usuario, Model model, HttpServletResponse response) throws UnsupportedEncodingException {
        // Verifica se o usuário existe no banco
        Usuario usuarioLogado = this.usuarioRepository.login(usuario.getEmail(), usuario.getSenha());
        if (usuarioLogado != null) {
            // Se o login for bem-sucedido, define cookies para o usuário
            CookieService.setCookie(response, "usuarioId", String.valueOf(usuarioLogado.getId()), 10000);
            CookieService.setCookie(response, "nomeUsuario", String.valueOf(usuarioLogado.getNome()), 10000);

            return "redirect:/"; // Redireciona para o dashboard
        }

        model.addAttribute("erro", "Usuário inválido"); // Passa a mensagem de erro
        return "login"; // Retorna a página de login
    }

    // Método para exibir a página de cadastro de usuário
    @GetMapping("/cadastroUsuario")
    public String cadastro() {
        return "cadastro"; // Retorna a view de cadastro
    }

    // Método para cadastrar um novo usuário
    @RequestMapping(value = "/cadastroUsuario", method = RequestMethod.POST)
    public String cadastroUsuario(@Valid Usuario usuario, BindingResult result) {
        if (result.hasErrors()) {
            return "redirect:/cadastroUsuario"; // Se houver erros, redireciona para o cadastro
        }

        usuarioRepository.save(usuario); // Salva o novo usuário
        return "redirect:/login"; // Redireciona para a página de login
    }
}
