(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    204: function (e, t, n) {},
    205: function (e, t, n) {},
    206: function (e, t, n) {},
    223: function (e, t, n) {},
    224: function (e, t, n) {},
    225: function (e, t, n) {},
    226: function (e, t, n) {},
    227: function (e, t, n) {},
    228: function (e, t, n) {},
    229: function (e, t, n) {},
    230: function (e, t, n) {},
    231: function (e, t, n) {},
    232: function (e, t, n) {},
    233: function (e, t, n) {},
    413: function (e, t, n) {},
    414: function (e, t, n) {},
    415: function (e, t, n) {},
    422: function (e, t, n) {
      'use strict';
      n.r(t);
      var s = n(2),
        a = n(1),
        c = n.n(a),
        i = n(65),
        r = n.n(i),
        o = (n(204), n.p, n(205), n(9)),
        l = n(70),
        u = n(10),
        d = (n(206), n(11)),
        j = n.n(d),
        b = n(29),
        m = n.n(b),
        p = {
          startWorkout: function () {
            return m.a.post('/api/workout/workouts');
          },
          createWorkoutExercise: function (e) {
            return m.a.post('/api/workoutExercises/workoutExercise', e);
          },
          createNewExercise: function (e) {
            return m.a.post('/api/storedExercises/exercises', e);
          },
          getLastExercise: function () {
            return m.a.get('/api/workoutExercises/workoutExercise');
          },
          getLastWorkout: function () {
            return m.a.get('/api/lastWorkout/last');
          },
          getListOfExercises: function () {
            return m.a.get('/api/storedExercises/exercises');
          },
          getAllByYear: function (e) {
            return m.a.post('/api/data/year', e);
          },
        },
        f = n(169),
        h = n(19),
        O = n(20),
        x = n(22),
        v = n(21);
      n(223), n(224);
      function g(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            n = String(e);
          n.length < t;

        )
          n = '0' + n;
        return n;
      }
      function N(e) {
        var t = e / 1e3,
          n = parseInt(t / 3600, 10);
        t %= 3600;
        var s = parseInt(t / 60, 10),
          a = parseInt(t % 60, 10),
          c = parseInt((e % 1e3) / 100, 10);
        return ''
          .concat(g(n), ':')
          .concat(g(s), ':')
          .concat(g(a), '.')
          .concat(c);
      }
      var A = (function (e) {
        Object(x.a)(n, e);
        var t = Object(v.a)(n);
        function n() {
          return Object(h.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(O.a)(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props.time;
                return Object(s.jsx)('div', {
                  className: 'Timer',
                  children: N(e),
                });
              },
            },
          ]),
          n
        );
      })(a.Component);
      A.defaultProps = { time: 0 };
      var w = A,
        L =
          (n(225),
          (function (e) {
            Object(x.a)(n, e);
            var t = Object(v.a)(n);
            function n() {
              return Object(h.a)(this, n), t.apply(this, arguments);
            }
            return (
              Object(O.a)(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.isRunning,
                      n = e.start,
                      a = e.stop,
                      c = e.reset,
                      i = e.addLapTime;
                    return Object(s.jsx)('div', {
                      className: 'Controls',
                      children: Object(s.jsxs)('div', {
                        className: 'btnGroup',
                        children: [
                          t
                            ? Object(s.jsx)('button', {
                                onClick: a,
                                className: 'timerBtn',
                                children: 'Stop',
                              })
                            : Object(s.jsx)('button', {
                                onClick: n,
                                className: 'timerBtn',
                                children: 'Start',
                              }),
                          Object(s.jsx)('button', {
                            onClick: c,
                            disabled: t,
                            className: 'timerBtn',
                            children: 'Reset',
                          }),
                          Object(s.jsx)('button', {
                            onClick: i,
                            disabled: !t,
                            className: 'timerBtn',
                            children: 'Lap Time',
                          }),
                        ],
                      }),
                    });
                  },
                },
              ]),
              n
            );
          })(a.Component));
      L.defaultProps = { isRunning: !1 };
      var k = L,
        F =
          (n(226),
          n(227),
          (function (e) {
            Object(x.a)(n, e);
            var t = Object(v.a)(n);
            function n() {
              return Object(h.a)(this, n), t.apply(this, arguments);
            }
            return (
              Object(O.a)(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.lap,
                      n = e.time;
                    return Object(s.jsxs)('div', {
                      className: 'LapTime',
                      children: [
                        Object(s.jsx)('span', {
                          className: 'LapTime__lap',
                          children: t,
                        }),
                        Object(s.jsx)('span', {
                          className: 'LapTime__time',
                          children: N(n),
                        }),
                      ],
                    });
                  },
                },
              ]),
              n
            );
          })(a.Component));
      F.defaultProps = { lap: 0, time: 0 };
      var C = F,
        y = (function (e) {
          Object(x.a)(n, e);
          var t = Object(v.a)(n);
          function n() {
            return Object(h.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(O.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.timeList;
                  return Object(s.jsx)('div', {
                    className: 'LapTimeList',
                    children: Object(s.jsxs)('div', {
                      className: 'LapTimeList__listwrap',
                      children: [
                        Object(s.jsxs)('div', {
                          className: 'LapTimeList__headers',
                          children: [
                            Object(s.jsx)('span', { children: ' Lap ' }),
                            ' ',
                            Object(s.jsx)('span', { children: ' Time ' }),
                          ],
                        }),
                        Object(s.jsx)('ul', {
                          className: 'LapTimeList__list',
                          children: e.map(function (e, t) {
                            return Object(s.jsx)(
                              'li',
                              {
                                children: Object(s.jsx)(C, {
                                  lap: t + 1,
                                  time: e,
                                }),
                              },
                              t
                            );
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(a.Component);
      y.defaultProps = { timeList: [] };
      var E = y,
        S = 100;
      var D = (function (e) {
        Object(x.a)(n, e);
        var t = Object(v.a)(n);
        function n(e) {
          var s;
          return (
            Object(h.a)(this, n),
            ((s = t.call(this, e)).state = {
              isRunning: !1,
              time: 0,
              timeList: [],
            }),
            (s.timerRef = null),
            s
          );
        }
        return (
          Object(O.a)(n, [
            {
              key: 'updateTimer',
              value: function (e) {
                var t = this.state.time;
                this.setState({ time: t + e });
              },
            },
            {
              key: 'start',
              value: function () {
                var e = this;
                this.setState({ isRunning: !0 }, function () {
                  e.timerRef = setInterval(function () {
                    e.updateTimer(S);
                  }, S);
                });
              },
            },
            {
              key: 'stop',
              value: function () {
                var e = this;
                this.setState({ isRunning: !1 }, function () {
                  clearInterval(e.timerRef);
                });
              },
            },
            {
              key: 'reset',
              value: function () {
                this.setState({ isRunning: !1, time: 0, timeList: [] });
              },
            },
            {
              key: 'addLapTime',
              value: function () {
                var e = this.state,
                  t = e.time,
                  n = e.timeList;
                this.setState({ timeList: [].concat(Object(f.a)(n), [t]) });
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.state,
                  n = t.isRunning,
                  a = t.time,
                  c = t.timeList;
                return Object(s.jsxs)('div', {
                  className: 'Stopwatch',
                  children: [
                    Object(s.jsx)(w, { time: a }),
                    Object(s.jsx)(k, {
                      isRunning: n,
                      start: function () {
                        return e.start();
                      },
                      stop: function () {
                        return e.stop();
                      },
                      reset: function () {
                        return e.reset();
                      },
                      addLapTime: function () {
                        return e.addLapTime();
                      },
                    }),
                    Object(s.jsx)(E, { timeList: c }),
                  ],
                });
              },
            },
          ]),
          n
        );
      })(a.Component);
      n(228), n(229);
      var I = function (e) {
          var t = c.a.useState(''),
            n = Object(o.a)(t, 2),
            a = n[0],
            i = n[1];
          return e.type
            ? Object(s.jsxs)('div', {
                className: 'row selectionContainer',
                children: [
                  Object(s.jsx)('button', {
                    className: 'backBtn',
                    onClick: function () {
                      e.onClick();
                    },
                    children: 'Back',
                  }),
                  Object(s.jsx)('div', {
                    className: 'col-12 selectionHeader',
                    children: e.type,
                  }),
                  Object(s.jsxs)('div', {
                    className: 'row selectionContent',
                    children: [
                      Object(s.jsx)('div', {
                        className: 'col-12 selectionSectionHeader',
                        children: 'Exercise:',
                      }),
                      Object(s.jsx)('input', {
                        className: 'selectionInputBox',
                        onChange: function (e) {
                          return i(e.target.value);
                        },
                      }),
                    ],
                  }),
                  Object(s.jsx)('hr', { className: 'break' }),
                  Object(s.jsx)('button', {
                    className: 'submitExercise',
                    onClick: function () {
                      p
                        .createNewExercise({
                          exerciseName: a,
                          exerciseType: e.type,
                        })
                        .then(function (t) {
                          e.getList(), console.log(t);
                        })
                        .catch(function (e) {
                          return console.log(e);
                        }),
                        j()('.selectionInputBox').val('');
                    },
                    children: 'Submit',
                  }),
                ],
              })
            : Object(s.jsx)('div', {});
        },
        H = n.p + 'static/media/chest.72a32eb0.png',
        B = n.p + 'static/media/back.a5c495cc.png',
        P = [
          { icon: H, name: 'Chest' },
          { icon: n.p + 'static/media/arms.973e4ace.png', name: 'Arms' },
          { icon: n.p + 'static/media/legs.0d1b64f9.png', name: 'Legs' },
          { icon: B, name: 'Back' },
          {
            icon:
              'data:image/png;base64,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',
            name: 'Abs',
          },
          { icon: n.p + 'static/media/cardio.66ae60e6.png', name: 'Cardio' },
        ];
      var Q = function (e) {
        var t = c.a.useState(''),
          n = Object(o.a)(t, 2),
          a = n[0],
          i = n[1];
        return a
          ? Object(s.jsx)(I, {
              getList: e.getList,
              type: a,
              onClick: function () {
                i('');
              },
            })
          : Object(s.jsx)('div', {
              className: 'exerciseContainer row',
              children: P.map(function (e, t) {
                return Object(s.jsx)(
                  'button',
                  {
                    className: 'iconWrap',
                    type: 'submit',
                    onClick: function () {
                      return i(e.name);
                    },
                    children: Object(s.jsx)('img', {
                      id: e.name,
                      className: 'iconItem',
                      src: e.icon,
                      alt: 'type of workout is' + e.name,
                    }),
                  },
                  t
                );
              }),
            });
      };
      n(230);
      var V = function (e) {
        var t = c.a.useState(''),
          n = Object(o.a)(t, 2),
          a = n[0],
          i = n[1],
          r = c.a.useState(0),
          l = Object(o.a)(r, 2),
          u = l[0],
          d = l[1],
          b = c.a.useState(''),
          m = Object(o.a)(b, 2),
          f = m[0],
          h = m[1],
          O = c.a.useState(''),
          x = Object(o.a)(O, 2),
          v = x[0],
          g = x[1],
          N = c.a.useState(''),
          A = Object(o.a)(N, 2),
          w = A[0],
          L = A[1],
          k = c.a.useState(''),
          F = Object(o.a)(k, 2),
          C = F[0],
          y = F[1];
        return (
          c.a.useEffect(function () {}, [e.listOfExercises]),
          Object(s.jsxs)('div', {
            className: 'row workoutContainer',
            children: [
              Object(s.jsx)('div', {
                className: 'workoutHeader',
                children: 'Workout',
              }),
              Object(s.jsxs)('div', {
                className: 'row openingContainer',
                children: [
                  Object(s.jsx)('button', {
                    id: 'continue',
                    className: 'introBtn',
                    onClick: function () {
                      p.getLastWorkout()
                        .then(function (e) {
                          i(e.data.workout_id),
                            j()('.openingContainer').css('display', 'none'),
                            j()('.content').css('display', 'flex');
                        })
                        .catch(function (e) {
                          return alert('no previous workout');
                        });
                    },
                    children: 'Continue',
                  }),
                  Object(s.jsx)('button', {
                    id: 'new',
                    className: 'introBtn',
                    onClick: function () {
                      p.startWorkout().then(function (e) {
                        i(e.data.workout_id),
                          j()('.openingContainer').css('display', 'none'),
                          j()('.content').css('display', 'flex');
                      });
                    },
                    children: 'New',
                  }),
                ],
              }),
              Object(s.jsxs)('div', {
                className: 'row content',
                children: [
                  Object(s.jsxs)('div', {
                    className: 'row section',
                    children: [
                      Object(s.jsx)('div', {
                        className: 'col-12 sectionHeader',
                        children: 'Exercise:',
                      }),
                      Object(s.jsxs)('select', {
                        onChange: function (e) {
                          g(e.target.value),
                            L(
                              e.target.options[e.target.selectedIndex].dataset
                                .type
                            );
                        },
                        name: 'exercises',
                        id: 'exercises',
                        children: [
                          Object(s.jsx)(
                            'option',
                            {
                              'data-type': 'empty',
                              defaultValue: 'Select an Option',
                              children: 'Select an Option',
                            },
                            0
                          ),
                          '' !== e.listOfExercises.join()
                            ? e.listOfExercises.map(function (e, t) {
                                return Object(s.jsx)(
                                  'option',
                                  {
                                    'data-type': e.type,
                                    value: e.name,
                                    children: e.name,
                                  },
                                  t
                                );
                              })
                            : Object(s.jsx)(
                                'option',
                                {
                                  id: 'exercises',
                                  disabled: !0,
                                  value: 'No Workouts Created',
                                  children: 'No Workouts Created',
                                },
                                0
                              ),
                        ],
                      }),
                    ],
                  }),
                  Object(s.jsxs)('div', {
                    className: 'row section',
                    children: [
                      Object(s.jsx)('div', {
                        className: 'col-12 sectionHeader',
                        children: 'Sets:',
                      }),
                      Object(s.jsx)('input', {
                        id: 'setSets',
                        onChange: function (e) {
                          return d(e.target.value);
                        },
                        className: 'inputBox',
                      }),
                      0 !== u
                        ? Object(s.jsx)('div', {
                            className: 'setsFieldContainer',
                            children: (function () {
                              for (var e = [], t = 1; t <= u; t++)
                                e.push(
                                  Object(s.jsxs)(
                                    'div',
                                    {
                                      className: 'setsField',
                                      children: [
                                        Object(s.jsxs)('div', {
                                          className: 'subSetsField',
                                          children: [
                                            'Set ',
                                            t,
                                            ' Weight:',
                                            Object(s.jsx)('input', {
                                              id: 'setsFieldWeight' + t,
                                              className: 'inputBoxSetsField',
                                              placeholder: 'Enter as lbs',
                                            }),
                                          ],
                                        }),
                                        Object(s.jsxs)('div', {
                                          className: 'subSetsField',
                                          children: [
                                            'Set ',
                                            t,
                                            ' Reps:',
                                            Object(s.jsx)('input', {
                                              id: 'setsFieldReps' + t,
                                              className: 'inputBoxSetsField',
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    t
                                  )
                                );
                              return e;
                            })(),
                          })
                        : null,
                    ],
                  }),
                  Object(s.jsxs)('div', {
                    className: 'row section',
                    children: [
                      Object(s.jsx)('div', {
                        className: 'col-12 sectionHeader',
                        children: 'Break Duration:',
                      }),
                      Object(s.jsx)('input', {
                        id: 'breakDuration',
                        placeholder: 'seconds',
                        onChange: function (e) {
                          return h(e.target.value);
                        },
                        className: 'inputBox',
                      }),
                    ],
                  }),
                  Object(s.jsx)('button', {
                    className: 'submitWorkout',
                    onClick: function () {
                      !(function () {
                        for (var e = 1; e <= u; e++)
                          y(
                            (C += '{"reps": '
                              .concat(
                                j()('#setsFieldReps' + e).val(),
                                ', "weight": '
                              )
                              .concat(j()('#setsFieldWeight' + e).val(), '},'))
                          );
                      })(),
                        p
                          .createWorkoutExercise({
                            exerciseName: v,
                            exerciseType: w,
                            numOfSets: parseInt(u),
                            breakDuration: parseInt(f),
                            setWeights: C,
                            WorkoutWorkoutId: a,
                          })
                          .then(function (e) {
                            console.log(e);
                          }),
                        j()('.inputBoxSetsField').val(''),
                        j()('#exercises').val('Select an Option'),
                        j()('#setSets').val(''),
                        d(0),
                        j()('#breakDuration').val(''),
                        j()('.openingContainer').css('display', ''),
                        j()('.content').css('display', 'none');
                    },
                    children: 'Submit',
                  }),
                ],
              }),
            ],
          })
        );
      };
      n(231);
      var W = function (e) {
          return Object(s.jsx)('div', {
            className: 'row',
            children: 'In Progress',
          });
        },
        Y =
          (n(232),
          [
            { reps: 1, percent: 1 },
            { reps: 2, percent: 0.97 },
            { reps: 3, percent: 0.94 },
            { reps: 4, percent: 0.92 },
            { reps: 5, percent: 0.89 },
            { reps: 6, percent: 0.86 },
            { reps: 7, percent: 0.83 },
            { reps: 8, percent: 0.81 },
            { reps: 9, percent: 0.78 },
            { reps: 10, percent: 0.75 },
            { reps: 11, percent: 0.73 },
            { reps: 12, percent: 0.71 },
            { reps: 13, percent: 0.7 },
            { reps: 14, percent: 0.68 },
            { reps: 15, percent: 0.67 },
            { reps: 16, percent: 0.65 },
            { reps: 17, percent: 0.64 },
            { reps: 18, percent: 0.63 },
            { reps: 19, percent: 0.61 },
            { reps: 20, percent: 0.6 },
            { reps: 21, percent: 0.59 },
            { reps: 22, percent: 0.58 },
            { reps: 23, percent: 0.57 },
            { reps: 24, percent: 0.56 },
            { reps: 25, percent: 0.55 },
            { reps: 26, percent: 0.54 },
            { reps: 27, percent: 0.53 },
            { reps: 28, percent: 0.52 },
            { reps: 29, percent: 0.51 },
            { reps: 30, percent: 0.5 },
          ]),
        T = function (e) {
          var t = e.setWeights,
            n = 0,
            s = 0;
          return (
            t.forEach(function (e, t) {
              for (var a = 0; a < Y.length; a++)
                if (Y[a].reps === e.reps) {
                  s = Y[a].percent;
                  break;
                }
              e.weight / s > n && (n = e.weight / s);
            }),
            n
          );
        },
        X = (n(233), n(33));
      var M = function (e) {
        return (
          c.a.useEffect(function () {}, [e.data]),
          Object(s.jsx)('div', {
            className:
              '' !== e.data.join() && e.checkData
                ? 'row statsContainer'
                : 'row noStatsContainer',
            children:
              '' !== e.data.join() && e.checkData
                ? Object(s.jsx)('div', {
                    className: 'row',
                    children: Object(s.jsx)(X.c, {
                      className: 'col-12',
                      width: '100%',
                      height: 200,
                      children: Object(s.jsxs)(X.b, {
                        className: 'chart',
                        data: e.data,
                        children: [
                          Object(s.jsx)(X.a, {
                            type: 'monotone',
                            dataKey: 'uv',
                            stroke: '#3f51b5',
                          }),
                          Object(s.jsx)(X.e, {
                            dataKey: 'name',
                            tickFormatter: function (e) {
                              var t = new Date(e);
                              return (t =
                                t.getMonth() +
                                1 +
                                '/' +
                                t.getDate()).toString();
                            },
                            stroke: '#3f51b5',
                          }),
                          Object(s.jsx)(X.f, {
                            tickFormatter: function (e) {
                              return e;
                            },
                            width: 28,
                            stroke: '#3f51b5',
                          }),
                          Object(s.jsx)(X.d, { cursor: !1 }),
                        ],
                      }),
                    }),
                  })
                : e.checkData
                ? Object(s.jsx)('div', {
                    className: 'doStats',
                    children: 'Enter a search parameter above to see your data',
                  })
                : Object(s.jsx)('div', {
                    className: 'noStats',
                    children: 'No data to display',
                  }),
          })
        );
      };
      n(413);
      var R = function (e) {
        return (
          c.a.useEffect(function () {}),
          Object(s.jsxs)('div', {
            className: 'row searchContainer',
            children: [
              Object(s.jsx)('div', {
                className: 'col-12 chartHeader',
                children: 'See the Growth',
              }),
              Object(s.jsxs)('select', {
                onChange: function (t) {
                  var n;
                  (n = t.target.value), e.setChart(n);
                },
                name: 'exercises',
                id: 'exercises',
                children: [
                  Object(s.jsx)(
                    'option',
                    {
                      'data-type': 'empty',
                      defaultValue: 'Select an Option',
                      children: 'Select an Option',
                    },
                    0
                  ),
                  '' !== e.listOfExercises.join()
                    ? e.listOfExercises.map(function (e, t) {
                        return Object(s.jsx)(
                          'option',
                          {
                            'data-type': e.type,
                            value: e.name,
                            children: e.name,
                          },
                          t
                        );
                      })
                    : Object(s.jsx)(
                        'option',
                        {
                          id: 'exercises',
                          disabled: !0,
                          value: 'No Workouts Created',
                          children: 'No Workouts Created',
                        },
                        1e3
                      ),
                ],
              }),
            ],
          })
        );
      };
      n(414), n(415);
      var Z = function (e) {
        var t = c.a.useState([
            { name: '45', weight: 0 },
            { name: '35', weight: 0 },
            { name: '25', weight: 0 },
            { name: '10', weight: 0 },
            { name: '5', weight: 0 },
            { name: '2.5', weight: 0 },
            { name: 'Remainder', weight: 0 },
          ]),
          n = Object(o.a)(t, 2),
          a = n[0],
          i = n[1];
        return (
          c.a.useEffect(
            function () {
              !(function (e) {
                for (
                  var t = 0,
                    n = 0,
                    s = 0,
                    a = 0,
                    c = 0,
                    r = 0,
                    o = 0,
                    l = e - 45;
                  l >= 90;

                )
                  (l -= 90), (t += 1);
                for (; l >= 70; ) (l -= 70), (n += 1);
                for (; l >= 50; ) (l -= 50), (s += 1);
                for (; l >= 20; ) (l -= 20), (a += 1);
                for (; l >= 10; ) (l -= 10), (c += 1);
                for (; l >= 5; ) (l -= 5), (r += 1);
                0 !== l &&
                  (o =
                    'You have a remainder of ' +
                    l +
                    ' lbs. The above combination puts your total to ' +
                    (e - l) +
                    '. Add another 2.5 lb plate for a total of ' +
                    (e + (5 - l)) +
                    ' lbs, if you can manage.'),
                  i([
                    { name: '45', weight: t },
                    { name: '35', weight: n },
                    { name: '25', weight: s },
                    { name: '10', weight: a },
                    { name: '5', weight: c },
                    { name: '2.5', weight: r },
                    { name: 'Remainder', weight: o },
                  ]);
              })(e.weight);
            },
            [e.weight]
          ),
          Object(s.jsx)('div', {
            className: 'row weightCalcContainer',
            children: e.error
              ? Object(s.jsxs)('div', {
                  className: 'row error',
                  children: [
                    '"Weight in lbs must be greater than 45.',
                    Object(s.jsx)('br', {}),
                    '(The barbell is included in total weight)"',
                  ],
                })
              : a.map(function (e, t) {
                  return Object(s.jsxs)(
                    'div',
                    {
                      className: 'weightSlot',
                      children: [e.name, ' = ', e.weight],
                    },
                    t
                  );
                }),
          })
        );
      };
      var J = function (e) {
        var t = c.a.useState(0),
          n = Object(o.a)(t, 2),
          a = n[0],
          i = n[1],
          r = c.a.useState(!1),
          l = Object(o.a)(r, 2),
          u = l[0],
          d = l[1],
          j = c.a.useState(!1),
          b = Object(o.a)(j, 2),
          m = b[0],
          p = b[1];
        return Object(s.jsxs)('div', {
          className: 'row',
          children: [
            Object(s.jsxs)('div', {
              className: 'calcPlatesHeader col-12',
              children: [
                'Calculate Plates',
                Object(s.jsx)('div', {
                  className: 'row',
                  children: Object(s.jsxs)('div', {
                    className: 'subtextPlates col-12',
                    children: [
                      '(For each side of barbell)',
                      Object(s.jsx)('br', {}),
                      Object(s.jsx)('span', {
                        className: 'subtextPlatesComment',
                        children: '(Barbell is 45 lbs)',
                      }),
                    ],
                  }),
                }),
              ],
            }),
            Object(s.jsxs)('div', {
              className: 'row',
              children: [
                Object(s.jsxs)('div', {
                  className: 'col-12',
                  children: [
                    Object(s.jsx)('input', {
                      className: 'inputBoxCalc',
                      onChange: function (e) {
                        var t;
                        (t = parseInt(e.target.value)), i(t), p(!1);
                      },
                    }),
                    Object(s.jsx)('span', {
                      className: 'addonText',
                      children: 'lbs',
                    }),
                  ],
                }),
                Object(s.jsx)('div', {
                  className: 'row',
                  children: Object(s.jsx)('div', {
                    className: 'col-12',
                    children: Object(s.jsx)('button', {
                      className: 'submitWeightCheck',
                      onClick: function () {
                        d(a <= 45), p(!0);
                      },
                      children: 'Calculate',
                    }),
                  }),
                }),
                m ? Object(s.jsx)(Z, { error: u, weight: a }) : null,
              ],
            }),
          ],
        });
      };
      var z = function (e) {
          var t = c.a.useState([]),
            n = Object(o.a)(t, 2),
            a = (n[0], n[1]),
            i = c.a.useState([]),
            r = Object(o.a)(i, 2),
            l = r[0],
            u = r[1],
            d = c.a.useState(!0),
            j = Object(o.a)(d, 2),
            b = j[0],
            m = j[1];
          return (
            c.a.useEffect(function () {}, [e.listOfExercises]),
            Object(s.jsxs)('div', {
              className: 'row homeContainer',
              children: [
                Object(s.jsx)(R, {
                  setChart: function (e) {
                    p.getAllByYear({ exerciseName: e })
                      .then(function (e) {
                        0 === Object.keys(e.data).length ? m(!1) : m(!0),
                          a(e.data),
                          (function (e) {
                            var t = [];
                            e.forEach(function (e, n) {
                              var s = JSON.parse(
                                '['.concat(
                                  e.setWeights.replace(/,\s*$/, ''),
                                  ']'
                                )
                              );
                              t.push({
                                name: e.createdAt,
                                uv: T({ setWeights: s }).toFixed(0),
                              });
                            }),
                              u(t);
                          })(e.data);
                      })
                      .catch(function (e) {
                        console.log(e);
                      });
                  },
                  listOfExercises: e.listOfExercises,
                }),
                Object(s.jsx)(M, { checkData: b, data: l }),
                Object(s.jsx)(J, {}),
              ],
            })
          );
        },
        U = [
          { name: 'Stopwatch' },
          { name: 'Create' },
          { name: 'Workout' },
          { name: 'Estimate' },
        ];
      var G = function (e) {
        var t = c.a.useState([]),
          n = Object(o.a)(t, 2),
          a = n[0],
          i = n[1],
          r = function () {
            p.getListOfExercises()
              .then(function (e) {
                var t = [];
                e.data.map(function (e, n) {
                  return t.push({ name: e.exerciseName, type: e.exerciseType });
                }),
                  i(t);
              })
              .catch(function (e) {
                return console.log(e);
              });
          };
        return (
          c.a.useEffect(function () {
            r();
          }, []),
          Object(s.jsxs)(l.a, {
            children: [
              (function () {
                var e = j()('.nav');
                e.on('scroll', function () {
                  var t = e.scrollLeft(),
                    n = e.outerWidth();
                  e.get(0).scrollWidth - t === n
                    ? j()('.right').css('display', 'none')
                    : j()('.right').css('display', ''),
                    0 === t
                      ? j()('.left').css('display', '')
                      : j()('.left').css('display', 'block');
                });
              })(),
              Object(s.jsx)('i', { className: 'fa fa-caret-right right' }),
              Object(s.jsx)('i', { className: 'fa fa-caret-left left' }),
              Object(s.jsx)('div', {
                className: 'row',
                children: Object(s.jsxs)('div', {
                  className: 'container col-12',
                  children: [
                    Object(s.jsx)('nav', {
                      className: 'nav',
                      children: Object(s.jsxs)('ul', {
                        className: 'navList',
                        children: [
                          Object(s.jsx)(
                            'li',
                            {
                              id: 'home',
                              className: 'navItem',
                              children: Object(s.jsx)(l.b, {
                                exact: !0,
                                to: '/',
                                activeStyle: {
                                  fontWeight: 'bold',
                                  color: '#3f51b5',
                                },
                                className: 'link',
                                children: 'Home',
                              }),
                            },
                            0
                          ),
                          U.map(function (e, t) {
                            return Object(s.jsx)(
                              'li',
                              {
                                id: e.name,
                                className: 'navItem',
                                children: Object(s.jsx)(l.b, {
                                  to: '/' + e.name,
                                  activeStyle: {
                                    fontWeight: 'bold',
                                    color: '#3f51b5',
                                  },
                                  className: 'link',
                                  children: e.name,
                                }),
                              },
                              t
                            );
                          }),
                        ],
                      }),
                    }),
                    Object(s.jsxs)(u.c, {
                      children: [
                        Object(s.jsx)(
                          u.a,
                          {
                            path: '/Stopwatch',
                            children: Object(s.jsx)(D, {}),
                          },
                          '1'
                        ),
                        Object(s.jsx)(
                          u.a,
                          {
                            path: '/Create',
                            children: Object(s.jsx)(Q, { getList: r }),
                          },
                          '2'
                        ),
                        Object(s.jsx)(
                          u.a,
                          {
                            path: '/Workout',
                            children: Object(s.jsx)(V, { listOfExercises: a }),
                          },
                          '3'
                        ),
                        Object(s.jsx)(
                          u.a,
                          { path: '/Estimate', children: Object(s.jsx)(W, {}) },
                          '4'
                        ),
                        Object(s.jsx)(
                          u.a,
                          {
                            path: '/',
                            children: Object(s.jsx)(z, { listOfExercises: a }),
                          },
                          '0'
                        ),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var K = function () {
          return Object(s.jsx)(G, {});
        },
        q = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 424))
              .then(function (t) {
                var n = t.getCLS,
                  s = t.getFID,
                  a = t.getFCP,
                  c = t.getLCP,
                  i = t.getTTFB;
                n(e), s(e), a(e), c(e), i(e);
              });
        };
      r.a.render(
        Object(s.jsx)(c.a.StrictMode, { children: Object(s.jsx)(K, {}) }),
        document.getElementById('root')
      ),
        q();
    },
  },
  [[422, 1, 2]],
]);
//# sourceMappingURL=main.c4c60107.chunk.js.map
