document
  .getElementById("contentSelector")
  .addEventListener("change", function () {
    var content = document.getElementById("content");
    var selectedValue = this.value;

    var contentMap = {
      option1: "<p>Your Selected State is Rajasthan</p>",
      option2: "<p>Your Selected State is Karanatak.</p>",
      option3: "<p>Your Selected State is Goa.</p>",
    };

    content.innerHTML =
      contentMap[selectedValue] ||
      "<p>Select an option to see the content.</p>";
  });
