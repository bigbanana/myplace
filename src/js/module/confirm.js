/**
 * [确定窗口]
 * @param  {[string]} content [显示文字]
 * @param  {[function]} pass [成功后回调]
 * @param  {[function]} cancel [失败后回调]
 * @return {[object]}           [Confirm 实例]
 */
define('confirm',['jquery','underscore','jquery.dialog'],function($,_,Dialog){
  function Confirm(opt){
    $.extend(this,arguments.callee.options,opt);
    this.init();
    this.events();
  }

  $.extend(Confirm.prototype,{
    init: function(){
      var that = this;
      this.$wrap = $(this._template(this));
      this.dialog = new Dialog({
        el:this.$wrap,
        width:280,
        height:160,
        minWidth:280,
        minHeight:158,
        modal:true,
        close: function(){
          that.$wrap.remove();
        }
      });
    },
    events: function(){
      var that = this;
      this.$wrap.on('click','[data-action=pass]',function(){
        that.dialog.close();
        that.pass();
      });
      this.$wrap.on('click','[data-action=cancel]',function(){
        that.dialog.close();
        that.cancel();
      });
    },
    _template: _.template([
      '<div class="ui-confirm" title="确认">',
        '<div class="ui-confirm-content"><%= content %></div>',
        '<div class="ui-dialog-toolbar">',
          '<a class="btn btn-blue btn-sm" data-action="pass">确 定</a>',
          '<a class="btn btn-sm ml10" data-action="cancel">取 消</a>',
        '</div>',
      '</div>'
    ].join(''))
  });

  $.extend(Confirm,{
    options : {
      content: '确定要继续操作吗？',
      pass: $.noop,
      cancel: $.noop
    }
  });

  return Confirm;

});
