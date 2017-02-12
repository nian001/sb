$(function(){
	var bannerInit = function(){
		var banerImgs = $(".banner-item");
		var descs = $(".film-desc-list li");
		var btns = $(".banner-btns li");
		var len = banerImgs.length;
		var index = 0;
		btns.hover(function(){
			var _this = $(this);
			index = _this.index();
			_this.addClass("active");
			_this.siblings().removeClass("active");
			banerImgs.eq(index).addClass("active");
			banerImgs.eq(index).siblings().removeClass("active");
			descs.eq(index).addClass("active");
			descs.eq(index).siblings().removeClass("active");

		});
		setInterval(function(){
			index ++;
			if (index >= len) {
				index = 0;
			}
			btns.eq(index).addClass("active");
			btns.eq(index).siblings().removeClass("active");
			banerImgs.eq(index).addClass("active");
			banerImgs.eq(index).siblings().removeClass("active");
			descs.eq(index).addClass("active");
			descs.eq(index).siblings().removeClass("active");
		}, 3000);
	}
	bannerInit();
	var navInit = function(){
		var _navList = $(".nav-left li");
		_navList.hover(function(){
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
		});
	}
	navInit();
});