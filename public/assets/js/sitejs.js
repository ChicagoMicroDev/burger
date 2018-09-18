console.log("hey");
$(document).ready(function () {

    $(".hungry").on("click", function (event) {
        event.preventDefault();
        console.log("Ive been click", this);
        var status = $(this).data("status");
        var id = $(this).data("id");
        $.ajax({
            url: "/burgers/" + id + "/" + status,
            method: "GET", data: {id: id, status: status}
        }).then(function () {
            location.reload()

        })
    });
});