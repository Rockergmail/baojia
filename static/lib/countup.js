var CountUp=function(c,a,b,d,e,g){var f=0;var j=["webkit","moz","ms","o"];for(var h=0;h<j.length&&!window.requestAnimationFrame;++h){window.requestAnimationFrame=window[j[h]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[j[h]+"CancelAnimationFrame"]||window[j[h]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(o,m){var l=new Date().getTime();var n=Math.max(0,16-(l-f));var p=window.setTimeout(function(){o(l+n)},n);f=l+n;return p}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(l){clearTimeout(l)}}this.options={useEasing:true,useGrouping:true,separator:",",decimal:"."};for(var i in g){if(g.hasOwnProperty(i)){this.options[i]=g[i]}}if(this.options.separator===""){this.options.useGrouping=false}if(!this.options.prefix){this.options.prefix=""}if(!this.options.suffix){this.options.suffix=""}this.d=(typeof c==="string")?document.getElementById(c):c;this.startVal=Number(a);this.endVal=Number(b);this.countDown=(this.startVal>this.endVal);this.frameVal=this.startVal;this.decimals=Math.max(0,d||0);this.dec=Math.pow(10,this.decimals);this.duration=Number(e)*1000||2000;var k=this;this.version=function(){return"1.6.0"};this.printValue=function(m){var l=(!isNaN(m))?k.formatNumber(m):"--";if(k.d.tagName=="INPUT"){this.d.value=l}else{if(k.d.tagName=="text"||k.d.tagName=="tspan"){this.d.textContent=l}else{this.d.innerHTML=l}}};this.easeOutExpo=function(m,l,o,n){return o*(-Math.pow(2,-10*m/n)+1)*1024/1023+l};this.count=function(m){if(!k.startTime){k.startTime=m}k.timestamp=m;var l=m-k.startTime;k.remaining=k.duration-l;if(k.options.useEasing){if(k.countDown){k.frameVal=k.startVal-k.easeOutExpo(l,0,k.startVal-k.endVal,k.duration)}else{k.frameVal=k.easeOutExpo(l,k.startVal,k.endVal-k.startVal,k.duration)}}else{if(k.countDown){k.frameVal=k.startVal-((k.startVal-k.endVal)*(l/k.duration))}else{k.frameVal=k.startVal+(k.endVal-k.startVal)*(l/k.duration)}}if(k.countDown){k.frameVal=(k.frameVal<k.endVal)?k.endVal:k.frameVal}else{k.frameVal=(k.frameVal>k.endVal)?k.endVal:k.frameVal}k.frameVal=Math.round(k.frameVal*k.dec)/k.dec;k.printValue(k.frameVal);if(l<k.duration){k.rAF=requestAnimationFrame(k.count)}else{if(k.callback){k.callback()}}};this.start=function(l){k.callback=l;k.rAF=requestAnimationFrame(k.count);return false};this.pauseResume=function(){if(!k.paused){k.paused=true;cancelAnimationFrame(k.rAF)}else{k.paused=false;delete k.startTime;k.duration=k.remaining;k.startVal=k.frameVal;requestAnimationFrame(k.count)}};this.reset=function(){k.paused=false;delete k.startTime;k.startVal=a;cancelAnimationFrame(k.rAF);k.printValue(k.startVal)};this.update=function(l){cancelAnimationFrame(k.rAF);k.paused=false;delete k.startTime;k.startVal=k.frameVal;k.endVal=Number(l);k.countDown=(k.startVal>k.endVal);k.rAF=requestAnimationFrame(k.count)};this.formatNumber=function(p){p=p.toFixed(k.decimals);p+="";var l,o,m,n;l=p.split(".");o=l[0];m=l.length>1?k.options.decimal+l[1]:"";n=/(\d+)(\d{3})/;if(k.options.useGrouping){while(n.test(o)){o=o.replace(n,"$1"+k.options.separator+"$2")}}return k.options.prefix+o+m+k.options.suffix};k.printValue(k.startVal)};