<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>表单</title>
  <link rel="stylesheet" href="//static.yaozh.com/css/app.css">
  <link rel="stylesheet" href="//static.yaozh.com/css/db.css">
  <script src="//static.yaozh.com/js/app.js"></script>
  <!--[if lt IE 9]><script src="http://static.yaozh.com/js/special/html5shiv.js"></script><![endif]-->
</head>
<body>
  <div class="main page-list">
    <h3>普通单行</h3>
    <div class="ui-box p20 mt10">
      <form action="" class="form">
        <label class="form-label">药品名称：</label>
        <input class="form-control" placeholder="药品名称" type="text" name="name" required />
        <label class="checkbox ml5 mr20">
          <input type="checkbox">精确查找
        </label>
        <label class="form-label ml20">超说明书适应症：</label>
        <input class="form-control" placeholder="超说明书适应症" type="text" name="name" required />
        <button type="submit" class="btn btn-blue ml20 em6">搜索</button>
      </form>
    </div>
    <h3 class="mt20">二栏表单</h3>
    <div class="ui-box p20 mt10">
      <form class="form align-right form-style-1" action="">
        <div class="form-groups pt20">
          <div class="form-group">
            <label class="form-label">药品名称：</label>
            <div class="form-box">
              <input class="form-control" placeholder="药品名称" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">药物剂型和：</label>
            <div class="form-box">
              <input class="form-control" placeholder="药物剂型和" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">申请机构：</label>
            <div class="form-box">
              <input class="form-control" placeholder="申请机构" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label"></label>
            <div class="form-box">
              <button type="submit" class="btn btn-blue form-control-width">搜索</button>
            </div>
          </div>
        </div>
        <div class="form-groups pt20">
          <div class="form-group">
            <label class="form-label">药品名称：</label>
            <div class="form-box">
              <input class="form-control" placeholder="请输入账号" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">药物剂型和：</label>
            <div class="form-box">
              <input class="form-control" placeholder="请输入账号" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">申请机构：</label>
            <div class="form-box">
              <input class="form-control" placeholder="请输入账号" type="text" name="name" required />
            </div>
          </div>
        </div>
      </form>    
    </div>
    <h3 class="mt20">三栏表单</h3>
    <div class="ui-box p20 mt10">
      <form class="form align-right form-style-2" action="">
        <div class="form-double-groups pt20">
          <div class="form-group">
            <label class="form-label">药品名称：</label>
            <div class="form-box">
              <input class="form-control" placeholder="药品名称" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">药物剂型和：</label>
            <div class="form-box">
              <input class="form-control" placeholder="药物剂型和" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">申请机构：</label>
            <div class="form-box">
              <input class="form-control" placeholder="申请机构" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">药品名称：</label>
            <div class="form-box">
              <input class="form-control" placeholder="请输入账号" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">药物剂型和：</label>
            <div class="form-box">
              <input class="form-control" placeholder="请输入账号" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">申请机构：</label>
            <div class="form-box">
              <input class="form-control" placeholder="请输入账号" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group clear">
            <label class="form-label"></label>
            <div class="form-box">
              <button type="submit" class="btn btn-blue form-control-width">搜索</button>
            </div>
          </div>
        </div>
        <div class="form-groups">
          <div class="ui-box ui-box-yellow">
            <p>使用说明</p>
            <p>一、项目状态检索标识及释义:</p>
            <ul class="ml20">
              <li>A：已激活</li>
              <li>I： 未激活</li>
            </ul>
            <p>二、项目类型检索标识及释义:</p>
            <ul style="list-style-type:upper-roman;margin-left:40px;">
              <li>生产现场、设备、操作步骤和人员（2000年6月起不再适用）。</li>
              <li>药物、药物中间体，及其制备过程中使用的原料或药品。</li>
              <li>包装材料。</li>
              <li>赋形剂、着色剂、香精、香料, 或其制备过程中使用的原料。</li>
              <li>FDA认可的参考资料。</li>
            </ul>
            <p>三、项目主题支持使用药物英文名、国别及地区来查询。</p>
            <p>四、项目持有者支持公司名称查询。</p>
          </div>
        </div>

      </form>    
    </div>
  
  </div>
</body>
