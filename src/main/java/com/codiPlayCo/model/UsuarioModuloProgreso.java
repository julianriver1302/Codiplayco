package com.codiPlayCo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario_modulo_progreso")
public class UsuarioModuloProgreso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    // Número de módulo (1, 2, 3, 4...)
    private Integer modulo;

    // Máxima lección alcanzada dentro de ese módulo
    private Integer maxLeccion;

    public UsuarioModuloProgreso() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Integer getModulo() {
        return modulo;
    }

    public void setModulo(Integer modulo) {
        this.modulo = modulo;
    }

    public Integer getMaxLeccion() {
        return maxLeccion;
    }

    public void setMaxLeccion(Integer maxLeccion) {
        this.maxLeccion = maxLeccion;
    }
}
