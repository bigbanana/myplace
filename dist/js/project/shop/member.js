/* build : 564493634@qq.com 2015-04-01 15:21:55 */
define(["jquery","baidu.map","jquery.validate"],function(n){function a(){}function e(){var a=n('input[name="contact[mapcode]"]'),e=a.val().split(","),o=[106.570025,29.52886],t=parseFloat(e[0])||o[0],i=parseFloat(e[1])||o[1],r=new BMap.Map("bmap"),l=new BMap.Point(t,i);r.centerAndZoom(l,15),r.addControl(new BMap.NavigationControl),r.enableScrollWheelZoom(),r.enableContinuousZoom();var d=new BMap.Marker(l);d.enableDragging(),d.addEventListener("dragend",function(n){a.val([n.point.lng,n.point.lat].join(","))}),r.addOverlay(d);var u=n(".submit-form"),p=u.validate();u.on("submit",function(){return p.form()?void 0:!1})}return{index:a,contactUs:e}});