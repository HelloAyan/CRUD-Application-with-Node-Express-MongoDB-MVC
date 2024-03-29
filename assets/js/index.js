$('#add_user').submit(function(even){
    alert('Data Inserted Successfully');
})

$('#update_user').submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })

    console.log(data);

    var request = {
        "url": `https://crud-app-mvc.herokuapp.com/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })
})

if(window.location.pathname == '/'){
    $onDelete = $('.table tbody td a.delete');
    $onDelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url": `https://crud-app-mvc.herokuapp.com/api/users/${id}`,
            "method": "DELETE"
        }

        

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}