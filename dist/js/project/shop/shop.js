/* build : 564493634@qq.com 2015-06-03 15:45:35 */
define(["jquery","baidu.map","jquery.validate"],function(n){function o(){n(function(){var o=n(".submit-form"),e=o.find('input[name="phone"]'),a=o.find('input[name="mail"]'),t=e.add(a);jQuery.validator.addMethod("mobilePhoneEmail",function(n,o){return e.val()||a.val()?!0:!1},"电话和E-mail至少填写一项"),t.on("focus keyup",function(){t.nextAll(".validate-error:not(.validate-success)").remove()});var i=o.validate();o.on("submit",function(n){return i.form()?void 0:!1}),function(){function o(o){var e=-o*a;n("#focus ul").stop(!0,!1).animate({left:e},300),n("#focus .control span").stop(!0,!1).animate({opacity:"0.4"},300).eq(o).stop(!0,!1).animate({opacity:"1"},300)}var e,a=n("#focus").width(),t=n("#focus ul li").length,i=0;if(t>1){for(var u="<div class='control'>",r=0;t>r;r++)u+="<span></span>";u+="</div>",n("#focus").append(u),n("#focus .btnBg").css("opacity",1),n("#focus .control span").css("opacity",1).mouseover(function(){i=n("#focus .control span").index(this),o(i)}).eq(0).trigger("mouseover"),n("#focus ul").css("width",a*t),n("#focus").hover(function(){clearInterval(e)},function(){e=setInterval(function(){o(i),i++,i==t&&(i=0)},4e3)}).trigger("mouseleave")}}()})}function e(){var o=n("#bmap"),e=o.data(),a=e.mapcode.split(","),t=[106.570025,29.52886],i=parseFloat(a[0])||t[0],u=parseFloat(a[1])||t[1],r=new BMap.Map("bmap"),s=new BMap.Point(i,u);r.centerAndZoom(s,15),r.addControl(new BMap.NavigationControl),r.enableScrollWheelZoom(),r.enableContinuousZoom();var l=new BMap.InfoWindow("<div style='font-size:14px;'>"+e.address+"</div>",{width:250,height:100,title:"联系地址",enableCloseOnClick:!1,enableMessage:!1});r.openInfoWindow(l,s)}function a(){n(function(){var o=n(".submit-form"),e=o.find('input[name="phone"]'),a=o.find('input[name="mail"]'),t=e.add(a);jQuery.validator.addMethod("mobilePhoneEmail",function(n,o){return e.val()||a.val()?!0:!1},"电话和E-mail至少填写一项"),t.on("focus keyup",function(){t.nextAll(".validate-error:not(.validate-success)").remove()});var i=o.validate();o.on("submit",function(n){return i.form()?void 0:!1})})}return{index:o,contactUs:e,feedbackList:a,summary:o}});