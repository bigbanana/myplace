(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.linkDialog',['jquery','jquery.widget','jquery.dialog','underscore','backbone'],factory);
  } else {
    factory($,widget,Dialog,_,Backbone);
  }
}(function($,widget,Dialog,_,Backbone){
  var URLREG = /^https?:\/\/.*$/;
  var $body = $(document.body);
  var LinkDialog = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(opt.el);
    if(this.$el.length == 0 || !URLREG.test(this.$el[0].href)) return;
    this.options.href = this.options.href || this.$el[0].href;
    this.options.title = this.options.title || this.$el[0].title;
    this.init();
    this.events();
  }

  $.extend(LinkDialog.prototype,{
    init: function(){
      var that = this;
      this.$dialog = $(this.temp(this.options));
      this.$iframe = this.$dialog.children();
      this.dialog = new Dialog($.extend({},this.options,{
        el: this.$dialog,
        close: function(){
          that.dialog.destroy();
          that.$dialog.remove();
        }
      }));
    },
    events: function(){
      var that = this;
      var iframe = this.$iframe[0];
      this.$iframe.on('load',function(){
        try{
          that.dialog.setTitle(this.contentWindow.document.title);
        }
        catch(e){
        }
        
      });
      _.extend(iframe,Backbone.Events);
      iframe.on('close',function(){
        that.destroy();
      });
      iframe.on('refresh',function(){
        that.refresh();
      });
    },
    destroy: function(){
      this.$iframe[0].off();
      this.dialog.destroy();
    },
    refresh: function(){
      window.location.reload();
    },
    temp: _.template(['<div class="ui-dialog-iframe-box"><iframe frameborder="no" src="<%= href %>" class="ui-dialog-iframe"></iframe></div>'].join(''))
  });
  $.extend(LinkDialog,{
    options:{
      width:500,
      height:400,
      modal:true
    }
  });

  $body.on('click','[data-widget=linkDialog]',function(e){
    e.preventDefault();
    var $el = $(this);
    var data = $el.data();
    data.el = $el;
    new LinkDialog(data);
  });

  return LinkDialog

}));