!function(t){"object"==typeof module&&module.exports?module.exports=t:t(Highcharts)}(function(t){!function(t){var i,o=t.Axis,e=t.Chart,s=t.color,n=t.each,a=t.extend,l=t.isNumber,r=t.Legend,h=t.LegendSymbolMixin,c=t.noop,d=t.merge,p=t.pick,u=t.wrap;i=t.ColorAxis=function(){this.init.apply(this,arguments)},a(i.prototype,o.prototype),a(i.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(o.prototype.keepProps),init:function(t,i){var e,s="vertical"!==t.options.legend.layout;this.coll="colorAxis",e=d(this.defaultColorAxisOptions,{side:s?2:1,reversed:!s},i,{opposite:!s,showEmpty:!1,title:null}),o.prototype.init.call(this,t,e),i.dataClasses&&this.initDataClasses(i),this.initStops(),this.horiz=s,this.zoomEnabled=!1,this.defaultLegendLength=200},initDataClasses:function(t){var i,o=this.chart,e=0,a=o.options.chart.colorCount,l=this.options,r=t.dataClasses.length;this.dataClasses=i=[],this.legendItems=[],n(t.dataClasses,function(t,n){t=d(t),i.push(t),t.color||("category"===l.dataClassColor?(n=o.options.colors,a=n.length,t.color=n[e],t.colorIndex=e,e++,e===a&&(e=0)):t.color=s(l.minColor).tweenTo(s(l.maxColor),2>r?.5:n/(r-1)))})},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]],n(this.stops,function(t){t.color=s(t[1])})},setOptions:function(t){o.prototype.setOptions.call(this,t),this.options.crosshair=this.options.marker},setAxisSize:function(){var t,i,o=this.legendSymbol,e=this.chart,s=e.options.legend||{};o?(this.left=s=o.attr("x"),this.top=t=o.attr("y"),this.width=i=o.attr("width"),this.height=o=o.attr("height"),this.right=e.chartWidth-s-i,this.bottom=e.chartHeight-t-o,this.len=this.horiz?i:o,this.pos=this.horiz?s:t):this.len=(this.horiz?s.symbolWidth:s.symbolHeight)||this.defaultLegendLength},normalizedValue:function(t){return this.isLog&&(t=this.val2lin(t)),1-(this.max-t)/(this.max-this.min||1)},toColor:function(t,i){var o,e,s,n,a=this.stops,l=this.dataClasses;if(l){for(n=l.length;n--;)if(s=l[n],o=s.from,a=s.to,(void 0===o||t>=o)&&(void 0===a||t<=a)){e=s.color,i&&(i.dataClass=n,i.colorIndex=s.colorIndex);break}}else{for(t=this.normalizedValue(t),n=a.length;n--&&!(t>a[n][0]););o=a[n]||a[n+1],a=a[n+1]||o,t=1-(a[0]-t)/(a[0]-o[0]||1),e=o.color.tweenTo(a.color,t)}return e},getOffset:function(){var t=this.legendGroup,i=this.chart.axisOffset[this.side];t&&(this.axisParent=t,o.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=i)},setLegendColor:function(){var t,i=this.reversed;t=i?1:0,i=i?0:1,t=this.horiz?[t,0,i,0]:[0,i,0,t],this.legendColor={linearGradient:{x1:t[0],y1:t[1],x2:t[2],y2:t[3]},stops:this.stops}},drawLegendSymbol:function(t,i){var o=t.padding,e=t.options,s=this.horiz,n=p(e.symbolWidth,s?this.defaultLegendLength:12),a=p(e.symbolHeight,s?12:this.defaultLegendLength),l=p(e.labelPadding,s?16:30),e=p(e.itemDistance,10);this.setLegendColor(),i.legendSymbol=this.chart.renderer.rect(0,t.baseline-11,n,a).attr({zIndex:1}).add(i.legendGroup),this.legendItemWidth=n+o+(s?e:l),this.legendItemHeight=a+o+(s?l:0)},setState:c,visible:!0,setVisible:c,getSeriesExtremes:function(){var t=this.series,i=t.length;for(this.dataMin=1/0,this.dataMax=-(1/0);i--;)void 0!==t[i].valueMin&&(this.dataMin=Math.min(this.dataMin,t[i].valueMin),this.dataMax=Math.max(this.dataMax,t[i].valueMax))},drawCrosshair:function(t,i){var e,s=i&&i.plotX,n=i&&i.plotY,a=this.pos,l=this.len;i&&(e=this.toPixels(i[i.series.colorKey]),e<a?e=a-2:e>a+l&&(e=a+l+2),i.plotX=e,i.plotY=this.len-e,o.prototype.drawCrosshair.call(this,t,i),i.plotX=s,i.plotY=n,this.cross&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(t,i,e,s,n){return l(n)?this.horiz?["M",n-4,this.top-6,"L",n+4,this.top-6,n,this.top,"Z"]:["M",this.left,n,"L",this.left-6,n+6,this.left-6,n-6,"Z"]:o.prototype.getPlotLinePath.call(this,t,i,e,s)},update:function(t,i){var e=this.chart,s=e.legend;n(this.series,function(t){t.isDirtyData=!0}),t.dataClasses&&s.allItems&&(n(s.allItems,function(t){t.isDataClass&&t.legendGroup&&t.legendGroup.destroy()}),e.isDirtyLegend=!0),e.options[this.coll]=d(this.userOptions,t),o.prototype.update.call(this,t,i),this.legendItem&&(this.setLegendColor(),s.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this),o.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var i,o=this,e=this.chart,s=this.legendItems,l=e.options.legend,r=l.valueDecimals,d=l.valueSuffix||"";return s.length||n(this.dataClasses,function(l,p){var u=!0,g=l.from,f=l.to;i="",void 0===g?i="< ":void 0===f&&(i="> "),void 0!==g&&(i+=t.numberFormat(g,r)+d),void 0!==g&&void 0!==f&&(i+=" - "),void 0!==f&&(i+=t.numberFormat(f,r)+d),s.push(a({chart:e,name:i,options:{},drawLegendSymbol:h.drawRectangle,visible:!0,setState:c,isDataClass:!0,setVisible:function(){u=this.visible=!u,n(o.series,function(t){n(t.points,function(t){t.dataClass===p&&t.setVisible(u)})}),e.legend.colorizeItem(this,u)}},l))}),s},name:""}),n(["fill","stroke"],function(i){t.Fx.prototype[i+"Setter"]=function(){this.elem.attr(i,s(this.start).tweenTo(s(this.end),this.pos),null,!0)}}),u(e.prototype,"getAxes",function(t){var o=this.options.colorAxis;t.call(this),this.colorAxis=[],o&&new i(this,o)}),u(r.prototype,"getAllItems",function(t){var i=[],o=this.chart.colorAxis[0];return o&&o.options&&(o.options.showInLegend&&(o.options.dataClasses?i=i.concat(o.getDataClassLegendSymbols()):i.push(o)),n(o.series,function(t){t.options.showInLegend=!1})),i.concat(t.call(this))}),u(r.prototype,"colorizeItem",function(t,i,o){t.call(this,i,o),o&&i.legendColor&&i.legendSymbol.attr({fill:i.legendColor})})}(t),function(t){var i=t.defined,o=t.each,e=t.noop,s=t.seriesTypes;t.colorPointMixin={isValid:function(){return null!==this.value},setVisible:function(t){var i=this,e=t?"show":"hide";o(["graphic","dataLabel"],function(t){i[t]&&i[t][e]()})},setState:function(i){t.Point.prototype.setState.call(this,i),this.graphic&&this.graphic.attr({zIndex:"hover"===i?1:0})}},t.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:e,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:s.column.prototype.pointAttribs,translateColors:function(){var t=this,i=this.options.nullColor,e=this.colorAxis,s=this.colorKey;o(this.data,function(o){var n=o[s];(n=o.options.color||(o.isNull?i:e&&void 0!==n?e.toColor(n,o):o.color||t.color))&&(o.color=n)})},colorAttribs:function(t){var o={};return i(t.color)&&(o[this.colorProp||"fill"]=t.color),o}}}(t),function(t){var i=t.colorPointMixin,o=t.each,e=t.merge,s=t.noop,n=t.pick,a=t.Series,l=t.seriesType,r=t.seriesTypes;l("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{normal:{animation:!0},hover:{halo:!1,brightness:.2}}},e(t.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,supportsDrilldown:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var t;r.scatter.prototype.init.apply(this,arguments),t=this.options,t.pointRange=n(t.pointRange,t.colsize||1),this.yAxis.axisPointRange=t.rowsize||1},translate:function(){var t=this.options,i=this.xAxis,e=this.yAxis,s=function(t,i,o){return Math.min(Math.max(i,t),o)};this.generatePoints(),o(this.points,function(o){var n=(t.colsize||1)/2,a=(t.rowsize||1)/2,l=s(Math.round(i.len-i.translate(o.x-n,0,1,0,1)),-i.len,2*i.len),n=s(Math.round(i.len-i.translate(o.x+n,0,1,0,1)),-i.len,2*i.len),r=s(Math.round(e.translate(o.y-a,0,1,0,1)),-e.len,2*e.len),a=s(Math.round(e.translate(o.y+a,0,1,0,1)),-e.len,2*e.len);o.plotX=o.clientX=(l+n)/2,o.plotY=(r+a)/2,o.shapeType="rect",o.shapeArgs={x:Math.min(l,n),y:Math.min(r,a),width:Math.abs(n-l),height:Math.abs(a-r)}}),this.translateColors()},drawPoints:function(){r.column.prototype.drawPoints.call(this),o(this.points,function(t){t.graphic.attr(this.colorAttribs(t))},this)},animate:s,getBox:s,drawLegendSymbol:t.LegendSymbolMixin.drawRectangle,alignDataLabel:r.column.prototype.alignDataLabel,getExtremes:function(){a.prototype.getExtremes.call(this,this.valueData),this.valueMin=this.dataMin,this.valueMax=this.dataMax,a.prototype.getExtremes.call(this)}}),i)}(t)});