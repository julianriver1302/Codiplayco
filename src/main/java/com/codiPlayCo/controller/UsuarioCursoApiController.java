package com.codiPlayCo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codiPlayCo.model.Curso;
import com.codiPlayCo.model.Usuario;
import com.codiPlayCo.service.ICursoService;
import com.codiPlayCo.service.IUsuarioService;

/**
 * API REST sencilla para consultar usuarios y cursos en formato JSON.
 *
 * No modifica la lógica existente, solo expone datos para pruebas con Postman.
 */
@RestController
@RequestMapping("/api")
public class UsuarioCursoApiController {

    @Autowired
    private IUsuarioService usuarioService;

    @Autowired
    private ICursoService cursoService;

    // ---------- USUARIOS ----------

    /**
     * GET /api/usuarios
     * Lista todos los usuarios (datos básicos) en JSON.
     */
    @GetMapping("/usuarios")
    public List<Map<String, Object>> getUsuarios() {
        List<Usuario> usuarios = usuarioService.findAll();
        return usuarios.stream()
                .map(this::mapUsuarioBasico)
                .collect(Collectors.toList());
    }

    /**
     * GET /api/usuarios/{id}
     * Detalle básico de un usuario por id.
     */
    @GetMapping("/usuarios/{id}")
    public ResponseEntity<Map<String, Object>> getUsuarioById(@PathVariable Integer id) {
        Optional<Usuario> opt = usuarioService.findById(id);
        if (opt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(mapUsuarioBasico(opt.get()));
    }

    /**
     * GET /api/usuarios/{id}/cursos
     * Cursos comprados por un usuario (si la relación está cargada en BD).
     */
    @GetMapping("/usuarios/{id}/cursos")
    public ResponseEntity<List<Map<String, Object>>> getCursosDeUsuario(@PathVariable Integer id) {
        // Usamos el servicio que ya tienes preparado para evitar problemas de carga perezosa
        List<Curso> cursos = cursoService.findCursosCompradosByUsuarioId(id);
        List<Map<String, Object>> body = cursos.stream()
                .map(this::mapCursoBasico)
                .collect(Collectors.toList());
        return ResponseEntity.ok(body);
    }

    // ---------- CURSOS ----------

    /**
     * GET /api/cursos
     * Lista todos los cursos.
     */
    @GetMapping("/cursos")
    public List<Map<String, Object>> getCursos() {
        return cursoService.findAll().stream()
                .map(this::mapCursoBasico)
                .collect(Collectors.toList());
    }

    /**
     * GET /api/cursos/{id}
     * Detalle de un curso por id.
     */
    @GetMapping("/cursos/{id}")
    public ResponseEntity<Map<String, Object>> getCursoById(@PathVariable Integer id) {
        Optional<Curso> opt = cursoService.findById(id);
        if (opt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(mapCursoBasico(opt.get()));
    }

    // ---------- MAPEOS BÁSICOS (evita ciclos de JSON) ----------

    private Map<String, Object> mapUsuarioBasico(Usuario u) {
        Map<String, Object> m = new HashMap<>();
        m.put("id", u.getId());
        m.put("nombre", u.getNombre());
        m.put("apellido", u.getApellido());
        m.put("email", u.getEmail());
        if (u.getRol() != null) {
            m.put("rol", u.getRol().getNombre());
        }
        return m;
    }

    private Map<String, Object> mapCursoBasico(Curso c) {
        Map<String, Object> m = new HashMap<>();
        m.put("id", c.getId());
        m.put("curso", c.getCurso());
        m.put("estado", c.getEstado());
        m.put("descripcion", c.getDescripcion());
        m.put("dificultad", c.getDificultad());
        m.put("dirigido", c.getDirigido());
        m.put("precio", c.getPrecio());
        return m;
    }
}
