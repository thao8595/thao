$('button').on('click', function(){
	$('#manHinhPhepTinh').val($('#manHinhPhepTinh').val()+$(this).val());
});

$('#clear').on('click', function(){
	$('#manHinhPhepTinh').val('');
	$('#manHinhKetQua').val('');
});

$('#equal').on('click', function(){
	let exp=$('#manHinhPhepTinh').val();
	$('#manHinhKetQua').val(eval(exp));
});

$('#color').on('click', function(){
   $('.main>div').toggleClass('main2');
}); 


              
           