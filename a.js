var A=null==document.getElementById("isContent"),B=0<window.innerWidth?window.innerWidth:screen.width,L=!1,M=!1;function D(){for(var a=document.getElementById("r").value.split(","),b='<h2>Recent Posts</h2><ul class="wc pp">',g=5,f=-1!=window.location.href.indexOf("?m=1"),c=0;5>c;++c){var d=c,e=c+5,h=c+10;f&&(a[e]+="?m=1");b=0<a[h].length?b+('<li><a class="p" href="'+a[e]+'"><img alt="" border="0" height="72" src="'+a[h]+'" width="72"/></a><a class="t" href="'+a[e]+'">'+a[d]+"</a></li>"):b+('<li><a class="p p'+ ++g+'" href="'+a[e]+'"/><a class="t" href="'+a[e]+'">'+a[d]+"</a></li>")}return b+"</ul>"}function E(a){for(var b=-1!=window.location.href.indexOf("?m=1"),g=window.location.origin,f="http://"+window.location.hostname,c=0;c<a.length;++c){var d=a[c].href;0==d.indexOf(f)&&(d=d.replace("http:","https:"),a[c].setAttribute("href",d));b&&0==d.indexOf(g)&&-1==d.indexOf("?m=1")&&(d+="?m=1",a[c].setAttribute("href",d))}}function F(a){var b=document.createElement("body");b.innerHTML=a;a=b.getElementsByTagName("a");E(a);return b.innerHTML}function K(){L||$.getScript("https://www.blogger.com/static/v1/widgets/1171408283-widgets.js",function(){var a=$('link[rel="service.post"]').attr("href").split("/");a=a[a.length-3];var b=["//www.blogger.com/rearrange?blogID="+a,"//"+window.location.host+window.location.pathname,a];_WidgetManager._Init(b[0],b[1],b[2]+"");_WidgetManager._RegisterWidget("_ContactFormView",new _WidgetInfo("ContactForm2","ft4",document.getElementById("ContactForm2"),{contactFormMessageSendingMsg:"Sending...",contactFormMessageSentMsg:"Text Sent",contactFormMessageNotSentMsg:"Messages can not be sent. Please try again later.",contactFormInvalidEmailMsg:"Email address must be specified correctly.",contactFormEmptyMessageMsg:"Message can not be empty.",title:"Contact Form",blogId:a,contactFormNameMsg:"Name",contactFormEmailMsg:"Email",contactFormMessageMsg:"Message",contactFormSendMsg:"Sent",submitUrl:"https://www.blogger.com/contact-form.do"},"displayModeFull"));L=!0})}function G(){var a='<div class="widget">'+D()+"</div>",b="<div class='widget'><h2>\u0e41\u0e15\u0e48\u0e07\u0e1a\u0e49\u0e32\u0e19</h2><div class='wc ll i'><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19'><b>\ud83d\udca4 </b>\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19</a><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19\u0e40\u0e14\u0e47\u0e01'><b>\ud83d\udc76 </b>\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19\u0e40\u0e14\u0e47\u0e01</a><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e31\u0e48\u0e07\u0e40\u0e25\u0e48\u0e19'><b>\ud83d\udcfa </b>\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e31\u0e48\u0e07\u0e40\u0e25\u0e48\u0e19</a><a href='/search/label/\u0e41\u0e1a\u0e1a\u0e15\u0e39\u0e49\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32'><b>\ud83d\udc55 </b>\u0e15\u0e39\u0e49\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32</a><a href='/search/label/\u0e40\u0e01\u0e49\u0e32\u0e2d\u0e35\u0e49\u0e41\u0e25\u0e30\u0e42\u0e0b\u0e1f\u0e32'><b>\ud83d\udcba </b>\u0e40\u0e01\u0e49\u0e32\u0e2d\u0e35\u0e49\u0e41\u0e25\u0e30\u0e42\u0e0b\u0e1f\u0e32</a><a href='/search/label/\u0e0a\u0e31\u0e49\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d'><b>\ud83d\udcda </b>\u0e0a\u0e31\u0e49\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d</a><a href='/search/label/\u0e41\u0e15\u0e48\u0e07\u0e1c\u0e19\u0e31\u0e07'><b>\ud83c\udfa8 </b>\u0e41\u0e15\u0e48\u0e07\u0e1c\u0e19\u0e31\u0e07</a><a href='/search/label/\u0e41\u0e1a\u0e1a\u0e42\u0e2e\u0e21\u0e2d\u0e2d\u0e1f\u0e1f\u0e34\u0e28'><b>\ud83c\udfe2 </b>\u0e41\u0e1a\u0e1a\u0e42\u0e2e\u0e21\u0e2d\u0e2d\u0e1f\u0e1f\u0e34\u0e28</a><a href='/search/label/\u0e2a\u0e27\u0e19\u0e2a\u0e27\u0e22'><b>\ud83c\udf37 </b>\u0e2a\u0e27\u0e19\u0e2a\u0e27\u0e22</a><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33'><b>\ud83d\udebd </b>\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33</a><a href='/search/label/\u0e41\u0e1a\u0e1a\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27'><b>\ud83c\udf74 </b>\u0e41\u0e1a\u0e1a\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27</a></div></div><div class=\"widget\"><h2>\u0e2a\u0e35\u0e2b\u0e49\u0e2d\u0e07</h2><div class='wc ll i'><a href='/search/label/\u0e42\u0e17\u0e19\u0e2a\u0e35\u0e04\u0e23\u0e35\u0e21'><b style='color:#FDA'>\u25fc\ufe0e </b>\u0e2a\u0e35\u0e04\u0e23\u0e35\u0e21</a><a href='/search/label/\u0e42\u0e17\u0e19\u0e2a\u0e35\u0e0a\u0e21\u0e1e\u0e39'><b style='color:#F6B'>\u25fc\ufe0e </b>\u0e2a\u0e35\u0e0a\u0e21\u0e1e\u0e39</a><a href='/search/label/\u0e42\u0e17\u0e19\u0e2a\u0e35\u0e14\u0e33'><b style='color:#000'>\u25fc\ufe0e </b>\u0e2a\u0e35\u0e14\u0e33</a><a href='/search/label/\u0e42\u0e17\u0e19\u0e2a\u0e35\u0e1f\u0e49\u0e32'><b style='color:#0FF'>\u25fc\ufe0e </b>\u0e2a\u0e35\u0e1f\u0e49\u0e32</a><a href='/search/label/\u0e42\u0e17\u0e19\u0e2a\u0e35\u0e21\u0e48\u0e27\u0e07'><b style='color:#93C'>\u25fc\ufe0e </b>\u0e2a\u0e35\u0e21\u0e48\u0e27\u0e07</a><a href='/search/label/\u0e42\u0e17\u0e19\u0e2a\u0e35\u0e40\u0e02\u0e35\u0e22\u0e27'><b style='color:#0F0'>\u25fc\ufe0e </b>\u0e2a\u0e35\u0e40\u0e02\u0e35\u0e22\u0e27</a></div></div><div class=\"gp\"><div class='p14'></div><div><h3> &nbsp; Khai Runner</h3><a href='https://plus.google.com/+KhaiRunner' target='_blank'> &nbsp; &nbsp;About Me</a></div></div>";911>B?(b='<div class="widget"><h2>Weekly Popular Posts</h2><ul class="wc pp"><li><a class="p p1" href="/2017/02/front-garden-designs.html"/><a class="t" href="/2017/02/front-garden-designs.html">\u0e27\u0e34\u0e18\u0e35\u0e08\u0e31\u0e14\u0e2a\u0e27\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e1a\u0e49\u0e32\u0e19\u0e2a\u0e27\u0e22\u0e46 \u0e1b\u0e23\u0e30\u0e2b\u0e22\u0e31\u0e14\u0e07\u0e1a \u0e1e\u0e23\u0e49\u0e2d\u0e21 65 \u0e41\u0e1a\u0e1a\u0e2a\u0e27\u0e19\u0e2a\u0e27\u0e22</a></li><li><a class="p p2" href="/2017/09/20-modern-two-story-house-design-ideas.html"/><a class="t" href="/2017/09/20-modern-two-story-house-design-ideas.html">20 \u0e41\u0e1a\u0e1a\u0e1a\u0e49\u0e32\u0e19 2 \u0e0a\u0e31\u0e49\u0e19\u0e2a\u0e27\u0e22\u0e46 \u0e2a\u0e44\u0e15\u0e25\u0e4c\u0e42\u0e21\u0e40\u0e14\u0e34\u0e23\u0e4c\u0e19 \u0e21\u0e32\u0e2b\u0e32\u0e1a\u0e49\u0e32\u0e19\u0e17\u0e35\u0e48\u0e0a\u0e2d\u0e1a\u0e01\u0e31\u0e19</a></li><li><a class="p p3" href="/2017/04/2-bedrooms-cozy-condo-interior.html"/><a class="t" href="/2017/04/2-bedrooms-cozy-condo-interior.html">\u0e41\u0e15\u0e48\u0e07\u0e04\u0e2d\u0e19\u0e42\u0e14\u0e2a\u0e27\u0e22\u0e46 2 \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19 \u0e19\u0e48\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e21\u0e32\u0e01\u0e46 (\u0e23\u0e39\u0e1b\u0e40\u0e22\u0e2d\u0e30)</a></li><li><a class="p p4" href="/2017/02/61-small-kitchen-designs.html"/><a class="t" href="/2017/02/61-small-kitchen-designs.html">61 \u0e41\u0e1a\u0e1a\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27\u0e02\u0e19\u0e32\u0e14\u0e40\u0e25\u0e47\u0e01 \u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27\u0e40\u0e25\u0e47\u0e01\u0e46\u0e01\u0e47\u0e2a\u0e27\u0e22\u0e44\u0e14\u0e49</a></li><li><a class="p p5" href="/2017/09/47-garden-condo-ideas.html"/><a class="t" href="/2017/09/47-garden-condo-ideas.html">47 \u0e44\u0e2d\u0e40\u0e14\u0e35\u0e22\u0e08\u0e31\u0e14\u0e2a\u0e27\u0e19\u0e04\u0e2d\u0e19\u0e42\u0e14 \u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e19\u0e49\u0e2d\u0e22\u0e01\u0e47\u0e2a\u0e27\u0e22\u0e44\u0e14\u0e49</a></li></ul></div>'+a+b,document.getElementById("sb3").innerHTML=F(b)):(document.getElementById("sbC").innerHTML=F('<div class="widget"><h2>Weekly Popular Posts</h2><ul class="wc pp"><li><a class="p p1" href="/2017/02/front-garden-designs.html"/><a class="t" href="/2017/02/front-garden-designs.html">\u0e27\u0e34\u0e18\u0e35\u0e08\u0e31\u0e14\u0e2a\u0e27\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e1a\u0e49\u0e32\u0e19\u0e2a\u0e27\u0e22\u0e46 \u0e1b\u0e23\u0e30\u0e2b\u0e22\u0e31\u0e14\u0e07\u0e1a \u0e1e\u0e23\u0e49\u0e2d\u0e21 65 \u0e41\u0e1a\u0e1a\u0e2a\u0e27\u0e19\u0e2a\u0e27\u0e22</a></li><li><a class="p p2" href="/2017/09/20-modern-two-story-house-design-ideas.html"/><a class="t" href="/2017/09/20-modern-two-story-house-design-ideas.html">20 \u0e41\u0e1a\u0e1a\u0e1a\u0e49\u0e32\u0e19 2 \u0e0a\u0e31\u0e49\u0e19\u0e2a\u0e27\u0e22\u0e46 \u0e2a\u0e44\u0e15\u0e25\u0e4c\u0e42\u0e21\u0e40\u0e14\u0e34\u0e23\u0e4c\u0e19 \u0e21\u0e32\u0e2b\u0e32\u0e1a\u0e49\u0e32\u0e19\u0e17\u0e35\u0e48\u0e0a\u0e2d\u0e1a\u0e01\u0e31\u0e19</a></li><li><a class="p p3" href="/2017/04/2-bedrooms-cozy-condo-interior.html"/><a class="t" href="/2017/04/2-bedrooms-cozy-condo-interior.html">\u0e41\u0e15\u0e48\u0e07\u0e04\u0e2d\u0e19\u0e42\u0e14\u0e2a\u0e27\u0e22\u0e46 2 \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19 \u0e19\u0e48\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e21\u0e32\u0e01\u0e46 (\u0e23\u0e39\u0e1b\u0e40\u0e22\u0e2d\u0e30)</a></li><li><a class="p p4" href="/2017/02/61-small-kitchen-designs.html"/><a class="t" href="/2017/02/61-small-kitchen-designs.html">61 \u0e41\u0e1a\u0e1a\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27\u0e02\u0e19\u0e32\u0e14\u0e40\u0e25\u0e47\u0e01 \u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27\u0e40\u0e25\u0e47\u0e01\u0e46\u0e01\u0e47\u0e2a\u0e27\u0e22\u0e44\u0e14\u0e49</a></li><li><a class="p p5" href="/2017/09/47-garden-condo-ideas.html"/><a class="t" href="/2017/09/47-garden-condo-ideas.html">47 \u0e44\u0e2d\u0e40\u0e14\u0e35\u0e22\u0e08\u0e31\u0e14\u0e2a\u0e27\u0e19\u0e04\u0e2d\u0e19\u0e42\u0e14 \u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e19\u0e49\u0e2d\u0e22\u0e01\u0e47\u0e2a\u0e27\u0e22\u0e44\u0e14\u0e49</a></li></ul></div>'),1200<B?(document.getElementById("sb2").innerHTML=F(b),document.getElementById("sb3").innerHTML=F(a)):document.getElementById("sb3").innerHTML=F(a+b));document.getElementById("fc").innerHTML=F("<div id='f' class='woo'><div class='ft'><div class='widget'><h2>Home Decor</h2><div class='cl i'><a href='/search/label/\u0e15\u0e39\u0e49\u0e27\u0e32\u0e07\u0e17\u0e35\u0e27\u0e35'><b>\ud83d\udcfa </b>\u0e15&#3641;&#3657;\u0e27\u0e32\u0e07\u0e17&#3637;\u0e27&#3637;</a><a href='/search/label/\u0e42\u0e23\u0e07\u0e23\u0e16'><b>\ud83d\ude97 </b>\u0e42\u0e23\u0e07\u0e23\u0e16</a><a href='/search/label/\u0e2a\u0e19\u0e32\u0e21\u0e2b\u0e0d\u0e49\u0e32'><b>\ud83c\udf3f </b>\u0e2a\u0e19\u0e32\u0e21\u0e2b\u0e0d&#3657;\u0e32</a><a href='/search/label/\u0e2a\u0e27\u0e19\u0e41\u0e19\u0e27\u0e15\u0e31\u0e49\u0e07'><b>\ud83c\udf31 </b>\u0e2a\u0e27\u0e19\u0e41\u0e19\u0e27\u0e15&#3633;&#3657;\u0e07</a><a href='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e1e\u0e23\u0e30'><b>\ud83d\ude4f </b>\u0e2b&#3657;\u0e2d\u0e07\u0e1e\u0e23\u0e30</a><a href='/search/label/\u0e1a\u0e48\u0e2d\u0e1b\u0e25\u0e32'><b>&#9970; </b>\u0e2a\u0e23\u0e30\u0e19&#3657;\u0e33</a><a href='/search/label/\u0e1e\u0e23\u0e21'><b>\ud83d\udc63 </b>\u0e1e\u0e23\u0e21</a><a href='/search/label/\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e44\u0e1f\u0e1f\u0e49\u0e32'><b>\ud83d\udd0c </b>\u0e40\u0e04\u0e23&#3639;&#3656;\u0e2d\u0e07\u0e43\u0e0a&#3657;\u0e44\u0e1f\u0e1f&#3657;\u0e32</a><a href='/search/label/\u0e0b\u0e48\u0e2d\u0e21\u0e1a\u0e49\u0e32\u0e19'><b>\ud83d\udd27 </b>\u0e0b&#3656;\u0e2d\u0e21\u0e1a&#3657;\u0e32\u0e19</a></div></div></div><div class='ft'><div class='widget'><h2>Month's Popular Posts</h2><div class='pp'><ul><li><a class=\"p p11\" href=\"/2017/02/42-small-front-yard-ideas.html\"/><a class=\"t\" href=\"/2017/02/42-small-front-yard-ideas.html\">42 \u0e44\u0e2d\u0e40\u0e14\u0e35\u0e22\u0e08\u0e31\u0e14\u0e2a\u0e27\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e1a\u0e49\u0e32\u0e19 \u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e19\u0e49\u0e2d\u0e22\u0e46</a></li><li><a class=\"p p12\" href=\"/2017/10/30-kitchen-ideas-for-one-floor-house.html\"/><a class=\"t\" href=\"/2017/10/30-kitchen-ideas-for-one-floor-house.html\">30 \u0e41\u0e1a\u0e1a\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27\u0e1a\u0e49\u0e32\u0e19\u0e0a\u0e31\u0e49\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27 \u0e2b\u0e32\u0e44\u0e2d\u0e40\u0e14\u0e35\u0e22\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e43\u0e08\u0e01\u0e31\u0e19</a></li><li><a class=\"p p13\" href=\"/2017/04/cozy-white-condo-interior.html\"/><a class=\"t\" href=\"/2017/04/cozy-white-condo-interior.html\">\u0e41\u0e1a\u0e1a\u0e41\u0e15\u0e48\u0e07\u0e04\u0e2d\u0e19\u0e42\u0e14\u0e2a\u0e27\u0e22\u0e46 \u0e40\u0e19\u0e49\u0e19\u0e2a\u0e35\u0e02\u0e32\u0e27 \u0e2a\u0e27\u0e22\u0e07\u0e32\u0e21 \u0e19\u0e48\u0e32\u0e2d\u0e22\u0e39\u0e48</a></li></ul></div></div></div><div class='ft'><div class='widget'><h2>More Topics</h2><div class='cl'><a href='/search/label/IKEA'>IKEA</a><a href='/search/label/SB Design Square'>SB</a><a href='/search/label/\u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e0b\u0e37\u0e49\u0e2d\u0e1a\u0e49\u0e32\u0e19'>\u0e40\u0e25&#3639;\u0e2d\u0e01\u0e0b&#3639;&#3657;\u0e2d\u0e1a&#3657;\u0e32\u0e19</a><a href='/search/label/\u0e04\u0e2d\u0e19\u0e42\u0e14'>\u0e04\u0e2d\u0e19\u0e42\u0e14</a><a href='/search/label/\u0e15\u0e32\u0e01\u0e1c\u0e49\u0e32'>\u0e15\u0e32\u0e01\u0e1c&#3657;\u0e32</a><a href='/search/label/\u0e1a\u0e31\u0e19\u0e44\u0e14'>\u0e1a&#3633;\u0e19\u0e44\u0e14</a><a href='/search/label/\u0e1a\u0e49\u0e32\u0e19\u0e0a\u0e31\u0e49\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27'>\u0e1a&#3657;\u0e32\u0e19\u0e0a&#3633;&#3657;\u0e19\u0e40\u0e14&#3637;\u0e22\u0e27</a><a href='/search/label/\u0e21\u0e48\u0e32\u0e19'>\u0e21&#3656;\u0e32\u0e19</a><a href='/search/label/\u0e27\u0e32\u0e07\u0e41\u0e1c\u0e19\u0e01\u0e32\u0e23\u0e40\u0e07\u0e34\u0e19'>\u0e41\u0e1c\u0e19\u0e01\u0e32\u0e23\u0e40\u0e07&#3636;\u0e19</a><a href='/search/label/\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e0b\u0e31\u0e01\u0e1c\u0e49\u0e32'>\u0e40\u0e04\u0e23&#3639;&#3656;\u0e2d\u0e07\u0e0b&#3633;\u0e01\u0e1c&#3657;\u0e32</a><a href='/search/label/\u0e41\u0e15\u0e48\u0e07\u0e1a\u0e49\u0e32\u0e19'>\u0e41\u0e15&#3656;\u0e07\u0e1a&#3657;\u0e32\u0e19</a></div></div></div><div class='ft'><div id='ft4'><div class='widget ContactForm' id='ContactForm2'><h2>Contact Us</h2><form name='contact-form'>\u0e0a&#3639;&#3656;\u0e2d<br/><input class='cf' id='ContactForm2_contact-form-name' name='name' size='30' type='text' value=''/><p></p>\u0e2d&#3637;\u0e40\u0e21\u0e25*<br/><input class='cf' id='ContactForm2_contact-form-email' name='email' size='30' type='text' value=''/><p></p>\u0e02&#3657;\u0e2d\u0e04\u0e27\u0e32\u0e21*<br/><textarea class='cf' cols='25' id='ContactForm2_contact-form-email-message' name='email-message' rows='5'></textarea><p></p><input class='cfb' id='ContactForm2_contact-form-submit' type='button' value='\u0e2a\u0e48\u0e07'/><div style='text-align:center;max-width:222px;width:100%'><p class='contact-form-error-message' id='ContactForm2_contact-form-error-message'></p><p class='contact-form-success-message' id='ContactForm2_contact-form-success-message'></p></div></form></div></div></div></div><div id='cr' class='woo'><p><a href='https://buildsweethome.blogspot.com/'>Build Sweet Home</a> &#169; 2019 All rights reserved.  \u0e2a\u0e07\u0e27\u0e19\u0e25&#3636;\u0e02\u0e2a&#3636;\u0e17\u0e18&#3636;&#3660;\u0e40\u0e19&#3639;&#3657;\u0e2d\u0e2b\u0e32\u0e40\u0e27&#3655;\u0e1a\u0e44\u0e0b\u0e15&#3660; \u0e2b&#3657;\u0e32\u0e21\u0e04&#3633;\u0e14\u0e25\u0e2d\u0e01 \u0e40\u0e1c\u0e22\u0e41\u0e1e\u0e23&#3656;\u0e01&#3656;\u0e2d\u0e19\u0e44\u0e14&#3657;\u0e23&#3633;\u0e1a\u0e2d\u0e19&#3640;\u0e0d\u0e32\u0e15 | Theme by <a href='http://www.templateism.com' rel='nofollow'>Templateism</a></div></div></div>")}911<=B&&(G(),$("#ft4").click(K));function C(){M=!0;$.ajax({type:"GET",url:"https://connect.facebook.net/en_US/sdk.js",success:function(){FB.init({appId:document.querySelector("meta[property='fb:app_id']").getAttribute("content"),xfbml:!0,version:"v3.2"})},dataType:"script",cache:!0})}function H(){$("[id^=adMid_] a:has(img)").click(function(){return!1})}function I(a){if(!(911<=a)){var b=$("#mw .pb").offset().top,g=$("#fc").offset().top,f=$(".pf").offset().top,c=$(".soF"),d=0,e="0";440<a?e="-25px":320<a&&(e="-15px");$(window).scroll(function(){var a=$(this).scrollTop();!M&&a>f&&(C(),$(".soF").append('<div style="padding-top:13px;margin-left:-15px;float:left;background:#FFF">\ud83d\udce3 \u0e0a\u0e48\u0e27\u0e22\u0e41\u0e0a\u0e23\u0e4c\u0e2b\u0e19\u0e48\u0e2d\u0e22\u0e19\u0e30 \ud83d\ude19\ud83d\ude4f</div>'));var k=c.css("position");a>b&&a<g?3E3<a&&"fixed"==k||(a=$('.adsbygoogle-noablate[data-anchor-status="displayed"]'),d="0px"==a.css("top")?(a=a.css("height"))?a:65:0,c.css({display:"inline",position:"fixed",top:d,"margin-left":e}),g=$("#fc").offset().top):"static"!=k&&"relative"!=k&&c.css({display:"block",position:"relative",top:0,"margin-left":0})})}}function N(a,b){var g=($(window).width()-575)/2,f=($(window).height()-400)/2;window.open(a,b,"status=1,width=575,height=400,top="+f+",left="+g)}function O(){var a=window.location.href.split("?")[0];$(".tw").click(function(){var a="https://twitter.com/share?text="+$(".pt").text();N(a,"twitter");return!1});$(".fb").click(function(){N("https://www.facebook.com/sharer/sharer.php?u="+a,"Facebook");return!1});$.getJSON("https://graph.facebook.com/?id="+a,function(a){a&&a.share&&0<a.share.share_count&&$(".fb").append(" "+a.share.share_count)})}if(A){H();I(B);O();var pagerLink=$('a.pre[href=""],a.n[href=""]');if(0<pagerLink.length){var message="This is the oldest post.";pagerLink.hasClass("n")&&(message="This is the latest post.");pagerLink.removeAttr("href");pagerLink[0].innerHTML+=" <div style='color:#888'>"+message+"</div></a> "}}if(!A){var homePageAction=function(){HomePageHelper.LoadInfo();E($("#mw a").toArray());HomePageHelper.InitResizeToParent();$(".imageContainer img").resizeToParent()};"undefined"===typeof HomePageHelper?$.getScript("https://cdn.jsdelivr.net/gh/KhaiRunner/BlogScripts@latest/HomePage.js",homePageAction):homePageAction();$("#Blog1 .imageContainer .post-thumbnail").attr("src",function(a,b){return b.replace("s72-c","s1600")})}function P(){var a=$("#m");a.on("mousedown click",function(){1<a.children().length||(a.append("<option value='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e31\u0e48\u0e07\u0e40\u0e25\u0e48\u0e19'>\ud83d\udcba \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e31\u0e48\u0e07\u0e40\u0e25\u0e48\u0e19</option><option value='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27'>\ud83c\udf73 \u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27</option><option value='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19'>\ud83d\udca4 \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19</option><option value='/search/label/\u0e2a\u0e27\u0e19\u0e2a\u0e27\u0e22'>\ud83d\udc90 \u0e2a\u0e27\u0e19\u0e2a\u0e27\u0e22</option><option value='/search/label/\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33'>\ud83d\udebd \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33</option><option value='/'>\ud83c\udfe0 \u0e01\u0e25\u0e31\u0e1a\u0e2b\u0e19\u0e49\u0e32\u0e1a\u0e49\u0e32\u0e19</option>"),a.attr("onchange","location=this.value"))})}function J(){var a=$("#mw"),b=a.offset().top,g=A?$(".pf").offset().top:0,f=$("#HTML3"),c=f.height(),d=b-c,e=a.height()+d,h=b+459;$(window).scroll(function(){var b=$(this).scrollTop();!M&&A&&b>g&&(C(),$(".so").append('<div style="padding-top:9px">&nbsp; \ud83d\udce3 \u0e0a\u0e48\u0e27\u0e22\u0e41\u0e0a\u0e23\u0e4c\u0e2b\u0e19\u0e48\u0e2d\u0e22\u0e19\u0e30 \ud83d\ude19\ud83d\ude4f</div>'));e=a.height()+d;b<h?f.css({position:"relative"}):b>e?f.css({position:"absolute",bottom:"0",top:"auto"}):f.css({position:"fixed",top:"0",height:c+"px"})})}function Q(){0===$("#sBox").length&&($("#sbar").append("<div id='sBox' style='position:absolute;top:-80px;width:100%'><form action='/search'><input id='sT' name='q' placeholder='Search' size='40' type='text'style='border:0;font-size:16px;height:36px;padding:0 9px;width:100%;float:left'/></form><button id='delBtn' style='font-size:1.5em;position:absolute;right:0;height:36px'>\u2716\ufe0f</button></div>"),$("#delBtn").click(function(){$("#sBox").animate({top:"-80px"})}));$("#sBox").animate({top:"0px"});$("#sT").focus()}911<=B&&(-1!=window.location.href.indexOf("?m=1")||J());P();$("#sBtn").click(Q);if(911>B){var endOfContentPosition=$("#sb").offset().top-1E3;$(window).scroll(function(){$(this).scrollTop()>endOfContentPosition&&0==$("#fc").html().length&&(G(),$("#ft4").click(K))})}$(".error_page #mw").prepend('<div class="error-title"><span>404</span>');