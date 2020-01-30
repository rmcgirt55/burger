$(document.ready(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("newBurger")
            .val()
            .trim(),
            devoured: 0
        };

        $.ajax("/api/burgers" , {
            type: "POST",
            data: newBurger
        }).then(function() {
            location,reload();
        });
        });

        $(".eatBurger").on("click", function(event) {
            event.preventDefault();

            var id = $(this).data("id");
            var devouredState = {
                devoured: 1
            };
            $.ajax("/api/burger/" + id, {
                type: "PUT",
                data: devouredState
            }).then(function() {
                console.log("Burger devoured");
                location.reload();
            });
        });

        $("trashBurger").on("click", function(event) {
            event.preventDefault();
            var id = $(this).data("id");

            $.ajax({
                type: "DELETE",
                url: "/api/burger/" + id
            }).then(location.reload());
        });
});
