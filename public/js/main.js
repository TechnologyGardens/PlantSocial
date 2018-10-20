$(document).ready(()=>{
    $('.delete-plant').on('click',function(e){
       const targetURL='/plants/'+$(this).data('id');
        $.ajax({
            type:'DELETE',
            url:targetURL,
            success: function(resp){
                console.log('Delete Plant');
                window.location.href='/plants/';
            },
            error:function(err){
                console.log(err);                
            }
        })
    });    
    $('.delete-user').on('click',function(e){
        const targetURL='/users/'+$(this).data('id');
         $.ajax({
             type:'DELETE',
             url:targetURL,
             success: function(resp){
                 console.log('Delete User');
                 window.location.href='/plants/';
             },
             error:function(err){
                 console.log(err);                
             }
         })
     });    
 
});