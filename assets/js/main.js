// Cross out ToDos by clicking

$("ul").on('click', 'li', function(){
  // toggle colour and rhe text strikethrough
  $(this).toggleClass('task-done')
});

// Click on X to delete ToDo
// Delete the list element

$("ul").on('click', 'span', function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
})

// Add ToDos

$("input[type='text']").keypress(function(event){
  if(event.which === 13){ //check for enter
    var ToDotext = $(this).val(); // get text input
    $(this).val(""); // clear input field
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + ToDotext + "</li>");
  }
})

// Toggle input icon when click plus
$(".fa-plus").click(function(){
  $('input[type="text"]').fadeToggle(500);
})