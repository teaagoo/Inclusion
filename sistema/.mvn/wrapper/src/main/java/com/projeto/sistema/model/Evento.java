package com.projeto.sistema.model;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String local;
    private String detalhes;  // Novo atributo
    private String ingresso;  // Novo atributo
    private String tipoDeEvento;  // Novo atributo

    @Temporal(TemporalType.TIMESTAMP)
    private Date data;

    @ManyToMany
    @JoinTable(
        name = "evento_usuario",
        joinColumns = @JoinColumn(name = "evento_id"),
        inverseJoinColumns = @JoinColumn(name = "usuario_id")
    )
    private List<Usuario> listClientes;

    // Construtores, getters e setters
    public Evento() {}

    public Evento(String nome, String local, Date data, List<Usuario> listClientes, String detalhes, String ingresso, String tipoDeEvento) {
        this.nome = nome;
        this.local = local;
        this.data = data;
        this.listClientes = listClientes;
        this.detalhes = detalhes;
        this.ingresso = ingresso;
        this.tipoDeEvento = tipoDeEvento;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public List<Usuario> getListClientes() {
        return listClientes;
    }

    public void setListClientes(List<Usuario> listClientes) {
        this.listClientes = listClientes;
    }

    public String getDetalhes() {
        return detalhes;
    }

    public void setDetalhes(String detalhes) {
        this.detalhes = detalhes;
    }

    public String getIngresso() {
        return ingresso;
    }

    public void setIngresso(String ingresso) {
        this.ingresso = ingresso;
    }

    public String getTipoDeEvento() {
        return tipoDeEvento;
    }

    public void setTipoDeEvento(String tipoDeEvento) {
        this.tipoDeEvento = tipoDeEvento;
    }
}
