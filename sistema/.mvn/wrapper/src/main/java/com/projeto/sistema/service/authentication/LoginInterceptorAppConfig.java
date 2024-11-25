package com.projeto.sistema.service.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.lang.NonNull; // Importe a anotação NonNull

@Configuration
public class LoginInterceptorAppConfig implements WebMvcConfigurer {

    @Autowired
    private LoginInterceptor loginInterceptor;

    @Override
    public void addInterceptors(@NonNull InterceptorRegistry registry) {
        // Com a anotação @NonNull, garantimos que 'registry' não seja nulo
        registry.addInterceptor(loginInterceptor)
                .excludePathPatterns( // Exclui as URLs que não precisam de verificação de login
                        "/login",
                        "/logar",
                        "/error",
                        "/cadastroUsuario"
                );
    }
}
