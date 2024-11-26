package com.projeto.sistema.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.projeto.sistema.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

    // Método para encontrar por ID
    Usuario findById(long id); 

    // Método de login
    @Query(value = "SELECT * FROM banco_pcd.usuario WHERE email = :email AND senha = :senha", nativeQuery = true)
public Usuario login(String email, String senha);

}
