$(document).ready(function(){
    $('#button').click(function(){
       /* get the value from input*/
       var toAdd = $('input[name=checkListItem]').val(); 
       /* append the input as an element to class list */
       $('.list').append('<div class = "item">'+ toAdd + '</div>');
    }); 
    
    /* remove element when clicking on it */
    $(document).on('click', '.item', function(){
        $(this).remove();
    });
});