let items =
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

let expectation =
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

let actualExpectation =
  expectation.map(i => i.id)

let assert = require('assert')

it('should be green', () =>
  assert.deepEqual(goodOnes(items), actualExpectation))

let R = require('ramda')

function goodOnes(items) {
  return R.reduce(theGoodOne, [], items)
}

function theGoodOne(acc, item) {
  if (item.good) {
    return acc.concat(item.id)
  } else if (item.children && item.children.length > 0) {
    return R.reduce(theGoodOne, acc, item.children)
  }
  return acc
}
