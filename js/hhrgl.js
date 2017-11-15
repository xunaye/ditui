// JavaScript Document

$(function(){
	var num=0;
	/*全选*/
	$(".chez").click(function(){
		if($(this).attr("src") == "images/check.png"){
			$(this).attr("src","images/checkd.png");
			$(".tab2 .td1 .imgc").attr("src","images/checkd.png");
		}else{
			$(this).attr("src","images/check.png");	
			$(".tab2 .td1 .imgc").attr("src","images/check.png");
		}
		
	});
	/*单选*/
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
	$(".tab2 .abut").click(function(){
		if($(this).html() == "停用"){
			$(this).parent().find(".sbut").html("禁用");	
			$(this).parent().find(".sbut").addClass("sred");
			$(this).html("启用");
		}else{
			$(this).parent().find(".sbut").html("开启");	
			$(this).parent().find(".sbut").removeClass("sred");
			$(this).html("停用");	
		}
	});
	$(".yxtb tr").each(function(index, element) {
		
        $(this).find(".axg").click(function(){
			var aQhp=$(this).parent().parent().find(".qh_p");
			var aQhi=$(this).parent().parent().find(".qh_i");
			
			if(aQhp.css("display") == "block"){
				aQhi.each(function(i,value){
					$(this).attr("value",($(this).parent().find(".qh_p").html()));
				});
				$(this).html("保存").css("color","#35c7c9");
				aQhp.hide();
				aQhi.show();
			}else{
				aQhp.each(function(i,value){
					$(this).html($(this).parent().find(".qh_i").attr("value"));
				});
				$(this).html("修改").css("color","#333");
				aQhi.hide();
				aQhp.show();
			}
		});
    });
});












