/* build : 564493634@qq.com 2015-05-04 14:53:33 */
define(["jquery"],function(n){function t(){!function(){function t(t){var o=-t*s;n("#focus ul").stop(!0,!1).animate({left:o},300),n("#focus .btn span").stop(!0,!1).animate({opacity:"0.4"},300).eq(t).stop(!0,!1).animate({opacity:"1"},300)}var o,s=n("#focus").width(),e=n("#focus ul li").length,c=0;if(e>1){for(var i="<div class='btn'>",u=0;e>u;u++)i+="<span></span>";i+="</div>",n("#focus").append(i),n("#focus .btnBg").css("opacity",1),n("#focus .btn span").css("opacity",1).mouseover(function(){c=n("#focus .btn span").index(this),t(c)}).eq(0).trigger("mouseover"),n("#focus ul").css("width",s*e),n("#focus").hover(function(){clearInterval(o)},function(){o=setInterval(function(){t(c),c++,c==e&&(c=0)},4e3)}).trigger("mouseleave")}}()}return{index:t}});