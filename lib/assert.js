const expr = require('./utils/regexes')

exports = module.exports = function (line) {

  const m = expr.ok.exec(line)

  return {
    type: 'assert',
    raw: line,
    ok: !m[1],
    number: m[2] && Number(m[2]),
    name: m[3],
    error: {
      operator: undefined,
      expected: undefined,
      actual: undefined,
      at: undefined
    }
  }
}

exports.equals = function (line) {
  return expr.ok.test(line)
}
