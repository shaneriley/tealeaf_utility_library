/*
Array methods to create:
* first
* last
* without
* range
* lastIndexOf
* sample

Object methods to create:
* findWhere
* where
* pluck
* keys
* values
* extend
* pick
* omit
* has
* isElement
* isArray
* isObject
* isFunction
* isString
* isNumber
* isBoolean
*/

(function() {

  var _ = function(element) {
    u = {
      first: function() {
        return element[0];
      },
      last: function() {
        return element[element.length - 1];
      },
      without: function() {
        var new_arr = [],
            args = new_arr.slice.call(arguments);

        element.forEach(function(el) {
          args.indexOf(el) === -1 && new_arr.push(el);
        });

        return new_arr;
      },
      lastIndexOf: function(search) {
        var idx = -1;

        for (var i = element.length - 1; i >= 0; i--) {
          if (element[i] === search) {
            idx = i;
            break;
          }
        }
        return idx;
      },
      sample: function(qty) {
        var sampled = [],
            copy = element.slice(),
            get = function() {
              var idx = ~~(Math.random() * element.length),
                  el = copy[idx];
              copy = copy.slice(0, idx).concat(copy.slice(idx));
              return el;
            };

        if (!qty) { return get(); }
        while(qty) {
          sampled.push(get());
        }
      }
    };

    return u;
  };

  _.range = function(start, stop) {
    var a = [];
    if (stop === undefined) {
      stop = start;
      start = 0;
    }

    for (var i = start; i < stop; i++) {
      a.push(i);
    }
    return a;
  };

  window._ = _;
})();
