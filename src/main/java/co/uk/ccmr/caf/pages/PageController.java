package co.uk.ccmr.caf.pages;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PageController {
	/** We treat the home page as special as it doesn't need the page prefix.
	 * 
	 * @return
	 */
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index() {
		return "index";
	}
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index2() {
		return "index";
	}
	
	/** other generic page requests we just pass through to thymeleaf.
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/page/*", method = RequestMethod.GET)
	public String page(HttpServletRequest request) {
		System.out.println("PAGE REQUEST URI="+request.getRequestURI());
		// strip the leading "/page/" and use this as the view page name which thymeleaf translates into a file name
		return request.getRequestURI().substring("/page/".length());
	}
	
	/** module page requests we need to analyse the given parameters
	  * and work out the best template or file to use.
	  *
	@RequestMapping(value = "/nvedit.js", params={"mu", "nn", "mt","v"}, method = RequestMethod.GET)
	public String modulePage(HttpServletRequest request) {
		System.out.println("NV EDITOR REQUEST with params URI="+request.getRequestURI());
		System.out.println("NV EDITOR REQUEST query="+request.getQueryString());
		return "/module/genericNvEditor.js";
	}*/
	
	@RequestMapping(
			value = "/nvedit.js", 
			params={"mu", "nn", "mt","v"}, 
			method = RequestMethod.GET,
			produces = "text/javascript"
	)
	public void getResouce(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam("mu") String mu,
			@RequestParam("nn") int nn,
			@RequestParam("mt") String mt,
			@RequestParam("v") String v
			) {
		System.out.println("NV EDITOR REQUEST with params URI="+request.getRequestURI()+" mu="+mu+" nn="+nn+" mt="+mt+" v="+v);
		
		/* We first of all try the fully qualified name <ModuleTypeName>_<major><minor>BETA<beta>.js */
	    String myPath = "/module/"+mt+"_"+v+".js";
	    Resource resouce = new ClassPathResource(myPath);
	    InputStream is;
	    try {
	    	try {
	    		is = resouce.getInputStream();
	    	} catch (FileNotFoundException e1) {
	    		System.out.println("File not found:"+myPath);
	    		/* Now try <ModuleTypeName>_<major><minor>.js */
	    		int i=0;
	    		while (Character.isDigit(v.charAt(i))) {
	    			i++;
	    		}
	    		// i should be at the first non digit
	    		String vv = v.substring(0,i+1);
	    		myPath = "/module/"+mt+"_"+vv+".js"; // 
	    		resouce = new ClassPathResource(myPath);
	    	
	    		try {
	    			is = resouce.getInputStream();
	    		} catch (FileNotFoundException e2) {
	    			System.out.println("File not found:"+myPath);
	    			/* Now try <ModuleTypeName>_<major>.js */
	    			vv = v.substring(0,i);
	    			myPath = "/module/"+mt+"_"+vv+".js"; // 
	    			resouce = new ClassPathResource(myPath);
	    			try {
	    				is = resouce.getInputStream();
	    			} catch (FileNotFoundException e3) {
	    				System.out.println("File not found:"+myPath);
			    	
	    				/* Now try <ModuleTypeName>.js */
	    				myPath = "/module/"+mt+".js"; // 
	    				resouce = new ClassPathResource(myPath);
	    				try {
	    					is = resouce.getInputStream();
	    				} catch (FileNotFoundException e4) {
	    					System.out.println("File not found:"+myPath);
				    	
	    					/* Now try generic.js */
	    					myPath = "/module/genericNvEditor.js"; 
	    					resouce = new ClassPathResource(myPath);
	    					try {
	    						is = resouce.getInputStream();
	    					} catch (FileNotFoundException ex) {
	    						System.out.println("ERROR File not found:"+myPath);
	    						throw new RuntimeException("IOError reading file", e4);
	    					}
	    				}
	    			}
	    		}
	    	}
	    } catch (IOException e) {
	    	System.out.println("Error reading input file:"+myPath);
	    	throw new RuntimeException("IOError reading file", e);
	    }
	    System.out.println("Using "+myPath);
	    response.setContentType("text/javascript");
	    try {
	    	System.out.println("Returning JavaScript");
	        IOUtils.copy(is, response.getOutputStream());
	        response.flushBuffer();
	    } catch (IOException ex) {
	        // log error
	        throw new RuntimeException("IOError writing file to output stream", ex);
	    }
	}
}