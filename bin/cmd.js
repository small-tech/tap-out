#!/usr/bin/env node

const tapOut = require('../')

const parser = tapOut(function (error, output) {

  if (error) { throw error }

  let out = output
  try {
    out = JSON.stringify(output, null, 2)
  } catch (e) {
    // Ignore.
  }

  process.stdout.write(out)
})

process.stdin.pipe(parser)
