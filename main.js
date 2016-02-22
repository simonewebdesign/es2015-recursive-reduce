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
  assert.deepEqual(goodOnes(items), actualExpectation);
})

var R = require('ramda');

// here we go
function goodOnes(items) {
  return R.reduce(theGoodOne, [], items);

  function theGoodOne(acc, item) {
    if (item.good) {
      return acc.concat(item.id);
    } else if (item.children && item.children.length > 0) {
      return R.reduce(theGoodOne, acc, item.children);
    }
    return acc;
  }
}
