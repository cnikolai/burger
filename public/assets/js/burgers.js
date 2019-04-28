// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var devour = $(this).data("devour");
  
      var newDevour = {
        id: id
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevour
      }).then(
        function() {
          console.log("changed devour to of id: ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("just submited form");
  
      var newBurger = {
        name: $("#newburger").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  