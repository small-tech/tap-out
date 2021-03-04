const expr = require('./utils/regexes')

exports = module.exports = function (line) {

  const m = expr.bailOut.exec(line)

  const event = {
    type: 'bailOut',
    raw: line,
    reason: m[1],
  }

  return event
}

exports.equals = function (line) {
  return expr.bailOut.test(line)
}
