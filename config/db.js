const db = require('mysql');
var strings = {};
module.exports.strings = strings,

strings.insert = function(data) {
  return "insert " + data;
}

strings.get = function(id) {
  return "get " + id;
}

strings.getAll = function() {
  return "getAll";
}

strings.delete = function(id) {
  return "delete " + id;
}