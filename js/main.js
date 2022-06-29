$(document).ready(function () {
    $(".mainheader").mouseenter(function () { //The nav bar drop down menu functionality.
        $(".dropdownlist").css("color", "orange").show("fast");
    });
    $(".dropdownlist").mouseleave(function () {
        $(".dropdownlist").slideUp("slow");
    });

    $("#submitme").click(function (event) { // Once form is submitted the message is shown (Hide & Show)
        event.preventDefault();
        $("#submitmessage").show();
        let message = $("#submitmessage");
        message.animate({ left: '100px' }, "slow"); // Animation effect
        message.animate({ fontSize: '3em' }, "slow");
    });

});

//This works - leave it at that
$(document).ready(function () {
    $(".save").click(function () { // when the user clicks the save button - the below must happen
        let selectedProduct = $(".product").text(); // Taking the text from the html with the class specified
        sessionStorage.setItem("MyProductSaved", JSON.stringify(selectedProduct));
        //window.open("save-for-later.html", "_blank");
        let objString = sessionStorage.getItem("MyProductSaved");
        let page2 = JSON.parse(objString);
        // console.log(page2);
        $('p').text(page2); // passing the saved text into a p element below.
    })
})
