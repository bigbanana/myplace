/* build : 564493634@qq.com 2015-06-03 15:45:35 */
define(["jquery"],function(o){function n(){!function(){function n(n){var t=-n*c;o("#focus ul").stop(!0,!1).animate({left:t},300),o("#focus .control span").stop(!0,!1).animate({opacity:"0.4"},300).eq(n).stop(!0,!1).animate({opacity:"1"},300)}var t,c=o("#focus").width(),s=o("#focus ul li").length,e=0;if(s>1){for(var i="<div class='control'>",u=0;s>u;u++)i+="<span></span>";i+="</div>",o("#focus").append(i),o("#focus .btnBg").css("opacity",1),o("#focus .control span").css("opacity",1).mouseover(function(){e=o("#focus .control span").index(this),n(e)}).eq(0).trigger("mouseover"),o("#focus ul").css("width",c*s),o("#focus").hover(function(){clearInterval(t)},function(){t=setInterval(function(){n(e),e++,e==s&&(e=0)},4e3)}).trigger("mouseleave")}}()}return{index:n}});