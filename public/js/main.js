$(document).ready(()=>{
    $('.delete-organism').on('click',function(e){
       const targetURL='/organisms/'+$(this).data('id');
        $.ajax({
            type:'DELETE',
            url:targetURL,
            success: function(resp){
                console.log('Delete Organism');
                window.location.href='/organisms/';
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
                 window.location.href='/organisms/';
             },
             error:function(err){
                 console.log(err);                
             }
         })
     });    
 
});