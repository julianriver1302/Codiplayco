package com.codiPlayCo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/CursoTrilogia1")
public class CursoTrilogia1Controller {

	@GetMapping("/")
	public String index() {
		return "CursoTrilogia1/index";
	}

	@GetMapping("/index")
	public String cursoIndex() {
		return "/CursoTrilogia1/index";
	}

	@GetMapping("/internet")
	public String internet() {
		return "/CursoTrilogia1/internet";
	}

	@GetMapping("/paginas-web")
	public String paginasWeb() {

		return "/CursoTrilogia1/paginas-web";
	}

	@GetMapping("/pagina")
	public String pagina() {
		return "/CursoTrilogia1/pagina";
	}

	@GetMapping("/home")
	public String home() {
		return "redirect:/CursoTrilogia1/";
	}

	@GetMapping("/modulo1/leccion2")
	public String modulo1Leccion2() {
		return "CursoTrilogia1/modulo1/leccion2";
	}

	@GetMapping("/modulo1/leccion3")
	public String modulo1Leccion3() {
		return "CursoTrilogia1/modulo1/leccion3";
	}

	@GetMapping("/modulo1/leccion4")
	public String modulo1Leccion4() {
		return "CursoTrilogia1/modulo1/leccion4";
	}

	@GetMapping("/modulo1/leccion5")
	public String modulo1Leccion5() {
		return "CursoTrilogia1/modulo1/leccion5";
	}

	@GetMapping("/modulo1/leccion6")
	public String modulo1Leccion6() {
		return "CursoTrilogia1/modulo1/leccion6";
	}

	@GetMapping("/modulo1/leccion7")
	public String modulo1Leccion7() {
		return "CursoTrilogia1/modulo1/leccion7";
	}

	@GetMapping("/modulo1/leccion8")
	public String modulo1Leccion8() {
		return "CursoTrilogia1/modulo1/leccion8";
	}

	@GetMapping("/modulo1/leccion9")
	public String modulo1Leccion9() {
		return "CursoTrilogia1/modulo1/leccion9";
	}

	@GetMapping("/inicio")
	public String inicio() {
		return "redirect:/PanelControlUsuario/inicio";
	}
}