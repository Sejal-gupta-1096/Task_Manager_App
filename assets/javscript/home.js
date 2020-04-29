
$(document).ready(function() { 
          
    $(function() { 
        $( "#my_date_picker" ).datepicker({ dateFormat: 'yy-mm-dd' }); 
    }); 
})

function addTasksToUrl(){
    $('input[name="tasks"]:checked').each(function() {
        console.log(this.value);
        var id = this.value;
        var url = "/delete-tasks/?tasks=" + id;
        $("#del-link").attr("href" , url );
     });
}