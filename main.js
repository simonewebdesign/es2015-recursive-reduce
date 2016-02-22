var items =
  [ { id: 1
    , good: true
    }
  , { id: 2
    , children:
      [ { id: 3
        , good: true
        }
      , { id: 4
        , good: true
        }
      , { id: 5
        , children:
          [ { id: 6
            , good: true
            }
          , { id: 7
            , good: true
            }
          , { id: 8
            , good: true
            }
          ]
        }
      , { id: 9
         , children:
           [ { id: 10
             , children:
               [ { id: 11
                 , good: true
                 }
               , { id: 12
                 , good: true
                 }
               ]
             }
           ]
         }
       , { id: 13
         , good: true
         }
       , { id: 17
         , children: []
         }
       , { id: 14
         , children:
           [ { id: 15
             , good: true
             }
           ]
         }
       ]
     }
  , { id: 16
    , good: true
    }
  ]

var expectation =
  [ { id: 1
    , good: true
    }
  , { id: 3
    , good: true
    }
  , { id: 4
    , good: true
    }
  , { id: 6
    , good: true
    }
  , { id: 7
    , good: true
    }
  , { id: 8
    , good: true
    }
  , { id: 11
    , good: true
    }
  , { id: 12
    , good: true
    }
  , { id: 13
    , good: true
    }
  , { id: 15
    , good: true
    }
  , { id: 16
    , good: true
    }
  ]

var actualExpectation =
  expectation.map(function (i) {
    return i.id;
  });

var assert = require('assert');

it('should be green', function () {
  assert.equal(goodOnes(items), actualExpectation);
})

var R = require('ramda');

// here we go
function goodOnes(items) {
  return R.reduce(theGoodOne, [], items);

  function theGoodOne(acc, item) {
    if (item.good) {
      return acc.concat(item.id);
    } else {
      return acc;
    }
  }
}



// function getTrueIds(items) {
//   return items.reduce(function(prev, curr, _idx, _arr) {

//     console.log('initial prev', prev);

//     if (curr.good) {
//       console.log('curr is good', prev);
//       return prev.concat(curr.id);
//     } else if (curr.children && curr.children.length > 0) {
//       // console.log(curr.children && curr.children.length > 0);
//       curr.children.some(function(subItem) {
//         if (subItem.good) {
//           var newArr = prev.concat(subItem.id);
//           console.log('subItem was good, returning', newArr);
//           return newArr;
//         } else {
//           return prev;
//         }
//       });
//     }

//     console.log('just returning', prev);
//     return prev;
//      // else if (curr.children && curr.children.length > 0) {
//      //  return children.map(function(child) {
//      //    if (child.good) {
//      //      return prev.concat(child.id);
//      //    } else {
//      //      return prev;
//      //    }
//      //  });

//     // console.log(prev, curr, _idx);

//   }, []);
// }
