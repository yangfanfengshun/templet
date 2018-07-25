require.config({
		paths:{
			"jquery":"../libs/jquery",
			"public":"../libs/public",
			"goods":"../js/goods"
		}
})
var arr = ["jquery","public","goods"]
require(arr,function($,public,goods){
	console.log(goods)

})


