$(function () {
    // move burger to devoured coulmn by changing devoured status
    $(".delete").on("click", function (event) {
        console.log("something happened...")
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax("/api/remove-burger/" + id, {
            type: "post",
        }).then(
            function () {
                console.log("deleted burger at id", id);
                location.reload();
            }
        );
    });
    // add burger to list with a default false devoured
    $(".add").on("click", function (event) {
        event.preventDefault();
        console.log("this shoud have proced...")
        var burger = $("#newBurger").val();
        console.log(burger);
        $.ajax("/api/add-burger/" + burger, {
            type: "post",
        }).then(
            function () {
                console.log("added " + burger);
                location.reload();
            }
        );
    });
});
