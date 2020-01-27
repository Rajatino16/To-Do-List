//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){   //we can add listeners only to tags that are already exist when page is first loaded
	$(this).toggleClass("completed");
});

//Click on X to delete Todo

$("ul").on("click", "span", function(event){ //see video 226 : we can add listeners only to tags that are already exist when page is first loaded
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();   // stops event bubbling
});

// $.ajax({
//         type: "POST",
//         url: window.location.href+"/todo/"+_id ,
//         success: function(d) {
// 		$("ul").on("click", "span", function(event){
// 			$(this).parent().fadeOut(500,function(){
// 			$(this).remove();
// 			});
// 				 event.stopPropagation();   // stops event bubbling
// 		});
//             //Position saved
//         },
//         error: function(jqXHR, textStatus, errorThrown) {
//             //Something bad happened
//         }
//     });

// $("input[type='text']").keypress(function(event){
// 	if(event.which === 13){  // ASCII code for enter
// 		//grabbing new todo text from input
// 		var todoText = $(this).val();
// 		$(this).val("");
// 		//create a new li and add to ul
// 		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
// 	}
// });

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
