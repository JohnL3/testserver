$(function (){
	var $orders = $('#orders');
	var $name = $('#name');
	var $drink = $('#drink');
	var $price = $('#price');
	
	function addOrder(order){
		//$orders.append('<li>Name: '+order.name+', Drink: '+ order.drink +'</li>');
		$orders.append('<li><p><strong>Name: </strong>'+order.name+
		'</p><p><strong> Drink: </strong>'+order.drink +'</p>'+
		'<p><strong>Price: </strong>'+ '€'+order.price+
		'</p><button data-id="'+order._id+'" class="remove">x</button></li>');
		
	}
	$.ajax({
		type:'GET',
		url:'http://localhost:3000/drinks/',
		success: function(orders){
			$.each(orders, function(i, order){
				addOrder(order);
			});
		},
		error: function() {
			alert('error loading orders');
		}
	});
	
	$('#add-order').on('click', function() {
		var order = {
			name: $name.val(),
			drink: $drink.val(),
			price: $price.val(),
		};
		$.ajax({
			type:'POST',
			url:'http://localhost:3000/drinks/',
			data: order,
			success: function(newOrder) {
				addOrder(newOrder);
				console.log('order added');
			},
			error: function() {
				alert('error saving order');
			}
		});
	});
	
	$orders.delegate('.remove','click', function(){
		var $li = $(this).closest('li');
		$.ajax({
			type:'DELETE',
			url:'http://localhost:3000/drinks/'+$(this).attr('data-id'),
			success: function() {
				$li.remove();
			}
		});
	});
	
});
