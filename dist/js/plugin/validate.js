/* build : 564493634@qq.com 2015-03-27 15:35:38 */
!function(a){"function"==typeof define&&define.amd?define("validate",["jquery","jquery.validate"],a):a(jQuery)}(function(a){a.validator.addMethod("enCode",function(a,t){return this.optional(t)||!/[^a-zA-Z\s]/.test(a)},a.validator.format("请输入英文字符")),a.validator.addMethod("zhCode",function(a,t){return this.optional(t)||/^[\u2E80-\u9FFF\s]+$/.test(a)},a.validator.format("请输入中文字符")),a.validator.addMethod("mobile",function(a,t){return this.optional(t)||/^\+?(86)?-?1\d{10}$/.test(a)},a.validator.format("请输入正确的手机号码")),a.validator.addMethod("phone",function(a,t){return this.optional(t)||/^(\d{3,4}-?)?\d{8}$/.test(a)},a.validator.format("请输入固定电话号码")),a.extend(a.validator.messages,{required:"这是必填字段",remote:"请修正此字段",email:"请输入有效的电子邮件地址",url:"请输入有效的网址",date:"请输入有效的日期",dateISO:"请输入有效的日期 (YYYY-MM-DD)",number:"请输入有效的数字",digits:"只能输入数字",creditcard:"请输入有效的信用卡号码",equalTo:"你的输入不相同",extension:"请输入有效的后缀",maxlength:a.validator.format("最多可以输入 {0} 个字符"),minlength:a.validator.format("最少要输入 {0} 个字符"),rangelength:a.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),range:a.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),max:a.validator.format("请输入不大于 {0} 的数值"),min:a.validator.format("请输入不小于 {0} 的数值")});var t=a.validator.defaults.highlight;a.validator.setDefaults({ignore:".ignore",success:function(a){a.addClass("validate-tips-success")},errorPlacement:function(a,t){t.parent().append(a)},highlight:function(e,i){var o=a(e);o.addClass("validate-error").removeClass("validate-success").siblings("."+i).removeClass("validate-tips-success"),t.apply(this,arguments)}})});