$(function(){
	var num=0;
	/*二维码列表全选*/
	$(".chez").click(function(){
		if($(this).attr("src") == "images/check.png"){
			$(this).attr("src","images/checkd.png");
			$(".tab2 .td1 .imgc").attr("src","images/checkd.png");
		}else{
			$(this).attr("src","images/check.png");	
			$(".tab2 .td1 .imgc").attr("src","images/check.png");
		}
		
	});
	/*二维码列表单选*/
	$(".tab2 .td1 .imgc").click(function(){
		if($(this).attr("src") == "images/check.png"){
			$(this).attr("src","images/checkd.png");
			num++;
		}else{
			$(this).attr("src","images/check.png");	
			num--;
		}
		if(num == $(".tab2 tr").length){
			$(".chez").attr("src","images/checkd.png");
		}else{
			$(".chez").attr("src","images/check.png");
		}
	});
	
	
	//二维码列表input边框焦点改变
	$('.ewmlb_top .top_ul').on('focus','input',function(){
		$(this).css("border","1px solid #36c7c9");
	});
	$('.ewmlb_top .top_ul').on('blur','input',function(){
		$(this).css("border","1px solid #ccc");
	});
	
	//二维码列表页面删除本行
	$('.ewmlb .tab2').on('click','.del',function(){
		$(this).parent().parent().remove();
	});
	
	
	//二维码列表页面禁用，启用
	$('.ewmlb .tab2').on('click','.js_jy',function(){
		if($(this).html()=="禁用"){
			$(this).html("启用");
			$(this).parent().prev().find('span').html('禁用').addClass('abut');
		}else{
			$(this).html("禁用");
			$(this).parent().prev().find('span').html('开启').removeClass('abut');
		}
	});
	
	
	
	//二维码创建input边框焦点改变
	$('.ewmcj .tbody li').on('focus','input',function(){
		$(this).css("border","1px solid #36c7c9");
	});
	$('.ewmcj .tbody li').on('blur','input',function(){
		$(this).css("border","1px solid #ccc");
	});
	
	
	
	//二维码创建页面删除本行
	$('.ewmcj').on('click','.del',function(){
		$(this).parent().parent().remove();
	});
	
	//二维码创建页面添加行
	
	
	//	添加文件页面单选按钮选中
	$('.tjwj .radio').on('click','span',function(){
		if(!$(this).hasClass('checked')){
			$(this).addClass('checked').siblings().removeClass('checked');
		}
	});
	
	
	
	//添加文件页面input边框颜色焦点改变
	$('.tjwj .form_ul input').focus(function(){
		$(this).css("border","1px solid #35C6C9");
	});
	$('.tjwj .form_ul input').blur(function(){
		$(this).css("border","1px solid #e1e1e1");
	});
	
	
	
	
	
	//文件列表,添加文件,文件详情tab切换
	$('.js_wj').on('click','span',function(){
		if(!$(this).hasClass('act')){
			$(this).addClass('act').siblings().removeClass('act');
			var index=$(this).index();
			$('.wj_con').find('.js_con').eq(index).show().siblings().hide();
		}
	});
	
	
	//文件列表中点击查看打开新tab页
	$('.wjlb').on('click','.js_ck',function(){
		$('.js_wj').find('span').removeClass('act');
		$('.js_wj').append('<span class="act">优呼呼合同<img src="images/close_tab.png" class="close_tab"></span>');
		$('.wj_con .js_con').hide();
		$('.wj_con').append(
			`<div class="wjxq js_con">
				<h3>优呼呼城市合伙人合同</h3>
				<ul class="ul_wjxq">
					<li>添加人：<span>陈博</span></li>
					<li class="li2">文件类型：<span>合同</span></li>
					<li class="li3">添加时间：<span>2017／11/8 11:23</span></li>
					<li>编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span></li>
				</ul>
				<div class="wjxq_con">
					甲方：泉州市优呼呼科技有限公司                                                  乙方：                                           
					地址：福建省泉州市丰泽区万达广场B座1508                                   地址:  
					联系人：陈乐亨                                                                          联系人：                        
					电话：18396223306                                                                   电话：
					                                 
					甲、乙双方本着“平等互利、共同发展”的原则，经友好协商，对优呼呼白条产品推广、销售事项达成如下约定：
					一、 合作产品
					甲、乙双方合作的产品为优呼呼白条产品。甲方可根据需要修改产品分类及产品价格。产品详情如下（具体以最终产品确认函为准）：
					产品     套餐面值     每月消费     期数     每月还款     享受折扣
					A     12000     1000     12     888.49     8.88
					B     24000     2000     12     1776.98     8.88
					二、 甲方责任
					1、授权区域
					甲方授权乙方作为优呼呼白条产品     省     市的城市合伙人。乙方负责授权区域
					内甲方产品的分销推广及营销管理工作。乙方必须具备对线下客户的服务、管理能力。如乙方的当地销售资源及销售量不符合甲方要求，甲方有权解除本合同并撤销乙方的合作商资格。
					2、协议有效期
				</div>
			</div>`);
		
	});
	
	
	
	
	//文件详情页关闭按钮，关闭当前tab页
	$(document).on('click','.close_tab',function(){
		var index=$(this).parent().index();
		$(this).parent().prev().addClass('act');
		$(this).parent().remove();
		$('.wj_con').find('.js_con').eq(index-1).show().siblings().hide();
		$('.wj_con').find('.js_con').eq(index).remove();
	});
	
	
	//员工列表,添加员工tab切换
	$('.js_yg').on('click','span',function(){
		if(!$(this).hasClass('act')){
			$(this).addClass('act').siblings().removeClass('act');
			var index=$(this).index();
			$('.yg_con').find('.js_con').eq(index).show().siblings().hide();
		}
	});
	
	//添加员工页面input边框颜色焦点改变
	$('.tjyg .form_ul input').focus(function(){
		$(this).css("border","1px solid #35C6C9");
	});
	$('.tjyg .form_ul input').blur(function(){
		$(this).css("border","1px solid #e1e1e1");
	});
	
	
	
	//添加员工页面多选框选中
	$('.tjyg .qx_ul').on('click','img',function(){
		if($(this).attr('src')=="images/check.png"){
			$(this).attr('src',"images/checkd.png");
		}else{
			$(this).attr('src',"images/check.png");
		}
	});
});
