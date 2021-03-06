var g=function(id)
{
	return document.getElementById(id);
}
/*时间类函数的定义*/
var TimeLine=function(){
	this.order=[];//动画序列
	this.add=function(timeout,func,log){
		this.order.push({
			timeout:timeout,
			func:func,
			log:log,
		});
	}
	/*支持快进*/
	this.start=function(ff){
		for(s in this.order){
			(function(me){
				var fn=me.func;
				var timeout=me.timeout;
				var log=me.log;
			    timeout=Math.max(timeout-(ff||0),0);


                 setTimeout(fn,timeout);
                 setTimeout(function(){
                 	console.log('time->',timeout,'log->',log);
                 },timeout);
			})(this.order[s]);
		}
	}
}
/*
var s = new TimeLine();

s.add(1000,function(){
	console.log('first');
},'int')

s.add(3500,function(){
	console.log('sec');
},'int')

s.start(3000);*/
//初始的场景
var s1 = new TimeLine();
//粽子展开的场景
var s2 = new TimeLine();
//粽子旋转的场景
var s3 = new TimeLine();
s1.add(1,function(){
	g('c_zongzi_box').className='c_zongzi_box c_zongzi_box_rock';
	g('c_shengzi').onclick=function(){
      s2.start();
   g('c_shengzi').onclick=function(){}
}
})
//定义粽子展开的动画
//1.绳子的动画
s2.add(1,function(){
g('c_zongzi_box').className='c_zongzi_box';
g('text').className='text text_in ';	
})
s2.add(100,function(){
g('c_shengzi').className='c_shengzi_2';	
})
s2.add(500,function(){
g('c_shengzi').className='c_shengzi_3';	
})
s2.add(1000,function(){
g('c_shengzi').className='c_shengzi_3';	
g('caption').className='caption caption_rock';
})
s2.add(1500,function(){
g('c_shengzi').className='c_shengzi_0';	
})
//粽子的动画
s2.add(2000,function(){
g('c_zongzi').className='c_zongzi c_zongzi_out';	
g('c_zongzirou').className='c_zongzirou c_zongzirou_in';
g('c_zuoye').className='c_zuoye c_zuoye_in';
g('c_youye').className='c_youye c_youye_in';
g('c_t_1').className='c_t_1 c_t_in';
g('c_t_2').className='c_t_2 c_t-mirror_0';
})
//左叶右叶的动画
s2.add(3000,function(){
g('c_zuoye').className='c_zuoye c_zuoye_in c_zuoye_out';
g('c_youye').className='c_youye c_youye_in c_youye_out';
g('c_diye').className='c_diye c_diye_in';	
s3.start();
})

//粽子肉托盘旋转动画定义
s3.add(1000,function(){
g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_1'
});
s3.add(1200,function(){
g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_2';
g('c_t_1').className='c_t_1 c_t_in c_t_view_2';
g('c_t_2').className='c_t_2 c_t_in c_t-mirror_2';
});
s3.add(1400,function(){
g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_3';
g('c_t_1').className='c_t_1 c_t_in c_t_view_3';
g('c_t_2').className='c_t_2 c_t_in c_t-mirror_3';
});
s3.add(1600,function(){
g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_4';
g('c_t_1').className='c_t_1 c_t_in c_t_view_4';
g('c_t_2').className='c_t_2 c_t_in c_t-mirror_4';
});
s3.add(1800,function(){
g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_0';
g('c_t_1').className='c_t_1 c_t_in c_t-mirror_0';
g('c_t_2').className='c_t_2 c_t_in c_t_view_0';
});
s3.add(3000,function(){
g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_4';
g('c_t_1').className='c_t_1 c_t_in c_t_view_4';
g('c_t_2').className='c_t_2 c_t_in c_t-mirror_4';
});
s3.add(3200,function(){
g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_3';
g('c_t_1').className='c_t_1 c_t_in c_t_view_3';
g('c_t_2').className='c_t_2 c_t_in c_t-mirror_3';
});
s3.add(3400,function(){
g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_2';
g('c_t_1').className='c_t_1 c_t_in c_t_view_2';
g('c_t_2').className='c_t_2 c_t_in c_t-mirror_2';
});
s3.add(3600,function(){
g('c_zongzirou').className='c_zongzirou c_zongzirou_in c_zongzirou_view_1';
g('c_t_1').className='c_t_1 c_t_in c_t_view_0';
g('c_t_2').className='c_t_2 c_t_in c_t-mirror_0';
});
s3.add(5000,function(){
s3.start();
});
//s1.start();


//图片加载器,解决图片频闪问题
var imgs=['img/zzr_2.png','img/zzr_3.png','img/zzr_4.png'];
//定义回调
var imgs_onload=function(){
	imgs.pop();
	if(imgs.length==0){
		s1.start();
	}
}
for(s in imgs)
{
	var img = new Image;
	img.onload =imgs_onload;
	img.src=imgs[s];
}

