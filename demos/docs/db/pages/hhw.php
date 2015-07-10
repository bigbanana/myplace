<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>化合物</title>
  <link rel="stylesheet" href="//static.yaozh.com/css/app.css">
  <link rel="stylesheet" href="//static.yaozh.com/css/db.css">
  <script>
    var config = {
      baseUrl : '//static.yaozh.com/js',
      deps : ['project/db/public']
    }
  </script>
  <script src="//static.yaozh.com/js/app.js"></script>
  <!--[if lt IE 9]><script src="http://static.yaozh.com/js/special/html5shiv.js"></script><![endif]-->
  <script>
    require(['project/db/pages/hhw'],function(page){page.detail()});
  </script>
</head>
<body class="page-hhw">
  <div class="ui-topbar other-topbar">
    <div class="wrapper">
      <div class="fl">
        <a href="#" class="item cl-blue">药智网</a>
        <a href="#" class="item cl-blue">药智新闻</a>
        <a href="#" class="item cl-blue">药智商城</a>
        <a href="#" class="item cl-blue">药智论坛</a>
        <span class="item sub-box">
          <a class="name" href="#">客户服务 <i class="fa"></i></a>
          <div class="subnav">
            <ul>
              <li><a href="#">服务QQ</a></li>
              <li><a href="#">电话咨询</a></li>
              <li><a href="#">在线帮助</a></li>
            </ul>
          </div>
        </span>
        <span class="item sub-box app">
          <span class="app-icon"><i class="fa"></i> <span>药智数据APP</span></span>
          <div class="subnav">
            <div class="box">
              <a href="javascript:alert('开发中！')" class="btn btn-sm ios btn-gray">
                <i class="fa"></i>
                <span>iPhone版下载</span>
              </a>
              <a href="javascript:alert('开发中！')" class="btn btn-sm android mt10 btn-green">
                <i class="fa"></i>
                <span>android版下载</span>
              </a>
              <div class="tc mt10">
                <i class="download_qrcode"></i>
              </div>
            </div>

          </div>
        </span>
      </div>
      <div class="fr">
        <span class="item user">
          <img src="http://www.yaozh.com/uploads/userface/no.png" alt="头像">
          <a href="#" target="_blank">小智数据库</a>
          <i class="vip5"></i>
        </span>
        <span class="item line">
          <a href="#"><i class="fa"></i> 50</a>
        </span>
        <span class="item line">
          <a href="#">退出</a>
        </span>

      </div>
      
    </div>
  </div>
  <div class="header-bar">
    <div class="header-layer">
      <form class="wrapper" action="//db.yaozh.com/jiansuo.php" target="_blank">
        <a href="//db.yaozh.com" class="logo" title="药智数据"></a>        
        <div class="search-box">
          <select class="search-type-select ignore-focus" name="btn_jiansuo" data-widget="dropdownSelect">
            <option value="1" data-action="//db.yaozh.com/jiansuo.php?btn_jiansuo=1" data-key="yaoname">数据库</option>
            <option value="2" data-action="//s.yaozh.com/Index/search" data-key="search">商城</option>
            <option value="3" data-action="//www.yaozh.com/list/" data-key="keytitle">威客</option>
            <option value="4" data-action="//bbs.yaozh.com/search.php?searchsubmit=yes" data-key="srchtxt">论坛</option>
          </select>
          <input class="search ignore-focus" name="yaoname" type="text">
          <a href="javascript:;" class="search-btn">搜索</a>
        </div>
      </form>
    </div>
  </div>
  <div class="wrapper">
    <ul class="ui-topnav other-nav">
      <li class="item">
        <a class="name" href="javascript:;">药品研发</a>
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
        <a class="name" href="javascript:;">生产检验</a>
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
        <a class="name" href="javascript:;">合理用药</a>
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
        <a class="name" href="javascript:;">市场信息</a>
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
        <a class="name" href="javascript:;">CHEMPHARM</a>
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
        <a class="name" href="javascript:;">中药材</a>
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
        <a class="name" href="javascript:;">医疗器械</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/jixie" target='_blank'>国产器械</a></li>
          <li><a href="http://db.yaozh.com/jinkoujixie" target='_blank'>进口器械</a></li>
          <li><a href="http://db.yaozh.com/qixiebiaozhun" target='_blank'>医疗器械标准</a></li>
          <li><a href="http://db.yaozh.com/fenleimulu" target='_blank'>医疗器械分类目录</a></li>
          <li><a href="http://db.yaozh.com/jixieshengchanqiye" target='_blank'>医疗器械生产企业</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name" href="javascript:;">食品-化妆品</a>
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
  </div>

  <div class="main">
    <div class="ui-crumb offset-top">
      <span>当前位置：</span>
      <a href="#">首页</a>
      <em>&gt;</em>
      <a href="#">CHEMDATA</a>
      <em>&gt;</em>
      <a href="#">药物合成数据库</a>
      <em>&gt;</em>
      <span>443-48-1</span>
    </div>

    <table class="table offset-top">
      <tbody>
        <tr>
          <td style="width:140px;">
            <p>【结 构 式】</p>
            <img style="max-width:200px;max-height:100px" src="http://db.yaozh.com/wmf/07/070005.jpg" alt="">
          </td>
          <td style="width:360px;">
            <div><p><span class="s_t">【药物名称】</span><span>Metronidazole, IDR-90105(Ophthalmic), Rosased,Zidoval, Metrogel, Flagyl</span></p>
              <p><span class="s_t">【化学名称】</span><span>2-Methyl-5-nitro-1H-imidazole-1-ethanol
              </span></p>
              <p><span class="s_t">【CA登记号】</span><span>443-48-1, 133884-00-1 (deleted CAS)</span></p>
              <p><span class="s_t">【&nbsp;分&nbsp;子&nbsp;式&nbsp;】</span><span>C<sub>6</sub>H<sub>9</sub>N<sub>3</sub>O<sub>3</sub></span></p>
              <p><span class="s_t">【&nbsp;分&nbsp;子&nbsp;量&nbsp;】</span><span>171.15693</span></p>
            </div>
          </td>
          <td>
            <div>
              <p><span class="s_t">【研发阶段】</span><span>上市-1960</span></p>
              <p><span class="s_t">【开发单位】</span><span>Pfizer (Originator), 3M Pharmaceuticals (Not Determined), Novartis (Not Determined), Pierre Fabre (Not Determined), Institute for Drug Research (Licensee)</span></p>
              <p><span class="s_t">【药理作用】</span><span>Acne Therapy, Antiamebics, Antibacterial Drugs, Antibacterial Ophthalmic Drugs, Antifungal Agents, ANTIINFECTIVE THERAPY, Antitrichomonals, DERMATOLOGIC DRUGS, Ocular Antiinflammatory and Antiinfective Agents, OCULAR MEDICATIONS, Ophthalmic Drugs, Treatment of Protozoal Diseases</span></p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="ui-tab mt20" data-widget="tab">
      <a href="javascript:;">合成路线1</a>
      <div>
        <h3>合成路线1</h3>
        <p class="ui-box ui-box-gray mt10 text-indent">2-Methylimidazole (I) is converted into the bisulfate salt, and then nitrated by means of a sulfonitric mixture in Ac2O to produce 2-methyl-4-nitroimidazole (II) . In a variant of this procedure, 2-methylimidazole (I) is nitrated by using a ferric nitrate-tonsyl adduct in several solvents. Imidazole (II) is then regioselectively alkylated with boiling 2-chloroethanol to produce the title compound. Alternatively, the alkylation of (II) has been reported by treatment with ethylene oxide (III) under acidic conditions.</p>
        <p class="mt5"><img src="http://db.yaozh.com/wmf/sch/07/07000501a.jpg" alt=""></p>
        
        <div class="nb mt20" data-widget="tab" data-event="mouseenter">
          <a href="#">参考文献</a>
          <div>
            <table class="table table-striped">
              <tbody>
                <tr>
                  <td>
                    <span>【<b>1</b>】</span>
                    <span>Frank, A.; Karn, H.; Spanig, H. (Abbott GmbH & Co. KG); Production of 1-hydroxyalkyl-5-nitroimidazoles. </span>
                    <a target="_blank" href="http://worldwide.espacenet.com/searchResults?ST=singleline&amp;locale=cn_CN&amp;submitted=true&amp;DB=worldwide.espacenet.com&amp;query=DE2359625">DE 2359625</a>
                    <a target="_blank" href="http://worldwide.espacenet.com/searchResults?ST=singleline&amp;locale=cn_CN&amp;submitted=true&amp;DB=worldwide.espacenet.com&amp;query=FR2253019">FR 2253019</a>
                    <a target="_blank" href="http://worldwide.espacenet.com/searchResults?ST=singleline&amp;locale=cn_CN&amp;submitted=true&amp;DB=worldwide.espacenet.com&amp;query=GB1481349">GB 1481349</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>【<b>2</b>】</span>
                    <span>Frank, A.; Dockner, T.; Karn, H. (Abbott GmbH & Co. KG); Process for the preparation of 1-(2-hydroxyethyl)-2-methyl-5-nitroimidazole of high purity.</span>
                    <a target="_blank" href="http://worldwide.espacenet.com/searchResults?ST=singleline&amp;locale=cn_CN&amp;submitted=true&amp;DB=worldwide.espacenet.com&amp;query=DE2359625">DE 2359625</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>【<b>2</b>】</span>
                    <span>Frank, A.; Dockner, T.; Karn, H. (Abbott GmbH & Co. KG); Process for the preparation of 1-(2-hydroxyethyl)-2-methyl-5-nitroimidazole of high purity.</span>
                    <a target="_blank" href="http://worldwide.espacenet.com/searchResults?ST=singleline&amp;locale=cn_CN&amp;submitted=true&amp;DB=worldwide.espacenet.com&amp;query=DE2359625">DE 2359625</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="#">中间体</a>
          <div>
            <table class="table table-striped tc">
              <thead>
                <tr>
                  <th>中间体序号</th>
                  <th>中间体编号</th>
                  <th>品名</th>
                  <th>CAS号</th>
                  <th>分子式</th>
                  <th>供应商</th>
                  <th>用于合成</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>(III)</td>
                  <td><a href="javascript:;" class="blue zjt_xq_bt" data="105048" title="点击查看详情" style="cursor: pointer;">10393</a></td>
                  <td class="">Oxirane; Ethylene oxide</td>
                  <td>75-21-8</td>
                  <td>C<sub>2</sub>H<sub>4</sub>O</td>
                  <td><a class="cl-gray" href="http://www.chemblink.com/productSuppliers/75-21-8_suppliers.htm" target="_blank" class="blue">详情</a></td>
                  <td><a href="detail.php?uid=105048&amp;action=fzk1" target="_blank" class="f-b blue" title="点击查看更多详情信息">详情</a>
                  </td>
                </tr>
                <tr>
                  <td>(III)</td>
                  <td><a href="javascript:;" class="blue zjt_xq_bt" data="105048" title="点击查看详情" style="cursor: pointer;">10393</a></td>
                  <td class="">Oxirane; Ethylene oxide</td>
                  <td>75-21-8</td>
                  <td>C<sub>2</sub>H<sub>4</sub>O</td>
                  <td><a class="cl-gray" href="http://www.chemblink.com/productSuppliers/75-21-8_suppliers.htm" target="_blank" class="blue">详情</a></td>
                  <td><a href="detail.php?uid=105048&amp;action=fzk1" target="_blank" class="f-b blue" title="点击查看更多详情信息">详情</a>
                  </td>
                </tr>
                <tr>
                  <td>(III)</td>
                  <td><a href="javascript:;" class="blue zjt_xq_bt" data="105048" title="点击查看详情" style="cursor: pointer;">10393</a></td>
                  <td class="">Oxirane; Ethylene oxide</td>
                  <td>75-21-8</td>
                  <td>C<sub>2</sub>H<sub>4</sub>O</td>
                  <td><a class="cl-gray" href="http://www.chemblink.com/productSuppliers/75-21-8_suppliers.htm" target="_blank" class="blue">详情</a></td>
                  <td><a href="detail.php?uid=105048&amp;action=fzk1" target="_blank" class="f-b blue" title="点击查看更多详情信息">详情</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="#">合成目标</a>
        </div>

      </div>
      <a href="javascript:;" class="">合成路线2</a>
      <div>
        <p>第二个</p>
      </div>
      <a href="javascript:;" class="">合成路线3</a>
      <div>
        <p>第三个</p>
      </div>
      <a href="javascript:;" class="">合成路线4</a>
      <div>
        <p>第四个</p>
      </div>
      <a href="javascript:;" class="">合成路线5</a>
      <div>
        <p>第五个</p>
      </div>
    </div>

    <div class="top-box offset-top">
      <div class="left-box">
        <div class="clearfix">
          <div class="img">
            <a class="magnifier-wrapper" href="http://db.yaozh.com/jiegou/98/55/98-55-5.png">
              <img data-widget="magnifier" data-zoomable="true" data-wrapper="magnifier-preview" src="http://db.yaozh.com/jiegou/98/55/98-55-5.png" width="200">
            </a>
            <hr>
            <div class="mt5 tc">
              <a class="cl-blue-1" href="http://db.yaozh.com/db_hhw/jiegou.php" target="_blank"><i class="fa"></i> 结构式搜索</a>
            </div>
            <div id="magnifier-preview" class="magnifier-preview">
              
            </div>
          </div>
          <div class="info ui-panel ui-panel-condensed">
            <div class="ui-panel-title">
              <span class="ui-panel-name"><b class="cl-blue-2">α-萜品醇</b></span>
              <div class="ui-panel-side">
                <a class="btn btn-xs" href="javascript:;"><i class="fa"></i> 纠错</a>
                <a class="btn btn-xs" href="javascript:;"><i class="fa"></i> 分享</a>
              </div>
            </div>
            <div class="ui-panel-content">
              <table class="table table-nb table-striped product-info mt10">
                <tbody>
                  <tr>
                    <td class="title">CAS号</td>
                    <td>98-55-5</td>
                  </tr>
                  <tr>
                    <td class="title">中文别名</td>
                    <td>alpha-松油醇; 2-(4-甲基-3-环己烯基)-2-丙醇</td>
                  </tr>
                  <tr>
                    <td class="title">英文别名</td>
                    <td>98-55-5</td>
                  </tr>
                  <tr>
                    <td class="title">分子量</td>
                    <td>154.25</td>
                  </tr>
                  <tr>
                    <td class="title">分子式</td>
                    <td>C<sub>10</sub>H<sub>18</sub>O</td>
                  </tr>
                  <tr>
                    <td class="title">EINECS编号</td>
                    <td>202-680-6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="ui-tab mt20" data-widget="tab">
          <a href="javascript:;">综合信息</a>
          <div class="zoom">
            <div class="zh-menu">
              <div class="title"><i class="fa"></i> 目录导航</div>
              <ul>
                <li><a class="text" href="#zh1">1.安全术语</a></li>
                <li><a class="text" href="#zh2">2.风险术语</a></li>
              </ul>
              <div class="cl-gray9">提示：点击目录可直接跳转到对应的信息。</div>
            </div>
            <div class="zh-items">
              <div class="item open">
                <div id="zh1" class="title">
                  <i class="fa"></i>
                  <span>安全术语</span>
                  <span class="arrow"></span>
                </div>
                <div class="content">
                  <a href="safety_description.html#S37" target="_blank">S37</a>
                </div>
              </div>
              <div class="item open">
                <div id="zh2" class="title">
                  <i class="fa"></i>
                  <span>风险术语</span>
                  <span class="arrow"></span>
                </div>
                <div class="content">
                  <a href="safety_description.html#S37" target="_blank">S37</a>
                </div>
              </div>
            </div>
          </div>
          <a href="javascript:;" class="">杂质-对照品</a>
          <div>
            <table class="table table-striped tc">
              <thead>
                <tr>
                  <th>品种编号</th>
                  <th>中文名称</th>
                  <th>来源</th>
                  <th>分类</th>
                  <th>CAS号</th>
                  <th>用途</th>
                  <th>包装规格</th>
                  <th>英文名称</th>
                  <th>详情</th>
                </tr>
              </thead>
              <tbody>         
                <tr>
                  <td>T117490</td>
                  <td><a href="http://db.yaozh.com/screening" target="_blank" class="cl-blue"></a></td>
                  <td>加拿大TRC</td>
                  <td class="cl-grey">Pharmaceuticals, Intermediates &amp; Fine Chemicals</td>
                  <td></td>
                  <td>Shows antioxidant effects. Antiseptic.</td>
                  <td></td>
                  <td>α-Terpinenol</td>
                  <td><a href="javascript:;" class="cl-blue b" title="点击查看更多详情信息">详情</a></td>
                </tr>
                </tbody>
            </table>
          </div>
          <a href="javascript:;" class="">详细信息</a>
          <div>
            <table class="table detail-info-table">
              <tbody>
                <tr>
                  <td class="striped">化学名</td>
                  <td></td>
                </tr>
                <tr>
                  <td class="striped">用途</td>
                  <td></td>
                </tr>
                <tr>
                  <td class="striped">INCHIKEY</td>
                  <td></td>
                </tr>
                <tr>
                  <td class="striped">EINECS号</td>
                  <td>202-680-6</td>
                </tr>
                <tr>
                  <td class="striped">ChemIDplus</td>
                  <td><a href="http://chem.sis.nlm.nih.gov/chemidplus/unii/21334LVV8W" class="f-b blue t_d_u" target="_blank" title="ChemIDplus 是一种在线的化学辞典，收录 38万 多种与生物医学相关的化合物。每条记录中有CAS 登记号及其它辨识号码、分子式、通用名称、试验编号、其它别名、MeSH编号以及用于导引到ELHILL 和 TOXNET 系统的定位符。">ChemIDplus</a></td>
                </tr>
                <tr>
                  <td class="striped">DrugPortal</td>
                  <td><a href="http://druginfo.nlm.nih.gov/drugportal/dpdirect.jsp?name=UNII-21334LVV8W" class="f-b blue t_d_u" target="_blank" title="美国国立医学图书馆（NLM）的药物信息港（Drug Information Portal）为用户提供一个从NLM以及其它重要管理机构（如，FDA 和 CDC等）查询药物信息的门户。">DrugPortal</a></td>
                </tr>
                <tr>
                  <td class="striped">NCIt</td>
                  <td><a href="http://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI%20Thesaurus&amp;code=C77448" class="f-b blue t_d_u" target="_blank" title="National Cancer Institute Thesaurus 美国癌症研究所词库">C74960</a></td>
                </tr>
                <tr>
                  <td class="striped">ITIS</td>
                  <td><a title="ITIS数据" href="http://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&amp;search_value=" target="new"></a></td>
                </tr>
                <tr>
                  <td class="striped">NCBI</td>
                  <td><a title="NCBI数据" href="http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&amp;id=" target="new"></a></td>
                </tr>
                <tr>
                  <td class="striped">PLANTS</td>
                  <td><a title="PLANTS数据" href="http://plants.usda.gov/java/profile?symbol=" target="new"></a></td>
                </tr>
                <tr>
                  <td class="striped">SMILES</td>
                  <td>CC1=CCC(CC1)C(C)(C)O</td>
                </tr>        
                <tr>
                  <td class="striped">更新时间</td>
                  <td>2014.8.8</td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="javascript:;" class="">最大用量</a>
          <div>
            <p class="fs14 b cl-blue-2">最大用量表（来源：FDA）</p>
            <table class="table mt10 table-style-1">
              <thead>
                <tr class="tl"><th>给药途径</th><th>最大用量</th></tr>
              </thead>
              <tbody>
                <tr><td>TOPICAL;  LOTION</td><td>11%</td></tr>
              </tbody>
            </table>
          </div>
          <a href="javascript:;" class="">杂质-对照品供应商</a>
          <div>
            <p class="fs14 b cl-blue-2">供应商</p>
            <table class="table mt10 tc">
              <thead>
                <tr><th>公司名称</th><th>联系人</th><th>联系电话</th><th>移动电话</th><th>电子邮箱</th><th>传真</th><th>公司地址</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>TRC</td>
                  <td>
                    <span>韩艺</span> 
                    <a class="btn btn-blue btn-xs ml20" target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2069479092&amp;site=qq&amp;menu=yes" title="点击与联系人进行QQ交谈"><i class="fa"></i> QQ交谈</a>
                  </td>
                  <td>023-62988285转8003</td>
                  <td>18996207062</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="company-info ui-panel ui-panel-condensed">
          <div class="ui-panel-title">
            <span class="ui-panel-name"><i class="fa"></i> 杂质-对照品供应商信息</span>
          </div>
          <div class="ui-panel-content m10">
            <p class="fs14 cl-blue b">TRC</p>
            <p class="mt10">联系人：<b class="cl-blue">韩艺</b>
              <a class="btn btn-blue btn-xs ml20" target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2069479092&amp;site=qq&amp;menu=yes" title="点击与联系人进行QQ交谈"><i class="fa"></i> QQ交谈</a>
            </p>
            <p>联系电话：<b class="cl-blue">023-62988285转8003</b></p>
            <p>移动电话：18996207062</p>
            <p>电子邮箱：</p>
            <p>传真：</p>
            <p>公司地址：</p>
          </div>
        </div>
      </div>
    </div>
    
      

  </div>
  
  <div class="footer">
    <div class="clearfix">
      <div class="fl">
        <a href="#">关于我们</a>
        <a href="#">帮助中心</a>
        <a href="#">开放接口</a>
        <a href="#">APP</a>
        <a href="#">反馈</a>
      </div>
      <div class="fr">
        <i class="fa"></i>
        <b class="fs16 mr20">400-678-0778</b>
        <a class="fa" href="//weibo.com/yaozh008" target="_blank" title="新浪微博"></a>
        <a class="fa" href="//e.t.qq.com/yaozhcom" target="_blank" title="腾讯微博"></a>
      </div>
    </div>
    <div class="clearfix">
      <div class="fl">
        <span class="mr10">友情链接：</span>
        <a href="#">药品查询</a>
        <a href="#">药品价格</a>
        <a href="#">查询保健品</a>
        <a href="#">商城疾病症状</a>
        <a href="#">网上药店</a>
        <a href="#">药品哈药</a>
      </div>
      <div class="fr">Copyright © 2015 药智网YAOZH.COM  渝ICP备10200070号</div>
    </div>
  </div>

</body>