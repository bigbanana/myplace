/* build : 564493634@qq.com 2015-05-25 15:04:16 */
require(["jquery","cookie","underscore","jquery.ui"],function(e,n){e(function(){var t=(e(document.body),e(".page-nav")),a=e(".page-tab"),o=e(".theme");t.accordion(),a.tabs().find(".ui-tabs-nav").sortable({axis:"x",stop:function(){a.tabs("refresh")}}),o.selectmenu({change:function(){n.set("theme",e(this).val(),{expires:365}),location.reload()}})})});