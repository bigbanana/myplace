/* build : 564493634@qq.com 2015-04-01 15:21:55 */
define(["jquery","baidu.map","jquery.validate"],function(e){function n(){}function a(){var n=e("#bmap"),a=n.data(),o=a.mapcode.split(","),t=[106.570025,29.52886],i=parseFloat(o[0])||t[0],l=parseFloat(o[1])||t[1],d=new BMap.Map("bmap"),p=new BMap.Point(i,l);d.centerAndZoom(p,15),d.addControl(new BMap.NavigationControl),d.enableScrollWheelZoom(),d.enableContinuousZoom();var r=new BMap.InfoWindow("<div style='font-size:14px;'>"+a.address+"</div>",{width:250,height:100,title:"联系地址",enableCloseOnClick:!1,enableMessage:!1});d.openInfoWindow(r,p)}return{index:n,contactUs:a}});