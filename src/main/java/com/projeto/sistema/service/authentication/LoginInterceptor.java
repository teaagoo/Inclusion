package com.projeto.sistema.service.authentication;

import java.io.IOException;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.projeto.sistema.service.CookieService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.lang.NonNull;  // Importando a anotação NonNull

@Component
public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull Object handler) throws IOException {
        // Verifica se o cookie "usuarioId" existe. Se não, redireciona para a página de login.
        if (CookieService.getCookie(request, "usuarioId") != null) {
            return true; // Permite o acesso à página solicitada
        }
        
        // Se não encontrar o cookie, redireciona para a página de login
        response.sendRedirect("/login"); // Redireciona para o login
        return false; // Bloqueia o acesso à página solicitada
    }
}
