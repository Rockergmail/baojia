define(function() {
    var today = new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate();
    var skin = {};

    // 一天检查一次皮肤信息
    function checkToday() {
      if (localStorage.styleDate !== today) {
            var xhttp;
            if (window.XMLHttpRequest) {
                xhttp = new XMLHttpRequest();
                } else {
                // code for IE6, IE5
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhttp.open("GET", "/agent/info", false);
            xhttp.onreadystatechange = function() {
              if (xhttp.readyState == 4 && xhttp.status == 200) {
                   skin = JSON.parse(xhttp.responseText)['data'];
                   localStorage['lsappname'] = skin['appname'];
                   localStorage['lsicon'] = skin['icon'];
                   localStorage['lsqq'] = skin['qq'];
                   localStorage['lsintro'] = skin['intro'];
                   localStorage['lscolor'] = skin['color'];
                   localStorage['lshbicon'] = skin['hbicon'];
                   localStorage['lshbintro'] = skin['hbintro'];
                   localStorage.styleDate = today;
              } 
            }
            xhttp.send();
            setTimeout(function(){ xhttp.abort()}, 5000);
      } else {
          skin = {  appname: localStorage['lsappname'],
                    icon: localStorage['lsicon'],
                    qq: localStorage['lsqq'],
                    intro: localStorage['lsintro'],
                    color: localStorage['lscolor'],
                    hbicon: localStorage['lshbicon'],
                    hbintro: localStorage['lshbintro'] };
      };
    }

    checkToday();

    return skin;
}); 