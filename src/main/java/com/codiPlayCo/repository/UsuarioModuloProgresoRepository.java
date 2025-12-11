package com.codiPlayCo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codiPlayCo.model.UsuarioModuloProgreso;

@Repository
public interface UsuarioModuloProgresoRepository extends JpaRepository<UsuarioModuloProgreso, Integer> {

    Optional<UsuarioModuloProgreso> findByUsuarioIdAndModulo(Integer usuarioId, Integer modulo);

    List<UsuarioModuloProgreso> findByUsuarioId(Integer usuarioId);
}
