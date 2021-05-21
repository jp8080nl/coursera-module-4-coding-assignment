(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var items in names) {
    var firstLetter = names[items].charAt(0);
    if (firstLetter.toLowerCase() === "j") {
      byeSpeaker.speak(names[items])
    } else {
      helloSpeaker.speak(names[items]);
    };
  }
})();