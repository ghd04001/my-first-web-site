var Links = {
  setColor: function (color) {
    $("a").css("color", color);
  },
};

var Body = {
  setColor: function (color) {
    $("body").css("color", color);
  },
  setBackgroundColor: function (color) {
    $("body").css("backgroundColor", color);
  },
};

function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "dark") {
    Body.setBackgroundColor("#020715");
    Body.setColor("white");
    self.value = "light";
    Links.setColor("powderblue");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "dark";
    Links.setColor("#337ab7");
  }
}
