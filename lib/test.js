var expr = require('./utils/regexes')

var exports = module.exports = function (line) {

  var  m = expr.comment.exec(line)

  return {
    type: 'test',
    name: m[1],
    raw: line
  }
}

exports.equals = function (line) {
  // As per the spec, this is actually a “diagnostic“
  // line but it is de facto used (e.g., in tape) to
  // specify test names. 
  return line.indexOf('# ') === 0
}
