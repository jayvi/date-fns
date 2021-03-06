// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var getISOWeek = require('./')

describe('getISOWeek', function () {
  it('returns the ISO week of the given date', function () {
    var result = getISOWeek(new Date(2005, 0 /* Jan */, 2))
    assert(result === 53)
  })

  it('accepts a string', function () {
    var result = getISOWeek(new Date(2008, 11 /* Dec */, 29).toISOString())
    assert(result === 1)
  })

  it('accepts a timestamp', function () {
    var result = getISOWeek(new Date(2008, 11 /* Dec */, 29).getTime())
    assert(result === 1)
  })

  describe('edge cases', function () {
    it('returns the ISO week at 1 January 2016', function () {
      var result = getISOWeek(new Date(2016, 0 /* Jan */, 1))
      assert(result === 53)
    })

    it('returns the ISO week at 1 May 2016', function () {
      var result = getISOWeek(new Date(2016, 4 /* May */, 1))
      assert(result === 17)
    })

    it('returns the ISO week at 2 May 2016', function () {
      var result = getISOWeek(new Date(2016, 4 /* May */, 2))
      assert(result === 18)
    })

    it('returns the ISO week at 31 May 2016', function () {
      var result = getISOWeek(new Date(2016, 4 /* May */, 31))
      assert(result === 22)
    })
  })
})
