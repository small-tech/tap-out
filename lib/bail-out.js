var expr = require('./utils/regexes');

var exports = module.exports = function (line) {

  var m = expr.bailOut.exec(line);

  const event = {
    type: 'bailOut',
    raw: line,
    reason: m[1],
  };

  return event;
};

exports.equals = function (line) {
  return expr.bailOut.test(line);
};
