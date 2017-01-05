$(document).ready(function() {
    $('#hit').click(function() {
        var list = $('#demo').val();
        $.ajax({
            url: "results.json",
            type: "json",
            method: "GET",
            success: function(data) {
                var jsonData = JSON.parse(JSON.stringify(data));
                if (list == "movies") {
                    alert("movie1 :" + jsonData.movies[0]);
                } else if (list == "games") {
                    alert(jsonData.games[0].game1);
                } else {
                    alert(jsonData.books[0].book1);
                }
            }
        });
    });
});
