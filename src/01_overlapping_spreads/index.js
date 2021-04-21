// Given an array of integers, replace every element with its neighbouring numbers (integers next to it),
// then find the duplicate numbers and sum them up. It is guaranteed that provided integers are unique,
// which means they will not repeat.
//
// For example for the input: -3,5,8,-1,6,11
// * given that neighbouring numbers for -3 are -4 and -2
// * resulting array after replacement with neighbouring numbers would be: -4,-2,4,6,7,9,-2,0,5,7,10,12
// * duplicate numbers are -2,7
// * the result will be 5.

exports.overlappingSpreads = function (data = [-3, 5, 8, -1, 6, 11]) {
  let neighboursSum = []
  const left = []
  const right = []

  // CHECK EACH NUMBER AND FIND NEIGHBOURS ON THE LEFT AND ON THE RIGHT
  data.forEach((item) => {
    // CREATE AN ARRAY FOR THE LEFT SIDE OF THE INDEX
    left.push(item - 1)
    // CREATE AN ARRAY FOR THE RIGHT SIDE OF THE INDEX
    right.push(item + 1)

    // ENSURE UNIQUE WITH SET() METHOD
    const leftSet = new Set(left)
    const rightSet = new Set(right)

    // FILTER THE INTERSECTION
    const intersect = left.filter((item) => rightSet.has(item))
    const intersectSet = new Set(intersect)
    neighboursSum = [...intersectSet]
  })

  // SUM THE DUPLICATES
  return neighboursSum.reduce((prev, next) => prev + next)
}
console.log(this.overlappingSpreads())
