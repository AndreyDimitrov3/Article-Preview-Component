document.addEventListener('DOMContentLoaded', function(){

    const elToggle  = document.querySelector("#share");
    const elContent = document.querySelector("#holder");

    elToggle.addEventListener("click", function() {
    elContent.classList.toggle("hidden");
});
})