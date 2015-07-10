<!DOCTYPE html>
<html lang="en">
<?php 
  $title = "导航条";
  require_once('./includes/static.php');
 ?>
<body>
  <div class="main">
    <h3>首页导航条</h3>
    <ul class="ui-topnav">
      <li class="item">
        <a class="name arrow" href="javascript:;">药品研发</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/zhuce" target='_blank'>药品注册与受理数据库</a></li>
          <li><a href="http://db.yaozh.com/xinyao" target='_blank'>新药批准信息(1978-2003)</a></li>
          <li><a href="http://db.yaozh.com/zhuangrang" target='_blank'>药品转让信息数据库</a></li>
          <li><a href="http://db.yaozh.com/targets" target='_blank'>药物分子靶点数据库</a></li>
          <li><a href="http://db.yaozh.com/guowaixinyao" target='_blank'>国外新药及新剂型数据库</a></li>
          <li><a href="http://db.yaozh.com/fdayp" target='_blank'>美国FDA药品数据库</a></li>
          <li><a href="http://db.yaozh.com/dmf" target='_blank'>美国DMF注册数据库</a></li>
          <li><a href="http://db.yaozh.com/epyp" target='_blank'>欧盟药品上市信息</a></li>
          <li><a href="http://db.yaozh.com/usan" target='_blank'>美国在研新药数据库</a></li>
          <li><a href="http://db.yaozh.com/linchuangshiyan" target='_blank'>临床试验数据库</a></li>
          <li><a href="http://db.yaozh.com/animalmodel" target='_blank'>动物模型数据库</a></li>
          <li><a href="http://db.yaozh.com/tiwai" target='_blank'>药品体外溶出试验信息库</a></li>
          <li><a href="http://db.yaozh.com/nce" target='_blank'>药物新化学实体专利信息</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name arrow" href="javascript:;">生产检验</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/biaozhun" target='_blank'>中国药品标准</a></li>
          <li><a href="http://db.yaozh.com/fulu" target='_blank'>中国药典附录</a></li>
          <li><a href="http://db.yaozh.com/foreign" target='_blank'>国外药典在线</a></li>
          <li><a href="http://db.yaozh.com/IR" target='_blank'>红外光谱图</a></li>
          <li><a href="http://db.yaozh.com/sepu" target='_blank'>色谱图数据库</a></li>
          <li><a href="http://db.yaozh.com/jiance" target='_blank'>药检所检测项目费用查询</a></li>
          <li><a href="http://db.yaozh.com/medbagstand" target='_blank'>药包材标准</a></li>
          <li><a href="http://db.yaozh.com/pizhunyaocaibao" target='_blank'>批准的药包材</a></li>
          <li><a href="http://db.yaozh.com/shengchanqiye" target='_blank'>中国药品生产企业</a></li>
          <li><a href="http://db.yaozh.com/gmp" target='_blank'>GMP认证查询</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name arrow" href="javascript:;">合理用药</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/instruct" target='_blank'>药品说明书</a></li>
          <li><a href="http://db.yaozh.com/unlabeleduse" target='_blank'>超说明书用药数据库</a></li>
          <li><a href="http://db.yaozh.com/fda_shuomingshu" target='_blank'>美国FDA药品说明书</a></li>
          <li><a href="http://db.yaozh.com/jp_shuomingshu" target='_blank'>日本药品说明书</a></li>
          <li><a href="http://db.yaozh.com/yibao" target='_blank'>医保目录查询</a></li>
          <li><a href="http://db.yaozh.com/basicdir" target='_blank'>基本药物目录查询</a></li>
          <li><a href="http://db.yaozh.com/goods" target='_blank'>药品商品名查询</a></li>
          <li><a href="http://db.yaozh.com/atc" target='_blank'>药物ATC编码查询系统</a></li>
          <li><a href="http://db.yaozh.com/martindale" target='_blank'>马丁代尔大药典</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name arrow" href="javascript:;">市场信息</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/USAMarket200" target='_blank'>美国药品销售数据TOP200数据库</a></li>
          <li><a href="http://db.yaozh.com/policies" target='_blank'>政策法规数据库</a></li>
          <li><a href='http://db.yaozh.com/screening'>上市药品查询筛选系统</a></li>
          <li><a href="http://db.yaozh.com/pijian" target='_blank'>国产药品数据库</a></li>
          <li><a href="http://db.yaozh.com/jinkou" target='_blank'>进口药品数据库</a></li>
          <li><a href="http://db.yaozh.com/yaopinzhongbiao" target='_blank'>药品中标信息查询</a></li>
          <li><a href="http://db.yaozh.com/pifajiage" target='_blank'>太和药品行情查询</a></li>
          <li><a href="http://db.yaozh.com/yaopinjiage" target='_blank'>药品最高零售价</a></li>
          <li><a href="http://db.yaozh.com/agent" target='_blank'>代理商数据库</a></li>
          <li><a href="http://db.yaozh.com/hmap" target='_blank'>全国医院数据库</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name arrow" href="javascript:;">CHEMPHARM</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/fuliao" target='_blank'>辅料数据库</a></li>
          <li><a href="http://db.yaozh.com/biaozhundb" target='_blank'>杂质-对照品数据库</a></li>
          <li><a href="http://db.yaozh.com/jiegou" target='_blank'>百万化合物信息库</a></li>
          <li><a href="http://db.yaozh.com/fzk" target='_blank'>药物合成数据库</a></li>
          <li><a href="http://db.yaozh.com/bpc" target='_blank'>全球新药研发品种库</a></li>
          <li><a href="http://db.yaozh.com/onrc" target='_blank'>有机合成经典反应数据库</a></li>
          <li><a href="http://db.yaozh.com/hcff" target='_blank'>有机合成方法数据库</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name arrow" href="javascript:;">中药材</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/chufang" target='_blank'>中成药处方数据库</a></li>
          <li><a href="http://db.yaozh.com/sepu" target='_blank'>色谱图数据库</a></li>
          <li><a href="http://db.yaozh.com/fangji" target='_blank'>经典中药方剂</a></li>
          <li><a href="http://db.yaozh.com/yaocai_bz" target='_blank'>药材标准</a></li>
          <li><a href="http://db.yaozh.com/tupu" target='_blank'>中药材图谱</a></li>
          <li><a href="http://db.yaozh.com/zhongyaocai" target='_blank'>中药材基本信息库</a></li>
          <li><a href="http://db.yaozh.com/yaocai" target='_blank'>药材辞典与现代化研究</a></li>
          <li><a href="http://db.yaozh.com/zhongyaopinzhong" target='_blank'>中药保护品种</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name arrow" href="javascript:;">医疗器械</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/jixie" target='_blank'>国产器械</a></li>
          <li><a href="http://db.yaozh.com/jinkoujixie" target='_blank'>进口器械</a></li>
          <li><a href="http://db.yaozh.com/qixiebiaozhun" target='_blank'>医疗器械标准</a></li>
          <li><a href="http://db.yaozh.com/fenleimulu" target='_blank'>医疗器械分类目录</a></li>
          <li><a href="http://db.yaozh.com/jixieshengchanqiye" target='_blank'>医疗器械生产企业</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name arrow" href="javascript:;">食品-化妆品</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/bjsp" target='_blank'>保健食品处方数据库</a></li>
          <li><a href="http://db.yaozh.com/baojian" target='_blank'>国产保健食品</a></li>
          <li><a href="http://db.yaozh.com/jinkoubaojian" target='_blank'>进口保健食品</a></li>
          <li><a href="http://db.yaozh.com/huazhuang" target='_blank'>国产化妆品</a></li>
          <li><a href= arrow"http://db.yaozh.com/jinkouhuazhuang" target='_blank'>进口化妆品</a></li>
          <li><a href="http://db.yaozh.com/huazhuang_yl" target='_blank'>化妆品原料</a></li>
        </ul>
      </li>
      <li class="padding">
        <a href="http://db.yaozh.com/gjvip.php?action=gaojivip" title="药智数据VIP入口" target="_blank">VIP</a>
      </li>
      <li class="padding">
        <a href="http://db.yaozh.com/zhuce/map.php#body" title="数据库导航_网站地图" class="map_i" target="_blank">数据库导航</a>
      </li>
    </ul>
    <h3 class="mt20 mb10">其它页面导航</h3>
    <?php require_once('./includes/ui-navigation.php'); ?>
  </div>
</body>