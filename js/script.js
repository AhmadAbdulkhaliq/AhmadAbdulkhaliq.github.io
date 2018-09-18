
(function () {
    
    return fetch("http://localhost:3000/items")
        .then(res => res.json())
        .then(respponse => {
            let gallery = $("#gallery");

            respponse.forEach(data => {
                const card = $("<div>").addClass("col col-lg-3 col-md-4 col-sm-6").append($("<div>").addClass("card mt-3 mb-3").append([
                    $("<img>").addClass("card-img-top").attr("src",data.url).attr("alt","card Image").attr("height","200px"),
                    $("<div>").addClass("card-body").append([
                        $("<h5>").addClass("card-title").html(data.title),
                        $("<p>").addClass("card-text").html(data.description)
                    ])
                ]))
                
                gallery=gallery.append(card)
             })
        })
        .catch(error => alert('server not work'))
}())

function toogleNav(){
    if($("#toggle").hasClass("navivigationEl")){
$("#toggle").addClass("navResponsive").removeClass("navivigationEl")
$(".menuBtn").css("color","white")
  }else{
    $("#toggle").addClass("navivigationEl").removeClass("navResponsive")
$(".menuBtn").css("color","black")
  }
}
