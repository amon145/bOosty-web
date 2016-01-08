// Copyright 2006-2016 ClickTale Ltd., US Patent Pending
// Generated on: 1/4/2016 5:47:02 AM (UTC 1/4/2016 11:47:02 AM)

if (typeof(ct_dispatcher) == 'undefined')
{
	ct_dispatcher = {
		configName : null,
		cookieName : "ct_configName",
		getParameterByName : function (name)
		{
			 name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			 var regexS = "[\\?&]" + name + "=([^&#]*)";
			 var regex = new RegExp(regexS, "i");
			 var results = regex.exec(window.location.search);
			 if(results == null)
			   return "";
			 else
			   return decodeURIComponent(results[1].replace(/\+/g, " "));
		},
		createCookie: function (name,value,days) 
		{
			if (days) 
			{
				var date = new Date();
				date.setTime(date.getTime( )+( days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString( );
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		},
		readCookie : function (name) 
		{
			var nameEQ = name + "=";
			var ca = document.cookie.split( ';');
			for( var i=0;i < ca.length;i++) 
			{
				var c = ca[i];
				while ( c.charAt( 0)==' ') c = c.substring( 1,c.length);
				if ( c.indexOf( nameEQ) == 0) return c.substring( nameEQ.length,c.length);
			}
			return null;
		}
	};
		
	// Read from querystring
	var ct_pdc_qs_val = ct_dispatcher.getParameterByName(ct_dispatcher.cookieName);
	if (ct_pdc_qs_val)
	{
		// Override/create cookie
		ct_dispatcher.createCookie(ct_dispatcher.cookieName, ct_pdc_qs_val, 14);
		ct_dispatcher.configName = ct_pdc_qs_val;
	}
	else
	{
		// Read from cookie
		ct_dispatcher.configName = ct_dispatcher.readCookie(ct_dispatcher.cookieName);
	}

	
}

	if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = function(tagName)
	{
		if (document.createElementNS)
		{
			return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return document.createElement(tagName);
	}
}

if (typeof (ClickTaleAppendInHead) != "function")
{
	ClickTaleAppendInHead = function(element)
	{
		var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
		parent.appendChild(element);
	}
}

if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function")
{
	ClickTaleXHTMLCompliantScriptTagCreate = function(code)
	{
		var script = ClickTaleCreateDOMElement('script');
		script.setAttribute("type", "text/javascript");
		script.text = code;
		return script;
	}
}	
		var configFoundPTC = false;
	
if (ct_dispatcher.configName == 'Release_10122015')
{
	configFoundPTC = true;
			(function(){
	var script = ClickTaleXHTMLCompliantScriptTagCreate("\/\/ Copyright 2006-2016 ClickTale Ltd., US Patent Pending\r\n\/\/ PID: 38736\r\n\/\/ WR destination: www02\r\n\/\/ WR version: 15.3\r\n\/\/ Recording ratio: 0.3\r\n\/\/ Generated on: 1\/4\/2016 5:47:02 AM (UTC 1\/4\/2016 11:47:02 AM)\r\n\r\n\r\nfunction ClickTaleCDNHTTPSRewrite(u)\r\n{\r\n\ttry\r\n\t{\r\n\t\tvar scripts = document.getElementsByTagName(\u0027script\u0027);\r\n\t\tif(scripts.length)\r\n\t\t{\r\n\t\t\tvar script = scripts[ scripts.length - 1 ], s=\u0027https:\/\/clicktalecdn.sslcs.cdngc.net\/\u0027;\r\n\t\t\tif(script.src \u0026\u0026 script.src.substr(0,s.length)==s )\r\n\t\t\t\treturn u.replace(\u0027https:\/\/cdnssl.clicktale.net\/\u0027,s);\r\n\t\t}\r\n\t}\r\n\tcatch(e)\r\n\t{\r\n\t}\r\n\treturn u;\r\n} \r\n\r\nvar ClickTaleIsXHTMLCompliant = true;\r\nif (typeof (ClickTaleCreateDOMElement) != \"function\")\r\n{\r\n\tClickTaleCreateDOMElement = function(tagName)\r\n\t{\r\n\t\tif (document.createElementNS)\r\n\t\t{\r\n\t\t\treturn document.createElementNS(\u0027http:\/\/www.w3.org\/1999\/xhtml\u0027, tagName);\r\n\t\t}\r\n\t\treturn document.createElement(tagName);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleAppendInHead) != \"function\")\r\n{\r\n\tClickTaleAppendInHead = function(element)\r\n\t{\r\n\t\tvar parent = document.getElementsByTagName(\u0027head\u0027).item(0) || document.documentElement;\r\n\t\tparent.appendChild(element);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != \"function\")\r\n{\r\n\tClickTaleXHTMLCompliantScriptTagCreate = function(code)\r\n\t{\r\n\t\tvar script = ClickTaleCreateDOMElement(\u0027script\u0027);\r\n\t\tscript.setAttribute(\"type\", \"text\/javascript\");\r\n\t\tscript.text = code;\r\n\t\treturn script;\r\n\t}\r\n}\t\r\n\r\nvar pccScriptElement = ClickTaleCreateDOMElement(\u0027script\u0027);\r\npccScriptElement.type = \"text\/javascript\";\r\npccScriptElement.src = (document.location.protocol==\u0027https:\u0027?\r\nClickTaleCDNHTTPSRewrite(\u0027https:\/\/cdnssl.clicktale.net\/www02\/pcc\/19fdea32-7c9a-45b2-a048-579dff05051b.js?DeploymentConfigName=Release_10122015\u0026Version=4\u0027):\r\n\u0027http:\/\/cdn.clicktale.net\/www02\/pcc\/19fdea32-7c9a-45b2-a048-579dff05051b.js?DeploymentConfigName=Release_10122015\u0026Version=4\u0027);\r\ndocument.body.appendChild(pccScriptElement);\r\n\t\r\nvar ClickTalePrevOnReady;\r\nif(typeof ClickTaleOnReady == \u0027function\u0027)\r\n{\r\n\tClickTalePrevOnReady=ClickTaleOnReady;\r\n\tClickTaleOnReady=undefined;\r\n}\r\n\r\nif (typeof window.ClickTaleScriptSource == \u0027undefined\u0027)\r\n{\r\n\twindow.ClickTaleScriptSource=(document.location.protocol==\u0027https:\u0027\r\n\t\t?ClickTaleCDNHTTPSRewrite(\u0027https:\/\/cdnssl.clicktale.net\/www\/\u0027)\r\n\t\t:\u0027http:\/\/cdn.clicktale.net\/www\/\u0027);\r\n}\r\n\r\n\r\n\/\/ Start of user-defined pre WR code (PreLoad)b\r\n\/\/PTC Code Version 4\r\n\r\nwindow.ClickTaleSettings = window.ClickTaleSettings || {};\r\nwindow.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};\r\nwindow.ClickTaleIncludedOnWindowLoad = true;\r\nwindow.ClickTaleIncludedOnDOMReady = true;\r\nwindow.ClickTaleSettings.PTC.EnableChangeMonitor = false;\r\nwindow.ClickTaleSettings.PTC.UseTransport = true;\r\n\r\nwindow.ClickTaleSettings.CheckAgentSupport = function (f, v) {\r\n    if (v.t == v.IE \u0026\u0026 v.v \u003c= 8) {\r\n        return false;\r\n    }\r\n    else {\r\n        if (!(v.t == v.IE \u0026\u0026 v.v \u003c= 10)) {\r\n            window.ClickTaleSettings.PTC.EnableChangeMonitor = true;\r\n            window.ClickTaleSettings.PTC.ConfigChangeMonitor();\r\n        }\r\n        return f(v);\r\n    }\r\n};\r\n\r\nwindow.ClickTaleSettings.PTC.RulesObj = [{\r\n    selector: \"input[type=\\\"text\\\"], input[type=\\\"tel\\\"], input[type=\\\"email\\\"]\",\r\n    changeMon: {\r\n        Attributes: [\u0027value\u0027],\r\n        Text: false\r\n    },\r\n    rewriteApi: {\r\n        Attributes: [\u0027value\u0027],\r\n        Text: false\r\n    }\r\n}]\r\n\r\nwindow.ClickTaleSettings.PTC.RulesObjRemoveEls = [\r\n]\r\n\r\nwindow.ClickTaleSettings.PTC.ConfigChangeMonitor = function () {\r\n\r\n    if (window.ClickTaleSettings.PTC.EnableChangeMonitor) {\r\n        window.ClickTaleSettings.XHRWrapper = {\r\n            Enable: false\r\n        };\r\n\r\n        var script = document.createElement(\"SCRIPT\");\r\n        script.src = (document.location.protocol === \"https:\" ? \"https:\/\/cdnssl.\" : \"http:\/\/cdn.\") + \"clicktale.net\/www\/ChangeMonitor-latest.js\";\r\n        document.body.appendChild(script);\r\n\r\n        window.ClickTaleSettings.ChangeMonitor = {\r\n            Enable: true,\r\n            LiveExclude: true,\r\n            AddressingMode: \"id\",\r\n            OnReadyHandler: function (changeMonitor) {\r\n                changeMonitor.observe();\r\n\r\n                var CMRemrule = window.ClickTaleSettings.PTC.RulesObjRemoveEls;\r\n                if (CMRemrule) {\r\n                    for (var i = 0; i \u003c CMRemrule.length; i++) {\r\n                        var CMlocation = CMRemrule[i][\u0027location\u0027];\r\n                        if ((!CMlocation || (CMlocation \u0026\u0026 document.location[CMlocation[\u0027prop\u0027]].toLowerCase().search(CMlocation.search) === -1)) \u0026\u0026 CMRemrule[i].changeMon) {\r\n                            changeMonitor.exclude(CMRemrule[i].changeMon);\r\n                        }\r\n                    }\r\n                }\r\n            },\r\n            OnBeforeReadyHandler: function (settings) {\r\n                settings.Enable = window.ClickTaleGetUID ? !!ClickTaleGetUID() : false;\r\n                return settings;\r\n            },\r\n            Filters: {\r\n                MaxBufferSize: 300000,\r\n                MaxElementCount: 3000\r\n            },\r\n            PII: {\r\n                Text: [],\r\n                Attributes: []\r\n            }\r\n        }\r\n        var RulesObj = window.ClickTaleSettings.PTC.RulesObj;\r\n        if (RulesObj) {\r\n            for (var i = 0; i \u003c RulesObj.length; i++) {\r\n                var CMrule = RulesObj[i][\u0027changeMon\u0027];\r\n                var CMlocation = RulesObj[i][\u0027location\u0027];\r\n                if (!CMrule || (CMlocation \u0026\u0026 document.location[CMlocation[\u0027prop\u0027]].toLowerCase().search(CMlocation.search) === -1)) {\r\n                    continue;\r\n                }\r\n                var selector = RulesObj[i][\u0027selector\u0027];\r\n                var attributesArr = CMrule.Attributes;\r\n                if (attributesArr instanceof Array) {\r\n                    for (var u = 0; u \u003c attributesArr.length; u++) {\r\n                        var attr = attributesArr[u];\r\n                        window.ClickTaleSettings.ChangeMonitor.PII.Attributes.push({\r\n                            selector: selector,\r\n                            transform: function (el) {\r\n                                var attrs = el.attributes;\r\n                                var attrsToReturn = {}\r\n                                for (var i = 0; i \u003c attrs.length; i++) {\r\n                                    var name = attrs[i].nodeName;\r\n                                    attrsToReturn[name] = attrs[i].nodeValue;\r\n                                }\r\n                                attrsToReturn[attr] = el[attr].replace(\/\\w\/g, \u0027-\u0027);\r\n                                return attrsToReturn;\r\n                            }\r\n                        });\r\n                    }\r\n                }\r\n                if (CMrule.Text) {\r\n                    window.ClickTaleSettings.ChangeMonitor.PII.Text.push({\r\n                        selector: selector,\r\n                        transform: function (el) {\r\n                            return el.textContent.replace(\/\\w\/g, \u0027-\u0027);\r\n                        }\r\n                    });\r\n                }\r\n            }\r\n        }\r\n    }\r\n};\r\n\r\nwindow.ClickTaleSettings.Compression = {\r\n    Method: function () {\r\n        return \"deflate\";\r\n    }\r\n};\r\n\r\nwindow.ClickTaleSettings.Transport = {\r\n    Legacy: false,\r\n    MaxConcurrentRequests: 5\r\n};\r\n\r\nwindow.ClickTaleSettings.RewriteRules = {\r\n    OnBeforeRewrite: function (rewriteApi) {\r\n        var bodyClone = document.body.cloneNode(true);\r\n\r\n        if (window.ClickTaleSettings.PTC.RulesObj) {\r\n            rewriteApi.add(function (buffer) {\r\n\r\n                var bodyClone = document.body.cloneNode(true);\r\n                var RulesObj = window.ClickTaleSettings.PTC.RulesObj;\r\n                for (var i = 0; i \u003c RulesObj.length; i++) {\r\n                    var rewriteApirule = RulesObj[i][\u0027rewriteApi\u0027];\r\n                    var rewriteApilocation = RulesObj[i][\u0027location\u0027];\r\n                    if (!rewriteApirule || (rewriteApilocation \u0026\u0026 document.location[rewriteApilocation[\u0027prop\u0027]].toLowerCase().search(rewriteApilocation.search) === -1)) {\r\n                        continue;\r\n                    }\r\n                    var selector = RulesObj[i][\u0027selector\u0027];\r\n                    var elements = bodyClone.querySelectorAll(selector);\r\n\r\n                    Array.prototype.forEach.call(elements, function (el, ind) {\r\n                        var attributesArr = rewriteApirule.Attributes;\r\n                        if (attributesArr instanceof Array) {\r\n\r\n                            for (var u = 0; u \u003c attributesArr.length; u++) {\r\n                                var attr = attributesArr[u];\r\n                                el.setAttribute(attr, el[attr].replace(\/\\w\/g, \u0027-\u0027));\r\n                            }\r\n\r\n                        }\r\n                        if (rewriteApirule.Text) {\r\n                            var children = el.childNodes;\r\n                            Array.prototype.forEach.call(children, function (child) {\r\n                                if (child \u0026\u0026 child.nodeType === 3) {\r\n                                    child.textContent = child.textContent.replace(\/\\w\/g, \u0027-\u0027);\r\n                                }\r\n                            });\r\n                        }\r\n                    });\r\n                }\r\n\r\n                \/\/work on body\r\n                var RulesObjRemoveEls = window.ClickTaleSettings.PTC.RulesObjRemoveEls;\r\n                if (RulesObjRemoveEls) {\r\n                    for (var i = 0; i \u003c RulesObjRemoveEls.length; i++) {\r\n                        if (RulesObjRemoveEls[i].rewriteApi) {\r\n                            var elementsToRemove = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApi);\r\n                            Array.prototype.forEach.call(elementsToRemove, function (el, ind) {\r\n                                if (el.parentNode) {\r\n                                    el.parentNode.removeChild(el);\r\n                                }\r\n                            });\r\n                        }\r\n                        if (RulesObjRemoveEls[i].rewriteApiReplace) {\r\n                            var elementsToReplace = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApiReplace);\r\n                            Array.prototype.forEach.call(elementsToReplace, function (el, ind) {\r\n                                if (el.parentNode) {\r\n                                    var comment = document.createComment(el.outerHTML);\r\n                                    el.parentNode.replaceChild(comment, el);\r\n                                }\r\n                            });\r\n                        }\r\n                    }\r\n                }\r\n\r\n                buffer = buffer.replace(\/(\u003cbody[^\u003e]*\u003e)[\\s\\S]*?\u003c\\\/body\u003e$\/gi, function (m, g1) {\r\n                    if (g1) {\r\n                        return g1 + bodyClone.innerHTML.replace(\/\u003cscript\\b([^\u003e]*)\u003e([\\s\\S]*?)\u003c\\\/script\u003e\/gi, \u0027\u003cscript\u003e\u003c\\\/script\u003e\u0027).replace(\/(\u003cdiv id=\"?ClickTaleDiv\"?[^\u003e]+\u003e)\\s*\u003cscript[^\u003e]+\u003e\u003c\\\/script\u003e\\s*(\u003c\\\/div\u003e)\/i, \u0027$1$2\u0027) + \u0027\u003c\\\/body\u003e\u0027;\r\n                    }\r\n                    return m;\r\n                });\r\n\r\n                return buffer;\r\n            });\r\n        }\r\n\r\n        rewriteApi.add({\r\n            pattern: \/(\u003chead[^\u003e]*\u003e)\/i,\r\n            replace: \u0027$1\u003cscript type=\"text\/javascript\" class=\"cm-ignore\" src=\"http:\/\/dummytest.clicktale-samples.com\/GlobalResources\/jquery.js\"\u003e\u003c\\\/script\u003e\u0027\r\n        });\r\n    }\r\n};\r\n\/\/ End of user-defined pre WR code\r\n\r\n\r\nvar ClickTaleOnReady = function()\r\n{\r\n\tvar PID=38736, \r\n\t\tRatio=0.3, \r\n\t\tPartitionPrefix=\"www02\";\r\n\t\r\n\tif (window.navigator \u0026\u0026 window.navigator.loadPurpose === \"preview\") {\r\n       return; \/\/in preview\r\n\t   };\r\n\t\t\r\n\t\r\n\t\/\/ Start of user-defined header code (PreInitialize)\r\n\tif (typeof ClickTaleSetAllSensitive === \"function\") {\r\n    ClickTaleSetAllSensitive();\r\n}\r\n\r\nif (typeof ClickTaleUploadPage === \u0027function\u0027 \u0026\u0026 window.ClickTaleSettings.PTC.UseTransport) {\r\n    if(window.ClickTaleSettings.PTC.EnableChangeMonitor){\r\n\t\tif (typeof ClickTaleEvent === \"function\") {\r\n\t\t\t\t\tClickTaleEvent(\"CM\");\r\n\t\t}\r\n\t}\t\r\n    var up_Counter = 0;\r\n    function delayUploadPage() {\r\n        if(document.querySelectorAll(\u0027.dropdown.dropdown-custom-style\u0027).length \u003e 0) {\r\n            setTimeout(function() {\r\n                window.ClickTaleIncludedOnWindowLoad  = true;\r\n                window.ClickTaleIncludedOnDOMReady = true;\r\n                ClickTaleUploadPage();\r\n                window.ClickTaleSSL = 1;\r\n                ClickTale(PID, Ratio, PartitionPrefix);\r\n                return;\r\n            }, 500);\r\n        } \r\n        else {\r\n            up_Counter++;\r\n            if (up_Counter \u003c 15) {\r\n                setTimeout(delayUploadPage, 500);\r\n                return;\r\n            }\r\n            else {\r\n                window.ClickTaleIncludedOnWindowLoad  = true;\r\n                window.ClickTaleIncludedOnDOMReady = true;\r\n                ClickTaleUploadPage();\r\n                window.ClickTaleSSL = 1;\r\n                ClickTale(PID, Ratio, PartitionPrefix);\r\n                return;\r\n            }\r\n        }\r\n    }\r\n\r\n    if (typeof document.querySelectorAll == \"function\" \u0026\u0026 document.querySelectorAll(\u0027.cat-menu-js\u0027).length \u003e 0) {\r\n        delayUploadPage();\r\n        return;\r\n    }\r\n\r\n    else {\r\n        ClickTaleUploadPage();\r\n    }\r\n}\r\n\t\/\/ End of user-defined header code (PreInitialize)\r\n    \r\n\t\r\n\twindow.ClickTaleIncludedOnDOMReady=true;\r\n\twindow.ClickTaleSSL=1;\r\n\t\r\n\tClickTale(PID, Ratio, PartitionPrefix);\r\n\t\r\n\tif((typeof ClickTalePrevOnReady == \u0027function\u0027) \u0026\u0026 (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))\r\n\t{\r\n    \tClickTalePrevOnReady();\r\n\t}\r\n\t\r\n\t\r\n\t\/\/ Start of user-defined footer code\r\n\t\r\n\t\/\/ End of user-defined footer code\r\n\t\r\n}; \r\n(function() {\r\n\tvar div = ClickTaleCreateDOMElement(\"div\");\r\n\tdiv.id = \"ClickTaleDiv\";\r\n\tdiv.style.display = \"none\";\r\n\tdocument.body.appendChild(div);\r\n\r\n\tvar externalScript = ClickTaleCreateDOMElement(\"script\");\r\n\tvar src = document.location.protocol==\u0027https:\u0027?\r\n\t  \u0027https:\/\/cdnssl.clicktale.net\/www\/tc\/WRf3.js\u0027:\r\n\t  \u0027http:\/\/cdn.clicktale.net\/www\/tc\/WRf3.js\u0027;\r\n\texternalScript.src = (window.ClickTaleCDNHTTPSRewrite?ClickTaleCDNHTTPSRewrite(src):src);\r\n\texternalScript.type = \u0027text\/javascript\u0027;\r\n\tdocument.body.appendChild(externalScript);\r\n})();\r\n\r\n\r\n\r\n\r\n!function(){function t(){window.addEventListener\u0026\u0026addEventListener(\"message\",e,!1)}function e(t){var e,n=new RegExp(\"(clicktale.com|ct.test)($|:)\"),i=new RegExp(\"ct.test\"),c=!1,l=t.origin;try{e=JSON.parse(t.data)}catch(d){return}n.test(t.origin)!==!1\u0026\u0026(i.test(t.origin)===!0\u0026\u0026(c=!0),\"CTload_ve\"===e[\"function\"]\u0026\u0026\"function\"==typeof ClickTaleGetPID\u0026\u0026null!==ClickTaleGetPID()\u0026\u0026o(l,c))}function n(t){return document.createElementNS?document.createElementNS(\"http:\/\/www.w3.org\/1999\/xhtml\",t):document.createElement(t)}function o(t,e){var o=n(\"script\");o.setAttribute(\"type\",\"text\/javascript\"),o.setAttribute(\"id\",\"ctVisualEditorClientModule\");var i;i=e?document.location.protocol+\"\/\/ct.test\/VisualEditor\/Client\/dist\/veClientModule.js\":document.location.protocol+\"\/\/\"+t.match(\/subs\\d*\/)[0]+\".app.clicktale.com\/VisualEditor\/Client\/dist\/veClientModule.js\",o.src=i,document.getElementById(\"ctVisualEditorClientModule\")||document.body.appendChild(o)}try{var i=window.chrome,c=window.navigator\u0026\u0026window.navigator.vendor;null!==i\u0026\u0026void 0!==i\u0026\u0026\"Google Inc.\"===c\u0026\u0026window.self!==window.top\u0026\u0026t()}catch(l){}}();");
	document.body.appendChild(script);	})();
	}
			
	

	// Default configuration
if (!configFoundPTC)
{
			(function(){
	var script = ClickTaleXHTMLCompliantScriptTagCreate("\/\/ Copyright 2006-2016 ClickTale Ltd., US Patent Pending\r\n\/\/ PID: 38736\r\n\/\/ WR destination: www02\r\n\/\/ WR version: 15.3\r\n\/\/ Recording ratio: 0.35\r\n\/\/ Generated on: 1\/4\/2016 5:47:02 AM (UTC 1\/4\/2016 11:47:02 AM)\r\n\r\n\r\nfunction ClickTaleCDNHTTPSRewrite(u)\r\n{\r\n\ttry\r\n\t{\r\n\t\tvar scripts = document.getElementsByTagName(\u0027script\u0027);\r\n\t\tif(scripts.length)\r\n\t\t{\r\n\t\t\tvar script = scripts[ scripts.length - 1 ], s=\u0027https:\/\/clicktalecdn.sslcs.cdngc.net\/\u0027;\r\n\t\t\tif(script.src \u0026\u0026 script.src.substr(0,s.length)==s )\r\n\t\t\t\treturn u.replace(\u0027https:\/\/cdnssl.clicktale.net\/\u0027,s);\r\n\t\t}\r\n\t}\r\n\tcatch(e)\r\n\t{\r\n\t}\r\n\treturn u;\r\n} \r\n\r\nvar ClickTaleIsXHTMLCompliant = true;\r\nif (typeof (ClickTaleCreateDOMElement) != \"function\")\r\n{\r\n\tClickTaleCreateDOMElement = function(tagName)\r\n\t{\r\n\t\tif (document.createElementNS)\r\n\t\t{\r\n\t\t\treturn document.createElementNS(\u0027http:\/\/www.w3.org\/1999\/xhtml\u0027, tagName);\r\n\t\t}\r\n\t\treturn document.createElement(tagName);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleAppendInHead) != \"function\")\r\n{\r\n\tClickTaleAppendInHead = function(element)\r\n\t{\r\n\t\tvar parent = document.getElementsByTagName(\u0027head\u0027).item(0) || document.documentElement;\r\n\t\tparent.appendChild(element);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != \"function\")\r\n{\r\n\tClickTaleXHTMLCompliantScriptTagCreate = function(code)\r\n\t{\r\n\t\tvar script = ClickTaleCreateDOMElement(\u0027script\u0027);\r\n\t\tscript.setAttribute(\"type\", \"text\/javascript\");\r\n\t\tscript.text = code;\r\n\t\treturn script;\r\n\t}\r\n}\t\r\n\r\nvar pccScriptElement = ClickTaleCreateDOMElement(\u0027script\u0027);\r\npccScriptElement.type = \"text\/javascript\";\r\npccScriptElement.src = (document.location.protocol==\u0027https:\u0027?\r\nClickTaleCDNHTTPSRewrite(\u0027https:\/\/cdnssl.clicktale.net\/www02\/pcc\/19fdea32-7c9a-45b2-a048-579dff05051b.js?DeploymentConfigName=Release_23122015\u0026Version=2\u0027):\r\n\u0027http:\/\/cdn.clicktale.net\/www02\/pcc\/19fdea32-7c9a-45b2-a048-579dff05051b.js?DeploymentConfigName=Release_23122015\u0026Version=2\u0027);\r\ndocument.body.appendChild(pccScriptElement);\r\n\t\r\nvar ClickTalePrevOnReady;\r\nif(typeof ClickTaleOnReady == \u0027function\u0027)\r\n{\r\n\tClickTalePrevOnReady=ClickTaleOnReady;\r\n\tClickTaleOnReady=undefined;\r\n}\r\n\r\nif (typeof window.ClickTaleScriptSource == \u0027undefined\u0027)\r\n{\r\n\twindow.ClickTaleScriptSource=(document.location.protocol==\u0027https:\u0027\r\n\t\t?ClickTaleCDNHTTPSRewrite(\u0027https:\/\/cdnssl.clicktale.net\/www\/\u0027)\r\n\t\t:\u0027http:\/\/cdn.clicktale.net\/www\/\u0027);\r\n}\r\n\r\n\r\n\/\/ Start of user-defined pre WR code (PreLoad)b\r\n\/\/PTC Code Version 4\r\n\r\nwindow.ClickTaleSettings = window.ClickTaleSettings || {};\r\nwindow.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};\r\nwindow.ClickTaleIncludedOnWindowLoad = true;\r\nwindow.ClickTaleIncludedOnDOMReady = true;\r\nwindow.ClickTaleSettings.PTC.EnableChangeMonitor = false;\r\nwindow.ClickTaleSettings.PTC.UseTransport = true;\r\n\r\nwindow.ClickTaleSettings.CheckAgentSupport = function (f, v) {\r\n    if (v.t == v.IE \u0026\u0026 v.v \u003c= 8) {\r\n        return false;\r\n    }\r\n    else {\r\n        if (!(v.t == v.IE \u0026\u0026 v.v \u003c= 10)) {\r\n            window.ClickTaleSettings.PTC.EnableChangeMonitor = true;\r\n            window.ClickTaleSettings.PTC.ConfigChangeMonitor();\r\n        }\r\n        return f(v);\r\n    }\r\n};\r\n\r\nwindow.ClickTaleSettings.PTC.RulesObj = [{\r\n    selector: \"input[type=\\\"text\\\"], input[type=\\\"tel\\\"], input[type=\\\"email\\\"]\",\r\n    changeMon: {\r\n        Attributes: [\u0027value\u0027],\r\n        Text: false\r\n    },\r\n    rewriteApi: {\r\n        Attributes: [\u0027value\u0027],\r\n        Text: false\r\n    }\r\n}]\r\n\r\nwindow.ClickTaleSettings.PTC.RulesObjRemoveEls = [\r\n]\r\n\r\nwindow.ClickTaleSettings.PTC.cloneNodeIE9 = function (node) {\r\n    var clone = node.nodeType === 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false);\r\n\r\n    var child = node.firstChild;\r\n    while (child) {\r\n        if (child.nodeName !== \u0027SCRIPT\u0027) {\r\n            clone.appendChild(window.ClickTaleSettings.PTC.cloneNodeIE9(child));\r\n        }\r\n        else {\r\n            var script = document.createElement(\u0027script\u0027);\r\n            clone.appendChild(script);\r\n        }\r\n        child = child.nextSibling;\r\n    }\r\n\r\n    return clone;\r\n}\r\n\r\nwindow.ClickTaleSettings.PTC.ConfigChangeMonitor = function () {\r\n\r\n    if (window.ClickTaleSettings.PTC.EnableChangeMonitor) {\r\n        window.ClickTaleSettings.XHRWrapper = {\r\n            Enable: false\r\n        };\r\n\r\n        var script = document.createElement(\"SCRIPT\");\r\n        script.src = (document.location.protocol === \"https:\" ? \"https:\/\/cdnssl.\" : \"http:\/\/cdn.\") + \"clicktale.net\/www\/ChangeMonitor-latest.js\";\r\n        document.body.appendChild(script);\r\n\r\n        window.ClickTaleSettings.ChangeMonitor = {\r\n            Enable: true,\r\n            LiveExclude: true,\r\n            AddressingMode: \"id\",\r\n            OnReadyHandler: function (changeMonitor) {\r\n                changeMonitor.observe();\r\n\r\n                var CMRemrule = window.ClickTaleSettings.PTC.RulesObjRemoveEls;\r\n                if (CMRemrule) {\r\n                    for (var i = 0; i \u003c CMRemrule.length; i++) {\r\n                        var CMlocation = CMRemrule[i][\u0027location\u0027];\r\n                        if ((!CMlocation || (CMlocation \u0026\u0026 document.location[CMlocation[\u0027prop\u0027]].toLowerCase().search(CMlocation.search) === -1)) \u0026\u0026 CMRemrule[i].changeMon) {\r\n                            changeMonitor.exclude(CMRemrule[i].changeMon);\r\n                        }\r\n                    }\r\n                }\r\n            },\r\n            OnBeforeReadyHandler: function (settings) {\r\n                settings.Enable = window.ClickTaleGetUID ? !!ClickTaleGetUID() : false;\r\n                return settings;\r\n            },\r\n            Filters: {\r\n                MaxBufferSize: 300000,\r\n                MaxElementCount: 3000\r\n            },\r\n            PII: {\r\n                Text: [],\r\n                Attributes: []\r\n            }\r\n        }\r\n        var RulesObj = window.ClickTaleSettings.PTC.RulesObj;\r\n        if (RulesObj) {\r\n            for (var i = 0; i \u003c RulesObj.length; i++) {\r\n                var CMrule = RulesObj[i][\u0027changeMon\u0027];\r\n                var CMlocation = RulesObj[i][\u0027location\u0027];\r\n                if (!CMrule || (CMlocation \u0026\u0026 document.location[CMlocation[\u0027prop\u0027]].toLowerCase().search(CMlocation.search) === -1)) {\r\n                    continue;\r\n                }\r\n                var selector = RulesObj[i][\u0027selector\u0027];\r\n                var attributesArr = CMrule.Attributes;\r\n                if (attributesArr instanceof Array) {\r\n                    for (var u = 0; u \u003c attributesArr.length; u++) {\r\n                        var attr = attributesArr[u];\r\n                        window.ClickTaleSettings.ChangeMonitor.PII.Attributes.push({\r\n                            selector: selector,\r\n                            transform: function (el) {\r\n                                var attrs = el.attributes;\r\n                                var attrsToReturn = {}\r\n                                for (var i = 0; i \u003c attrs.length; i++) {\r\n                                    var name = attrs[i].nodeName;\r\n                                    attrsToReturn[name] = attrs[i].nodeValue;\r\n                                }\r\n                                attrsToReturn[attr] = el[attr].replace(\/\\w\/g, \u0027-\u0027);\r\n                                return attrsToReturn;\r\n                            }\r\n                        });\r\n                    }\r\n                }\r\n                if (CMrule.Text) {\r\n                    window.ClickTaleSettings.ChangeMonitor.PII.Text.push({\r\n                        selector: selector,\r\n                        transform: function (el) {\r\n                            return el.textContent.replace(\/\\w\/g, \u0027-\u0027);\r\n                        }\r\n                    });\r\n                }\r\n            }\r\n        }\r\n    }\r\n};\r\n\r\nwindow.ClickTaleSettings.Compression = {\r\n    Method: function () {\r\n        return \"deflate\";\r\n    }\r\n};\r\n\r\nwindow.ClickTaleSettings.Transport = {\r\n    Legacy: false,\r\n    MaxConcurrentRequests: 5\r\n};\r\n\r\nwindow.ClickTaleSettings.RewriteRules = {\r\n    OnBeforeRewrite: function (rewriteApi) {\r\n        var bodyClone = ((document.documentMode \u0026\u0026 document.documentMode \u003c= 9) ? ClickTaleSettings.PTC.cloneNodeIE9(document.body) : document.body.cloneNode(true));\r\n\r\n        if (window.ClickTaleSettings.PTC.RulesObj) {\r\n            rewriteApi.add(function (buffer) {\r\n\r\n                var RulesObj = window.ClickTaleSettings.PTC.RulesObj;\r\n                for (var i = 0; i \u003c RulesObj.length; i++) {\r\n                    var rewriteApirule = RulesObj[i][\u0027rewriteApi\u0027];\r\n                    var rewriteApilocation = RulesObj[i][\u0027location\u0027];\r\n                    if (!rewriteApirule || (rewriteApilocation \u0026\u0026 document.location[rewriteApilocation[\u0027prop\u0027]].toLowerCase().search(rewriteApilocation.search) === -1)) {\r\n                        continue;\r\n                    }\r\n                    var selector = RulesObj[i][\u0027selector\u0027];\r\n                    var elements = bodyClone.querySelectorAll(selector);\r\n\r\n                    Array.prototype.forEach.call(elements, function (el, ind) {\r\n                        var attributesArr = rewriteApirule.Attributes;\r\n                        if (attributesArr instanceof Array) {\r\n\r\n                            for (var u = 0; u \u003c attributesArr.length; u++) {\r\n                                var attr = attributesArr[u];\r\n                                el.setAttribute(attr, el[attr].replace(\/\\w\/g, \u0027-\u0027));\r\n                            }\r\n\r\n                        }\r\n                        if (rewriteApirule.Text) {\r\n                            var children = el.childNodes;\r\n                            Array.prototype.forEach.call(children, function (child) {\r\n                                if (child \u0026\u0026 child.nodeType === 3) {\r\n                                    child.textContent = child.textContent.replace(\/\\w\/g, \u0027-\u0027);\r\n                                }\r\n                            });\r\n                        }\r\n                    });\r\n                }\r\n\r\n                \/\/work on body\r\n                var RulesObjRemoveEls = window.ClickTaleSettings.PTC.RulesObjRemoveEls;\r\n                if (RulesObjRemoveEls) {\r\n                    for (var i = 0; i \u003c RulesObjRemoveEls.length; i++) {\r\n                        if (RulesObjRemoveEls[i].rewriteApi) {\r\n                            var elementsToRemove = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApi);\r\n                            Array.prototype.forEach.call(elementsToRemove, function (el, ind) {\r\n                                if (el.parentNode) {\r\n                                    el.parentNode.removeChild(el);\r\n                                }\r\n                            });\r\n                        }\r\n                        if (RulesObjRemoveEls[i].rewriteApiReplace) {\r\n                            var elementsToReplace = bodyClone.querySelectorAll(RulesObjRemoveEls[i].rewriteApiReplace);\r\n                            Array.prototype.forEach.call(elementsToReplace, function (el, ind) {\r\n                                if (el.parentNode) {\r\n                                    var comment = document.createComment(el.outerHTML);\r\n                                    el.parentNode.replaceChild(comment, el);\r\n                                }\r\n                            });\r\n                        }\r\n                    }\r\n                }\r\n\r\n                buffer = buffer.replace(\/(\u003cbody[^\u003e]*\u003e)[\\s\\S]*?\u003c\\\/body\u003e$\/gi, function (m, g1) {\r\n                    if (g1) {\r\n                        return g1 + bodyClone.innerHTML.replace(\/\u003cscript\\b([^\u003e]*)\u003e([\\s\\S]*?)\u003c\\\/script\u003e\/gi, \u0027\u003cscript\u003e\u003c\\\/script\u003e\u0027).replace(\/(\u003cdiv id=\"?ClickTaleDiv\"?[^\u003e]+\u003e)\\s*\u003cscript[^\u003e]+\u003e\u003c\\\/script\u003e\\s*(\u003c\\\/div\u003e)\/i, \u0027$1$2\u0027) + \u0027\u003c\\\/body\u003e\u0027;\r\n                    }\r\n                    return m;\r\n                });\r\n\r\n                return buffer;\r\n            });\r\n        }\r\n        rewriteApi.add({\r\n            pattern: new RegExp(\u0027(href=\")(\\\/etc\\\/designs\\\/vfcorp\\\/timberland\\\/clientlibs\\\/global\\\/css\\\/)(.*?)(\\\\.css)\\\\?([^\"]*)\u0027, \u0027igm\u0027),\r\n            replace: \u0027$1http:\\\/\\\/dummytest.clicktale-samples.com\\\/Timberland$2$3-$5$4\u0027\r\n        });\r\n        rewriteApi.add({\r\n            pattern: new RegExp(\u0027(href=\")(\\\/wcsstore\\\/)(.*?)(\\\\.css)\\\\?v=([^\"]*)\u0027, \u0027igm\u0027),\r\n            replace: \u0027$1http:\\\/\\\/dummytest.clicktale-samples.com\\\/Timberland$2$3-v-$5$4\u0027\r\n        });\r\n\r\n        rewriteApi.add({\r\n            pattern: \/(\u003chead[^\u003e]*\u003e)\/i,\r\n            replace: \u0027$1\u003cscript type=\"text\/javascript\" class=\"cm-ignore\" src=\"http:\/\/dummytest.clicktale-samples.com\/GlobalResources\/jquery.js\"\u003e\u003c\\\/script\u003e\u0027\r\n        });\r\n    }\r\n};\r\n\/\/ End of user-defined pre WR code\r\n\r\n\r\nvar ClickTaleOnReady = function()\r\n{\r\n\tvar PID=38736, \r\n\t\tRatio=0.35, \r\n\t\tPartitionPrefix=\"www02\";\r\n\t\r\n\tif (window.navigator \u0026\u0026 window.navigator.loadPurpose === \"preview\") {\r\n       return; \/\/in preview\r\n\t   };\r\n\t\t\r\n\t\r\n\t\/\/ Start of user-defined header code (PreInitialize)\r\n\tif (typeof ClickTaleSetAllSensitive === \"function\") {\r\n    ClickTaleSetAllSensitive();\r\n}\r\n\r\nif (typeof ClickTaleUploadPage === \u0027function\u0027 \u0026\u0026 window.ClickTaleSettings.PTC.UseTransport) {\r\n    if(window.ClickTaleSettings.PTC.EnableChangeMonitor){\r\n\t\tif (typeof ClickTaleEvent === \"function\") {\r\n\t\t\t\t\tClickTaleEvent(\"CM\");\r\n\t\t}\r\n\t}\t\r\n    var up_Counter = 0;\r\n    function delayUploadPage() {\r\n        if(document.querySelectorAll(\u0027.dropdown.dropdown-custom-style\u0027).length \u003e 0) {\r\n            setTimeout(function() {\r\n                window.ClickTaleIncludedOnWindowLoad  = true;\r\n                window.ClickTaleIncludedOnDOMReady = true;\r\n                ClickTaleUploadPage();\r\n                window.ClickTaleSSL = 1;\r\n                ClickTale(PID, Ratio, PartitionPrefix);\r\n                return;\r\n            }, 500);\r\n        } \r\n        else {\r\n            up_Counter++;\r\n            if (up_Counter \u003c 15) {\r\n                setTimeout(delayUploadPage, 500);\r\n                return;\r\n            }\r\n            else {\r\n                window.ClickTaleIncludedOnWindowLoad  = true;\r\n                window.ClickTaleIncludedOnDOMReady = true;\r\n                ClickTaleUploadPage();\r\n                window.ClickTaleSSL = 1;\r\n                ClickTale(PID, Ratio, PartitionPrefix);\r\n                return;\r\n            }\r\n        }\r\n    }\r\n\r\n    if (typeof document.querySelectorAll == \"function\" \u0026\u0026 document.querySelectorAll(\u0027.cat-menu-js\u0027).length \u003e 0) {\r\n        delayUploadPage();\r\n        return;\r\n    }\r\n\r\n    else {\r\n        ClickTaleUploadPage();\r\n    }\r\n}\r\n\t\/\/ End of user-defined header code (PreInitialize)\r\n    \r\n\t\r\n\twindow.ClickTaleIncludedOnDOMReady=true;\r\n\twindow.ClickTaleSSL=1;\r\n\t\r\n\tClickTale(PID, Ratio, PartitionPrefix);\r\n\t\r\n\tif((typeof ClickTalePrevOnReady == \u0027function\u0027) \u0026\u0026 (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))\r\n\t{\r\n    \tClickTalePrevOnReady();\r\n\t}\r\n\t\r\n\t\r\n\t\/\/ Start of user-defined footer code\r\n\t\r\n\t\/\/ End of user-defined footer code\r\n\t\r\n}; \r\n(function() {\r\n\tvar div = ClickTaleCreateDOMElement(\"div\");\r\n\tdiv.id = \"ClickTaleDiv\";\r\n\tdiv.style.display = \"none\";\r\n\tdocument.body.appendChild(div);\r\n\r\n\tvar externalScript = ClickTaleCreateDOMElement(\"script\");\r\n\tvar src = document.location.protocol==\u0027https:\u0027?\r\n\t  \u0027https:\/\/cdnssl.clicktale.net\/www\/tc\/WRf3.js\u0027:\r\n\t  \u0027http:\/\/cdn.clicktale.net\/www\/tc\/WRf3.js\u0027;\r\n\texternalScript.src = (window.ClickTaleCDNHTTPSRewrite?ClickTaleCDNHTTPSRewrite(src):src);\r\n\texternalScript.type = \u0027text\/javascript\u0027;\r\n\tdocument.body.appendChild(externalScript);\r\n})();\r\n\r\n\r\n\r\n\r\n!function(){function t(){window.addEventListener\u0026\u0026addEventListener(\"message\",e,!1)}function e(t){var e,n=new RegExp(\"(clicktale.com|ct.test)($|:)\"),i=new RegExp(\"ct.test\"),c=!1,l=t.origin;try{e=JSON.parse(t.data)}catch(d){return}n.test(t.origin)!==!1\u0026\u0026(i.test(t.origin)===!0\u0026\u0026(c=!0),\"CTload_ve\"===e[\"function\"]\u0026\u0026\"function\"==typeof ClickTaleGetPID\u0026\u0026null!==ClickTaleGetPID()\u0026\u0026o(l,c))}function n(t){return document.createElementNS?document.createElementNS(\"http:\/\/www.w3.org\/1999\/xhtml\",t):document.createElement(t)}function o(t,e){var o=n(\"script\");o.setAttribute(\"type\",\"text\/javascript\"),o.setAttribute(\"id\",\"ctVisualEditorClientModule\");var i;i=e?document.location.protocol+\"\/\/ct.test\/VisualEditor\/Client\/dist\/veClientModule.js\":document.location.protocol+\"\/\/\"+t.match(\/subs\\d*\/)[0]+\".app.clicktale.com\/VisualEditor\/Client\/dist\/veClientModule.js\",o.src=i,document.getElementById(\"ctVisualEditorClientModule\")||document.body.appendChild(o)}try{var i=window.chrome,c=window.navigator\u0026\u0026window.navigator.vendor;null!==i\u0026\u0026void 0!==i\u0026\u0026\"Google Inc.\"===c\u0026\u0026window.self!==window.top\u0026\u0026t()}catch(l){}}();");
	document.body.appendChild(script);	})();
	}
