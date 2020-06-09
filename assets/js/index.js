const langArray = [
  { value: "val1", text: "text 1" },
  { value: "val2", text: "text 2" },
];
function loadOptions(langArray) {
  let select = document.getElementById("select"),
    option,
    i = 0,
    il = langArray.length;

  for (; i < il; i += 1) {
    option = document.createElement("option");
    option.setAttribute("value", langArray[i].value);
    option.appendChild(document.createTextNode(langArray[i].text));
    select.appendChild(option);
  }
}

function requestOptions() {
  $.getJSON("ajax/test.json", function (data) {
    var items = [];
    console.log(data)
    loadOptions(langArray);
  });
}

$(document).ready(function () {
    requestOptions()
});
