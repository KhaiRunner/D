var A="1"==document.getElementById("isContent").value,B=0<window.innerWidth?window.innerWidth:screen.width,O=!1,P=!1;function D(){for(var a=document.getElementById("r").value.split(","),c='<h2>Recent Posts</h2><ul class="wc pp">',g=5,b=-1!=window.location.href.indexOf("?m=1"),d=0;5>d;++d){var e=d,k=d+5,p=d+10;b&&(a[k]+="?m=1");c=0<a[p].length?c+('<li><a class="p" href="'+a[k]+'"><img alt="" border="0" height="72" src="'+a[p]+'" width="72"/></a><a class="t" href="'+a[k]+'">'+a[e]+"</a></li>"):c+('<li><a class="p p'+ ++g+'" href="'+a[k]+'"/><a class="t" href="'+a[k]+'">'+a[e]+"</a></li>")}return c+"</ul>"}function E(a){for(var c=-1!=window.location.href.indexOf("?m=1"),g=window.location.origin,b="http://"+window.location.hostname,d=0;d<a.length;++d){var e=a[d].href;0==e.indexOf(b)&&(e=e.replace("http:","https:"),a[d].setAttribute("href",e));c&&0==e.indexOf(g)&&-1==e.indexOf("?m=1")&&(e+="?m=1",a[d].setAttribute("href",e))}}function F(a){var c=document.createElement("body");c.innerHTML=a;a=c.getElementsByTagName("a");E(a);return c.innerHTML}function N(){O||$.getScript("https://www.blogger.com/static/v1/widgets/1171408283-widgets.js",function(){var a=$('link[rel="service.post"]').attr("href").split("/");a=a[a.length-3];var c=["//www.blogger.com/rearrange?blogID="+a,"//"+window.location.host+window.location.pathname,a];_WidgetManager._Init(c[0],c[1],c[2]+"");_WidgetManager._RegisterWidget("_ContactFormView",new _WidgetInfo("ContactForm2","ft4",document.getElementById("ContactForm2"),{contactFormMessageSendingMsg:"Sending...",contactFormMessageSentMsg:"Text Sent",contactFormMessageNotSentMsg:"Messages can not be sent. Please try again later.",contactFormInvalidEmailMsg:"Email address must be specified correctly.",contactFormEmptyMessageMsg:"Message can not be empty.",title:"Contact Form",blogId:a,contactFormNameMsg:"Name",contactFormEmailMsg:"Email",contactFormMessageMsg:"Message",contactFormSendMsg:"Sent",submitUrl:"https://www.blogger.com/contact-form.do"},"displayModeFull"));O=!0})}function G(){var a='<div class="widget" id="HTML6"><h2>Weekly Popular Posts</h2><ul class="wc pp"><li><a class="p p1" href="/2017/02/front-garden-designs.html"/><a class="t" href="/2017/02/front-garden-designs.html">\u0e27\u0e34\u0e18\u0e35\u0e08\u0e31\u0e14\u0e2a\u0e27\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e1a\u0e49\u0e32\u0e19\u0e2a\u0e27\u0e22\u0e46 \u0e1b\u0e23\u0e30\u0e2b\u0e22\u0e31\u0e14\u0e07\u0e1a \u0e1e\u0e23\u0e49\u0e2d\u0e21 65 \u0e41\u0e1a\u0e1a\u0e2a\u0e27\u0e19\u0e2a\u0e27\u0e22</a></li><li><a class="p p2" href="/2017/09/20-modern-two-story-house-design-ideas.html"/><a class="t" href="/2017/09/20-modern-two-story-house-design-ideas.html">20 \u0e41\u0e1a\u0e1a\u0e1a\u0e49\u0e32\u0e19 2 \u0e0a\u0e31\u0e49\u0e19\u0e2a\u0e27\u0e22\u0e46 \u0e2a\u0e44\u0e15\u0e25\u0e4c\u0e42\u0e21\u0e40\u0e14\u0e34\u0e23\u0e4c\u0e19 \u0e21\u0e32\u0e2b\u0e32\u0e1a\u0e49\u0e32\u0e19\u0e17\u0e35\u0e48\u0e0a\u0e2d\u0e1a\u0e01\u0e31\u0e19</a></li><li><a class="p p3" href="/2017/04/2-bedrooms-cozy-condo-interior.html"/><a class="t" href="/2017/04/2-bedrooms-cozy-condo-interior.html">\u0e41\u0e15\u0e48\u0e07\u0e04\u0e2d\u0e19\u0e42\u0e14\u0e2a\u0e27\u0e22\u0e46 2 \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19 \u0e19\u0e48\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e21\u0e32\u0e01\u0e46 (\u0e23\u0e39\u0e1b\u0e40\u0e22\u0e2d\u0e30)</a></li><li><a class="p p4" href="/2017/02/61-small-kitchen-designs.html"/><a class="t" href="/2017/02/61-small-kitchen-designs.html">61 \u0e41\u0e1a\u0e1a\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27\u0e02\u0e19\u0e32\u0e14\u0e40\u0e25\u0e47\u0e01 \u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27\u0e40\u0e25\u0e47\u0e01\u0e46\u0e01\u0e47\u0e2a\u0e27\u0e22\u0e44\u0e14\u0e49</a></li><li><a class="p p5" href="/2017/09/47-garden-condo-ideas.html"/><a class="t" href="/2017/09/47-garden-condo-ideas.html">47 \u0e44\u0e2d\u0e40\u0e14\u0e35\u0e22\u0e08\u0e31\u0e14\u0e2a\u0e27\u0e19\u0e04\u0e2d\u0e19\u0e42\u0e14 \u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e19\u0e49\u0e2d\u0e22\u0e01\u0e47\u0e2a\u0e27\u0e22\u0e44\u0e14\u0e49</a></li></ul></div><div class="section" id="sidebarRight"><div class="widget HTML" data-version="1" id="HTML2">'+D()+"</div></div><div class=\"widget\" id=\"HTML7\"><h2>\u0e2a\u0e35\u0e2b\u0e49\u0e2d\u0e07</h2><div class='wc ll i'><a href='/search/label/\u0e42\u0e17\u0e19\u0e2a\u0e35\u0e04\u0e23\u0e35\u0e21'><b style='color:#FDA'>\u25fc\ufe0e </b>\u0e2a\u0e35\u0e04\u0e23\u0e35\u0e21</a><a href='/search/label/\u0e42\u0e17\u0e19\u0e2a\u0e35\u0e0a\u0e21\u0e1e\u0e39'><b style='color:#F6B'>\u25fc\ufe0e </b>\u0e2a\u0e35\u0e0a\u0e21\u0e1e\u0e39</a><a href='/search/label/\u0e42\u0e17\u0e19\u0e2a\u0e35\u0e14\u0e33'><b style='color:#000'>\u25fc\ufe0e </b>\u0e2a\u0e35\u0e14\u0e33</a><a href='/search/label/\u0e42\u0e17\u0e19\u0e2a\u0e35\u0e1f\u0e49\u0e32'><b style='color:#0FF'>\u25fc\ufe0e </b>\u0e2a\u0e35\u0e1f\u0e49\u0e32</a><a href='/search/label/\u0e42\u0e17\u0e19\u0e2a\u0e35\u0e21\u0e48\u0e27\u0e07'><b style='color:#93C'>\u25fc\ufe0e </b>\u0e2a\u0e35\u0e21\u0e48\u0e27\u0e07</a><a href='/search/label/\u0e42\u0e17\u0e19\u0e2a\u0e35\u0e40\u0e02\u0e35\u0e22\u0e27'><b style='color:#0F0'>\u25fc\ufe0e </b>\u0e2a\u0e35\u0e40\u0e02\u0e35\u0e22\u0e27</a></div></div><div class=\"gp\" id=\"HTML12\"><div class='p14'></div><div><h3> &nbsp; Khai Runner</h3><a href='https://plus.google.com/+KhaiRunner' target='_blank'> &nbsp; &nbsp;About Me</a></div></div>";1200<B?document.getElementById("HTML8").innerHTML=F("<h2>\u0e41\u0e15\u0e48\u0e07\u0e1a\u0e49\u0e32\u0e19</h2><div class='wc ll i'><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19'><b>\ud83d\udca4 </b>\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19</a><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19\u0e40\u0e14\u0e47\u0e01'><b>\ud83d\udc76 </b>\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19\u0e40\u0e14\u0e47\u0e01</a><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e31\u0e48\u0e07\u0e40\u0e25\u0e48\u0e19'><b>\ud83d\udcfa </b>\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e31\u0e48\u0e07\u0e40\u0e25\u0e48\u0e19</a><a href='/search/label/\u0e41\u0e1a\u0e1a\u0e15\u0e39\u0e49\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32'><b>\ud83d\udc55 </b>\u0e15\u0e39\u0e49\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32</a><a href='/search/label/\u0e40\u0e01\u0e49\u0e32\u0e2d\u0e35\u0e49\u0e41\u0e25\u0e30\u0e42\u0e0b\u0e1f\u0e32'><b>\ud83d\udcba </b>\u0e40\u0e01\u0e49\u0e32\u0e2d\u0e35\u0e49\u0e41\u0e25\u0e30\u0e42\u0e0b\u0e1f\u0e32</a><a href='/search/label/\u0e0a\u0e31\u0e49\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d'><b>\ud83d\udcda </b>\u0e0a\u0e31\u0e49\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d</a><a href='/search/label/\u0e41\u0e15\u0e48\u0e07\u0e1c\u0e19\u0e31\u0e07'><b>\ud83c\udfa8 </b>\u0e41\u0e15\u0e48\u0e07\u0e1c\u0e19\u0e31\u0e07</a><a href='/search/label/\u0e41\u0e1a\u0e1a\u0e42\u0e2e\u0e21\u0e2d\u0e2d\u0e1f\u0e1f\u0e34\u0e28'><b>\ud83c\udfe2 </b>\u0e41\u0e1a\u0e1a\u0e42\u0e2e\u0e21\u0e2d\u0e2d\u0e1f\u0e1f\u0e34\u0e28</a><a href='/search/label/\u0e2a\u0e27\u0e19\u0e2a\u0e27\u0e22'><b>\ud83c\udf37 </b>\u0e2a\u0e27\u0e19\u0e2a\u0e27\u0e22</a><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33'><b>\ud83d\udebd </b>\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33</a><a href='/search/label/\u0e41\u0e1a\u0e1a\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27'><b>\ud83c\udf74 </b>\u0e41\u0e1a\u0e1a\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27</a></div>"):a+="<div id='sb3'><div id='sb2' class='sidebar'><div class='widget' id='HTML9'><h2>\u0e41\u0e15\u0e48\u0e07\u0e1a\u0e49\u0e32\u0e19</h2><div class='wc ll i'><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19'><b>\ud83d\udca4 </b>\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19</a><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19\u0e40\u0e14\u0e47\u0e01'><b>\ud83d\udc76 </b>\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19\u0e40\u0e14\u0e47\u0e01</a><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e31\u0e48\u0e07\u0e40\u0e25\u0e48\u0e19'><b>\ud83d\udcfa </b>\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e31\u0e48\u0e07\u0e40\u0e25\u0e48\u0e19</a><a href='/search/label/\u0e41\u0e1a\u0e1a\u0e15\u0e39\u0e49\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32'><b>\ud83d\udc55 </b>\u0e15\u0e39\u0e49\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32</a><a href='/search/label/\u0e40\u0e01\u0e49\u0e32\u0e2d\u0e35\u0e49\u0e41\u0e25\u0e30\u0e42\u0e0b\u0e1f\u0e32'><b>\ud83d\udcba </b>\u0e40\u0e01\u0e49\u0e32\u0e2d\u0e35\u0e49\u0e41\u0e25\u0e30\u0e42\u0e0b\u0e1f\u0e32</a><a href='/search/label/\u0e0a\u0e31\u0e49\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d'><b>\ud83d\udcda </b>\u0e0a\u0e31\u0e49\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d</a><a href='/search/label/\u0e41\u0e15\u0e48\u0e07\u0e1c\u0e19\u0e31\u0e07'><b>\ud83c\udfa8 </b>\u0e41\u0e15\u0e48\u0e07\u0e1c\u0e19\u0e31\u0e07</a><a href='/search/label/\u0e41\u0e1a\u0e1a\u0e42\u0e2e\u0e21\u0e2d\u0e2d\u0e1f\u0e1f\u0e34\u0e28'><b>\ud83c\udfe2 </b>\u0e41\u0e1a\u0e1a\u0e42\u0e2e\u0e21\u0e2d\u0e2d\u0e1f\u0e1f\u0e34\u0e28</a><a href='/search/label/\u0e2a\u0e27\u0e19\u0e2a\u0e27\u0e22'><b>\ud83c\udf37 </b>\u0e2a\u0e27\u0e19\u0e2a\u0e27\u0e22</a><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33'><b>\ud83d\udebd </b>\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33</a><a href='/search/label/\u0e41\u0e1a\u0e1a\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27'><b>\ud83c\udf74 </b>\u0e41\u0e1a\u0e1a\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27</a></div></div></div></div>";document.getElementById("sb").innerHTML=F(a);document.getElementById("fc").innerHTML=F("<div id='f' class='woo'><div class='ft'><div class='widget' id='HTML4'><h2>Home Decor</h2><div class='cl i'><a href='/search/label/\u0e15\u0e39\u0e49\u0e27\u0e32\u0e07\u0e17\u0e35\u0e27\u0e35'><b>\ud83d\udcfa </b>\u0e15&#3641;&#3657;\u0e27\u0e32\u0e07\u0e17&#3637;\u0e27&#3637;</a><a href='/search/label/\u0e42\u0e23\u0e07\u0e23\u0e16'><b>\ud83d\ude97 </b>\u0e42\u0e23\u0e07\u0e23\u0e16</a><a href='/search/label/\u0e2a\u0e19\u0e32\u0e21\u0e2b\u0e0d\u0e49\u0e32'><b>\ud83c\udf3f </b>\u0e2a\u0e19\u0e32\u0e21\u0e2b\u0e0d&#3657;\u0e32</a><a href='/search/label/\u0e2a\u0e27\u0e19\u0e41\u0e19\u0e27\u0e15\u0e31\u0e49\u0e07'><b>\ud83c\udf31 </b>\u0e2a\u0e27\u0e19\u0e41\u0e19\u0e27\u0e15&#3633;&#3657;\u0e07</a><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e1e\u0e23\u0e30'><b>\ud83d\ude4f </b>\u0e2b&#3657;\u0e2d\u0e07\u0e1e\u0e23\u0e30</a><a href='/search/label/\u0e1a\u0e48\u0e2d\u0e1b\u0e25\u0e32'><b>&#9970; </b>\u0e2a\u0e23\u0e30\u0e19&#3657;\u0e33</a><a href='/search/label/\u0e1e\u0e23\u0e21'><b>\ud83d\udc63 </b>\u0e1e\u0e23\u0e21</a><a href='/search/label/\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e44\u0e1f\u0e1f\u0e49\u0e32'><b>\ud83d\udd0c </b>\u0e40\u0e04\u0e23&#3639;&#3656;\u0e2d\u0e07\u0e43\u0e0a&#3657;\u0e44\u0e1f\u0e1f&#3657;\u0e32</a><a href='/search/label/\u0e0b\u0e48\u0e2d\u0e21\u0e1a\u0e49\u0e32\u0e19'><b>\ud83d\udd27 </b>\u0e0b&#3656;\u0e2d\u0e21\u0e1a&#3657;\u0e32\u0e19</a></div></div></div><div class='ft'><div class='widget' id='HTML5'><h2>Month's Popular Posts</h2><div class='pp'><ul><li><a class=\"p p11\" href=\"/2017/02/42-small-front-yard-ideas.html\"/><a class=\"t\" href=\"/2017/02/42-small-front-yard-ideas.html\">42 \u0e44\u0e2d\u0e40\u0e14\u0e35\u0e22\u0e08\u0e31\u0e14\u0e2a\u0e27\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e1a\u0e49\u0e32\u0e19 \u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e19\u0e49\u0e2d\u0e22\u0e46</a></li><li><a class=\"p p12\" href=\"/2017/10/30-kitchen-ideas-for-one-floor-house.html\"/><a class=\"t\" href=\"/2017/10/30-kitchen-ideas-for-one-floor-house.html\">30 \u0e41\u0e1a\u0e1a\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27\u0e1a\u0e49\u0e32\u0e19\u0e0a\u0e31\u0e49\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27 \u0e2b\u0e32\u0e44\u0e2d\u0e40\u0e14\u0e35\u0e22\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e43\u0e08\u0e01\u0e31\u0e19</a></li><li><a class=\"p p13\" href=\"/2017/04/cozy-white-condo-interior.html\"/><a class=\"t\" href=\"/2017/04/cozy-white-condo-interior.html\">\u0e41\u0e1a\u0e1a\u0e41\u0e15\u0e48\u0e07\u0e04\u0e2d\u0e19\u0e42\u0e14\u0e2a\u0e27\u0e22\u0e46 \u0e40\u0e19\u0e49\u0e19\u0e2a\u0e35\u0e02\u0e32\u0e27 \u0e2a\u0e27\u0e22\u0e07\u0e32\u0e21 \u0e19\u0e48\u0e32\u0e2d\u0e22\u0e39\u0e48</a></li></ul></div></div></div><div class='ft'><div class='widget' id='HTML9'><h2>More Topics</h2><div class='cl'><a href='/search/label/IKEA'>IKEA</a><a href='/search/label/SB Design Square'>SB</a><a href='/search/label/\u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e0b\u0e37\u0e49\u0e2d\u0e1a\u0e49\u0e32\u0e19'>\u0e40\u0e25&#3639;\u0e2d\u0e01\u0e0b&#3639;&#3657;\u0e2d\u0e1a&#3657;\u0e32\u0e19</a><a href='/search/label/\u0e04\u0e2d\u0e19\u0e42\u0e14'>\u0e04\u0e2d\u0e19\u0e42\u0e14</a><a href='/search/label/\u0e15\u0e32\u0e01\u0e1c\u0e49\u0e32'>\u0e15\u0e32\u0e01\u0e1c&#3657;\u0e32</a><a href='/search/label/\u0e1a\u0e31\u0e19\u0e44\u0e14'>\u0e1a&#3633;\u0e19\u0e44\u0e14</a><a href='/search/label/\u0e1a\u0e49\u0e32\u0e19\u0e0a\u0e31\u0e49\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27'>\u0e1a&#3657;\u0e32\u0e19\u0e0a&#3633;&#3657;\u0e19\u0e40\u0e14&#3637;\u0e22\u0e27</a><a href='/search/label/\u0e21\u0e48\u0e32\u0e19'>\u0e21&#3656;\u0e32\u0e19</a><a href='/search/label/\u0e27\u0e32\u0e07\u0e41\u0e1c\u0e19\u0e01\u0e32\u0e23\u0e40\u0e07\u0e34\u0e19'>\u0e41\u0e1c\u0e19\u0e01\u0e32\u0e23\u0e40\u0e07&#3636;\u0e19</a><a href='/search/label/\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e0b\u0e31\u0e01\u0e1c\u0e49\u0e32'>\u0e40\u0e04\u0e23&#3639;&#3656;\u0e2d\u0e07\u0e0b&#3633;\u0e01\u0e1c&#3657;\u0e32</a><a href='/search/label/\u0e41\u0e15\u0e48\u0e07\u0e1a\u0e49\u0e32\u0e19'>\u0e41\u0e15&#3656;\u0e07\u0e1a&#3657;\u0e32\u0e19</a></div></div></div><div class='ft'><div id='ft4'><div class='widget ContactForm' id='ContactForm2'><h2>Contact Us</h2><form name='contact-form'>\u0e0a&#3639;&#3656;\u0e2d<br/><input class='cf' id='ContactForm2_contact-form-name' name='name' size='30' type='text' value=''/><p></p>\u0e2d&#3637;\u0e40\u0e21\u0e25*<br/><input class='cf' id='ContactForm2_contact-form-email' name='email' size='30' type='text' value=''/><p></p>\u0e02&#3657;\u0e2d\u0e04\u0e27\u0e32\u0e21*<br/><textarea class='cf' cols='25' id='ContactForm2_contact-form-email-message' name='email-message' rows='5'></textarea><p></p><input class='cfb' id='ContactForm2_contact-form-submit' type='button' value='\u0e2a\u0e48\u0e07'/><div style='text-align:center;max-width:222px;width:100%'><p class='contact-form-error-message' id='ContactForm2_contact-form-error-message'></p><p class='contact-form-success-message' id='ContactForm2_contact-form-success-message'></p></div></form></div></div></div></div><div id='cr' class='woo'><p><a href='https://buildsweethome.blogspot.com/'>Build Sweet Home</a> &#169; 2018 All rights reserved.  \u0e2a\u0e07\u0e27\u0e19\u0e25&#3636;\u0e02\u0e2a&#3636;\u0e17\u0e18&#3636;&#3660;\u0e40\u0e19&#3639;&#3657;\u0e2d\u0e2b\u0e32\u0e40\u0e27&#3655;\u0e1a\u0e44\u0e0b\u0e15&#3660; \u0e2b&#3657;\u0e32\u0e21\u0e04&#3633;\u0e14\u0e25\u0e2d\u0e01 \u0e40\u0e1c\u0e22\u0e41\u0e1e\u0e23&#3656;\u0e01&#3656;\u0e2d\u0e19\u0e44\u0e14&#3657;\u0e23&#3633;\u0e1a\u0e2d\u0e19&#3640;\u0e0d\u0e32\u0e15 | Theme by <a href='http://www.templateism.com' rel='nofollow'>Templateism</a></div></div></div>")}1200<B&&(G(),$("#ft4").click(N));function C(){P=!0;$.ajax({type:"GET",url:"https://connect.facebook.net/en_US/sdk.js",success:function(){FB.init({appId:document.querySelector("meta[property='fb:app_id']").getAttribute("content"),xfbml:!0,version:"v3.2"})},dataType:"script",cache:!0})}function K(){$("[id^=adMid_] a:has(img)").click(function(){return!1})}function L(a){if(!(1200<a)){var c=$("#main-wrapper .post-body").offset().top,g=$("#fc").offset().top,b=$(".post-footer").offset().top,d=$(".soF"),e=0,k="0";440<a?k="-25px":320<a&&(k="-15px");$(window).scroll(function(){var a=$(this).scrollTop();!P&&a>b&&(C(),$(".soF").append('<div style="padding-top:13px;margin-left:-15px;float:left;background:#FFF">\ud83d\udce3 \u0e0a\u0e48\u0e27\u0e22\u0e41\u0e0a\u0e23\u0e4c\u0e2b\u0e19\u0e48\u0e2d\u0e22\u0e19\u0e30 \ud83d\ude19\ud83d\ude4f</div>'));var q=d.css("position");a>c&&a<g?3E3<a&&"fixed"==q||(a=$('.adsbygoogle-noablate[data-anchor-status="displayed"]'),e="0px"==a.css("top")?(a=a.css("height"))?a:65:0,d.css({display:"inline",position:"fixed",top:e,"margin-left":k}),g=$("#fc").offset().top):"static"!=q&&"relative"!=q&&d.css({display:"block",position:"relative",top:0,"margin-left":0})})}}function Q(a,c){var g=($(window).width()-575)/2,b=($(window).height()-400)/2;window.open(a,c,"status=1,width=575,height=400,top="+b+",left="+g)}function R(){var a=window.location.href.split("?")[0];$(".tw").click(function(){var a="https://twitter.com/share?text="+$(".post-title").text();Q(a,"twitter");return!1});$(".fb").click(function(){Q("https://www.facebook.com/sharer/sharer.php?u="+a,"Facebook");return!1});$(".g").click(function(){Q("https://plus.google.com/share?url="+a,"Google+");return!1});$.getJSON("https://graph.facebook.com/?id="+a,function(a){a&&a.share&&0<a.share.share_count&&$(".fb").append(" "+a.share.share_count)})}if(A){K();L(B);R();var pagerLink=$('a.pre[href=""],a.n[href=""]');if(0<pagerLink.length){var message="This is the oldest post.";pagerLink.hasClass("n")&&(message="This is the latest post.");pagerLink.removeAttr("href");pagerLink[0].innerHTML+=" <div style='color:#888'>"+message+"</div></a> "}}(function(a){a.fn.resizeToParent=function(c){function g(a){a.css({width:"",height:"","margin-left":"","margin-top":""});var b=a.parents(c.parent).width(),d=a.parents(c.parent).height(),e=a.width(),g=a.height(),m=e/b;g/m<d?(a.css({width:"auto",height:d}),e/=g/d,g=d):(a.css({height:"auto",width:b}),e=b,g/=m);a.css({"margin-left":(e-b)/-2,"margin-top":(g-d)/-2})}c=a.extend({parent:"div",delay:100},c);var b,d=this;a(window).on("resize",function(){clearTimeout(b);b=setTimeout(function(){d.each(function(){g(a(this))})},c.delay)});return this.each(function(){var b=a(this);b.attr("src",b.attr("src"));b.load(function(){g(b)});this.complete&&g(b)})}})(jQuery);(function(a,c){if(!a)return c;var g=function(){this.items=this.el=c;this.sizes=[];this.max=[0,0];this.current=0;this.interval=c;this.opts={speed:500,delay:3E3,complete:c,keys:!c,dots:c,fluid:c};var b=this;this.init=function(b,e){this.el=b;this.ul=b.children("ul");this.max=[b.outerWidth(),b.outerHeight()];this.items=this.ul.children("li").each(this.calculate);this.opts=a.extend(this.opts,e);this.setup();return this};this.calculate=function(d){var e=a(this),c=e.outerWidth();e=e.outerHeight();b.sizes[d]=[c,e];c>b.max[0]&&(b.max[0]=c);e>b.max[1]&&(b.max[1]=e)};this.setup=function(){this.el.css({overflow:"hidden",width:b.max[0],height:this.items.first().outerHeight()});this.ul.css({width:100*this.items.length+"%",position:"relative"});this.items.css("width",100/this.items.length+"%");this.opts.delay!==c&&(this.start(),this.el.hover(this.stop,this.start));this.opts.keys&&a(document).keydown(this.keys);this.opts.dots&&this.dots();if(this.opts.fluid){var d=function(){b.el.css("width",Math.min(Math.round(b.el.outerWidth()/b.el.parent().outerWidth()*100),100)+"%")};d();a(window).resize(d)}this.opts.arrows&&this.el.parent().append('<p class="arrows"><span class="prev">\u00e2\u2020\u0090</span><span class="next">\u00e2\u2020\u2019</span></p>').find(".arrows span").click(function(){a.isFunction(b[this.className])&&b[this.className]()});if(a.event.swipe)this.el.on("swipeleft",b.prev).on("swiperight",b.next)};this.move=function(d,c){this.items.eq(d).length||(d=0);0>d&&(d=this.items.length-1);var e={height:this.items.eq(d).outerHeight()},g=c?5:this.opts.speed;this.ul.is(":animated")||(b.el.find(".dot:eq("+d+")").addClass("active").siblings().removeClass("active"),this.el.animate(e,g)&&this.ul.animate(a.extend({left:"-"+d+"00%"},e),g,function(e){b.current=d;a.isFunction(b.opts.complete)&&!c&&b.opts.complete(b.el)}))};this.start=function(){b.interval=setInterval(function(){b.move(b.current+1)},b.opts.delay)};this.stop=function(){b.interval=clearInterval(b.interval);return b};this.keys=function(d){d=d.which;var c={37:b.prev,39:b.next,27:b.stop};if(a.isFunction(c[d]))c[d]()};this.next=function(){return b.stop().move(b.current+1)};this.prev=function(){return b.stop().move(b.current-1)};this.dots=function(){var c='<ol class="dots">';a.each(this.items,function(a){c+='<li class="dot'+(1>a?" active":"")+'">'+(a+1)+"</li>"});c+="</ol>";this.el.addClass("has-dots").append(c).find(".dot").click(function(){b.move(a(this).index())})}};a.fn.unslider=function(b){var c=this.length;return this.each(function(d){var e=a(this),p=(new g).init(e,b);e.data("unslider"+(1<c?"-"+(d+1):""),p)})}})(window.jQuery,!1);function H(a,c,g){switch(c){case "mainSliderArea":return a.replace("s72-c","s1600");case "recent1Area":case "recent2Area":return a.replace("s72-c","s300");case "recent5Area":case "recent6Area":if(1==g)return a.replace("s72-c","s300")}return a}function I(a,c,g,b){var d=b.showpostthumbnails,e=b.showcommentnum,k=b.showpostdate,p=b.showpostsummary,q=b.numchars;b=b.numposts;var v=0,m='<ul id="label_with_thumbs">';a=a.feed.entry;for(var t=0;t<a.length;++t){var l=a[t];if(l){for(var f=!1,n=l.category,h=0;h<n.length;++h)if(n[h].term==c){f=!0;break}if(f){++v;n=l.title.$t;if(t==a.length)break;for(f=0;f<l.link.length;++f)if(h=l.link[f],"replies"==h.rel&&"text/html"==h.type){var r=h.title;var y=h.href}else if("alternate"==h.rel){var w=h.href;break}h=(f=l.media$thumbnail)&&f.url?f.url:"http://goo.gl/LsGgtD";h=H(h,g.id,v);f=l.published.$t;f.substring(0,4);f.substring(5,7);f.substring(8,10);m+='<li class="recent-box">';1==d&&(m+='<div class="imageContainer"><a href="'+w+'"><img class="label_thumb" src="'+h+'" title="'+n+'" alt="'+n+'"/></a></div>');m+='<a class="label_title" href="'+w+'">'+n+"</a>";f=l.published.$t;n=[1,2,3,4,5,6,7,8,9,10,11,12];h="Jan Feb Mar Apr May June July Aug Sept Oct Nov Dec".split(" ");var z=f.split("-")[2].substring(0,2),x=f.split("-")[1];f=f.split("-")[0];for(var u=0;u<n.length;++u)if(parseInt(x)==n[u]){x=h[u];break}f=z+" "+x+" "+f;1==k&&(m+='<div class="toe"><a href="'+w+'" class="post-date">'+f+"</a>");1==e&&("1 Comments"==r&&(r="1 Comment"),"0 Comments"==r&&(r="No Comments"),m+='<a class="recent-com" href="'+y+'">'+r+"</a></div>");f="";"content"in l?f=l.content.$t:"summary"in l&&(f=l.summary.$t);f=f.replace(/<\S[^>]*>/g,"");1==p&&(f.length<q?m+=f:(f=f.substring(0,q),l=f.lastIndexOf(" "),f=f.substring(0,l),m+='<p class="post-summary">'+f+"...</p>"));m+="</li>";if(b==v)break}}}g.innerHTML=m+"</ul>"}function J(){$("#mainSlider").length&&$.getJSON("/feeds/posts/default?orderby=published&alt=json&max-results=70",function(a){I(a,$("#mainSlider").val(),$("#mainSliderArea")[0],{numposts:5,showpostthumbnails:!0,displaymore:!1,displayseparator:!0,showcommentnum:!1,showpostdate:!1,showpostsummary:!1,numchars:100});$(".slider").unslider({speed:500,delay:3E3,complete:function(){},keys:!0,dots:!0,fluid:!1});$("<div class='slideraro'><a class='unslider-arrow prev'></a><a class='unslider-arrow next'></a></div>").insertBefore(".slider ul#label_with_thumbs");var c=$(".slider").unslider();$(".unslider-arrow").click(function(){var a=this.className.split(" ")[1];c.data("unslider")[a]()});$(window).bind("load",function(){$(".slider, .cover").css("visibility","visible")});I(a,$("#recent1Category").val(),$("#recent1Area")[0],{numposts:4,showpostthumbnails:!0,showcommentnum:!1,showpostdate:!0,showpostsummary:!1,numchars:100});I(a,$("#recent2Category").val(),$("#recent2Area")[0],{numposts:2,showpostthumbnails:!0,showcommentnum:!1,showpostdate:!0,showpostsummary:!1,numchars:100});I(a,$("#recent3Category").val(),$("#recent3Area")[0],{numposts:6,showpostthumbnails:!0,showcommentnum:!1,showpostdate:!0,showpostsummary:!1,numchars:100});I(a,$("#recent5Category").val(),$("#recent5Area")[0],{numposts:5,showpostthumbnails:!0,showcommentnum:!1,showpostdate:!0,showpostsummary:!0,numchars:150});I(a,$("#recent6Category").val(),$("#recent6Area")[0],{numposts:5,showpostthumbnails:!0,showcommentnum:!1,showpostdate:!0,showpostsummary:!0,numchars:150});$(".imageContainer img").resizeToParent();E($("#main-wrapper a").toArray())})}A||(J(),$("#Blog1 .imageContainer .post-thumbnail").attr("src",function(a,c){return c.replace("s72-c","s1600")}),$(".imageContainer img").resizeToParent());function S(){var a=$("#m");a.on("mousedown click",function(){1<a.children().length||(a.append("<option value='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e31\u0e48\u0e07\u0e40\u0e25\u0e48\u0e19'>\ud83d\udcba \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e31\u0e48\u0e07\u0e40\u0e25\u0e48\u0e19</option><option value='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27'>\ud83c\udf73 \u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27</option><option value='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19'>\ud83d\udca4 \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19</option><option value='/search/label/\u0e2a\u0e27\u0e19\u0e2a\u0e27\u0e22'>\ud83d\udc90 \u0e2a\u0e27\u0e19\u0e2a\u0e27\u0e22</option><option value='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33'>\ud83d\udebd \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33</option><option value='/'>\ud83c\udfe0 \u0e01\u0e25\u0e31\u0e1a\u0e2b\u0e19\u0e49\u0e32\u0e1a\u0e49\u0e32\u0e19</option>"),a.attr("onchange","location=this.value"))})}function M(){var a=$("#main-wrapper"),c=a.offset().top,g=A?$(".post-footer").offset().top:0,b=$("#HTML3"),d=b.height(),e=c-d,k=a.height()+e,p=c+$("#HTML8").height();$(window).scroll(function(){var c=$(this).scrollTop();!P&&A&&c>g&&(C(),$(".so").append('<div style="padding-top:9px">&nbsp; \ud83d\udce3 \u0e0a\u0e48\u0e27\u0e22\u0e41\u0e0a\u0e23\u0e4c\u0e2b\u0e19\u0e48\u0e2d\u0e22\u0e19\u0e30 \ud83d\ude19\ud83d\ude4f</div>'));k=a.height()+e;c<p?b.css({position:"relative"}):c>k?b.css({position:"absolute",bottom:"0",top:"auto"}):b.css({position:"fixed",top:"0",height:d+"px"})})}function T(){0===$("#sBox").length&&($("#sbar").append("<div id='sBox' style='position:absolute;top:-80px;width:100%'><form action='/search'><input id='sT' name='q' placeholder='Search' size='40' type='text'style='border:0;font-size:16px;height:36px;padding:0 9px;width:100%;float:left'/></form><button id='delBtn' style='font-size:1.5em;position:absolute;right:0;height:36px'>\u2716\ufe0f</button></div>"),$("#delBtn").click(function(){$("#sBox").animate({top:"-80px"})}));$("#sBox").animate({top:"0px"});$("#sT").focus()}1200<B&&(-1!=window.location.href.indexOf("?m=1")||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||M());S();$("#sBtn").click(T);if(1200>=B){var endOfContentPosition=$("#sb").offset().top-1E3;$(window).scroll(function(){$(this).scrollTop()>endOfContentPosition&&0==$("#fc").html().length&&(G(),$("#ft4").click(N))})}$(".error_page #main-wrapper").prepend('<div class="error-title"><span>404</span>');