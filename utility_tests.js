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
test("sample returns a single element when no argument supplied", _([1]).sample() === 1);
test("sample returns multiple, non-repetitive elements when a numeric argument supplied", _([1, 2, 3]).sample(3).length === 3);

// _.findWhere
test("findWhere is defined", typeof _().findWhere === "function");
(function() {
  var dict = [{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }, { foo: "bar", idx: 2 }];

  test("findWhere returns the first object with matched properties", _(dict).findWhere({ foo: "bar" }).idx === 0);
})();
(function() {
  var dict = [{ foo: "bar", quux: "q", idx: 0 }, { foo: "baz", quux: "z", idx: 1 }, { foo: "bar", quux: "z", idx: 2 }];

  test("findWhere returns the first object with multiple matched properties", _(dict).findWhere({ foo: "bar", quux: "z" }).idx === 2);
})();
(function() {
  var dict = [{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }, { foo: "bar", idx: 2 }];

  test("findWhere returns undefined with no matched properties", _(dict).findWhere({ foo: "quux" }) === undefined);
})();

// _.where
test("where is defined", typeof _().where === "function");
(function() {
  var dict = [{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }, { foo: "bar", idx: 2 }];

  test("where returns an array with one matched object", _(dict).where({ idx: 0 }).length === 1);
  test("where returns an array with two matched objects", _(dict).where({ foo: "bar" }).length === 2);
})();

// _.pluck
test("pluck is defined", typeof _().pluck === "function");
(function() {
  var coll = [{ foo: "bar" }, { foo: "baz" }],
      pluck = _(coll).pluck("foo");

  test("pluck returns array of two values", pluck.length === 2);
  test("pluck returns both values", pluck[0] === "bar" && pluck[1] === "baz");
})();

// _.keys
test("keys is defined", typeof _().keys === "function");
(function() {
  var keys = _({ foo: "bar", baz: "quuz" }).keys();

  test("keys returns an array of keys from the object", keys.length === 2);
  test("keys returns all keys that are own properties of the object", keys.indexOf("foo") !== -1 && keys.indexOf("baz") !== -1);
  test("keys does not return inherited object properties", keys.indexOf("toString") === -1);
})();
