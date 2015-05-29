require(['jquery','underscore','jquery.pagination','jquery.ui'],function($,_){
  $.dialogSetting = $.extend({
    width: 600,
    height: 400
  },$.dialogSetting);
  $(function(){
    var $body = $(document.body);

    /* 添加链接弹窗支持 */
    +(function(){
      $body.on('click','a[data-dialog]',function(e){
        e.preventDefault();
        var $dialog,$iframe;
        var $this = $(this);
        var data = $this.data();
        var opt = $.extend({
          id: data.dialog.replace('#',''),
          title: $this.attr('title') || $this.text(),
          href: $this[0].href,
          target: data.dialog,
        },$.dialogSetting,data);

        var $dialog = $(opt.target);
        if($dialog.length == 0){
          $dialog = $(linkDialogTemp(opt)).dialog({
            width:opt.width,
            height:opt.height,
            modal:true,
            autoOpen:false
          });
        }
        $dialog.dialog('option',{
          title:opt.title
        });
        var frameName = $dialog.find('iframe').attr('name');
        window.open(opt.href,frameName);
        $dialog.dialog('open');
      });
      $body.on('click','[data-action=closeDialog]',function(){
        window.closeDialog();
      });
      //事件通知传递
      window.sendDialogMessage = function(name,msg){

      }
      window.onDialogMessage = function(name,callback){
        
      }
      window.closeDialog = function(reload){
        reload = reload || false;
        if(window.parent === window) return false;
        var parent = window.parent;
        if(reload){
          parent.location.reload()
        }else{
          parent.$(window.frameElement).parents('.dialog-page').dialog('close');
        }
      }
      window.updateTitle = function(){
        if(window.parent === window) return false;
        var title = window.document.title;
        var parent = window.parent;
        var $ = parent.$;
        $(window.frameElement).closest('.dialog-page').dialog('option',{
          title: title
        });
      }
      window.updateTitle();
    })();
  
    /* 添加链接tab支持 */
    +(function(){
      $body.on('click',"a[data-tabs]",function(e){
        var $link = $(this)
        var tabs = $link.data('tabs');
        var tab = $(tabs).data('uiTabs');

        if(tab){
          e.preventDefault();
          var href = $link[0].href;
          var title = $link.attr('title') || $link.text();
          var id = encodeURIComponent(href);
          var $target = tab.tabs.find('>a[href="#'+id+'"]');
          var opt = {
            id: id,
            href: href,
            title: title,
            height: $body.height()-130
          }
          if($target.length==0){
            var $li = $(tabNavTemp(opt));
            var $target = $li.find('>a');
            tab.tablist.append($li);
            tab.element.append($(tabContentTemp(opt)));
            tab.refresh();
          }
          $target.trigger('click');
        }
      });

      $body.on("click",".ui-tabs-nav li .ui-icon-close",function() {
        var $this = $(this);
        var $tab = $this.closest(".ui-tabs")
        var panelId = $this.closest( "li" ).remove().attr( "aria-controls" );
        $(document.getElementById(panelId)).remove();
        $tab.tabs( "refresh" );
      });

    })();
      
    /* 添加navigate功能 */
    +(function(){
      //刷新
      $body.on('click',".navigate .reload",function(){
        window.location.reload();
      });
      $body.on('click',".navigate .back",function(){
        window.history.back();
      });
      $body.on('click',".navigate .forward",function(){
        window.history.forward();
      });
    })();

    /* 添加pagination支持*/
    $('.pagination').pagination();

  });

  var linkDialogTemp = _.template([
    '<div id="<%= id %>" title="<%= title %>" class="dialog-page">',
      '<div class="content">',
        '<iframe name="<%= id %>-iframe" src="" class="dialog-iframe" style="height:<%= (height-60) %>px;"></iframe>',
      '</div>',
    '</div>'
  ].join(''));

  var tabNavTemp = _.template([
    '<li>',
      '<a href="#<%= id %>"><%= title %></a>',
      '<span class="ui-icon ui-icon-close" role="presentation"></span>',
    '</li>'
  ].join(''));

  var tabContentTemp = _.template([
    '<div id="<%= id %>">',
      '<div class="content">',
        '<iframe class="tab-iframe" src="<%= href %>" style="height:<%= height%>px;"></iframe>',
      '</div>',
    '</div>'
  ].join(''));

});
