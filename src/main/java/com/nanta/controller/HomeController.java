package com.nanta.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	@RequestMapping("/{[path:[^\\.]*}")
	public String index(){
		return "forward:/";
	}
//	@RequestMapping("/partials/{page}")
//	public String page(@PathVariable("page") final String page) {
//		return page;
//	}
}
