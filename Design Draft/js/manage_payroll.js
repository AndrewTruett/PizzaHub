$(document).ready(function(){
    //add employeee
        $(".add-row").click(function(){
            var empiD = $("#empID").val();
            var fullname = $("#fullname").val();
            var position = $("#position").val();
            var hoursworked = $("#hoursworked").val();
            var payrate = $("#payrate").val();
            var total = $("#total").val();
            var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + empiD + "</td><td>" + fullname + "</td><td>"
            +position+"</td><td>"+hoursworked +"</td><td>"+ payrate+"</td><td>"+total+"</td></tr>";
             $("table tbody").append(markup);
        });
        
        // Find and remove selected table rows
        $(".delete-row").click(function(){
            $("table tbody").find('input[name="record"]').each(function(){
            	if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                }
            });
        });
    });    