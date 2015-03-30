/* build : 564493634@qq.com 2015-03-30 15:56:57 */
!function(t){"function"==typeof define&&define.amd?define("jquery.validate",["jquery","jquery.validate.core"],t):t(jQuery)}(function(t){t.validator.addMethod("enCode",function(t,a){return this.optional(a)||!/[^a-zA-Z\s]/.test(t)},t.validator.format("请输入英文字符")),t.validator.addMethod("zhCode",function(t,a){return this.optional(a)||/^[\u2E80-\u9FFF\s]+$/.test(t)},t.validator.format("请输入中文字符")),t.validator.addMethod("mobile",function(t,a){return this.optional(a)||/^\+?(86)?-?1\d{10}$/.test(t)},t.validator.format("请输入正确的手机号码")),t.validator.addMethod("phone",function(t,a){return this.optional(a)||/^(\d{3,4}-?)?\d{8}$/.test(t)},t.validator.format("请输入固定电话号码")),t.validator.addMethod("mobilePhone",function(t,a){return this.optional(a)||/^\+?(86)?-?1\d{10}$/.test(t)||/^(\d{3,4}-?)?\d{8}$/.test(t)},t.validator.format("请输入手机或固定电话号码")),t.validator.addMethod("casCode",function(t,a){return this.optional(a)||/^\d+\-\d+\-\d+$/.test(t)},t.validator.format("请输入正确的CSA编号")),t.extend(t.validator.messages,{required:"这是必填字段",remote:"请修正此字段",email:"请输入有效的电子邮件地址",url:"请输入有效的网址",date:"请输入有效的日期",dateISO:"请输入有效的日期 (YYYY-MM-DD)",number:"请输入有效的数字",digits:"只能输入数字",creditcard:"请输入有效的信用卡号码",equalTo:"你的输入不相同",extension:"请输入有效的后缀",maxlength:t.validator.format("最多可以输入 {0} 个字符"),minlength:t.validator.format("最少要输入 {0} 个字符"),rangelength:t.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),range:t.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),max:t.validator.format("请输入不大于 {0} 的数值"),min:t.validator.format("请输入不小于 {0} 的数值")});var a=t.validator.defaults.highlight;t.validator.setDefaults({ignore:".ignore",errorClass:"validate-error",success:function(t){t.addClass("validate-success")},errorPlacement:function(t,a){a.parent().append(t)},highlight:function(e,o){var r=t(e);r.siblings("."+o).removeClass("validate-success"),a.apply(this,arguments)}})});