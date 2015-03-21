var $ol = document.querySelector("ol");

function outputResult(message) {
  var $li = document.createElement("li");
  $li.innerText = message;
  $ol.appendChild($li);
  return $li;
}

function test(message, assertion) {
  var $msg = outputResult(message);
  $msg.setAttribute("class", assertion ? "pass" : "fail");
}

test("_ is defined", typeof _ !== "undefined");

// _.first
test("first is defined", typeof _().first === "function");
test("first returns first element in an array", _([4]).first() === 4);
(function() {
  var a = [];
  a[1] = 4;
  test("first does not return second element even if first is undefined", _(a).first() === undefined);
})();

// _.last
test("last is defined", typeof _().last === "function");
test("last returns last element in an array", _([1, 2, 3, 4]).last() === 4);

// _.without
test("without is defined", typeof _().without === "function");
test("without returns new array that does not contain the supplied value", _([1, 2, 3, 4, 5]).without(4).indexOf(4) === -1);
(function() {
  var a = _([1, 2, 3, 4, 5, 6]).without(6, 4);
  test("without removes any number of arguments", a.indexOf(6) === -1 && a.indexOf(4) === -1);
})();

// _.range
test("range is defined", typeof _.range === "function");
test("range returns an array of values starting at 0 when one argument supplied", _.range(10)[0] === 0 && _.range(10).length === 10);
test("range returns an array of values starting with the first value when two arguments supplied", _.range(1, 10)[0] === 1 && _.range(1, 10).length === 9);

// _.lastIndexOf
test("lastIndexOf is defined", typeof _().lastIndexOf === "function");
test("lastIndexOf returns last index of supplied value", _([1, 1, 1]).lastIndexOf(1) === 2 && _([1, 2, 3]).lastIndexOf(2) === 1);

// _.sample
test("sample is defined", typeof _().sample === "function");
