package bt.gov.moe.nfe.newedge.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class IndexController {
	@RequestMapping("/")
	public String index() {
		return "webpages/index.html";
	}
	
	@RequestMapping("/Configuration1")
	public String Configuration1() {
		return "webpages/Configuration1.html";
	}
	
	@RequestMapping("/Configuration2")
	public String Configuration2() {
		return "webpages/Configuration2.html";
	}
	@RequestMapping("/CourseSetup")
	public String CourseSetup() {
		return "webpages/CourseSetup.html";
	
	}
	
	@RequestMapping("/header")
	public String header() {
		return "webpages/header.html";
	
	}
	@RequestMapping("/SkillSetUp")
	public String SkillSetUp() {
		return "webpages/SkillSetUp.html";
	
	}
	@RequestMapping("/LearnerProfile")
	public String LearnerProfile() {
		return "webpages/Learner-profile.html";
	
	}
	
	@RequestMapping("/InstructorProfile")
	public String InstructorProfile() {
		return "webpages/Instructor-profile.html";
	
	}
	@RequestMapping("/CenterProfile")
	public String CenterProfile() {
		return "webpages/Center-profile.html";
	
	}
	@RequestMapping("/New-opening-form")
	public String NewOpening() {
		return "webpages/New-opening-form.html";
	
	}
	
	@RequestMapping("/Feasibility")
	public String Feasibility() {
		return "webpages/Feasibility.html";
	
	}
	
}
