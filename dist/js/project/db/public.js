/* build : 564493634@qq.com 2015-05-07 13:23:46 */
require(["jquery"],function(e){console.log("执行topnav模块！");var n=e("header"),o=n.find(".topnav");o.on("mouseenter",">.item",function(){e(this).addClass("active")}),o.on("mouseleave",">.item",function(){e(this).removeClass("active")})});