/* build : 564493634@qq.com 2015-04-10 09:43:59 */
define(["jquery","jquery.validate"],function(e){function n(){var n=e(".search-form"),o=n.validate({rules:{ch:{zhCode:!0},eng:{enCode:!0},xuhao:{zhCode:!0},cas:{casCode:!0}}});n.on("submit",function(){return o.form()?void 0:!1})}function o(){}return{index:n,info:o}});