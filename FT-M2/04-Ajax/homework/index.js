$("#boton").click(() => {
   
    var list = document.getElementById("lista");
    list.innerHTML = "";
    
    $.get("http://localhost:5000/amigos", (data) => {

         data.map((d) => $("#lista").append("<li>" + d.name + "</li>")); 
    })
});
   
$("#search").click(()=>{
    var inputValue = $("#input").val();
    $.get(`http://localhost:5000/amigos/${inputValue}`, response=>{
        $("#amigo").append(response.name);
    })
})

$("#delete").click(()=>{
    var inputValue = $("#inputDelete").val();
    $.ajax({
        url: `http://localhost:5000/amigos/${inputValue}`,
        type: 'DELETE',
        success: ()=>{
            $("#success").text("eleminado correctamente")
        }
    });
})
      


    