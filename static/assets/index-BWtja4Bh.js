/** @format */

(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
var vl =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Pu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Bf(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Tu = { exports: {} },
  Qi = {},
  Cu = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mr = Symbol.for("react.element"),
  Uf = Symbol.for("react.portal"),
  Hf = Symbol.for("react.fragment"),
  Wf = Symbol.for("react.strict_mode"),
  Gf = Symbol.for("react.profiler"),
  Yf = Symbol.for("react.provider"),
  Qf = Symbol.for("react.context"),
  Xf = Symbol.for("react.forward_ref"),
  Kf = Symbol.for("react.suspense"),
  qf = Symbol.for("react.memo"),
  Zf = Symbol.for("react.lazy"),
  na = Symbol.iterator;
function Jf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (na && e[na]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ku = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ou = Object.assign,
  Lu = {};
function Dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lu),
    (this.updater = n || ku);
}
Dn.prototype.isReactComponent = {};
Dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Mu() {}
Mu.prototype = Dn.prototype;
function Js(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lu),
    (this.updater = n || ku);
}
var eo = (Js.prototype = new Mu());
eo.constructor = Js;
Ou(eo, Dn.prototype);
eo.isPureReactComponent = !0;
var ra = Array.isArray,
  Iu = Object.prototype.hasOwnProperty,
  to = { current: null },
  Nu = { key: !0, ref: !0, __self: !0, __source: !0 };
function zu(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Iu.call(t, r) && !Nu.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var o = Array(a), c = 0; c < a; c++) o[c] = arguments[c + 2];
    i.children = o;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Mr,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: to.current,
  };
}
function ep(e, t) {
  return {
    $$typeof: Mr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function no(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mr;
}
function tp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ia = /\/+/g;
function gl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? tp("" + e.key)
    : t.toString(36);
}
function li(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Mr:
          case Uf:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + gl(s, 0) : r),
      ra(i)
        ? ((n = ""),
          e != null && (n = e.replace(ia, "$&/") + "/"),
          li(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (no(i) &&
            (i = ep(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ia, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ra(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var o = r + gl(l, a);
      s += li(l, t, n, o, i);
    }
  else if (((o = Jf(e)), typeof o == "function"))
    for (e = o.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (o = r + gl(l, a++)), (s += li(l, t, n, o, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Vr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    li(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function np(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ee = { current: null },
  si = { transition: null },
  rp = {
    ReactCurrentDispatcher: Ee,
    ReactCurrentBatchConfig: si,
    ReactCurrentOwner: to,
  };
$.Children = {
  map: Vr,
  forEach: function (e, t, n) {
    Vr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Vr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Vr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!no(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
$.Component = Dn;
$.Fragment = Hf;
$.Profiler = Gf;
$.PureComponent = Js;
$.StrictMode = Wf;
$.Suspense = Kf;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rp;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ou({}, e.props),
    i = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = to.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (o in t)
      Iu.call(t, o) &&
        !Nu.hasOwnProperty(o) &&
        (r[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    a = Array(o);
    for (var c = 0; c < o; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Mr, type: e.type, key: i, ref: l, props: r, _owner: s };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: Qf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Yf, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = zu;
$.createFactory = function (e) {
  var t = zu.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: Xf, render: e };
};
$.isValidElement = no;
$.lazy = function (e) {
  return { $$typeof: Zf, _payload: { _status: -1, _result: e }, _init: np };
};
$.memo = function (e, t) {
  return { $$typeof: qf, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = si.transition;
  si.transition = {};
  try {
    e();
  } finally {
    si.transition = t;
  }
};
$.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
$.useCallback = function (e, t) {
  return Ee.current.useCallback(e, t);
};
$.useContext = function (e) {
  return Ee.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return Ee.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return Ee.current.useEffect(e, t);
};
$.useId = function () {
  return Ee.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return Ee.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return Ee.current.useRef(e);
};
$.useState = function (e) {
  return Ee.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return Ee.current.useTransition();
};
$.version = "18.2.0";
Cu.exports = $;
var D = Cu.exports;
const te = Pu(D);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ip = D,
  lp = Symbol.for("react.element"),
  sp = Symbol.for("react.fragment"),
  op = Object.prototype.hasOwnProperty,
  ap = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  up = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ru(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) op.call(t, r) && !up.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: lp,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: ap.current,
  };
}
Qi.Fragment = sp;
Qi.jsx = Ru;
Qi.jsxs = Ru;
Tu.exports = Qi;
var C = Tu.exports,
  Zl = {},
  Au = { exports: {} },
  $e = {},
  Du = { exports: {} },
  ju = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, R) {
    var A = M.length;
    M.push(R);
    e: for (; 0 < A; ) {
      var G = (A - 1) >>> 1,
        ee = M[G];
      if (0 < i(ee, R)) (M[G] = R), (M[A] = ee), (A = G);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var R = M[0],
      A = M.pop();
    if (A !== R) {
      M[0] = A;
      e: for (var G = 0, ee = M.length, $r = ee >>> 1; G < $r; ) {
        var bt = 2 * (G + 1) - 1,
          ml = M[bt],
          Bt = bt + 1,
          Fr = M[Bt];
        if (0 > i(ml, A))
          Bt < ee && 0 > i(Fr, ml)
            ? ((M[G] = Fr), (M[Bt] = A), (G = Bt))
            : ((M[G] = ml), (M[bt] = A), (G = bt));
        else if (Bt < ee && 0 > i(Fr, A)) (M[G] = Fr), (M[Bt] = A), (G = Bt);
        else break e;
      }
    }
    return R;
  }
  function i(M, R) {
    var A = M.sortIndex - R.sortIndex;
    return A !== 0 ? A : M.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var o = [],
    c = [],
    f = 1,
    p = null,
    m = 3,
    v = !1,
    g = !1,
    w = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    u = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(M) {
    for (var R = n(c); R !== null; ) {
      if (R.callback === null) r(c);
      else if (R.startTime <= M)
        r(c), (R.sortIndex = R.expirationTime), t(o, R);
      else break;
      R = n(c);
    }
  }
  function y(M) {
    if (((w = !1), h(M), !g))
      if (n(o) !== null) (g = !0), Pe(S);
      else {
        var R = n(c);
        R !== null && Vt(y, R.startTime - M);
      }
  }
  function S(M, R) {
    (g = !1), w && ((w = !1), u(E), (E = -1)), (v = !0);
    var A = m;
    try {
      for (
        h(R), p = n(o);
        p !== null && (!(p.expirationTime > R) || (M && !I()));

      ) {
        var G = p.callback;
        if (typeof G == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var ee = G(p.expirationTime <= R);
          (R = e.unstable_now()),
            typeof ee == "function" ? (p.callback = ee) : p === n(o) && r(o),
            h(R);
        } else r(o);
        p = n(o);
      }
      if (p !== null) var $r = !0;
      else {
        var bt = n(c);
        bt !== null && Vt(y, bt.startTime - R), ($r = !1);
      }
      return $r;
    } finally {
      (p = null), (m = A), (v = !1);
    }
  }
  var P = !1,
    O = null,
    E = -1,
    k = 5,
    x = -1;
  function I() {
    return !(e.unstable_now() - x < k);
  }
  function N() {
    if (O !== null) {
      var M = e.unstable_now();
      x = M;
      var R = !0;
      try {
        R = O(!0, M);
      } finally {
        R ? L() : ((P = !1), (O = null));
      }
    } else P = !1;
  }
  var L;
  if (typeof d == "function")
    L = function () {
      d(N);
    };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(),
      b = j.port2;
    (j.port1.onmessage = N),
      (L = function () {
        b.postMessage(null);
      });
  } else
    L = function () {
      _(N, 0);
    };
  function Pe(M) {
    (O = M), P || ((P = !0), L());
  }
  function Vt(M, R) {
    E = _(function () {
      M(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), Pe(S));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (k = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(o);
    }),
    (e.unstable_next = function (M) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = m;
      }
      var A = m;
      m = R;
      try {
        return M();
      } finally {
        m = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, R) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var A = m;
      m = M;
      try {
        return R();
      } finally {
        m = A;
      }
    }),
    (e.unstable_scheduleCallback = function (M, R, A) {
      var G = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? G + A : G))
          : (A = G),
        M)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = A + ee),
        (M = {
          id: f++,
          callback: R,
          priorityLevel: M,
          startTime: A,
          expirationTime: ee,
          sortIndex: -1,
        }),
        A > G
          ? ((M.sortIndex = A),
            t(c, M),
            n(o) === null &&
              M === n(c) &&
              (w ? (u(E), (E = -1)) : (w = !0), Vt(y, A - G)))
          : ((M.sortIndex = ee), t(o, M), g || v || ((g = !0), Pe(S))),
        M
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (M) {
      var R = m;
      return function () {
        var A = m;
        m = R;
        try {
          return M.apply(this, arguments);
        } finally {
          m = A;
        }
      };
    });
})(ju);
Du.exports = ju;
var cp = Du.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $u = D,
  je = cp;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Fu = new Set(),
  fr = {};
function nn(e, t) {
  On(e, t), On(e + "Capture", t);
}
function On(e, t) {
  for (fr[e] = t, e = 0; e < t.length; e++) Fu.add(t[e]);
}
var ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Jl = Object.prototype.hasOwnProperty,
  dp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  la = {},
  sa = {};
function fp(e) {
  return Jl.call(sa, e)
    ? !0
    : Jl.call(la, e)
    ? !1
    : dp.test(e)
    ? (sa[e] = !0)
    : ((la[e] = !0), !1);
}
function pp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function hp(e, t, n, r) {
  if (t === null || typeof t > "u" || pp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function _e(e, t, n, r, i, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new _e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ro = /[\-:]([a-z])/g;
function io(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ro, io);
    fe[t] = new _e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ro, io);
    fe[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ro, io);
  fe[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new _e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function lo(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (hp(t, n, i, r) && (n = null),
    r || i === null
      ? fp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = $u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  br = Symbol.for("react.element"),
  un = Symbol.for("react.portal"),
  cn = Symbol.for("react.fragment"),
  so = Symbol.for("react.strict_mode"),
  es = Symbol.for("react.profiler"),
  Vu = Symbol.for("react.provider"),
  bu = Symbol.for("react.context"),
  oo = Symbol.for("react.forward_ref"),
  ts = Symbol.for("react.suspense"),
  ns = Symbol.for("react.suspense_list"),
  ao = Symbol.for("react.memo"),
  St = Symbol.for("react.lazy"),
  Bu = Symbol.for("react.offscreen"),
  oa = Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (oa && e[oa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  yl;
function qn(e) {
  if (yl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      yl = (t && t[1]) || "";
    }
  return (
    `
` +
    yl +
    e
  );
}
var wl = !1;
function Sl(e, t) {
  if (!e || wl) return "";
  wl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          l = r.stack.split(`
`),
          s = i.length - 1,
          a = l.length - 1;
        1 <= s && 0 <= a && i[s] !== l[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== l[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== l[a])) {
                var o =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    o.includes("<anonymous>") &&
                    (o = o.replace("<anonymous>", e.displayName)),
                  o
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (wl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? qn(e) : "";
}
function mp(e) {
  switch (e.tag) {
    case 5:
      return qn(e.type);
    case 16:
      return qn("Lazy");
    case 13:
      return qn("Suspense");
    case 19:
      return qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Sl(e.type, !1)), e;
    case 11:
      return (e = Sl(e.type.render, !1)), e;
    case 1:
      return (e = Sl(e.type, !0)), e;
    default:
      return "";
  }
}
function rs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case cn:
      return "Fragment";
    case un:
      return "Portal";
    case es:
      return "Profiler";
    case so:
      return "StrictMode";
    case ts:
      return "Suspense";
    case ns:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bu:
        return (e.displayName || "Context") + ".Consumer";
      case Vu:
        return (e._context.displayName || "Context") + ".Provider";
      case oo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ao:
        return (
          (t = e.displayName || null), t !== null ? t : rs(e.type) || "Memo"
        );
      case St:
        (t = e._payload), (e = e._init);
        try {
          return rs(e(t));
        } catch {}
    }
  return null;
}
function vp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return rs(t);
    case 8:
      return t === so ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function At(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Uu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function gp(e) {
  var t = Uu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Br(e) {
  e._valueTracker || (e._valueTracker = gp(e));
}
function Hu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Uu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function wi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function is(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function aa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = At(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Wu(e, t) {
  (t = t.checked), t != null && lo(e, "checked", t, !1);
}
function ls(e, t) {
  Wu(e, t);
  var n = At(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ss(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ss(e, t.type, At(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ua(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ss(e, t, n) {
  (t !== "number" || wi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zn = Array.isArray;
function xn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + At(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function os(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ca(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (Zn(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: At(n) };
}
function Gu(e, t) {
  var n = At(t.value),
    r = At(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function da(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function as(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Yu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ur,
  Qu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ur = Ur || document.createElement("div"),
          Ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var nr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  yp = ["Webkit", "ms", "Moz", "O"];
Object.keys(nr).forEach(function (e) {
  yp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (nr[t] = nr[e]);
  });
});
function Xu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (nr.hasOwnProperty(e) && nr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ku(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Xu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var wp = X(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function us(e, t) {
  if (t) {
    if (wp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function cs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ds = null;
function uo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var fs = null,
  En = null,
  _n = null;
function fa(e) {
  if ((e = zr(e))) {
    if (typeof fs != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Ji(t)), fs(e.stateNode, e.type, t));
  }
}
function qu(e) {
  En ? (_n ? _n.push(e) : (_n = [e])) : (En = e);
}
function Zu() {
  if (En) {
    var e = En,
      t = _n;
    if (((_n = En = null), fa(e), t)) for (e = 0; e < t.length; e++) fa(t[e]);
  }
}
function Ju(e, t) {
  return e(t);
}
function ec() {}
var xl = !1;
function tc(e, t, n) {
  if (xl) return e(t, n);
  xl = !0;
  try {
    return Ju(e, t, n);
  } finally {
    (xl = !1), (En !== null || _n !== null) && (ec(), Zu());
  }
}
function hr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ji(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var ps = !1;
if (ht)
  try {
    var bn = {};
    Object.defineProperty(bn, "passive", {
      get: function () {
        ps = !0;
      },
    }),
      window.addEventListener("test", bn, bn),
      window.removeEventListener("test", bn, bn);
  } catch {
    ps = !1;
  }
function Sp(e, t, n, r, i, l, s, a, o) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var rr = !1,
  Si = null,
  xi = !1,
  hs = null,
  xp = {
    onError: function (e) {
      (rr = !0), (Si = e);
    },
  };
function Ep(e, t, n, r, i, l, s, a, o) {
  (rr = !1), (Si = null), Sp.apply(xp, arguments);
}
function _p(e, t, n, r, i, l, s, a, o) {
  if ((Ep.apply(this, arguments), rr)) {
    if (rr) {
      var c = Si;
      (rr = !1), (Si = null);
    } else throw Error(T(198));
    xi || ((xi = !0), (hs = c));
  }
}
function rn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function nc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function pa(e) {
  if (rn(e) !== e) throw Error(T(188));
}
function Pp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = rn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return pa(i), e;
        if (l === r) return pa(i), t;
        l = l.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = l);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = l.child; a; ) {
          if (a === n) {
            (s = !0), (n = l), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = l), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function rc(e) {
  return (e = Pp(e)), e !== null ? ic(e) : null;
}
function ic(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ic(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var lc = je.unstable_scheduleCallback,
  ha = je.unstable_cancelCallback,
  Tp = je.unstable_shouldYield,
  Cp = je.unstable_requestPaint,
  J = je.unstable_now,
  kp = je.unstable_getCurrentPriorityLevel,
  co = je.unstable_ImmediatePriority,
  sc = je.unstable_UserBlockingPriority,
  Ei = je.unstable_NormalPriority,
  Op = je.unstable_LowPriority,
  oc = je.unstable_IdlePriority,
  Xi = null,
  lt = null;
function Lp(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(Xi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : Np,
  Mp = Math.log,
  Ip = Math.LN2;
function Np(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Mp(e) / Ip) | 0)) | 0;
}
var Hr = 64,
  Wr = 4194304;
function Jn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function _i(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Jn(a)) : ((l &= s), l !== 0 && (r = Jn(l)));
  } else (s = n & ~i), s !== 0 ? (r = Jn(s)) : l !== 0 && (r = Jn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ze(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function zp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Rp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - Ze(l),
      a = 1 << s,
      o = i[s];
    o === -1
      ? (!(a & n) || a & r) && (i[s] = zp(a, t))
      : o <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function ms(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ac() {
  var e = Hr;
  return (Hr <<= 1), !(Hr & 4194240) && (Hr = 64), e;
}
function El(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ir(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ze(t)),
    (e[t] = n);
}
function Ap(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ze(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function fo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var V = 0;
function uc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var cc,
  po,
  dc,
  fc,
  pc,
  vs = !1,
  Gr = [],
  kt = null,
  Ot = null,
  Lt = null,
  mr = new Map(),
  vr = new Map(),
  Et = [],
  Dp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ma(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ot = null;
      break;
    case "mouseover":
    case "mouseout":
      Lt = null;
      break;
    case "pointerover":
    case "pointerout":
      mr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vr.delete(t.pointerId);
  }
}
function Bn(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = zr(t)), t !== null && po(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function jp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (kt = Bn(kt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ot = Bn(Ot, e, t, n, r, i)), !0;
    case "mouseover":
      return (Lt = Bn(Lt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return mr.set(l, Bn(mr.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), vr.set(l, Bn(vr.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function hc(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = rn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = nc(n)), t !== null)) {
          (e.blockedOn = t),
            pc(e.priority, function () {
              dc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function oi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ds = r), n.target.dispatchEvent(r), (ds = null);
    } else return (t = zr(n)), t !== null && po(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function va(e, t, n) {
  oi(e) && n.delete(t);
}
function $p() {
  (vs = !1),
    kt !== null && oi(kt) && (kt = null),
    Ot !== null && oi(Ot) && (Ot = null),
    Lt !== null && oi(Lt) && (Lt = null),
    mr.forEach(va),
    vr.forEach(va);
}
function Un(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vs ||
      ((vs = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, $p)));
}
function gr(e) {
  function t(i) {
    return Un(i, e);
  }
  if (0 < Gr.length) {
    Un(Gr[0], e);
    for (var n = 1; n < Gr.length; n++) {
      var r = Gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    kt !== null && Un(kt, e),
      Ot !== null && Un(Ot, e),
      Lt !== null && Un(Lt, e),
      mr.forEach(t),
      vr.forEach(t),
      n = 0;
    n < Et.length;
    n++
  )
    (r = Et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
    hc(n), n.blockedOn === null && Et.shift();
}
var Pn = yt.ReactCurrentBatchConfig,
  Pi = !0;
function Fp(e, t, n, r) {
  var i = V,
    l = Pn.transition;
  Pn.transition = null;
  try {
    (V = 1), ho(e, t, n, r);
  } finally {
    (V = i), (Pn.transition = l);
  }
}
function Vp(e, t, n, r) {
  var i = V,
    l = Pn.transition;
  Pn.transition = null;
  try {
    (V = 4), ho(e, t, n, r);
  } finally {
    (V = i), (Pn.transition = l);
  }
}
function ho(e, t, n, r) {
  if (Pi) {
    var i = gs(e, t, n, r);
    if (i === null) Nl(e, t, r, Ti, n), ma(e, r);
    else if (jp(i, e, t, n, r)) r.stopPropagation();
    else if ((ma(e, r), t & 4 && -1 < Dp.indexOf(e))) {
      for (; i !== null; ) {
        var l = zr(i);
        if (
          (l !== null && cc(l),
          (l = gs(e, t, n, r)),
          l === null && Nl(e, t, r, Ti, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else Nl(e, t, r, null, n);
  }
}
var Ti = null;
function gs(e, t, n, r) {
  if (((Ti = null), (e = uo(r)), (e = Wt(e)), e !== null))
    if (((t = rn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = nc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ti = e), null;
}
function mc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (kp()) {
        case co:
          return 1;
        case sc:
          return 4;
        case Ei:
        case Op:
          return 16;
        case oc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pt = null,
  mo = null,
  ai = null;
function vc() {
  if (ai) return ai;
  var e,
    t = mo,
    n = t.length,
    r,
    i = "value" in Pt ? Pt.value : Pt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
  return (ai = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ui(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Yr() {
  return !0;
}
function ga() {
  return !1;
}
function Fe(e) {
  function t(n, r, i, l, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Yr
        : ga),
      (this.isPropagationStopped = ga),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Yr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Yr));
      },
      persist: function () {},
      isPersistent: Yr,
    }),
    t
  );
}
var jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  vo = Fe(jn),
  Nr = X({}, jn, { view: 0, detail: 0 }),
  bp = Fe(Nr),
  _l,
  Pl,
  Hn,
  Ki = X({}, Nr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: go,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Hn &&
            (Hn && e.type === "mousemove"
              ? ((_l = e.screenX - Hn.screenX), (Pl = e.screenY - Hn.screenY))
              : (Pl = _l = 0),
            (Hn = e)),
          _l);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pl;
    },
  }),
  ya = Fe(Ki),
  Bp = X({}, Ki, { dataTransfer: 0 }),
  Up = Fe(Bp),
  Hp = X({}, Nr, { relatedTarget: 0 }),
  Tl = Fe(Hp),
  Wp = X({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gp = Fe(Wp),
  Yp = X({}, jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Qp = Fe(Yp),
  Xp = X({}, jn, { data: 0 }),
  wa = Fe(Xp),
  Kp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  qp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Zp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zp[e]) ? !!t[e] : !1;
}
function go() {
  return Jp;
}
var eh = X({}, Nr, {
    key: function (e) {
      if (e.key) {
        var t = Kp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ui(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? qp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: go,
    charCode: function (e) {
      return e.type === "keypress" ? ui(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ui(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  th = Fe(eh),
  nh = X({}, Ki, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Sa = Fe(nh),
  rh = X({}, Nr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: go,
  }),
  ih = Fe(rh),
  lh = X({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sh = Fe(lh),
  oh = X({}, Ki, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ah = Fe(oh),
  uh = [9, 13, 27, 32],
  yo = ht && "CompositionEvent" in window,
  ir = null;
ht && "documentMode" in document && (ir = document.documentMode);
var ch = ht && "TextEvent" in window && !ir,
  gc = ht && (!yo || (ir && 8 < ir && 11 >= ir)),
  xa = " ",
  Ea = !1;
function yc(e, t) {
  switch (e) {
    case "keyup":
      return uh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function wc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var dn = !1;
function dh(e, t) {
  switch (e) {
    case "compositionend":
      return wc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ea = !0), xa);
    case "textInput":
      return (e = t.data), e === xa && Ea ? null : e;
    default:
      return null;
  }
}
function fh(e, t) {
  if (dn)
    return e === "compositionend" || (!yo && yc(e, t))
      ? ((e = vc()), (ai = mo = Pt = null), (dn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return gc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ph = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _a(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ph[e.type] : t === "textarea";
}
function Sc(e, t, n, r) {
  qu(r),
    (t = Ci(t, "onChange")),
    0 < t.length &&
      ((n = new vo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var lr = null,
  yr = null;
function hh(e) {
  Ic(e, 0);
}
function qi(e) {
  var t = hn(e);
  if (Hu(t)) return e;
}
function mh(e, t) {
  if (e === "change") return t;
}
var xc = !1;
if (ht) {
  var Cl;
  if (ht) {
    var kl = "oninput" in document;
    if (!kl) {
      var Pa = document.createElement("div");
      Pa.setAttribute("oninput", "return;"),
        (kl = typeof Pa.oninput == "function");
    }
    Cl = kl;
  } else Cl = !1;
  xc = Cl && (!document.documentMode || 9 < document.documentMode);
}
function Ta() {
  lr && (lr.detachEvent("onpropertychange", Ec), (yr = lr = null));
}
function Ec(e) {
  if (e.propertyName === "value" && qi(yr)) {
    var t = [];
    Sc(t, yr, e, uo(e)), tc(hh, t);
  }
}
function vh(e, t, n) {
  e === "focusin"
    ? (Ta(), (lr = t), (yr = n), lr.attachEvent("onpropertychange", Ec))
    : e === "focusout" && Ta();
}
function gh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return qi(yr);
}
function yh(e, t) {
  if (e === "click") return qi(t);
}
function wh(e, t) {
  if (e === "input" || e === "change") return qi(t);
}
function Sh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var et = typeof Object.is == "function" ? Object.is : Sh;
function wr(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Jl.call(t, i) || !et(e[i], t[i])) return !1;
  }
  return !0;
}
function Ca(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ka(e, t) {
  var n = Ca(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ca(n);
  }
}
function _c(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _c(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pc() {
  for (var e = window, t = wi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = wi(e.document);
  }
  return t;
}
function wo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function xh(e) {
  var t = Pc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _c(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = ka(n, l));
        var s = ka(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Eh = ht && "documentMode" in document && 11 >= document.documentMode,
  fn = null,
  ys = null,
  sr = null,
  ws = !1;
function Oa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ws ||
    fn == null ||
    fn !== wi(r) ||
    ((r = fn),
    "selectionStart" in r && wo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (sr && wr(sr, r)) ||
      ((sr = r),
      (r = Ci(ys, "onSelect")),
      0 < r.length &&
        ((t = new vo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = fn))));
}
function Qr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var pn = {
    animationend: Qr("Animation", "AnimationEnd"),
    animationiteration: Qr("Animation", "AnimationIteration"),
    animationstart: Qr("Animation", "AnimationStart"),
    transitionend: Qr("Transition", "TransitionEnd"),
  },
  Ol = {},
  Tc = {};
ht &&
  ((Tc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete pn.animationend.animation,
    delete pn.animationiteration.animation,
    delete pn.animationstart.animation),
  "TransitionEvent" in window || delete pn.transitionend.transition);
function Zi(e) {
  if (Ol[e]) return Ol[e];
  if (!pn[e]) return e;
  var t = pn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tc) return (Ol[e] = t[n]);
  return e;
}
var Cc = Zi("animationend"),
  kc = Zi("animationiteration"),
  Oc = Zi("animationstart"),
  Lc = Zi("transitionend"),
  Mc = new Map(),
  La =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function jt(e, t) {
  Mc.set(e, t), nn(t, [e]);
}
for (var Ll = 0; Ll < La.length; Ll++) {
  var Ml = La[Ll],
    _h = Ml.toLowerCase(),
    Ph = Ml[0].toUpperCase() + Ml.slice(1);
  jt(_h, "on" + Ph);
}
jt(Cc, "onAnimationEnd");
jt(kc, "onAnimationIteration");
jt(Oc, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt(Lc, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var er =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Th = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
function Ma(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), _p(r, t, void 0, e), (e.currentTarget = null);
}
function Ic(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            o = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), o !== l && i.isPropagationStopped())) break e;
          Ma(i, a, c), (l = o);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (o = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            o !== l && i.isPropagationStopped())
          )
            break e;
          Ma(i, a, c), (l = o);
        }
    }
  }
  if (xi) throw ((e = hs), (xi = !1), (hs = null), e);
}
function U(e, t) {
  var n = t[Ps];
  n === void 0 && (n = t[Ps] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Nc(t, e, 2, !1), n.add(r));
}
function Il(e, t, n) {
  var r = 0;
  t && (r |= 4), Nc(n, e, r, t);
}
var Xr = "_reactListening" + Math.random().toString(36).slice(2);
function Sr(e) {
  if (!e[Xr]) {
    (e[Xr] = !0),
      Fu.forEach(function (n) {
        n !== "selectionchange" && (Th.has(n) || Il(n, !1, e), Il(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xr] || ((t[Xr] = !0), Il("selectionchange", !1, t));
  }
}
function Nc(e, t, n, r) {
  switch (mc(t)) {
    case 1:
      var i = Fp;
      break;
    case 4:
      i = Vp;
      break;
    default:
      i = ho;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ps ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Nl(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var o = s.tag;
            if (
              (o === 3 || o === 4) &&
              ((o = s.stateNode.containerInfo),
              o === i || (o.nodeType === 8 && o.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Wt(a)), s === null)) return;
          if (((o = s.tag), o === 5 || o === 6)) {
            r = l = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  tc(function () {
    var c = l,
      f = uo(n),
      p = [];
    e: {
      var m = Mc.get(e);
      if (m !== void 0) {
        var v = vo,
          g = e;
        switch (e) {
          case "keypress":
            if (ui(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = th;
            break;
          case "focusin":
            (g = "focus"), (v = Tl);
            break;
          case "focusout":
            (g = "blur"), (v = Tl);
            break;
          case "beforeblur":
          case "afterblur":
            v = Tl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = ya;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Up;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ih;
            break;
          case Cc:
          case kc:
          case Oc:
            v = Gp;
            break;
          case Lc:
            v = sh;
            break;
          case "scroll":
            v = bp;
            break;
          case "wheel":
            v = ah;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Qp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Sa;
        }
        var w = (t & 4) !== 0,
          _ = !w && e === "scroll",
          u = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              u !== null && ((y = hr(d, u)), y != null && w.push(xr(d, y, h)))),
            _)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((m = new v(m, g, null, n, f)), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== ds &&
            (g = n.relatedTarget || n.fromElement) &&
            (Wt(g) || g[mt]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            f.window === f
              ? f
              : (m = f.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = c),
              (g = g ? Wt(g) : null),
              g !== null &&
                ((_ = rn(g)), g !== _ || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = c)),
          v !== g)
        ) {
          if (
            ((w = ya),
            (y = "onMouseLeave"),
            (u = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Sa),
              (y = "onPointerLeave"),
              (u = "onPointerEnter"),
              (d = "pointer")),
            (_ = v == null ? m : hn(v)),
            (h = g == null ? m : hn(g)),
            (m = new w(y, d + "leave", v, n, f)),
            (m.target = _),
            (m.relatedTarget = h),
            (y = null),
            Wt(f) === c &&
              ((w = new w(u, d + "enter", g, n, f)),
              (w.target = h),
              (w.relatedTarget = _),
              (y = w)),
            (_ = y),
            v && g)
          )
            t: {
              for (w = v, u = g, d = 0, h = w; h; h = ln(h)) d++;
              for (h = 0, y = u; y; y = ln(y)) h++;
              for (; 0 < d - h; ) (w = ln(w)), d--;
              for (; 0 < h - d; ) (u = ln(u)), h--;
              for (; d--; ) {
                if (w === u || (u !== null && w === u.alternate)) break t;
                (w = ln(w)), (u = ln(u));
              }
              w = null;
            }
          else w = null;
          v !== null && Ia(p, m, v, w, !1),
            g !== null && _ !== null && Ia(p, _, g, w, !0);
        }
      }
      e: {
        if (
          ((m = c ? hn(c) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var S = mh;
        else if (_a(m))
          if (xc) S = wh;
          else {
            S = gh;
            var P = vh;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (S = yh);
        if (S && (S = S(e, c))) {
          Sc(p, S, n, f);
          break e;
        }
        P && P(e, m, c),
          e === "focusout" &&
            (P = m._wrapperState) &&
            P.controlled &&
            m.type === "number" &&
            ss(m, "number", m.value);
      }
      switch (((P = c ? hn(c) : window), e)) {
        case "focusin":
          (_a(P) || P.contentEditable === "true") &&
            ((fn = P), (ys = c), (sr = null));
          break;
        case "focusout":
          sr = ys = fn = null;
          break;
        case "mousedown":
          ws = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ws = !1), Oa(p, n, f);
          break;
        case "selectionchange":
          if (Eh) break;
        case "keydown":
        case "keyup":
          Oa(p, n, f);
      }
      var O;
      if (yo)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        dn
          ? yc(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (gc &&
          n.locale !== "ko" &&
          (dn || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && dn && (O = vc())
            : ((Pt = f),
              (mo = "value" in Pt ? Pt.value : Pt.textContent),
              (dn = !0))),
        (P = Ci(c, E)),
        0 < P.length &&
          ((E = new wa(E, e, null, n, f)),
          p.push({ event: E, listeners: P }),
          O ? (E.data = O) : ((O = wc(n)), O !== null && (E.data = O)))),
        (O = ch ? dh(e, n) : fh(e, n)) &&
          ((c = Ci(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new wa("onBeforeInput", "beforeinput", null, n, f)),
            p.push({ event: f, listeners: c }),
            (f.data = O)));
    }
    Ic(p, t);
  });
}
function xr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ci(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = hr(e, n)),
      l != null && r.unshift(xr(e, l, i)),
      (l = hr(e, t)),
      l != null && r.push(xr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ia(e, t, n, r, i) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      o = a.alternate,
      c = a.stateNode;
    if (o !== null && o === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((o = hr(n, l)), o != null && s.unshift(xr(n, o, a)))
        : i || ((o = hr(n, l)), o != null && s.push(xr(n, o, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Ch = /\r\n?/g,
  kh = /\u0000|\uFFFD/g;
function Na(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ch,
      `
`
    )
    .replace(kh, "");
}
function Kr(e, t, n) {
  if (((t = Na(t)), Na(e) !== t && n)) throw Error(T(425));
}
function ki() {}
var Ss = null,
  xs = null;
function Es(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var _s = typeof setTimeout == "function" ? setTimeout : void 0,
  Oh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  za = typeof Promise == "function" ? Promise : void 0,
  Lh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof za < "u"
      ? function (e) {
          return za.resolve(null).then(e).catch(Mh);
        }
      : _s;
function Mh(e) {
  setTimeout(function () {
    throw e;
  });
}
function zl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), gr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  gr(t);
}
function Mt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ra(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $n = Math.random().toString(36).slice(2),
  rt = "__reactFiber$" + $n,
  Er = "__reactProps$" + $n,
  mt = "__reactContainer$" + $n,
  Ps = "__reactEvents$" + $n,
  Ih = "__reactListeners$" + $n,
  Nh = "__reactHandles$" + $n;
function Wt(e) {
  var t = e[rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mt] || n[rt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ra(e); e !== null; ) {
          if ((n = e[rt])) return n;
          e = Ra(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function zr(e) {
  return (
    (e = e[rt] || e[mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Ji(e) {
  return e[Er] || null;
}
var Ts = [],
  mn = -1;
function $t(e) {
  return { current: e };
}
function H(e) {
  0 > mn || ((e.current = Ts[mn]), (Ts[mn] = null), mn--);
}
function B(e, t) {
  mn++, (Ts[mn] = e.current), (e.current = t);
}
var Dt = {},
  ve = $t(Dt),
  Oe = $t(!1),
  Kt = Dt;
function Ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Le(e) {
  return (e = e.childContextTypes), e != null;
}
function Oi() {
  H(Oe), H(ve);
}
function Aa(e, t, n) {
  if (ve.current !== Dt) throw Error(T(168));
  B(ve, t), B(Oe, n);
}
function zc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(T(108, vp(e) || "Unknown", i));
  return X({}, n, r);
}
function Li(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
    (Kt = ve.current),
    B(ve, e),
    B(Oe, Oe.current),
    !0
  );
}
function Da(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = zc(e, t, Kt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Oe),
      H(ve),
      B(ve, e))
    : H(Oe),
    B(Oe, n);
}
var ct = null,
  el = !1,
  Rl = !1;
function Rc(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
function zh(e) {
  (el = !0), Rc(e);
}
function Ft() {
  if (!Rl && ct !== null) {
    Rl = !0;
    var e = 0,
      t = V;
    try {
      var n = ct;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ct = null), (el = !1);
    } catch (i) {
      throw (ct !== null && (ct = ct.slice(e + 1)), lc(co, Ft), i);
    } finally {
      (V = t), (Rl = !1);
    }
  }
  return null;
}
var vn = [],
  gn = 0,
  Mi = null,
  Ii = 0,
  Be = [],
  Ue = 0,
  qt = null,
  dt = 1,
  ft = "";
function Ut(e, t) {
  (vn[gn++] = Ii), (vn[gn++] = Mi), (Mi = e), (Ii = t);
}
function Ac(e, t, n) {
  (Be[Ue++] = dt), (Be[Ue++] = ft), (Be[Ue++] = qt), (qt = e);
  var r = dt;
  e = ft;
  var i = 32 - Ze(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - Ze(t) + i;
  if (30 < l) {
    var s = i - (i % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (dt = (1 << (32 - Ze(t) + i)) | (n << i) | r),
      (ft = l + e);
  } else (dt = (1 << l) | (n << i) | r), (ft = e);
}
function So(e) {
  e.return !== null && (Ut(e, 1), Ac(e, 1, 0));
}
function xo(e) {
  for (; e === Mi; )
    (Mi = vn[--gn]), (vn[gn] = null), (Ii = vn[--gn]), (vn[gn] = null);
  for (; e === qt; )
    (qt = Be[--Ue]),
      (Be[Ue] = null),
      (ft = Be[--Ue]),
      (Be[Ue] = null),
      (dt = Be[--Ue]),
      (Be[Ue] = null);
}
var De = null,
  Ae = null,
  W = !1,
  qe = null;
function Dc(e, t) {
  var n = He(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ja(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (De = e), (Ae = Mt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (De = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qt !== null ? { id: dt, overflow: ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = He(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (De = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Cs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ks(e) {
  if (W) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!ja(e, t)) {
        if (Cs(e)) throw Error(T(418));
        t = Mt(n.nextSibling);
        var r = De;
        t && ja(e, t)
          ? Dc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (De = e));
      }
    } else {
      if (Cs(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (De = e);
    }
  }
}
function $a(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  De = e;
}
function qr(e) {
  if (e !== De) return !1;
  if (!W) return $a(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Es(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (Cs(e)) throw (jc(), Error(T(418)));
    for (; t; ) Dc(e, t), (t = Mt(t.nextSibling));
  }
  if (($a(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = De ? Mt(e.stateNode.nextSibling) : null;
  return !0;
}
function jc() {
  for (var e = Ae; e; ) e = Mt(e.nextSibling);
}
function Mn() {
  (Ae = De = null), (W = !1);
}
function Eo(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var Rh = yt.ReactCurrentBatchConfig;
function Xe(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ni = $t(null),
  zi = null,
  yn = null,
  _o = null;
function Po() {
  _o = yn = zi = null;
}
function To(e) {
  var t = Ni.current;
  H(Ni), (e._currentValue = t);
}
function Os(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Tn(e, t) {
  (zi = e),
    (_o = yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function Ge(e) {
  var t = e._currentValue;
  if (_o !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yn === null)) {
      if (zi === null) throw Error(T(308));
      (yn = e), (zi.dependencies = { lanes: 0, firstContext: e });
    } else yn = yn.next = e;
  return t;
}
var Gt = null;
function Co(e) {
  Gt === null ? (Gt = [e]) : Gt.push(e);
}
function $c(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Co(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    vt(e, r)
  );
}
function vt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var xt = !1;
function ko(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Fc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function It(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      vt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Co(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    vt(e, n)
  );
}
function ci(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fo(e, n);
  }
}
function Fa(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ri(e, t, n, r) {
  var i = e.updateQueue;
  xt = !1;
  var l = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var o = a,
      c = o.next;
    (o.next = null), s === null ? (l = c) : (s.next = c), (s = o);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== s &&
        (a === null ? (f.firstBaseUpdate = c) : (a.next = c),
        (f.lastBaseUpdate = o)));
  }
  if (l !== null) {
    var p = i.baseState;
    (s = 0), (f = c = o = null), (a = l);
    do {
      var m = a.lane,
        v = a.eventTime;
      if ((r & m) === m) {
        f !== null &&
          (f = f.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            w = a;
          switch (((m = t), (v = n), w.tag)) {
            case 1:
              if (((g = w.payload), typeof g == "function")) {
                p = g.call(v, p, m);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = w.payload),
                (m = typeof g == "function" ? g.call(v, p, m) : g),
                m == null)
              )
                break e;
              p = X({}, p, m);
              break e;
            case 2:
              xt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [a]) : m.push(a));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((c = f = v), (o = p)) : (f = f.next = v),
          (s |= m);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (o = p),
      (i.baseState = o),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (Jt |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function Va(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(T(191, i));
        i.call(r);
      }
    }
}
var Vc = new $u.Component().refs;
function Ls(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var tl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? rn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = zt(e),
      l = pt(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = It(e, l, i)),
      t !== null && (Je(t, e, i, r), ci(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = zt(e),
      l = pt(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = It(e, l, i)),
      t !== null && (Je(t, e, i, r), ci(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xe(),
      r = zt(e),
      i = pt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = It(e, i, r)),
      t !== null && (Je(t, e, r, n), ci(t, e, r));
  },
};
function ba(e, t, n, r, i, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !wr(n, r) || !wr(i, l)
      : !0
  );
}
function bc(e, t, n) {
  var r = !1,
    i = Dt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ge(l))
      : ((i = Le(t) ? Kt : ve.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Ln(e, i) : Dt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = tl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Ba(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && tl.enqueueReplaceState(t, t.state, null);
}
function Ms(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Vc), ko(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = Ge(l))
    : ((l = Le(t) ? Kt : ve.current), (i.context = Ln(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Ls(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && tl.enqueueReplaceState(i, i.state, null),
      Ri(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === Vc && (a = i.refs = {}),
              s === null ? delete a[l] : (a[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Zr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ua(e) {
  var t = e._init;
  return t(e._payload);
}
function Bc(e) {
  function t(u, d) {
    if (e) {
      var h = u.deletions;
      h === null ? ((u.deletions = [d]), (u.flags |= 16)) : h.push(d);
    }
  }
  function n(u, d) {
    if (!e) return null;
    for (; d !== null; ) t(u, d), (d = d.sibling);
    return null;
  }
  function r(u, d) {
    for (u = new Map(); d !== null; )
      d.key !== null ? u.set(d.key, d) : u.set(d.index, d), (d = d.sibling);
    return u;
  }
  function i(u, d) {
    return (u = Rt(u, d)), (u.index = 0), (u.sibling = null), u;
  }
  function l(u, d, h) {
    return (
      (u.index = h),
      e
        ? ((h = u.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((u.flags |= 2), d) : h)
            : ((u.flags |= 2), d))
        : ((u.flags |= 1048576), d)
    );
  }
  function s(u) {
    return e && u.alternate === null && (u.flags |= 2), u;
  }
  function a(u, d, h, y) {
    return d === null || d.tag !== 6
      ? ((d = bl(h, u.mode, y)), (d.return = u), d)
      : ((d = i(d, h)), (d.return = u), d);
  }
  function o(u, d, h, y) {
    var S = h.type;
    return S === cn
      ? f(u, d, h.props.children, y, h.key)
      : d !== null &&
        (d.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === St &&
            Ua(S) === d.type))
      ? ((y = i(d, h.props)), (y.ref = Wn(u, d, h)), (y.return = u), y)
      : ((y = vi(h.type, h.key, h.props, null, u.mode, y)),
        (y.ref = Wn(u, d, h)),
        (y.return = u),
        y);
  }
  function c(u, d, h, y) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Bl(h, u.mode, y)), (d.return = u), d)
      : ((d = i(d, h.children || [])), (d.return = u), d);
  }
  function f(u, d, h, y, S) {
    return d === null || d.tag !== 7
      ? ((d = Xt(h, u.mode, y, S)), (d.return = u), d)
      : ((d = i(d, h)), (d.return = u), d);
  }
  function p(u, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = bl("" + d, u.mode, h)), (d.return = u), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case br:
          return (
            (h = vi(d.type, d.key, d.props, null, u.mode, h)),
            (h.ref = Wn(u, null, d)),
            (h.return = u),
            h
          );
        case un:
          return (d = Bl(d, u.mode, h)), (d.return = u), d;
        case St:
          var y = d._init;
          return p(u, y(d._payload), h);
      }
      if (Zn(d) || Vn(d))
        return (d = Xt(d, u.mode, h, null)), (d.return = u), d;
      Zr(u, d);
    }
    return null;
  }
  function m(u, d, h, y) {
    var S = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return S !== null ? null : a(u, d, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case br:
          return h.key === S ? o(u, d, h, y) : null;
        case un:
          return h.key === S ? c(u, d, h, y) : null;
        case St:
          return (S = h._init), m(u, d, S(h._payload), y);
      }
      if (Zn(h) || Vn(h)) return S !== null ? null : f(u, d, h, y, null);
      Zr(u, h);
    }
    return null;
  }
  function v(u, d, h, y, S) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (u = u.get(h) || null), a(d, u, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case br:
          return (u = u.get(y.key === null ? h : y.key) || null), o(d, u, y, S);
        case un:
          return (u = u.get(y.key === null ? h : y.key) || null), c(d, u, y, S);
        case St:
          var P = y._init;
          return v(u, d, h, P(y._payload), S);
      }
      if (Zn(y) || Vn(y)) return (u = u.get(h) || null), f(d, u, y, S, null);
      Zr(d, y);
    }
    return null;
  }
  function g(u, d, h, y) {
    for (
      var S = null, P = null, O = d, E = (d = 0), k = null;
      O !== null && E < h.length;
      E++
    ) {
      O.index > E ? ((k = O), (O = null)) : (k = O.sibling);
      var x = m(u, O, h[E], y);
      if (x === null) {
        O === null && (O = k);
        break;
      }
      e && O && x.alternate === null && t(u, O),
        (d = l(x, d, E)),
        P === null ? (S = x) : (P.sibling = x),
        (P = x),
        (O = k);
    }
    if (E === h.length) return n(u, O), W && Ut(u, E), S;
    if (O === null) {
      for (; E < h.length; E++)
        (O = p(u, h[E], y)),
          O !== null &&
            ((d = l(O, d, E)), P === null ? (S = O) : (P.sibling = O), (P = O));
      return W && Ut(u, E), S;
    }
    for (O = r(u, O); E < h.length; E++)
      (k = v(O, u, E, h[E], y)),
        k !== null &&
          (e && k.alternate !== null && O.delete(k.key === null ? E : k.key),
          (d = l(k, d, E)),
          P === null ? (S = k) : (P.sibling = k),
          (P = k));
    return (
      e &&
        O.forEach(function (I) {
          return t(u, I);
        }),
      W && Ut(u, E),
      S
    );
  }
  function w(u, d, h, y) {
    var S = Vn(h);
    if (typeof S != "function") throw Error(T(150));
    if (((h = S.call(h)), h == null)) throw Error(T(151));
    for (
      var P = (S = null), O = d, E = (d = 0), k = null, x = h.next();
      O !== null && !x.done;
      E++, x = h.next()
    ) {
      O.index > E ? ((k = O), (O = null)) : (k = O.sibling);
      var I = m(u, O, x.value, y);
      if (I === null) {
        O === null && (O = k);
        break;
      }
      e && O && I.alternate === null && t(u, O),
        (d = l(I, d, E)),
        P === null ? (S = I) : (P.sibling = I),
        (P = I),
        (O = k);
    }
    if (x.done) return n(u, O), W && Ut(u, E), S;
    if (O === null) {
      for (; !x.done; E++, x = h.next())
        (x = p(u, x.value, y)),
          x !== null &&
            ((d = l(x, d, E)), P === null ? (S = x) : (P.sibling = x), (P = x));
      return W && Ut(u, E), S;
    }
    for (O = r(u, O); !x.done; E++, x = h.next())
      (x = v(O, u, E, x.value, y)),
        x !== null &&
          (e && x.alternate !== null && O.delete(x.key === null ? E : x.key),
          (d = l(x, d, E)),
          P === null ? (S = x) : (P.sibling = x),
          (P = x));
    return (
      e &&
        O.forEach(function (N) {
          return t(u, N);
        }),
      W && Ut(u, E),
      S
    );
  }
  function _(u, d, h, y) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === cn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case br:
          e: {
            for (var S = h.key, P = d; P !== null; ) {
              if (P.key === S) {
                if (((S = h.type), S === cn)) {
                  if (P.tag === 7) {
                    n(u, P.sibling),
                      (d = i(P, h.props.children)),
                      (d.return = u),
                      (u = d);
                    break e;
                  }
                } else if (
                  P.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === St &&
                    Ua(S) === P.type)
                ) {
                  n(u, P.sibling),
                    (d = i(P, h.props)),
                    (d.ref = Wn(u, P, h)),
                    (d.return = u),
                    (u = d);
                  break e;
                }
                n(u, P);
                break;
              } else t(u, P);
              P = P.sibling;
            }
            h.type === cn
              ? ((d = Xt(h.props.children, u.mode, y, h.key)),
                (d.return = u),
                (u = d))
              : ((y = vi(h.type, h.key, h.props, null, u.mode, y)),
                (y.ref = Wn(u, d, h)),
                (y.return = u),
                (u = y));
          }
          return s(u);
        case un:
          e: {
            for (P = h.key; d !== null; ) {
              if (d.key === P)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(u, d.sibling),
                    (d = i(d, h.children || [])),
                    (d.return = u),
                    (u = d);
                  break e;
                } else {
                  n(u, d);
                  break;
                }
              else t(u, d);
              d = d.sibling;
            }
            (d = Bl(h, u.mode, y)), (d.return = u), (u = d);
          }
          return s(u);
        case St:
          return (P = h._init), _(u, d, P(h._payload), y);
      }
      if (Zn(h)) return g(u, d, h, y);
      if (Vn(h)) return w(u, d, h, y);
      Zr(u, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(u, d.sibling), (d = i(d, h)), (d.return = u), (u = d))
          : (n(u, d), (d = bl(h, u.mode, y)), (d.return = u), (u = d)),
        s(u))
      : n(u, d);
  }
  return _;
}
var In = Bc(!0),
  Uc = Bc(!1),
  Rr = {},
  st = $t(Rr),
  _r = $t(Rr),
  Pr = $t(Rr);
function Yt(e) {
  if (e === Rr) throw Error(T(174));
  return e;
}
function Oo(e, t) {
  switch ((B(Pr, t), B(_r, e), B(st, Rr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : as(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = as(t, e));
  }
  H(st), B(st, t);
}
function Nn() {
  H(st), H(_r), H(Pr);
}
function Hc(e) {
  Yt(Pr.current);
  var t = Yt(st.current),
    n = as(t, e.type);
  t !== n && (B(_r, e), B(st, n));
}
function Lo(e) {
  _r.current === e && (H(st), H(_r));
}
var Y = $t(0);
function Ai(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Al = [];
function Mo() {
  for (var e = 0; e < Al.length; e++)
    Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var di = yt.ReactCurrentDispatcher,
  Dl = yt.ReactCurrentBatchConfig,
  Zt = 0,
  Q = null,
  ie = null,
  oe = null,
  Di = !1,
  or = !1,
  Tr = 0,
  Ah = 0;
function pe() {
  throw Error(T(321));
}
function Io(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1;
  return !0;
}
function No(e, t, n, r, i, l) {
  if (
    ((Zt = l),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (di.current = e === null || e.memoizedState === null ? Fh : Vh),
    (e = n(r, i)),
    or)
  ) {
    l = 0;
    do {
      if (((or = !1), (Tr = 0), 25 <= l)) throw Error(T(301));
      (l += 1),
        (oe = ie = null),
        (t.updateQueue = null),
        (di.current = bh),
        (e = n(r, i));
    } while (or);
  }
  if (
    ((di.current = ji),
    (t = ie !== null && ie.next !== null),
    (Zt = 0),
    (oe = ie = Q = null),
    (Di = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function zo() {
  var e = Tr !== 0;
  return (Tr = 0), e;
}
function nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (Q.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function Ye() {
  if (ie === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = oe === null ? Q.memoizedState : oe.next;
  if (t !== null) (oe = t), (ie = e);
  else {
    if (e === null) throw Error(T(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      oe === null ? (Q.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function Cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jl(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = ie,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = l.next), (l.next = s);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var a = (s = null),
      o = null,
      c = l;
    do {
      var f = c.lane;
      if ((Zt & f) === f)
        o !== null &&
          (o = o.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var p = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        o === null ? ((a = o = p), (s = r)) : (o = o.next = p),
          (Q.lanes |= f),
          (Jt |= f);
      }
      c = c.next;
    } while (c !== null && c !== l);
    o === null ? (s = r) : (o.next = a),
      et(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = o),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (Q.lanes |= l), (Jt |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $l(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== i);
    et(l, t.memoizedState) || (ke = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Wc() {}
function Gc(e, t) {
  var n = Q,
    r = Ye(),
    i = t(),
    l = !et(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (ke = !0)),
    (r = r.queue),
    Ro(Xc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      kr(9, Qc.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(T(349));
    Zt & 30 || Yc(n, t, i);
  }
  return i;
}
function Yc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Qc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Kc(t) && qc(e);
}
function Xc(e, t, n) {
  return n(function () {
    Kc(t) && qc(e);
  });
}
function Kc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function qc(e) {
  var t = vt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function Ha(e) {
  var t = nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $h.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function kr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Zc() {
  return Ye().memoizedState;
}
function fi(e, t, n, r) {
  var i = nt();
  (Q.flags |= e),
    (i.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function nl(e, t, n, r) {
  var i = Ye();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ie !== null) {
    var s = ie.memoizedState;
    if (((l = s.destroy), r !== null && Io(r, s.deps))) {
      i.memoizedState = kr(t, n, l, r);
      return;
    }
  }
  (Q.flags |= e), (i.memoizedState = kr(1 | t, n, l, r));
}
function Wa(e, t) {
  return fi(8390656, 8, e, t);
}
function Ro(e, t) {
  return nl(2048, 8, e, t);
}
function Jc(e, t) {
  return nl(4, 2, e, t);
}
function ed(e, t) {
  return nl(4, 4, e, t);
}
function td(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function nd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), nl(4, 4, td.bind(null, t, e), n)
  );
}
function Ao() {}
function rd(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Io(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function id(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Io(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ld(e, t, n) {
  return Zt & 21
    ? (et(n, t) || ((n = ac()), (Q.lanes |= n), (Jt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
}
function Dh(e, t) {
  var n = V;
  (V = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Dl.transition;
  Dl.transition = {};
  try {
    e(!1), t();
  } finally {
    (V = n), (Dl.transition = r);
  }
}
function sd() {
  return Ye().memoizedState;
}
function jh(e, t, n) {
  var r = zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    od(e))
  )
    ad(t, n);
  else if (((n = $c(e, t, n, r)), n !== null)) {
    var i = xe();
    Je(n, e, r, i), ud(n, t, r);
  }
}
function $h(e, t, n) {
  var r = zt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (od(e)) ad(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = l(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), et(a, s))) {
          var o = t.interleaved;
          o === null
            ? ((i.next = i), Co(t))
            : ((i.next = o.next), (o.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = $c(e, t, i, r)),
      n !== null && ((i = xe()), Je(n, e, r, i), ud(n, t, r));
  }
}
function od(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function ad(e, t) {
  or = Di = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ud(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fo(e, n);
  }
}
var ji = {
    readContext: Ge,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  Fh = {
    readContext: Ge,
    useCallback: function (e, t) {
      return (nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ge,
    useEffect: Wa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fi(4194308, 4, td.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return fi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = jh.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ha,
    useDebugValue: Ao,
    useDeferredValue: function (e) {
      return (nt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ha(!1),
        t = e[0];
      return (e = Dh.bind(null, e[1])), (nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = nt();
      if (W) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(T(349));
        Zt & 30 || Yc(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        Wa(Xc.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        kr(9, Qc.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = nt(),
        t = ae.identifierPrefix;
      if (W) {
        var n = ft,
          r = dt;
        (n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Tr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ah++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Vh = {
    readContext: Ge,
    useCallback: rd,
    useContext: Ge,
    useEffect: Ro,
    useImperativeHandle: nd,
    useInsertionEffect: Jc,
    useLayoutEffect: ed,
    useMemo: id,
    useReducer: jl,
    useRef: Zc,
    useState: function () {
      return jl(Cr);
    },
    useDebugValue: Ao,
    useDeferredValue: function (e) {
      var t = Ye();
      return ld(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = jl(Cr)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: Wc,
    useSyncExternalStore: Gc,
    useId: sd,
    unstable_isNewReconciler: !1,
  },
  bh = {
    readContext: Ge,
    useCallback: rd,
    useContext: Ge,
    useEffect: Ro,
    useImperativeHandle: nd,
    useInsertionEffect: Jc,
    useLayoutEffect: ed,
    useMemo: id,
    useReducer: $l,
    useRef: Zc,
    useState: function () {
      return $l(Cr);
    },
    useDebugValue: Ao,
    useDeferredValue: function (e) {
      var t = Ye();
      return ie === null ? (t.memoizedState = e) : ld(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Cr)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: Wc,
    useSyncExternalStore: Gc,
    useId: sd,
    unstable_isNewReconciler: !1,
  };
function zn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += mp(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Fl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Is(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Bh = typeof WeakMap == "function" ? WeakMap : Map;
function cd(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Fi || ((Fi = !0), (bs = r)), Is(e, t);
    }),
    n
  );
}
function dd(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Is(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Is(e, t),
          typeof r != "function" &&
            (Nt === null ? (Nt = new Set([this])) : Nt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Ga(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Bh();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = nm.bind(null, e, t, n)), t.then(e, e));
}
function Ya(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Qa(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = pt(-1, 1)), (t.tag = 2), It(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Uh = yt.ReactCurrentOwner,
  ke = !1;
function Se(e, t, n, r) {
  t.child = e === null ? Uc(t, null, n, r) : In(t, e.child, n, r);
}
function Xa(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    Tn(t, i),
    (r = No(e, t, n, r, l, i)),
    (n = zo()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        gt(e, t, i))
      : (W && n && So(t), (t.flags |= 1), Se(e, t, r, i), t.child)
  );
}
function Ka(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Uo(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), fd(e, t, l, r, i))
      : ((e = vi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : wr), n(s, r) && e.ref === t.ref)
    )
      return gt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Rt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fd(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (wr(l, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (ke = !0);
      else return (t.lanes = e.lanes), gt(e, t, i);
  }
  return Ns(e, t, n, r, i);
}
function pd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Sn, ze),
        (ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(Sn, ze),
          (ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        B(Sn, ze),
        (ze |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Sn, ze),
      (ze |= r);
  return Se(e, t, i, n), t.child;
}
function hd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ns(e, t, n, r, i) {
  var l = Le(n) ? Kt : ve.current;
  return (
    (l = Ln(t, l)),
    Tn(t, i),
    (n = No(e, t, n, r, l, i)),
    (r = zo()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        gt(e, t, i))
      : (W && r && So(t), (t.flags |= 1), Se(e, t, n, i), t.child)
  );
}
function qa(e, t, n, r, i) {
  if (Le(n)) {
    var l = !0;
    Li(t);
  } else l = !1;
  if ((Tn(t, i), t.stateNode === null))
    pi(e, t), bc(t, n, r), Ms(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var o = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ge(c))
      : ((c = Le(n) ? Kt : ve.current), (c = Ln(t, c)));
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || o !== c) && Ba(t, s, r, c)),
      (xt = !1);
    var m = t.memoizedState;
    (s.state = m),
      Ri(t, r, s, i),
      (o = t.memoizedState),
      a !== r || m !== o || Oe.current || xt
        ? (typeof f == "function" && (Ls(t, n, f, r), (o = t.memoizedState)),
          (a = xt || ba(t, n, a, r, m, o, c))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = o)),
          (s.props = r),
          (s.state = o),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Fc(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Xe(t.type, a)),
      (s.props = c),
      (p = t.pendingProps),
      (m = s.context),
      (o = n.contextType),
      typeof o == "object" && o !== null
        ? (o = Ge(o))
        : ((o = Le(n) ? Kt : ve.current), (o = Ln(t, o)));
    var v = n.getDerivedStateFromProps;
    (f =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== p || m !== o) && Ba(t, s, r, o)),
      (xt = !1),
      (m = t.memoizedState),
      (s.state = m),
      Ri(t, r, s, i);
    var g = t.memoizedState;
    a !== p || m !== g || Oe.current || xt
      ? (typeof v == "function" && (Ls(t, n, v, r), (g = t.memoizedState)),
        (c = xt || ba(t, n, c, r, m, g, o) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, o),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, o)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = o),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return zs(e, t, n, r, l, i);
}
function zs(e, t, n, r, i, l) {
  hd(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Da(t, n, !1), gt(e, t, l);
  (r = t.stateNode), (Uh.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = In(t, e.child, null, l)), (t.child = In(t, null, a, l)))
      : Se(e, t, a, l),
    (t.memoizedState = r.state),
    i && Da(t, n, !0),
    t.child
  );
}
function md(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Aa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Aa(e, t.context, !1),
    Oo(e, t.containerInfo);
}
function Za(e, t, n, r, i) {
  return Mn(), Eo(i), (t.flags |= 256), Se(e, t, n, r), t.child;
}
var Rs = { dehydrated: null, treeContext: null, retryLane: 0 };
function As(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vd(e, t, n) {
  var r = t.pendingProps,
    i = Y.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    B(Y, i & 1),
    e === null)
  )
    return (
      ks(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = ll(s, r, 0, null)),
              (e = Xt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = As(n)),
              (t.memoizedState = Rs),
              e)
            : Do(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Hh(e, t, s, r, a, i, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var o = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = o),
          (t.deletions = null))
        : ((r = Rt(i, o)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (l = Rt(a, l)) : ((l = Xt(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? As(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Rs),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Rt(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Do(e, t) {
  return (
    (t = ll({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Jr(e, t, n, r) {
  return (
    r !== null && Eo(r),
    In(t, e.child, null, n),
    (e = Do(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Hh(e, t, n, r, i, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Fl(Error(T(422)))), Jr(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = ll({ mode: "visible", children: r.children }, i, 0, null)),
        (l = Xt(l, i, s, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && In(t, e.child, null, s),
        (t.child.memoizedState = As(s)),
        (t.memoizedState = Rs),
        l);
  if (!(t.mode & 1)) return Jr(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(T(419))), (r = Fl(l, r, void 0)), Jr(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), ke || a)) {
    if (((r = ae), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), vt(e, i), Je(r, e, i, -1));
    }
    return Bo(), (r = Fl(Error(T(421)))), Jr(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = rm.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ae = Mt(i.nextSibling)),
      (De = t),
      (W = !0),
      (qe = null),
      e !== null &&
        ((Be[Ue++] = dt),
        (Be[Ue++] = ft),
        (Be[Ue++] = qt),
        (dt = e.id),
        (ft = e.overflow),
        (qt = t)),
      (t = Do(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ja(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Os(e.return, t, n);
}
function Vl(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function gd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((Se(e, t, r.children, n), (r = Y.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ja(e, n, t);
        else if (e.tag === 19) Ja(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((B(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ai(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Vl(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ai(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Vl(t, !0, n, null, l);
        break;
      case "together":
        Vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function pi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function gt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Jt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Rt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Rt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Wh(e, t, n) {
  switch (t.tag) {
    case 3:
      md(t), Mn();
      break;
    case 5:
      Hc(t);
      break;
    case 1:
      Le(t.type) && Li(t);
      break;
    case 4:
      Oo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      B(Ni, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? vd(e, t, n)
          : (B(Y, Y.current & 1),
            (e = gt(e, t, n)),
            e !== null ? e.sibling : null);
      B(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return gd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        B(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), pd(e, t, n);
  }
  return gt(e, t, n);
}
var yd, Ds, wd, Sd;
yd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ds = function () {};
wd = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Yt(st.current);
    var l = null;
    switch (n) {
      case "input":
        (i = is(e, i)), (r = is(e, r)), (l = []);
        break;
      case "select":
        (i = X({}, i, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = os(e, i)), (r = os(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ki);
    }
    us(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (fr.hasOwnProperty(c)
              ? l || (l = [])
              : (l = l || []).push(c, null));
    for (c in r) {
      var o = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && o !== a && (o != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (o && o.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in o)
              o.hasOwnProperty(s) &&
                a[s] !== o[s] &&
                (n || (n = {}), (n[s] = o[s]));
          } else n || (l || (l = []), l.push(c, n)), (n = o);
        else
          c === "dangerouslySetInnerHTML"
            ? ((o = o ? o.__html : void 0),
              (a = a ? a.__html : void 0),
              o != null && a !== o && (l = l || []).push(c, o))
            : c === "children"
            ? (typeof o != "string" && typeof o != "number") ||
              (l = l || []).push(c, "" + o)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (fr.hasOwnProperty(c)
                ? (o != null && c === "onScroll" && U("scroll", e),
                  l || a === o || (l = []))
                : (l = l || []).push(c, o));
    }
    n && (l = l || []).push("style", n);
    var c = l;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Sd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Gn(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Gh(e, t, n) {
  var r = t.pendingProps;
  switch ((xo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return he(t), null;
    case 1:
      return Le(t.type) && Oi(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Nn(),
        H(Oe),
        H(ve),
        Mo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (Hs(qe), (qe = null)))),
        Ds(e, t),
        he(t),
        null
      );
    case 5:
      Lo(t);
      var i = Yt(Pr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wd(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return he(t), null;
        }
        if (((e = Yt(st.current)), qr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[rt] = t), (r[Er] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < er.length; i++) U(er[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              aa(r, l), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              ca(r, l), U("invalid", r);
          }
          us(n, l), (i = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Kr(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Kr(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : fr.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              Br(r), ua(r, l, !0);
              break;
            case "textarea":
              Br(r), da(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = ki);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Yu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[rt] = t),
            (e[Er] = r),
            yd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = cs(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < er.length; i++) U(er[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                aa(e, r), (i = is(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = X({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                ca(e, r), (i = os(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            us(n, i), (a = i);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var o = a[l];
                l === "style"
                  ? Ku(e, o)
                  : l === "dangerouslySetInnerHTML"
                  ? ((o = o ? o.__html : void 0), o != null && Qu(e, o))
                  : l === "children"
                  ? typeof o == "string"
                    ? (n !== "textarea" || o !== "") && pr(e, o)
                    : typeof o == "number" && pr(e, "" + o)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (fr.hasOwnProperty(l)
                      ? o != null && l === "onScroll" && U("scroll", e)
                      : o != null && lo(e, l, o, s));
              }
            switch (n) {
              case "input":
                Br(e), ua(e, r, !1);
                break;
              case "textarea":
                Br(e), da(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + At(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? xn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      xn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ki);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) Sd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = Yt(Pr.current)), Yt(st.current), qr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[rt] = t),
            (l = r.nodeValue !== n) && ((e = De), e !== null))
          )
            switch (e.tag) {
              case 3:
                Kr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Kr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[rt] = t),
            (t.stateNode = r);
      }
      return he(t), null;
    case 13:
      if (
        (H(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Ae !== null && t.mode & 1 && !(t.flags & 128))
          jc(), Mn(), (t.flags |= 98560), (l = !1);
        else if (((l = qr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(T(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(T(317));
            l[rt] = t;
          } else
            Mn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (l = !1);
        } else qe !== null && (Hs(qe), (qe = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? le === 0 && (le = 3) : Bo())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Nn(), Ds(e, t), e === null && Sr(t.stateNode.containerInfo), he(t), null
      );
    case 10:
      return To(t.type._context), he(t), null;
    case 17:
      return Le(t.type) && Oi(), he(t), null;
    case 19:
      if ((H(Y), (l = t.memoizedState), l === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) Gn(l, !1);
        else {
          if (le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ai(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Gn(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            J() > Rn &&
            ((t.flags |= 128), (r = !0), Gn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ai(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Gn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !W)
            )
              return he(t), null;
          } else
            2 * J() - l.renderingStartTime > Rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Gn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = J()),
          (t.sibling = null),
          (n = Y.current),
          B(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        bo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ze & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function Yh(e, t) {
  switch ((xo(t), t.tag)) {
    case 1:
      return (
        Le(t.type) && Oi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Nn(),
        H(Oe),
        H(ve),
        Mo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Lo(t), null;
    case 13:
      if ((H(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        Mn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(Y), null;
    case 4:
      return Nn(), null;
    case 10:
      return To(t.type._context), null;
    case 22:
    case 23:
      return bo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ei = !1,
  me = !1,
  Qh = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function js(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var eu = !1;
function Xh(e, t) {
  if (((Ss = Pi), (e = Pc()), wo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            o = -1,
            c = 0,
            f = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (i !== 0 && p.nodeType !== 3) || (a = s + i),
                p !== l || (r !== 0 && p.nodeType !== 3) || (o = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (m = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++c === i && (a = s),
                m === l && ++f === r && (o = s),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = v;
          }
          n = a === -1 || o === -1 ? null : { start: a, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xs = { focusedElem: e, selectionRange: n }, Pi = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps,
                    _ = g.memoizedState,
                    u = t.stateNode,
                    d = u.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Xe(t.type, w),
                      _
                    );
                  u.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (y) {
          K(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (g = eu), (eu = !1), g;
}
function ar(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && js(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function rl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function $s(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function xd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rt], delete t[Er], delete t[Ps], delete t[Ih], delete t[Nh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ed(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ed(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ki));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fs(e, t, n), e = e.sibling; e !== null; ) Fs(e, t, n), (e = e.sibling);
}
function Vs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vs(e, t, n), e = e.sibling; e !== null; ) Vs(e, t, n), (e = e.sibling);
}
var ce = null,
  Ke = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; ) _d(e, t, n), (n = n.sibling);
}
function _d(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(Xi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || wn(n, t);
    case 6:
      var r = ce,
        i = Ke;
      (ce = null),
        wt(e, t, n),
        (ce = r),
        (Ke = i),
        ce !== null &&
          (Ke
            ? ((e = ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null &&
        (Ke
          ? ((e = ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? zl(e.parentNode, n)
              : e.nodeType === 1 && zl(e, n),
            gr(e))
          : zl(ce, n.stateNode));
      break;
    case 4:
      (r = ce),
        (i = Ke),
        (ce = n.stateNode.containerInfo),
        (Ke = !0),
        wt(e, t, n),
        (ce = r),
        (Ke = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            s = l.destroy;
          (l = l.tag),
            s !== void 0 && (l & 2 || l & 4) && js(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          K(n, t, a);
        }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), wt(e, t, n), (me = r))
        : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function nu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qh()),
      t.forEach(function (r) {
        var i = im.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ce = a.stateNode), (Ke = !1);
              break e;
            case 3:
              (ce = a.stateNode.containerInfo), (Ke = !0);
              break e;
            case 4:
              (ce = a.stateNode.containerInfo), (Ke = !0);
              break e;
          }
          a = a.return;
        }
        if (ce === null) throw Error(T(160));
        _d(l, s, i), (ce = null), (Ke = !1);
        var o = i.alternate;
        o !== null && (o.return = null), (i.return = null);
      } catch (c) {
        K(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pd(t, e), (t = t.sibling);
}
function Pd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), tt(e), r & 4)) {
        try {
          ar(3, e, e.return), rl(3, e);
        } catch (w) {
          K(e, e.return, w);
        }
        try {
          ar(5, e, e.return);
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 1:
      Qe(t, e), tt(e), r & 512 && n !== null && wn(n, n.return);
      break;
    case 5:
      if (
        (Qe(t, e),
        tt(e),
        r & 512 && n !== null && wn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          pr(i, "");
        } catch (w) {
          K(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          a = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && Wu(i, l),
              cs(a, s);
            var c = cs(a, l);
            for (s = 0; s < o.length; s += 2) {
              var f = o[s],
                p = o[s + 1];
              f === "style"
                ? Ku(i, p)
                : f === "dangerouslySetInnerHTML"
                ? Qu(i, p)
                : f === "children"
                ? pr(i, p)
                : lo(i, f, p, c);
            }
            switch (a) {
              case "input":
                ls(i, l);
                break;
              case "textarea":
                Gu(i, l);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null
                  ? xn(i, !!l.multiple, v, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? xn(i, !!l.multiple, l.defaultValue, !0)
                      : xn(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[Er] = l;
          } catch (w) {
            K(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          gr(t.containerInfo);
        } catch (w) {
          K(e, e.return, w);
        }
      break;
    case 4:
      Qe(t, e), tt(e);
      break;
    case 13:
      Qe(t, e),
        tt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Fo = J())),
        r & 4 && nu(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (c = me) || f), Qe(t, e), (me = c)) : Qe(t, e),
        tt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && e.mode & 1)
        )
          for (z = e, f = e.child; f !== null; ) {
            for (p = z = f; z !== null; ) {
              switch (((m = z), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ar(4, m, m.return);
                  break;
                case 1:
                  wn(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (w) {
                      K(r, n, w);
                    }
                  }
                  break;
                case 5:
                  wn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    iu(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (z = v)) : iu(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                (i = p.stateNode),
                  c
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = p.stateNode),
                      (o = p.memoizedProps.style),
                      (s =
                        o != null && o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (a.style.display = Xu("display", s)));
              } catch (w) {
                K(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (w) {
                K(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), (p = p.return);
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Qe(t, e), tt(e), r & 4 && nu(e);
      break;
    case 21:
      break;
    default:
      Qe(t, e), tt(e);
  }
}
function tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ed(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (pr(i, ""), (r.flags &= -33));
          var l = tu(e);
          Vs(e, l, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = tu(e);
          Fs(e, a, s);
          break;
        default:
          throw Error(T(161));
      }
    } catch (o) {
      K(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Kh(e, t, n) {
  (z = e), Td(e);
}
function Td(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var i = z,
      l = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || ei;
      if (!s) {
        var a = i.alternate,
          o = (a !== null && a.memoizedState !== null) || me;
        a = ei;
        var c = me;
        if (((ei = s), (me = o) && !c))
          for (z = i; z !== null; )
            (s = z),
              (o = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? lu(i)
                : o !== null
                ? ((o.return = s), (z = o))
                : lu(i);
        for (; l !== null; ) (z = l), Td(l), (l = l.sibling);
        (z = i), (ei = a), (me = c);
      }
      ru(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (z = l)) : ru(e);
  }
}
function ru(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || rl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Xe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Va(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Va(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var o = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o.autoFocus && n.focus();
                    break;
                  case "img":
                    o.src && (n.src = o.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var f = c.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && gr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        me || (t.flags & 512 && $s(t));
      } catch (m) {
        K(t, t.return, m);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function iu(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function lu(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            rl(4, t);
          } catch (o) {
            K(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              K(t, i, o);
            }
          }
          var l = t.return;
          try {
            $s(t);
          } catch (o) {
            K(t, l, o);
          }
          break;
        case 5:
          var s = t.return;
          try {
            $s(t);
          } catch (o) {
            K(t, s, o);
          }
      }
    } catch (o) {
      K(t, t.return, o);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var qh = Math.ceil,
  $i = yt.ReactCurrentDispatcher,
  jo = yt.ReactCurrentOwner,
  We = yt.ReactCurrentBatchConfig,
  F = 0,
  ae = null,
  ne = null,
  de = 0,
  ze = 0,
  Sn = $t(0),
  le = 0,
  Or = null,
  Jt = 0,
  il = 0,
  $o = 0,
  ur = null,
  Ce = null,
  Fo = 0,
  Rn = 1 / 0,
  ut = null,
  Fi = !1,
  bs = null,
  Nt = null,
  ti = !1,
  Tt = null,
  Vi = 0,
  cr = 0,
  Bs = null,
  hi = -1,
  mi = 0;
function xe() {
  return F & 6 ? J() : hi !== -1 ? hi : (hi = J());
}
function zt(e) {
  return e.mode & 1
    ? F & 2 && de !== 0
      ? de & -de
      : Rh.transition !== null
      ? (mi === 0 && (mi = ac()), mi)
      : ((e = V),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mc(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < cr) throw ((cr = 0), (Bs = null), Error(T(185)));
  Ir(e, n, r),
    (!(F & 2) || e !== ae) &&
      (e === ae && (!(F & 2) && (il |= n), le === 4 && _t(e, de)),
      Me(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Rn = J() + 500), el && Ft()));
}
function Me(e, t) {
  var n = e.callbackNode;
  Rp(e, t);
  var r = _i(e, e === ae ? de : 0);
  if (r === 0)
    n !== null && ha(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ha(n), t === 1))
      e.tag === 0 ? zh(su.bind(null, e)) : Rc(su.bind(null, e)),
        Lh(function () {
          !(F & 6) && Ft();
        }),
        (n = null);
    else {
      switch (uc(r)) {
        case 1:
          n = co;
          break;
        case 4:
          n = sc;
          break;
        case 16:
          n = Ei;
          break;
        case 536870912:
          n = oc;
          break;
        default:
          n = Ei;
      }
      n = zd(n, Cd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Cd(e, t) {
  if (((hi = -1), (mi = 0), F & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (Cn() && e.callbackNode !== n) return null;
  var r = _i(e, e === ae ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = bi(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var l = Od();
    (ae !== e || de !== t) && ((ut = null), (Rn = J() + 500), Qt(e, t));
    do
      try {
        em();
        break;
      } catch (a) {
        kd(e, a);
      }
    while (!0);
    Po(),
      ($i.current = l),
      (F = i),
      ne !== null ? (t = 0) : ((ae = null), (de = 0), (t = le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ms(e)), i !== 0 && ((r = i), (t = Us(e, i)))), t === 1)
    )
      throw ((n = Or), Qt(e, 0), _t(e, r), Me(e, J()), n);
    if (t === 6) _t(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Zh(i) &&
          ((t = bi(e, r)),
          t === 2 && ((l = ms(e)), l !== 0 && ((r = l), (t = Us(e, l)))),
          t === 1))
      )
        throw ((n = Or), Qt(e, 0), _t(e, r), Me(e, J()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Ht(e, Ce, ut);
          break;
        case 3:
          if (
            (_t(e, r), (r & 130023424) === r && ((t = Fo + 500 - J()), 10 < t))
          ) {
            if (_i(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = _s(Ht.bind(null, e, Ce, ut), t);
            break;
          }
          Ht(e, Ce, ut);
          break;
        case 4:
          if ((_t(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ze(r);
            (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
          }
          if (
            ((r = i),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * qh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = _s(Ht.bind(null, e, Ce, ut), r);
            break;
          }
          Ht(e, Ce, ut);
          break;
        case 5:
          Ht(e, Ce, ut);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Me(e, J()), e.callbackNode === n ? Cd.bind(null, e) : null;
}
function Us(e, t) {
  var n = ur;
  return (
    e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256),
    (e = bi(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && Hs(t)),
    e
  );
}
function Hs(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function Zh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!et(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function _t(e, t) {
  for (
    t &= ~$o,
      t &= ~il,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function su(e) {
  if (F & 6) throw Error(T(327));
  Cn();
  var t = _i(e, 0);
  if (!(t & 1)) return Me(e, J()), null;
  var n = bi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ms(e);
    r !== 0 && ((t = r), (n = Us(e, r)));
  }
  if (n === 1) throw ((n = Or), Qt(e, 0), _t(e, t), Me(e, J()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ht(e, Ce, ut),
    Me(e, J()),
    null
  );
}
function Vo(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Rn = J() + 500), el && Ft());
  }
}
function en(e) {
  Tt !== null && Tt.tag === 0 && !(F & 6) && Cn();
  var t = F;
  F |= 1;
  var n = We.transition,
    r = V;
  try {
    if (((We.transition = null), (V = 1), e)) return e();
  } finally {
    (V = r), (We.transition = n), (F = t), !(F & 6) && Ft();
  }
}
function bo() {
  (ze = Sn.current), H(Sn);
}
function Qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Oh(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((xo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Oi();
          break;
        case 3:
          Nn(), H(Oe), H(ve), Mo();
          break;
        case 5:
          Lo(r);
          break;
        case 4:
          Nn();
          break;
        case 13:
          H(Y);
          break;
        case 19:
          H(Y);
          break;
        case 10:
          To(r.type._context);
          break;
        case 22:
        case 23:
          bo();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (ne = e = Rt(e.current, null)),
    (de = ze = t),
    (le = 0),
    (Or = null),
    ($o = il = Jt = 0),
    (Ce = ur = null),
    Gt !== null)
  ) {
    for (t = 0; t < Gt.length; t++)
      if (((n = Gt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Gt = null;
  }
  return e;
}
function kd(e, t) {
  do {
    var n = ne;
    try {
      if ((Po(), (di.current = ji), Di)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Di = !1;
      }
      if (
        ((Zt = 0),
        (oe = ie = Q = null),
        (or = !1),
        (Tr = 0),
        (jo.current = null),
        n === null || n.return === null)
      ) {
        (le = 1), (Or = t), (ne = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          a = n,
          o = t;
        if (
          ((t = de),
          (a.flags |= 32768),
          o !== null && typeof o == "object" && typeof o.then == "function")
        ) {
          var c = o,
            f = a,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = f.alternate;
            m
              ? ((f.updateQueue = m.updateQueue),
                (f.memoizedState = m.memoizedState),
                (f.lanes = m.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var v = Ya(s);
          if (v !== null) {
            (v.flags &= -257),
              Qa(v, s, a, l, t),
              v.mode & 1 && Ga(l, c, t),
              (t = v),
              (o = c);
            var g = t.updateQueue;
            if (g === null) {
              var w = new Set();
              w.add(o), (t.updateQueue = w);
            } else g.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              Ga(l, c, t), Bo();
              break e;
            }
            o = Error(T(426));
          }
        } else if (W && a.mode & 1) {
          var _ = Ya(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              Qa(_, s, a, l, t),
              Eo(zn(o, a));
            break e;
          }
        }
        (l = o = zn(o, a)),
          le !== 4 && (le = 2),
          ur === null ? (ur = [l]) : ur.push(l),
          (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var u = cd(l, o, t);
              Fa(l, u);
              break e;
            case 1:
              a = o;
              var d = l.type,
                h = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Nt === null || !Nt.has(h))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var y = dd(l, a, t);
                Fa(l, y);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Md(n);
    } catch (S) {
      (t = S), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Od() {
  var e = $i.current;
  return ($i.current = ji), e === null ? ji : e;
}
function Bo() {
  (le === 0 || le === 3 || le === 2) && (le = 4),
    ae === null || (!(Jt & 268435455) && !(il & 268435455)) || _t(ae, de);
}
function bi(e, t) {
  var n = F;
  F |= 2;
  var r = Od();
  (ae !== e || de !== t) && ((ut = null), Qt(e, t));
  do
    try {
      Jh();
      break;
    } catch (i) {
      kd(e, i);
    }
  while (!0);
  if ((Po(), (F = n), ($i.current = r), ne !== null)) throw Error(T(261));
  return (ae = null), (de = 0), le;
}
function Jh() {
  for (; ne !== null; ) Ld(ne);
}
function em() {
  for (; ne !== null && !Tp(); ) Ld(ne);
}
function Ld(e) {
  var t = Nd(e.alternate, e, ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? Md(e) : (ne = t),
    (jo.current = null);
}
function Md(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Yh(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (le = 6), (ne = null);
        return;
      }
    } else if (((n = Gh(n, t, ze)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Ht(e, t, n) {
  var r = V,
    i = We.transition;
  try {
    (We.transition = null), (V = 1), tm(e, t, n, r);
  } finally {
    (We.transition = i), (V = r);
  }
  return null;
}
function tm(e, t, n, r) {
  do Cn();
  while (Tt !== null);
  if (F & 6) throw Error(T(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Ap(e, l),
    e === ae && ((ne = ae = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ti ||
      ((ti = !0),
      zd(Ei, function () {
        return Cn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = We.transition), (We.transition = null);
    var s = V;
    V = 1;
    var a = F;
    (F |= 4),
      (jo.current = null),
      Xh(e, n),
      Pd(n, e),
      xh(xs),
      (Pi = !!Ss),
      (xs = Ss = null),
      (e.current = n),
      Kh(n),
      Cp(),
      (F = a),
      (V = s),
      (We.transition = l);
  } else e.current = n;
  if (
    (ti && ((ti = !1), (Tt = e), (Vi = i)),
    (l = e.pendingLanes),
    l === 0 && (Nt = null),
    Lp(n.stateNode),
    Me(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Fi) throw ((Fi = !1), (e = bs), (bs = null), e);
  return (
    Vi & 1 && e.tag !== 0 && Cn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Bs ? cr++ : ((cr = 0), (Bs = e))) : (cr = 0),
    Ft(),
    null
  );
}
function Cn() {
  if (Tt !== null) {
    var e = uc(Vi),
      t = We.transition,
      n = V;
    try {
      if (((We.transition = null), (V = 16 > e ? 16 : e), Tt === null))
        var r = !1;
      else {
        if (((e = Tt), (Tt = null), (Vi = 0), F & 6)) throw Error(T(331));
        var i = F;
        for (F |= 4, z = e.current; z !== null; ) {
          var l = z,
            s = l.child;
          if (z.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var o = 0; o < a.length; o++) {
                var c = a[o];
                for (z = c; z !== null; ) {
                  var f = z;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ar(8, f, l);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (z = p);
                  else
                    for (; z !== null; ) {
                      f = z;
                      var m = f.sibling,
                        v = f.return;
                      if ((xd(f), f === c)) {
                        z = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (z = m);
                        break;
                      }
                      z = v;
                    }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var _ = w.sibling;
                    (w.sibling = null), (w = _);
                  } while (w !== null);
                }
              }
              z = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (z = s);
          else
            e: for (; z !== null; ) {
              if (((l = z), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ar(9, l, l.return);
                }
              var u = l.sibling;
              if (u !== null) {
                (u.return = l.return), (z = u);
                break e;
              }
              z = l.return;
            }
        }
        var d = e.current;
        for (z = d; z !== null; ) {
          s = z;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (z = h);
          else
            e: for (s = d; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rl(9, a);
                  }
                } catch (S) {
                  K(a, a.return, S);
                }
              if (a === s) {
                z = null;
                break e;
              }
              var y = a.sibling;
              if (y !== null) {
                (y.return = a.return), (z = y);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((F = i), Ft(), lt && typeof lt.onPostCommitFiberRoot == "function")
        )
          try {
            lt.onPostCommitFiberRoot(Xi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (V = n), (We.transition = t);
    }
  }
  return !1;
}
function ou(e, t, n) {
  (t = zn(n, t)),
    (t = cd(e, t, 1)),
    (e = It(e, t, 1)),
    (t = xe()),
    e !== null && (Ir(e, 1, t), Me(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) ou(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ou(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Nt === null || !Nt.has(r)))
        ) {
          (e = zn(n, e)),
            (e = dd(t, e, 1)),
            (t = It(t, e, 1)),
            (e = xe()),
            t !== null && (Ir(t, 1, e), Me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function nm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (de & n) === n &&
      (le === 4 || (le === 3 && (de & 130023424) === de && 500 > J() - Fo)
        ? Qt(e, 0)
        : ($o |= n)),
    Me(e, t);
}
function Id(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Wr), (Wr <<= 1), !(Wr & 130023424) && (Wr = 4194304))
      : (t = 1));
  var n = xe();
  (e = vt(e, t)), e !== null && (Ir(e, t, n), Me(e, n));
}
function rm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Id(e, n);
}
function im(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Id(e, n);
}
var Nd;
Nd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Oe.current) ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), Wh(e, t, n);
      ke = !!(e.flags & 131072);
    }
  else (ke = !1), W && t.flags & 1048576 && Ac(t, Ii, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      pi(e, t), (e = t.pendingProps);
      var i = Ln(t, ve.current);
      Tn(t, n), (i = No(null, t, r, e, i, n));
      var l = zo();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Le(r) ? ((l = !0), Li(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ko(t),
            (i.updater = tl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ms(t, r, e, n),
            (t = zs(null, t, r, !0, l, n)))
          : ((t.tag = 0), W && l && So(t), Se(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (pi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = sm(r)),
          (e = Xe(r, e)),
          i)
        ) {
          case 0:
            t = Ns(null, t, r, e, n);
            break e;
          case 1:
            t = qa(null, t, r, e, n);
            break e;
          case 11:
            t = Xa(null, t, r, e, n);
            break e;
          case 14:
            t = Ka(null, t, r, Xe(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        Ns(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        qa(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((md(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          Fc(e, t),
          Ri(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = zn(Error(T(423)), t)), (t = Za(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = zn(Error(T(424)), t)), (t = Za(e, t, r, n, i));
            break e;
          } else
            for (
              Ae = Mt(t.stateNode.containerInfo.firstChild),
                De = t,
                W = !0,
                qe = null,
                n = Uc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Mn(), r === i)) {
            t = gt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Hc(t),
        e === null && ks(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Es(r, i) ? (s = null) : l !== null && Es(r, l) && (t.flags |= 32),
        hd(e, t),
        Se(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ks(t), null;
    case 13:
      return vd(e, t, n);
    case 4:
      return (
        Oo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = In(t, null, r, n)) : Se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        Xa(e, t, r, i, n)
      );
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (s = i.value),
          B(Ni, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (et(l.value, s)) {
            if (l.children === i.children && !Oe.current) {
              t = gt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                s = l.child;
                for (var o = a.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (l.tag === 1) {
                      (o = pt(-1, n & -n)), (o.tag = 2);
                      var c = l.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null
                          ? (o.next = o)
                          : ((o.next = f.next), (f.next = o)),
                          (c.pending = o);
                      }
                    }
                    (l.lanes |= n),
                      (o = l.alternate),
                      o !== null && (o.lanes |= n),
                      Os(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  o = o.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(T(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Os(s, n, t),
                  (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        Se(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Tn(t, n),
        (i = Ge(i)),
        (r = r(i)),
        (t.flags |= 1),
        Se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Xe(r, t.pendingProps)),
        (i = Xe(r.type, i)),
        Ka(e, t, r, i, n)
      );
    case 15:
      return fd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        pi(e, t),
        (t.tag = 1),
        Le(r) ? ((e = !0), Li(t)) : (e = !1),
        Tn(t, n),
        bc(t, r, i),
        Ms(t, r, i, n),
        zs(null, t, r, !0, e, n)
      );
    case 19:
      return gd(e, t, n);
    case 22:
      return pd(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function zd(e, t) {
  return lc(e, t);
}
function lm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function He(e, t, n, r) {
  return new lm(e, t, n, r);
}
function Uo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sm(e) {
  if (typeof e == "function") return Uo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === oo)) return 11;
    if (e === ao) return 14;
  }
  return 2;
}
function Rt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = He(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function vi(e, t, n, r, i, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) Uo(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case cn:
        return Xt(n.children, i, l, t);
      case so:
        (s = 8), (i |= 8);
        break;
      case es:
        return (
          (e = He(12, n, t, i | 2)), (e.elementType = es), (e.lanes = l), e
        );
      case ts:
        return (e = He(13, n, t, i)), (e.elementType = ts), (e.lanes = l), e;
      case ns:
        return (e = He(19, n, t, i)), (e.elementType = ns), (e.lanes = l), e;
      case Bu:
        return ll(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vu:
              s = 10;
              break e;
            case bu:
              s = 9;
              break e;
            case oo:
              s = 11;
              break e;
            case ao:
              s = 14;
              break e;
            case St:
              (s = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = He(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Xt(e, t, n, r) {
  return (e = He(7, e, r, t)), (e.lanes = n), e;
}
function ll(e, t, n, r) {
  return (
    (e = He(22, e, r, t)),
    (e.elementType = Bu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bl(e, t, n) {
  return (e = He(6, e, null, t)), (e.lanes = n), e;
}
function Bl(e, t, n) {
  return (
    (t = He(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function om(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = El(0)),
    (this.expirationTimes = El(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = El(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ho(e, t, n, r, i, l, s, a, o) {
  return (
    (e = new om(e, t, n, a, o)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = He(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ko(l),
    e
  );
}
function am(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: un,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Rd(e) {
  if (!e) return Dt;
  e = e._reactInternals;
  e: {
    if (rn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Le(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Le(n)) return zc(e, n, t);
  }
  return t;
}
function Ad(e, t, n, r, i, l, s, a, o) {
  return (
    (e = Ho(n, r, !0, e, i, l, s, a, o)),
    (e.context = Rd(null)),
    (n = e.current),
    (r = xe()),
    (i = zt(n)),
    (l = pt(r, i)),
    (l.callback = t ?? null),
    It(n, l, i),
    (e.current.lanes = i),
    Ir(e, i, r),
    Me(e, r),
    e
  );
}
function sl(e, t, n, r) {
  var i = t.current,
    l = xe(),
    s = zt(i);
  return (
    (n = Rd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pt(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = It(i, t, s)),
    e !== null && (Je(e, i, s, l), ci(e, i, s)),
    s
  );
}
function Bi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function au(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wo(e, t) {
  au(e, t), (e = e.alternate) && au(e, t);
}
function um() {
  return null;
}
var Dd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Go(e) {
  this._internalRoot = e;
}
ol.prototype.render = Go.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  sl(e, t, null, null);
};
ol.prototype.unmount = Go.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    en(function () {
      sl(null, e, null, null);
    }),
      (t[mt] = null);
  }
};
function ol(e) {
  this._internalRoot = e;
}
ol.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = fc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
    Et.splice(n, 0, e), n === 0 && hc(e);
  }
};
function Yo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function al(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function uu() {}
function cm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var c = Bi(s);
        l.call(c);
      };
    }
    var s = Ad(t, r, e, 0, null, !1, !1, "", uu);
    return (
      (e._reactRootContainer = s),
      (e[mt] = s.current),
      Sr(e.nodeType === 8 ? e.parentNode : e),
      en(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Bi(o);
      a.call(c);
    };
  }
  var o = Ho(e, 0, !1, null, null, !1, !1, "", uu);
  return (
    (e._reactRootContainer = o),
    (e[mt] = o.current),
    Sr(e.nodeType === 8 ? e.parentNode : e),
    en(function () {
      sl(t, o, n, r);
    }),
    o
  );
}
function ul(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var o = Bi(s);
        a.call(o);
      };
    }
    sl(t, s, e, i);
  } else s = cm(n, t, e, i, r);
  return Bi(s);
}
cc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Jn(t.pendingLanes);
        n !== 0 &&
          (fo(t, n | 1), Me(t, J()), !(F & 6) && ((Rn = J() + 500), Ft()));
      }
      break;
    case 13:
      en(function () {
        var r = vt(e, 1);
        if (r !== null) {
          var i = xe();
          Je(r, e, 1, i);
        }
      }),
        Wo(e, 1);
  }
};
po = function (e) {
  if (e.tag === 13) {
    var t = vt(e, 134217728);
    if (t !== null) {
      var n = xe();
      Je(t, e, 134217728, n);
    }
    Wo(e, 134217728);
  }
};
dc = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = vt(e, t);
    if (n !== null) {
      var r = xe();
      Je(n, e, t, r);
    }
    Wo(e, t);
  }
};
fc = function () {
  return V;
};
pc = function (e, t) {
  var n = V;
  try {
    return (V = e), t();
  } finally {
    V = n;
  }
};
fs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ls(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ji(r);
            if (!i) throw Error(T(90));
            Hu(r), ls(r, i);
          }
        }
      }
      break;
    case "textarea":
      Gu(e, n);
      break;
    case "select":
      (t = n.value), t != null && xn(e, !!n.multiple, t, !1);
  }
};
Ju = Vo;
ec = en;
var dm = { usingClientEntryPoint: !1, Events: [zr, hn, Ji, qu, Zu, Vo] },
  Yn = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  fm = {
    bundleType: Yn.bundleType,
    version: Yn.version,
    rendererPackageName: Yn.rendererPackageName,
    rendererConfig: Yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = rc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Yn.findFiberByHostInstance || um,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ni.isDisabled && ni.supportsFiber)
    try {
      (Xi = ni.inject(fm)), (lt = ni);
    } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dm;
$e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yo(t)) throw Error(T(200));
  return am(e, t, null, n);
};
$e.createRoot = function (e, t) {
  if (!Yo(e)) throw Error(T(299));
  var n = !1,
    r = "",
    i = Dd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ho(e, 1, !1, null, null, n, !1, r, i)),
    (e[mt] = t.current),
    Sr(e.nodeType === 8 ? e.parentNode : e),
    new Go(t)
  );
};
$e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = rc(t)), (e = e === null ? null : e.stateNode), e;
};
$e.flushSync = function (e) {
  return en(e);
};
$e.hydrate = function (e, t, n) {
  if (!al(t)) throw Error(T(200));
  return ul(null, e, t, !0, n);
};
$e.hydrateRoot = function (e, t, n) {
  if (!Yo(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    s = Dd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Ad(t, null, e, 1, n ?? null, i, !1, l, s)),
    (e[mt] = t.current),
    Sr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ol(t);
};
$e.render = function (e, t, n) {
  if (!al(t)) throw Error(T(200));
  return ul(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function (e) {
  if (!al(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (en(function () {
        ul(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mt] = null);
        });
      }),
      !0)
    : !1;
};
$e.unstable_batchedUpdates = Vo;
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!al(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return ul(e, t, n, !1, r);
};
$e.version = "18.2.0-next-9e3b772b8-20220608";
function jd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jd);
    } catch (e) {
      console.error(e);
    }
}
jd(), (Au.exports = $e);
var pm = Au.exports,
  cu = pm;
(Zl.createRoot = cu.createRoot), (Zl.hydrateRoot = cu.hydrateRoot);
let $d = "";
$d = window.location.origin + "/";
const ot = $d,
  hm = "modulepreload",
  mm = function (e) {
    return "/" + e;
  },
  du = {},
  Ne = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      const l = document.getElementsByTagName("link");
      i = Promise.all(
        n.map((s) => {
          if (((s = mm(s)), s in du)) return;
          du[s] = !0;
          const a = s.endsWith(".css"),
            o = a ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let p = l.length - 1; p >= 0; p--) {
              const m = l[p];
              if (m.href === s && (!a || m.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${s}"]${o}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = a ? "stylesheet" : hm),
            a || ((f.as = "script"), (f.crossOrigin = "")),
            (f.href = s),
            document.head.appendChild(f),
            a)
          )
            return new Promise((p, m) => {
              f.addEventListener("load", p),
                f.addEventListener("error", () =>
                  m(new Error(`Unable to preload CSS for ${s}`))
                );
            });
        })
      );
    }
    return i
      .then(() => t())
      .catch((l) => {
        const s = new Event("vite:preloadError", { cancelable: !0 });
        if (((s.payload = l), window.dispatchEvent(s), !s.defaultPrevented))
          throw l;
      });
  };
var vm = function (t, n, r) {
  var i = document.head || document.getElementsByTagName("head")[0],
    l = document.createElement("script");
  typeof n == "function" && ((r = n), (n = {})),
    (n = n || {}),
    (r = r || function () {}),
    (l.type = n.type || "text/javascript"),
    (l.charset = n.charset || "utf8"),
    (l.async = "async" in n ? !!n.async : !0),
    (l.src = t),
    n.attrs && gm(l, n.attrs),
    n.text && (l.text = "" + n.text);
  var s = "onload" in l ? fu : ym;
  s(l, r), l.onload || fu(l, r), i.appendChild(l);
};
function gm(e, t) {
  for (var n in t) e.setAttribute(n, t[n]);
}
function fu(e, t) {
  (e.onload = function () {
    (this.onerror = this.onload = null), t(null, e);
  }),
    (e.onerror = function () {
      (this.onerror = this.onload = null),
        t(new Error("Failed to load " + this.src), e);
    });
}
function ym(e, t) {
  e.onreadystatechange = function () {
    (this.readyState != "complete" && this.readyState != "loaded") ||
      ((this.onreadystatechange = null), t(null, e));
  };
}
var wm = function (t) {
  return Sm(t) && !xm(t);
};
function Sm(e) {
  return !!e && typeof e == "object";
}
function xm(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Pm(e);
}
var Em = typeof Symbol == "function" && Symbol.for,
  _m = Em ? Symbol.for("react.element") : 60103;
function Pm(e) {
  return e.$$typeof === _m;
}
function Tm(e) {
  return Array.isArray(e) ? [] : {};
}
function Lr(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? An(Tm(e), e, t) : e;
}
function Cm(e, t, n) {
  return e.concat(t).map(function (r) {
    return Lr(r, n);
  });
}
function km(e, t) {
  if (!t.customMerge) return An;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : An;
}
function Om(e) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.propertyIsEnumerable.call(e, t);
      })
    : [];
}
function pu(e) {
  return Object.keys(e).concat(Om(e));
}
function Fd(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Lm(e, t) {
  return (
    Fd(e, t) &&
    !(
      Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
    )
  );
}
function Mm(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      pu(e).forEach(function (i) {
        r[i] = Lr(e[i], n);
      }),
    pu(t).forEach(function (i) {
      Lm(e, i) ||
        (Fd(e, i) && n.isMergeableObject(t[i])
          ? (r[i] = km(i, n)(e[i], t[i], n))
          : (r[i] = Lr(t[i], n)));
    }),
    r
  );
}
function An(e, t, n) {
  (n = n || {}),
    (n.arrayMerge = n.arrayMerge || Cm),
    (n.isMergeableObject = n.isMergeableObject || wm),
    (n.cloneUnlessOtherwiseSpecified = Lr);
  var r = Array.isArray(t),
    i = Array.isArray(e),
    l = r === i;
  return l ? (r ? n.arrayMerge(e, t, n) : Mm(e, t, n)) : Lr(t, n);
}
An.all = function (t, n) {
  if (!Array.isArray(t)) throw new Error("first argument should be an array");
  return t.reduce(function (r, i) {
    return An(r, i, n);
  }, {});
};
var Im = An,
  Vd = Im,
  Nm = Object.create,
  cl = Object.defineProperty,
  zm = Object.getOwnPropertyDescriptor,
  Rm = Object.getOwnPropertyNames,
  Am = Object.getPrototypeOf,
  Dm = Object.prototype.hasOwnProperty,
  jm = (e, t) => {
    for (var n in t) cl(e, n, { get: t[n], enumerable: !0 });
  },
  bd = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of Rm(t))
        !Dm.call(e, i) &&
          i !== n &&
          cl(e, i, {
            get: () => t[i],
            enumerable: !(r = zm(t, i)) || r.enumerable,
          });
    return e;
  },
  Qo = (e, t, n) => (
    (n = e != null ? Nm(Am(e)) : {}),
    bd(
      t || !e || !e.__esModule
        ? cl(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  $m = (e) => bd(cl({}, "__esModule", { value: !0 }), e),
  Bd = {};
jm(Bd, {
  callPlayer: () => ev,
  getConfig: () => Zm,
  getSDK: () => qm,
  isBlobUrl: () => nv,
  isMediaStream: () => tv,
  lazy: () => Bm,
  omit: () => Jm,
  parseEndTime: () => Qm,
  parseStartTime: () => Ym,
  queryString: () => Km,
  randomString: () => Xm,
  supportsWebKitPresentationMode: () => rv,
});
var dl = $m(Bd),
  Fm = Qo(D),
  Vm = Qo(vm),
  bm = Qo(Vd);
const Bm = (e) =>
    Fm.default.lazy(async () => {
      const t = await e();
      return typeof t.default == "function" ? t : t.default;
    }),
  Um = /[?&#](?:start|t)=([0-9hms]+)/,
  Hm = /[?&#]end=([0-9hms]+)/,
  Ws = /(\d+)(h|m|s)/g,
  Wm = /^\d+$/;
function Ud(e, t) {
  if (e instanceof Array) return;
  const n = e.match(t);
  if (n) {
    const r = n[1];
    if (r.match(Ws)) return Gm(r);
    if (Wm.test(r)) return parseInt(r);
  }
}
function Gm(e) {
  let t = 0,
    n = Ws.exec(e);
  for (; n !== null; ) {
    const [, r, i] = n;
    i === "h" && (t += parseInt(r, 10) * 60 * 60),
      i === "m" && (t += parseInt(r, 10) * 60),
      i === "s" && (t += parseInt(r, 10)),
      (n = Ws.exec(e));
  }
  return t;
}
function Ym(e) {
  return Ud(e, Um);
}
function Qm(e) {
  return Ud(e, Hm);
}
function Xm() {
  return Math.random().toString(36).substr(2, 5);
}
function Km(e) {
  return Object.keys(e)
    .map((t) => `${t}=${e[t]}`)
    .join("&");
}
function Ul(e) {
  return window[e]
    ? window[e]
    : window.exports && window.exports[e]
    ? window.exports[e]
    : window.module && window.module.exports && window.module.exports[e]
    ? window.module.exports[e]
    : null;
}
const sn = {},
  qm = function (t, n, r = null, i = () => !0, l = Vm.default) {
    const s = Ul(n);
    return s && i(s)
      ? Promise.resolve(s)
      : new Promise((a, o) => {
          if (sn[t]) {
            sn[t].push({ resolve: a, reject: o });
            return;
          }
          sn[t] = [{ resolve: a, reject: o }];
          const c = (f) => {
            sn[t].forEach((p) => p.resolve(f));
          };
          if (r) {
            const f = window[r];
            window[r] = function () {
              f && f(), c(Ul(n));
            };
          }
          l(t, (f) => {
            f
              ? (sn[t].forEach((p) => p.reject(f)), (sn[t] = null))
              : r || c(Ul(n));
          });
        });
  };
function Zm(e, t) {
  return (0, bm.default)(t.config, e.config);
}
function Jm(e, ...t) {
  const n = [].concat(...t),
    r = {},
    i = Object.keys(e);
  for (const l of i) n.indexOf(l) === -1 && (r[l] = e[l]);
  return r;
}
function ev(e, ...t) {
  if (!this.player || !this.player[e]) {
    let n = `ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;
    return (
      this.player
        ? this.player[e] || (n += "The method was not available")
        : (n += "The player was not available"),
      console.warn(n, "font-weight: bold", ""),
      null
    );
  }
  return this.player[e](...t);
}
function tv(e) {
  return (
    typeof window < "u" &&
    typeof window.MediaStream < "u" &&
    e instanceof window.MediaStream
  );
}
function nv(e) {
  return /^blob:/.test(e);
}
function rv(e = document.createElement("video")) {
  const t = /iPhone|iPod/.test(navigator.userAgent) === !1;
  return (
    e.webkitSupportsPresentationMode &&
    typeof e.webkitSetPresentationMode == "function" &&
    t
  );
}
var Xo = Object.defineProperty,
  iv = Object.getOwnPropertyDescriptor,
  lv = Object.getOwnPropertyNames,
  sv = Object.prototype.hasOwnProperty,
  ov = (e, t) => {
    for (var n in t) Xo(e, n, { get: t[n], enumerable: !0 });
  },
  av = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of lv(t))
        !sv.call(e, i) &&
          i !== n &&
          Xo(e, i, {
            get: () => t[i],
            enumerable: !(r = iv(t, i)) || r.enumerable,
          });
    return e;
  },
  uv = (e) => av(Xo({}, "__esModule", { value: !0 }), e),
  Hd = {};
ov(Hd, {
  AUDIO_EXTENSIONS: () => Ko,
  DASH_EXTENSIONS: () => rf,
  FLV_EXTENSIONS: () => lf,
  HLS_EXTENSIONS: () => Zo,
  MATCH_URL_DAILYMOTION: () => Jd,
  MATCH_URL_FACEBOOK: () => Yd,
  MATCH_URL_FACEBOOK_WATCH: () => Qd,
  MATCH_URL_KALTURA: () => nf,
  MATCH_URL_MIXCLOUD: () => ef,
  MATCH_URL_SOUNDCLOUD: () => Wd,
  MATCH_URL_STREAMABLE: () => Xd,
  MATCH_URL_TWITCH_CHANNEL: () => Zd,
  MATCH_URL_TWITCH_VIDEO: () => qd,
  MATCH_URL_VIDYARD: () => tf,
  MATCH_URL_VIMEO: () => Gd,
  MATCH_URL_WISTIA: () => Kd,
  MATCH_URL_YOUTUBE: () => Gs,
  VIDEO_EXTENSIONS: () => qo,
  canPlay: () => dv,
});
var cv = uv(Hd),
  hu = dl;
const Gs =
    /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
  Wd = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/,
  Gd = /vimeo\.com\/(?!progressive_redirect).+/,
  Yd =
    /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,
  Qd = /^https?:\/\/fb\.watch\/.+$/,
  Xd = /streamable\.com\/([a-z0-9]+)$/,
  Kd = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
  qd = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
  Zd = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,
  Jd =
    /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,
  ef = /mixcloud\.com\/([^/]+\/[^/]+)/,
  tf = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,
  nf =
    /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,
  Ko = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
  qo = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
  Zo = /\.(m3u8)($|\?)/i,
  rf = /\.(mpd)($|\?)/i,
  lf = /\.(flv)($|\?)/i,
  Ys = (e) => {
    if (e instanceof Array) {
      for (const t of e)
        if ((typeof t == "string" && Ys(t)) || Ys(t.src)) return !0;
      return !1;
    }
    return (0, hu.isMediaStream)(e) || (0, hu.isBlobUrl)(e)
      ? !0
      : Ko.test(e) || qo.test(e) || Zo.test(e) || rf.test(e) || lf.test(e);
  },
  dv = {
    youtube: (e) =>
      e instanceof Array ? e.every((t) => Gs.test(t)) : Gs.test(e),
    soundcloud: (e) => Wd.test(e) && !Ko.test(e),
    vimeo: (e) => Gd.test(e) && !qo.test(e) && !Zo.test(e),
    facebook: (e) => Yd.test(e) || Qd.test(e),
    streamable: (e) => Xd.test(e),
    wistia: (e) => Kd.test(e),
    twitch: (e) => qd.test(e) || Zd.test(e),
    dailymotion: (e) => Jd.test(e),
    mixcloud: (e) => ef.test(e),
    vidyard: (e) => tf.test(e),
    kaltura: (e) => nf.test(e),
    file: Ys,
  };
var Jo = Object.defineProperty,
  fv = Object.getOwnPropertyDescriptor,
  pv = Object.getOwnPropertyNames,
  hv = Object.prototype.hasOwnProperty,
  mv = (e, t) => {
    for (var n in t) Jo(e, n, { get: t[n], enumerable: !0 });
  },
  vv = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of pv(t))
        !hv.call(e, i) &&
          i !== n &&
          Jo(e, i, {
            get: () => t[i],
            enumerable: !(r = fv(t, i)) || r.enumerable,
          });
    return e;
  },
  gv = (e) => vv(Jo({}, "__esModule", { value: !0 }), e),
  sf = {};
mv(sf, { default: () => wv });
var yv = gv(sf),
  Ie = dl,
  Te = cv,
  wv = [
    {
      key: "youtube",
      name: "YouTube",
      canPlay: Te.canPlay.youtube,
      lazyPlayer: (0, Ie.lazy)(() =>
        Ne(
          () => import("./YouTube-DdHj8wX4.js").then((e) => e.Y),
          __vite__mapDeps([])
        )
      ),
    },
    {
      key: "soundcloud",
      name: "SoundCloud",
      canPlay: Te.canPlay.soundcloud,
      lazyPlayer: (0, Ie.lazy)(() =>
        Ne(
          () => import("./SoundCloud-BreQr1Ru.js").then((e) => e.S),
          __vite__mapDeps([])
        )
      ),
    },
    {
      key: "vimeo",
      name: "Vimeo",
      canPlay: Te.canPlay.vimeo,
      lazyPlayer: (0, Ie.lazy)(() =>
        Ne(
          () => import("./Vimeo-xguvI49S.js").then((e) => e.V),
          __vite__mapDeps([])
        )
      ),
    },
    {
      key: "facebook",
      name: "Facebook",
      canPlay: Te.canPlay.facebook,
      lazyPlayer: (0, Ie.lazy)(() =>
        Ne(
          () => import("./Facebook-DhQ0AO0_.js").then((e) => e.F),
          __vite__mapDeps([])
        )
      ),
    },
    {
      key: "streamable",
      name: "Streamable",
      canPlay: Te.canPlay.streamable,
      lazyPlayer: (0, Ie.lazy)(() =>
        Ne(
          () => import("./Streamable-CHBEOe7E.js").then((e) => e.S),
          __vite__mapDeps([])
        )
      ),
    },
    {
      key: "wistia",
      name: "Wistia",
      canPlay: Te.canPlay.wistia,
      lazyPlayer: (0, Ie.lazy)(() =>
        Ne(
          () => import("./Wistia-DqJ8MmtL.js").then((e) => e.W),
          __vite__mapDeps([])
        )
      ),
    },
    {
      key: "twitch",
      name: "Twitch",
      canPlay: Te.canPlay.twitch,
      lazyPlayer: (0, Ie.lazy)(() =>
        Ne(
          () => import("./Twitch-C0iR2UAH.js").then((e) => e.T),
          __vite__mapDeps([])
        )
      ),
    },
    {
      key: "dailymotion",
      name: "DailyMotion",
      canPlay: Te.canPlay.dailymotion,
      lazyPlayer: (0, Ie.lazy)(() =>
        Ne(
          () => import("./DailyMotion-TNiUvAzA.js").then((e) => e.D),
          __vite__mapDeps([])
        )
      ),
    },
    {
      key: "mixcloud",
      name: "Mixcloud",
      canPlay: Te.canPlay.mixcloud,
      lazyPlayer: (0, Ie.lazy)(() =>
        Ne(
          () => import("./Mixcloud-BqT__g5a.js").then((e) => e.M),
          __vite__mapDeps([])
        )
      ),
    },
    {
      key: "vidyard",
      name: "Vidyard",
      canPlay: Te.canPlay.vidyard,
      lazyPlayer: (0, Ie.lazy)(() =>
        Ne(
          () => import("./Vidyard-C8N0w7xF.js").then((e) => e.V),
          __vite__mapDeps([])
        )
      ),
    },
    {
      key: "kaltura",
      name: "Kaltura",
      canPlay: Te.canPlay.kaltura,
      lazyPlayer: (0, Ie.lazy)(() =>
        Ne(
          () => import("./Kaltura-CaGDhp6H.js").then((e) => e.K),
          __vite__mapDeps([])
        )
      ),
    },
    {
      key: "file",
      name: "FilePlayer",
      canPlay: Te.canPlay.file,
      canEnablePIP: (e) =>
        Te.canPlay.file(e) &&
        (document.pictureInPictureEnabled ||
          (0, Ie.supportsWebKitPresentationMode)()) &&
        !Te.AUDIO_EXTENSIONS.test(e),
      lazyPlayer: (0, Ie.lazy)(() =>
        Ne(
          () => import("./FilePlayer-CNL7ib5c.js").then((e) => e.F),
          __vite__mapDeps([])
        )
      ),
    },
  ],
  mu =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function Sv(e, t) {
  return !!(e === t || (mu(e) && mu(t)));
}
function xv(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!Sv(e[n], t[n])) return !1;
  return !0;
}
function Ev(e, t) {
  t === void 0 && (t = xv);
  var n,
    r = [],
    i,
    l = !1;
  function s() {
    for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
    return (
      (l && n === this && t(a, r)) ||
        ((i = e.apply(this, a)), (l = !0), (n = this), (r = a)),
      i
    );
  }
  return s;
}
const _v = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ev },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pv = Bf(_v);
var Tv = typeof Element < "u",
  Cv = typeof Map == "function",
  kv = typeof Set == "function",
  Ov = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function gi(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!gi(e[r], t[r])) return !1;
      return !0;
    }
    var l;
    if (Cv && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (l = e.entries(); !(r = l.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (l = e.entries(); !(r = l.next()).done; )
        if (!gi(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (kv && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (l = e.entries(); !(r = l.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (Ov && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
    if (Tv && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") &&
          e.$$typeof
        ) &&
        !gi(e[i[r]], t[i[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var of = function (t, n) {
    try {
      return gi(t, n);
    } catch (r) {
      if ((r.message || "").match(/stack|recursion/i))
        return (
          console.warn("react-fast-compare cannot handle circular refs"), !1
        );
      throw r;
    }
  },
  af = { exports: {} },
  Lv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Mv = Lv,
  Iv = Mv;
function uf() {}
function cf() {}
cf.resetWarningCache = uf;
var Nv = function () {
  function e(r, i, l, s, a, o) {
    if (o !== Iv) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: cf,
    resetWarningCache: uf,
  };
  return (n.PropTypes = n), n;
};
af.exports = Nv();
var zv = af.exports,
  Rv = Object.create,
  fl = Object.defineProperty,
  Av = Object.getOwnPropertyDescriptor,
  Dv = Object.getOwnPropertyNames,
  jv = Object.getPrototypeOf,
  $v = Object.prototype.hasOwnProperty,
  Fv = (e, t) => {
    for (var n in t) fl(e, n, { get: t[n], enumerable: !0 });
  },
  df = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of Dv(t))
        !$v.call(e, i) &&
          i !== n &&
          fl(e, i, {
            get: () => t[i],
            enumerable: !(r = Av(t, i)) || r.enumerable,
          });
    return e;
  },
  Vv = (e, t, n) => (
    (n = e != null ? Rv(jv(e)) : {}),
    df(
      t || !e || !e.__esModule
        ? fl(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  bv = (e) => df(fl({}, "__esModule", { value: !0 }), e),
  ff = {};
Fv(ff, { defaultProps: () => Hv, propTypes: () => Uv });
var pf = bv(ff),
  Bv = Vv(zv);
const {
    string: ge,
    bool: ye,
    number: on,
    array: Hl,
    oneOfType: Qn,
    shape: be,
    object: we,
    func: re,
    node: vu,
  } = Bv.default,
  Uv = {
    url: Qn([ge, Hl, we]),
    playing: ye,
    loop: ye,
    controls: ye,
    volume: on,
    muted: ye,
    playbackRate: on,
    width: Qn([ge, on]),
    height: Qn([ge, on]),
    style: we,
    progressInterval: on,
    playsinline: ye,
    pip: ye,
    stopOnUnmount: ye,
    light: Qn([ye, ge, we]),
    playIcon: vu,
    previewTabIndex: on,
    fallback: vu,
    oEmbedUrl: ge,
    wrapper: Qn([ge, re, be({ render: re.isRequired })]),
    config: be({
      soundcloud: be({ options: we }),
      youtube: be({ playerVars: we, embedOptions: we, onUnstarted: re }),
      facebook: be({ appId: ge, version: ge, playerId: ge, attributes: we }),
      dailymotion: be({ params: we }),
      vimeo: be({ playerOptions: we, title: ge }),
      file: be({
        attributes: we,
        tracks: Hl,
        forceVideo: ye,
        forceAudio: ye,
        forceHLS: ye,
        forceSafariHLS: ye,
        forceDisableHls: ye,
        forceDASH: ye,
        forceFLV: ye,
        hlsOptions: we,
        hlsVersion: ge,
        dashVersion: ge,
        flvVersion: ge,
      }),
      wistia: be({ options: we, playerId: ge, customControls: Hl }),
      mixcloud: be({ options: we }),
      twitch: be({ options: we, playerId: ge }),
      vidyard: be({ options: we }),
    }),
    onReady: re,
    onStart: re,
    onPlay: re,
    onPause: re,
    onBuffer: re,
    onBufferEnd: re,
    onEnded: re,
    onError: re,
    onDuration: re,
    onSeek: re,
    onPlaybackRateChange: re,
    onPlaybackQualityChange: re,
    onProgress: re,
    onClickPreview: re,
    onEnablePIP: re,
    onDisablePIP: re,
  },
  ue = () => {},
  Hv = {
    playing: !1,
    loop: !1,
    controls: !1,
    volume: null,
    muted: !1,
    playbackRate: 1,
    width: "640px",
    height: "360px",
    style: {},
    progressInterval: 1e3,
    playsinline: !1,
    pip: !1,
    stopOnUnmount: !0,
    light: !1,
    fallback: null,
    wrapper: "div",
    previewTabIndex: 0,
    oEmbedUrl: "https://noembed.com/embed?url={url}",
    config: {
      soundcloud: {
        options: {
          visual: !0,
          buying: !1,
          liking: !1,
          download: !1,
          sharing: !1,
          show_comments: !1,
          show_playcount: !1,
        },
      },
      youtube: {
        playerVars: {
          playsinline: 1,
          showinfo: 0,
          rel: 0,
          iv_load_policy: 3,
          modestbranding: 1,
        },
        embedOptions: {},
        onUnstarted: ue,
      },
      facebook: {
        appId: "1309697205772819",
        version: "v3.3",
        playerId: null,
        attributes: {},
      },
      dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
      vimeo: {
        playerOptions: { autopause: !1, byline: !1, portrait: !1, title: !1 },
        title: null,
      },
      file: {
        attributes: {},
        tracks: [],
        forceVideo: !1,
        forceAudio: !1,
        forceHLS: !1,
        forceDASH: !1,
        forceFLV: !1,
        hlsOptions: {},
        hlsVersion: "1.1.4",
        dashVersion: "3.1.3",
        flvVersion: "1.5.0",
        forceDisableHls: !1,
      },
      wistia: { options: {}, playerId: null, customControls: null },
      mixcloud: { options: { hide_cover: 1 } },
      twitch: { options: {}, playerId: null },
      vidyard: { options: {} },
    },
    onReady: ue,
    onStart: ue,
    onPlay: ue,
    onPause: ue,
    onBuffer: ue,
    onBufferEnd: ue,
    onEnded: ue,
    onError: ue,
    onDuration: ue,
    onSeek: ue,
    onPlaybackRateChange: ue,
    onPlaybackQualityChange: ue,
    onProgress: ue,
    onClickPreview: ue,
    onEnablePIP: ue,
    onDisablePIP: ue,
  };
var Wv = Object.create,
  Ar = Object.defineProperty,
  Gv = Object.getOwnPropertyDescriptor,
  Yv = Object.getOwnPropertyNames,
  Qv = Object.getPrototypeOf,
  Xv = Object.prototype.hasOwnProperty,
  Kv = (e, t, n) =>
    t in e
      ? Ar(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  qv = (e, t) => {
    for (var n in t) Ar(e, n, { get: t[n], enumerable: !0 });
  },
  hf = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of Yv(t))
        !Xv.call(e, i) &&
          i !== n &&
          Ar(e, i, {
            get: () => t[i],
            enumerable: !(r = Gv(t, i)) || r.enumerable,
          });
    return e;
  },
  mf = (e, t, n) => (
    (n = e != null ? Wv(Qv(e)) : {}),
    hf(
      t || !e || !e.__esModule
        ? Ar(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  Zv = (e) => hf(Ar({}, "__esModule", { value: !0 }), e),
  Z = (e, t, n) => (Kv(e, typeof t != "symbol" ? t + "" : t, n), n),
  vf = {};
qv(vf, { default: () => pl });
var Jv = Zv(vf),
  gu = mf(D),
  eg = mf(of),
  gf = pf,
  tg = dl;
const ng = 5e3;
class pl extends gu.Component {
  constructor() {
    super(...arguments),
      Z(this, "mounted", !1),
      Z(this, "isReady", !1),
      Z(this, "isPlaying", !1),
      Z(this, "isLoading", !0),
      Z(this, "loadOnReady", null),
      Z(this, "startOnPlay", !0),
      Z(this, "seekOnPlay", null),
      Z(this, "onDurationCalled", !1),
      Z(this, "handlePlayerMount", (t) => {
        if (this.player) {
          this.progress();
          return;
        }
        (this.player = t), this.player.load(this.props.url), this.progress();
      }),
      Z(this, "getInternalPlayer", (t) =>
        this.player ? this.player[t] : null
      ),
      Z(this, "progress", () => {
        if (this.props.url && this.player && this.isReady) {
          const t = this.getCurrentTime() || 0,
            n = this.getSecondsLoaded(),
            r = this.getDuration();
          if (r) {
            const i = { playedSeconds: t, played: t / r };
            n !== null && ((i.loadedSeconds = n), (i.loaded = n / r)),
              (i.playedSeconds !== this.prevPlayed ||
                i.loadedSeconds !== this.prevLoaded) &&
                this.props.onProgress(i),
              (this.prevPlayed = i.playedSeconds),
              (this.prevLoaded = i.loadedSeconds);
          }
        }
        this.progressTimeout = setTimeout(
          this.progress,
          this.props.progressFrequency || this.props.progressInterval
        );
      }),
      Z(this, "handleReady", () => {
        if (!this.mounted) return;
        (this.isReady = !0), (this.isLoading = !1);
        const { onReady: t, playing: n, volume: r, muted: i } = this.props;
        t(),
          !i && r !== null && this.player.setVolume(r),
          this.loadOnReady
            ? (this.player.load(this.loadOnReady, !0),
              (this.loadOnReady = null))
            : n && this.player.play(),
          this.handleDurationCheck();
      }),
      Z(this, "handlePlay", () => {
        (this.isPlaying = !0), (this.isLoading = !1);
        const { onStart: t, onPlay: n, playbackRate: r } = this.props;
        this.startOnPlay &&
          (this.player.setPlaybackRate &&
            r !== 1 &&
            this.player.setPlaybackRate(r),
          t(),
          (this.startOnPlay = !1)),
          n(),
          this.seekOnPlay &&
            (this.seekTo(this.seekOnPlay), (this.seekOnPlay = null)),
          this.handleDurationCheck();
      }),
      Z(this, "handlePause", (t) => {
        (this.isPlaying = !1), this.isLoading || this.props.onPause(t);
      }),
      Z(this, "handleEnded", () => {
        const { activePlayer: t, loop: n, onEnded: r } = this.props;
        t.loopOnEnded && n && this.seekTo(0), n || ((this.isPlaying = !1), r());
      }),
      Z(this, "handleError", (...t) => {
        (this.isLoading = !1), this.props.onError(...t);
      }),
      Z(this, "handleDurationCheck", () => {
        clearTimeout(this.durationCheckTimeout);
        const t = this.getDuration();
        t
          ? this.onDurationCalled ||
            (this.props.onDuration(t), (this.onDurationCalled = !0))
          : (this.durationCheckTimeout = setTimeout(
              this.handleDurationCheck,
              100
            ));
      }),
      Z(this, "handleLoaded", () => {
        this.isLoading = !1;
      });
  }
  componentDidMount() {
    this.mounted = !0;
  }
  componentWillUnmount() {
    clearTimeout(this.progressTimeout),
      clearTimeout(this.durationCheckTimeout),
      this.isReady &&
        this.props.stopOnUnmount &&
        (this.player.stop(),
        this.player.disablePIP && this.player.disablePIP()),
      (this.mounted = !1);
  }
  componentDidUpdate(t) {
    if (!this.player) return;
    const {
      url: n,
      playing: r,
      volume: i,
      muted: l,
      playbackRate: s,
      pip: a,
      loop: o,
      activePlayer: c,
      disableDeferredLoading: f,
    } = this.props;
    if (!(0, eg.default)(t.url, n)) {
      if (this.isLoading && !c.forceLoad && !f && !(0, tg.isMediaStream)(n)) {
        console.warn(
          `ReactPlayer: the attempt to load ${n} is being deferred until the player has loaded`
        ),
          (this.loadOnReady = n);
        return;
      }
      (this.isLoading = !0),
        (this.startOnPlay = !0),
        (this.onDurationCalled = !1),
        this.player.load(n, this.isReady);
    }
    !t.playing && r && !this.isPlaying && this.player.play(),
      t.playing && !r && this.isPlaying && this.player.pause(),
      !t.pip && a && this.player.enablePIP && this.player.enablePIP(),
      t.pip && !a && this.player.disablePIP && this.player.disablePIP(),
      t.volume !== i && i !== null && this.player.setVolume(i),
      t.muted !== l &&
        (l
          ? this.player.mute()
          : (this.player.unmute(),
            i !== null && setTimeout(() => this.player.setVolume(i)))),
      t.playbackRate !== s &&
        this.player.setPlaybackRate &&
        this.player.setPlaybackRate(s),
      t.loop !== o && this.player.setLoop && this.player.setLoop(o);
  }
  getDuration() {
    return this.isReady ? this.player.getDuration() : null;
  }
  getCurrentTime() {
    return this.isReady ? this.player.getCurrentTime() : null;
  }
  getSecondsLoaded() {
    return this.isReady ? this.player.getSecondsLoaded() : null;
  }
  seekTo(t, n, r) {
    if (!this.isReady) {
      t !== 0 &&
        ((this.seekOnPlay = t),
        setTimeout(() => {
          this.seekOnPlay = null;
        }, ng));
      return;
    }
    if (n ? n === "fraction" : t > 0 && t < 1) {
      const l = this.player.getDuration();
      if (!l) {
        console.warn(
          "ReactPlayer: could not seek using fraction – duration not yet available"
        );
        return;
      }
      this.player.seekTo(l * t, r);
      return;
    }
    this.player.seekTo(t, r);
  }
  render() {
    const t = this.props.activePlayer;
    return t
      ? gu.default.createElement(t, {
          ...this.props,
          onMount: this.handlePlayerMount,
          onReady: this.handleReady,
          onPlay: this.handlePlay,
          onPause: this.handlePause,
          onEnded: this.handleEnded,
          onLoaded: this.handleLoaded,
          onError: this.handleError,
        })
      : null;
  }
}
Z(pl, "displayName", "Player");
Z(pl, "propTypes", gf.propTypes);
Z(pl, "defaultProps", gf.defaultProps);
var rg = Object.create,
  Dr = Object.defineProperty,
  ig = Object.getOwnPropertyDescriptor,
  lg = Object.getOwnPropertyNames,
  sg = Object.getPrototypeOf,
  og = Object.prototype.hasOwnProperty,
  ag = (e, t, n) =>
    t in e
      ? Dr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ug = (e, t) => {
    for (var n in t) Dr(e, n, { get: t[n], enumerable: !0 });
  },
  yf = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of lg(t))
        !og.call(e, i) &&
          i !== n &&
          Dr(e, i, {
            get: () => t[i],
            enumerable: !(r = ig(t, i)) || r.enumerable,
          });
    return e;
  },
  jr = (e, t, n) => (
    (n = e != null ? rg(sg(e)) : {}),
    yf(
      t || !e || !e.__esModule
        ? Dr(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  cg = (e) => yf(Dr({}, "__esModule", { value: !0 }), e),
  q = (e, t, n) => (ag(e, typeof t != "symbol" ? t + "" : t, n), n),
  wf = {};
ug(wf, { createReactPlayer: () => wg });
var dg = cg(wf),
  an = jr(D),
  fg = jr(Vd),
  Wl = jr(Pv),
  yu = jr(of),
  tr = pf,
  Sf = dl,
  pg = jr(Jv);
const hg = (0, Sf.lazy)(() =>
    Ne(
      () => import("./Preview-BaYDKWsr.js").then((e) => e.P),
      __vite__mapDeps([])
    )
  ),
  mg = typeof window < "u" && window.document,
  vg = typeof vl < "u" && vl.window && vl.window.document,
  gg = Object.keys(tr.propTypes),
  yg = mg || vg ? an.Suspense : () => null,
  Xn = [],
  wg = (e, t) => {
    var n;
    return (
      (n = class extends an.Component {
        constructor() {
          super(...arguments),
            q(this, "state", { showPreview: !!this.props.light }),
            q(this, "references", {
              wrapper: (r) => {
                this.wrapper = r;
              },
              player: (r) => {
                this.player = r;
              },
            }),
            q(this, "handleClickPreview", (r) => {
              this.setState({ showPreview: !1 }), this.props.onClickPreview(r);
            }),
            q(this, "showPreview", () => {
              this.setState({ showPreview: !0 });
            }),
            q(this, "getDuration", () =>
              this.player ? this.player.getDuration() : null
            ),
            q(this, "getCurrentTime", () =>
              this.player ? this.player.getCurrentTime() : null
            ),
            q(this, "getSecondsLoaded", () =>
              this.player ? this.player.getSecondsLoaded() : null
            ),
            q(this, "getInternalPlayer", (r = "player") =>
              this.player ? this.player.getInternalPlayer(r) : null
            ),
            q(this, "seekTo", (r, i, l) => {
              if (!this.player) return null;
              this.player.seekTo(r, i, l);
            }),
            q(this, "handleReady", () => {
              this.props.onReady(this);
            }),
            q(
              this,
              "getActivePlayer",
              (0, Wl.default)((r) => {
                for (const i of [...Xn, ...e]) if (i.canPlay(r)) return i;
                return t || null;
              })
            ),
            q(
              this,
              "getConfig",
              (0, Wl.default)((r, i) => {
                const { config: l } = this.props;
                return fg.default.all([
                  tr.defaultProps.config,
                  tr.defaultProps.config[i] || {},
                  l,
                  l[i] || {},
                ]);
              })
            ),
            q(
              this,
              "getAttributes",
              (0, Wl.default)((r) => (0, Sf.omit)(this.props, gg))
            ),
            q(this, "renderActivePlayer", (r) => {
              if (!r) return null;
              const i = this.getActivePlayer(r);
              if (!i) return null;
              const l = this.getConfig(r, i.key);
              return an.default.createElement(pg.default, {
                ...this.props,
                key: i.key,
                ref: this.references.player,
                config: l,
                activePlayer: i.lazyPlayer || i,
                onReady: this.handleReady,
              });
            });
        }
        shouldComponentUpdate(r, i) {
          return (
            !(0, yu.default)(this.props, r) || !(0, yu.default)(this.state, i)
          );
        }
        componentDidUpdate(r) {
          const { light: i } = this.props;
          !r.light && i && this.setState({ showPreview: !0 }),
            r.light && !i && this.setState({ showPreview: !1 });
        }
        renderPreview(r) {
          if (!r) return null;
          const {
            light: i,
            playIcon: l,
            previewTabIndex: s,
            oEmbedUrl: a,
          } = this.props;
          return an.default.createElement(hg, {
            url: r,
            light: i,
            playIcon: l,
            previewTabIndex: s,
            oEmbedUrl: a,
            onClick: this.handleClickPreview,
          });
        }
        render() {
          const {
              url: r,
              style: i,
              width: l,
              height: s,
              fallback: a,
              wrapper: o,
            } = this.props,
            { showPreview: c } = this.state,
            f = this.getAttributes(r),
            p = typeof o == "string" ? this.references.wrapper : void 0;
          return an.default.createElement(
            o,
            { ref: p, style: { ...i, width: l, height: s }, ...f },
            an.default.createElement(
              yg,
              { fallback: a },
              c ? this.renderPreview(r) : this.renderActivePlayer(r)
            )
          );
        }
      }),
      q(n, "displayName", "ReactPlayer"),
      q(n, "propTypes", tr.propTypes),
      q(n, "defaultProps", tr.defaultProps),
      q(n, "addCustomPlayer", (r) => {
        Xn.push(r);
      }),
      q(n, "removeCustomPlayers", () => {
        Xn.length = 0;
      }),
      q(n, "canPlay", (r) => {
        for (const i of [...Xn, ...e]) if (i.canPlay(r)) return !0;
        return !1;
      }),
      q(n, "canEnablePIP", (r) => {
        for (const i of [...Xn, ...e])
          if (i.canEnablePIP && i.canEnablePIP(r)) return !0;
        return !1;
      }),
      n
    );
  };
var Sg = Object.create,
  hl = Object.defineProperty,
  xg = Object.getOwnPropertyDescriptor,
  Eg = Object.getOwnPropertyNames,
  _g = Object.getPrototypeOf,
  Pg = Object.prototype.hasOwnProperty,
  Tg = (e, t) => {
    for (var n in t) hl(e, n, { get: t[n], enumerable: !0 });
  },
  xf = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of Eg(t))
        !Pg.call(e, i) &&
          i !== n &&
          hl(e, i, {
            get: () => t[i],
            enumerable: !(r = xg(t, i)) || r.enumerable,
          });
    return e;
  },
  Cg = (e, t, n) => (
    (n = e != null ? Sg(_g(e)) : {}),
    xf(
      t || !e || !e.__esModule
        ? hl(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  kg = (e) => xf(hl({}, "__esModule", { value: !0 }), e),
  Ef = {};
Tg(Ef, { default: () => Ig });
var Og = kg(Ef),
  Qs = Cg(yv),
  Lg = dg;
const Mg = Qs.default[Qs.default.length - 1];
var Ig = (0, Lg.createReactPlayer)(Qs.default, Mg);
const Ng = Pu(Og);
function zg({ selected: e }) {
  return C.jsx("div", {
    className: "player-wrapper rounded-md",
    children: C.jsx(Ng, {
      url: `${e.filesDirectory}video/${e.videoFile}`,
      height: "100%",
      width: "100%",
      controls: !0,
    }),
  });
}
const _f = ({ src: e, selected: t }) => {
  const n = D.useRef(null);
  return (
    D.useEffect(() => {
      const r = n.current,
        i = r.getContext("2d"),
        l = new Image(),
        { original_image: s, x1: a, y1: o, width: c, height: f } = e;
      (l.src = t.filesDirectory + "images/" + s),
        (l.onload = () => {
          (r.width = c),
            (r.height = f),
            i.clearRect(0, 0, r.width, r.height),
            i.drawImage(l, a, o, c, f, 0, 0, c, f);
        });
    }, [e]),
    C.jsx("canvas", { className: "h-full", ref: n })
  );
};
function wu(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function ea(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : wu(t[n]) &&
          wu(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          ea(e[n], t[n]);
    });
}
const Pf = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Fn() {
  const e = typeof document < "u" ? document : {};
  return ea(e, Pf), e;
}
const Rg = {
  document: Pf,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Ve() {
  const e = typeof window < "u" ? window : {};
  return ea(e, Rg), e;
}
function Ag(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function Dg(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Xs(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function Ui() {
  return Date.now();
}
function jg(e) {
  const t = Ve();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function $g(e, t) {
  t === void 0 && (t = "x");
  const n = Ve();
  let r, i, l;
  const s = jg(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = s.transform || s.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (l = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((l =
          s.MozTransform ||
          s.OTransform ||
          s.MsTransform ||
          s.msTransform ||
          s.transform ||
          s
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = l.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = l.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = l.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function ri(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Fg(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Re() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !Fg(r)) {
      const i = Object.keys(Object(r)).filter((l) => t.indexOf(l) < 0);
      for (let l = 0, s = i.length; l < s; l += 1) {
        const a = i[l],
          o = Object.getOwnPropertyDescriptor(r, a);
        o !== void 0 &&
          o.enumerable &&
          (ri(e[a]) && ri(r[a])
            ? r[a].__swiper__
              ? (e[a] = r[a])
              : Re(e[a], r[a])
            : !ri(e[a]) && ri(r[a])
            ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : Re(e[a], r[a]))
            : (e[a] = r[a]));
      }
    }
  }
  return e;
}
function ii(e, t, n) {
  e.style.setProperty(t, n);
}
function Tf(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = Ve(),
    l = -t.translate;
  let s = null,
    a;
  const o = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const c = n > l ? "next" : "prev",
    f = (m, v) => (c === "next" && m >= v) || (c === "prev" && m <= v),
    p = () => {
      (a = new Date().getTime()), s === null && (s = a);
      const m = Math.max(Math.min((a - s) / o, 1), 0),
        v = 0.5 - Math.cos(m * Math.PI) / 2;
      let g = l + v * (n - l);
      if ((f(g, n) && (g = n), t.wrapperEl.scrollTo({ [r]: g }), f(g, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: g });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(p);
    };
  p();
}
function it(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function Hi(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Wi(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : Ag(t))), n;
}
function Vg(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function bg(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function Ct(e, t) {
  return Ve().getComputedStyle(e, null).getPropertyValue(t);
}
function Gi(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Cf(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function Ks(e, t, n) {
  const r = Ve();
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
        )
    : e.offsetWidth;
}
function se(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
let Gl;
function Bg() {
  const e = Ve(),
    t = Fn();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function kf() {
  return Gl || (Gl = Bg()), Gl;
}
let Yl;
function Ug(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = kf(),
    r = Ve(),
    i = r.navigator.platform,
    l = t || r.navigator.userAgent,
    s = { ios: !1, android: !1 },
    a = r.screen.width,
    o = r.screen.height,
    c = l.match(/(Android);?[\s\/]+([\d.]+)?/);
  let f = l.match(/(iPad).*OS\s([\d_]+)/);
  const p = l.match(/(iPod)(.*OS\s([\d_]+))?/),
    m = !f && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = i === "Win32";
  let g = i === "MacIntel";
  const w = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !f &&
      g &&
      n.touch &&
      w.indexOf(`${a}x${o}`) >= 0 &&
      ((f = l.match(/(Version)\/([\d.]+)/)),
      f || (f = [0, 1, "13_0_0"]),
      (g = !1)),
    c && !v && ((s.os = "android"), (s.android = !0)),
    (f || m || p) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
function Of(e) {
  return e === void 0 && (e = {}), Yl || (Yl = Ug(e)), Yl;
}
let Ql;
function Hg() {
  const e = Ve(),
    t = Of();
  let n = !1;
  function r() {
    const a = e.navigator.userAgent.toLowerCase();
    return (
      a.indexOf("safari") >= 0 &&
      a.indexOf("chrome") < 0 &&
      a.indexOf("android") < 0
    );
  }
  if (r()) {
    const a = String(e.navigator.userAgent);
    if (a.includes("Version/")) {
      const [o, c] = a
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((f) => Number(f));
      n = o < 16 || (o === 16 && c < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    l = r(),
    s = l || (i && t.ios);
  return {
    isSafari: n || l,
    needPerspectiveFix: n,
    need3dFix: s,
    isWebView: i,
  };
}
function Wg() {
  return Ql || (Ql = Hg()), Ql;
}
function Gg(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = Ve();
  let l = null,
    s = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    o = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((l = new ResizeObserver((p) => {
          s = i.requestAnimationFrame(() => {
            const { width: m, height: v } = t;
            let g = m,
              w = v;
            p.forEach((_) => {
              let { contentBoxSize: u, contentRect: d, target: h } = _;
              (h && h !== t.el) ||
                ((g = d ? d.width : (u[0] || u).inlineSize),
                (w = d ? d.height : (u[0] || u).blockSize));
            }),
              (g !== m || w !== v) && a();
          });
        })),
        l.observe(t.el));
    },
    c = () => {
      s && i.cancelAnimationFrame(s),
        l && l.unobserve && t.el && (l.unobserve(t.el), (l = null));
    },
    f = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      o();
      return;
    }
    i.addEventListener("resize", a), i.addEventListener("orientationchange", f);
  }),
    n("destroy", () => {
      c(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", f);
    });
}
function Yg(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const l = [],
    s = Ve(),
    a = function (f, p) {
      p === void 0 && (p = {});
      const m = s.MutationObserver || s.WebkitMutationObserver,
        v = new m((g) => {
          if (t.__preventObserver__) return;
          if (g.length === 1) {
            i("observerUpdate", g[0]);
            return;
          }
          const w = function () {
            i("observerUpdate", g[0]);
          };
          s.requestAnimationFrame
            ? s.requestAnimationFrame(w)
            : s.setTimeout(w, 0);
        });
      v.observe(f, {
        attributes: typeof p.attributes > "u" ? !0 : p.attributes,
        childList: typeof p.childList > "u" ? !0 : p.childList,
        characterData: typeof p.characterData > "u" ? !0 : p.characterData,
      }),
        l.push(v);
    },
    o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const f = Cf(t.hostEl);
          for (let p = 0; p < f.length; p += 1) a(f[p]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }),
          a(t.wrapperEl, { attributes: !1 });
      }
    },
    c = () => {
      l.forEach((f) => {
        f.disconnect();
      }),
        l.splice(0, l.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", o),
    r("destroy", c);
}
var Qg = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((l) => {
        r.eventsListeners[l] || (r.eventsListeners[l] = []),
          r.eventsListeners[l][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var l = arguments.length, s = new Array(l), a = 0; a < l; a++)
        s[a] = arguments[a];
      t.apply(r, s);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, l) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(l, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++)
      l[s] = arguments[s];
    return (
      typeof l[0] == "string" || Array.isArray(l[0])
        ? ((t = l[0]), (n = l.slice(1, l.length)), (r = e))
        : ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((c) => {
            c.apply(r, [o, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((c) => {
              c.apply(r, n);
            });
      }),
      e
    );
  },
};
function Xg() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Ct(r, "padding-left") || 0, 10) -
        parseInt(Ct(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Ct(r, "padding-top") || 0, 10) -
        parseInt(Ct(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function Kg() {
  const e = this;
  function t(x, I) {
    return parseFloat(x.getPropertyValue(e.getDirectionLabel(I)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: l, rtlTranslate: s, wrongRTL: a } = e,
    o = e.virtual && n.virtual.enabled,
    c = o ? e.virtual.slides.length : e.slides.length,
    f = it(i, `.${e.params.slideClass}, swiper-slide`),
    p = o ? e.virtual.slides.length : f.length;
  let m = [];
  const v = [],
    g = [];
  let w = n.slidesOffsetBefore;
  typeof w == "function" && (w = n.slidesOffsetBefore.call(e));
  let _ = n.slidesOffsetAfter;
  typeof _ == "function" && (_ = n.slidesOffsetAfter.call(e));
  const u = e.snapGrid.length,
    d = e.slidesGrid.length;
  let h = n.spaceBetween,
    y = -w,
    S = 0,
    P = 0;
  if (typeof l > "u") return;
  typeof h == "string" && h.indexOf("%") >= 0
    ? (h = (parseFloat(h.replace("%", "")) / 100) * l)
    : typeof h == "string" && (h = parseFloat(h)),
    (e.virtualSize = -h),
    f.forEach((x) => {
      s ? (x.style.marginLeft = "") : (x.style.marginRight = ""),
        (x.style.marginBottom = ""),
        (x.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (ii(r, "--swiper-centered-offset-before", ""),
      ii(r, "--swiper-centered-offset-after", ""));
  const O = n.grid && n.grid.rows > 1 && e.grid;
  O ? e.grid.initSlides(f) : e.grid && e.grid.unsetSlides();
  let E;
  const k =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (x) => typeof n.breakpoints[x].slidesPerView < "u"
    ).length > 0;
  for (let x = 0; x < p; x += 1) {
    E = 0;
    let I;
    if (
      (f[x] && (I = f[x]),
      O && e.grid.updateSlide(x, I, f),
      !(f[x] && Ct(I, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        k && (f[x].style[e.getDirectionLabel("width")] = "");
        const N = getComputedStyle(I),
          L = I.style.transform,
          j = I.style.webkitTransform;
        if (
          (L && (I.style.transform = "none"),
          j && (I.style.webkitTransform = "none"),
          n.roundLengths)
        )
          E = e.isHorizontal() ? Ks(I, "width", !0) : Ks(I, "height", !0);
        else {
          const b = t(N, "width"),
            Pe = t(N, "padding-left"),
            Vt = t(N, "padding-right"),
            M = t(N, "margin-left"),
            R = t(N, "margin-right"),
            A = N.getPropertyValue("box-sizing");
          if (A && A === "border-box") E = b + M + R;
          else {
            const { clientWidth: G, offsetWidth: ee } = I;
            E = b + Pe + Vt + M + R + (ee - G);
          }
        }
        L && (I.style.transform = L),
          j && (I.style.webkitTransform = j),
          n.roundLengths && (E = Math.floor(E));
      } else
        (E = (l - (n.slidesPerView - 1) * h) / n.slidesPerView),
          n.roundLengths && (E = Math.floor(E)),
          f[x] && (f[x].style[e.getDirectionLabel("width")] = `${E}px`);
      f[x] && (f[x].swiperSlideSize = E),
        g.push(E),
        n.centeredSlides
          ? ((y = y + E / 2 + S / 2 + h),
            S === 0 && x !== 0 && (y = y - l / 2 - h),
            x === 0 && (y = y - l / 2 - h),
            Math.abs(y) < 1 / 1e3 && (y = 0),
            n.roundLengths && (y = Math.floor(y)),
            P % n.slidesPerGroup === 0 && m.push(y),
            v.push(y))
          : (n.roundLengths && (y = Math.floor(y)),
            (P - Math.min(e.params.slidesPerGroupSkip, P)) %
              e.params.slidesPerGroup ===
              0 && m.push(y),
            v.push(y),
            (y = y + E + h)),
        (e.virtualSize += E + h),
        (S = E),
        (P += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, l) + _),
    s &&
      a &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + h}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + h}px`),
    O && e.grid.updateWrapperSize(E, m),
    !n.centeredSlides)
  ) {
    const x = [];
    for (let I = 0; I < m.length; I += 1) {
      let N = m[I];
      n.roundLengths && (N = Math.floor(N)),
        m[I] <= e.virtualSize - l && x.push(N);
    }
    (m = x),
      Math.floor(e.virtualSize - l) - Math.floor(m[m.length - 1]) > 1 &&
        m.push(e.virtualSize - l);
  }
  if (o && n.loop) {
    const x = g[0] + h;
    if (n.slidesPerGroup > 1) {
      const I = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        N = x * n.slidesPerGroup;
      for (let L = 0; L < I; L += 1) m.push(m[m.length - 1] + N);
    }
    for (let I = 0; I < e.virtual.slidesBefore + e.virtual.slidesAfter; I += 1)
      n.slidesPerGroup === 1 && m.push(m[m.length - 1] + x),
        v.push(v[v.length - 1] + x),
        (e.virtualSize += x);
  }
  if ((m.length === 0 && (m = [0]), h !== 0)) {
    const x =
      e.isHorizontal() && s ? "marginLeft" : e.getDirectionLabel("marginRight");
    f.filter((I, N) =>
      !n.cssMode || n.loop ? !0 : N !== f.length - 1
    ).forEach((I) => {
      I.style[x] = `${h}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let x = 0;
    g.forEach((N) => {
      x += N + (h || 0);
    }),
      (x -= h);
    const I = x - l;
    m = m.map((N) => (N <= 0 ? -w : N > I ? I + _ : N));
  }
  if (n.centerInsufficientSlides) {
    let x = 0;
    if (
      (g.forEach((I) => {
        x += I + (h || 0);
      }),
      (x -= h),
      x < l)
    ) {
      const I = (l - x) / 2;
      m.forEach((N, L) => {
        m[L] = N - I;
      }),
        v.forEach((N, L) => {
          v[L] = N + I;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: f,
      snapGrid: m,
      slidesGrid: v,
      slidesSizesGrid: g,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    ii(r, "--swiper-centered-offset-before", `${-m[0]}px`),
      ii(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - g[g.length - 1] / 2}px`
      );
    const x = -e.snapGrid[0],
      I = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((N) => N + x)),
      (e.slidesGrid = e.slidesGrid.map((N) => N + I));
  }
  if (
    (p !== c && e.emit("slidesLengthChange"),
    m.length !== u &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    v.length !== d && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !o && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const x = `${n.containerModifierClass}backface-hidden`,
      I = e.el.classList.contains(x);
    p <= n.maxBackfaceHiddenSlides
      ? I || e.el.classList.add(x)
      : I && e.el.classList.remove(x);
  }
}
function qg(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    l;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const s = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
        const a = t.activeIndex + l;
        if (a > t.slides.length && !r) break;
        n.push(s(a));
      }
  else n.push(s(t.activeIndex));
  for (l = 0; l < n.length; l += 1)
    if (typeof n[l] < "u") {
      const a = n[l].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function Zg() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function Jg(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: l } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let s = -e;
  i && (s = e),
    r.forEach((o) => {
      o.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0
    ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
    : typeof a == "string" && (a = parseFloat(a));
  for (let o = 0; o < r.length; o += 1) {
    const c = r[o];
    let f = c.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (f -= r[0].swiperSlideOffset);
    const p =
        (s + (n.centeredSlides ? t.minTranslate() : 0) - f) /
        (c.swiperSlideSize + a),
      m =
        (s - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - f) /
        (c.swiperSlideSize + a),
      v = -(s - f),
      g = v + t.slidesSizesGrid[o],
      w = v >= 0 && v <= t.size - t.slidesSizesGrid[o];
    ((v >= 0 && v < t.size - 1) ||
      (g > 1 && g <= t.size) ||
      (v <= 0 && g >= t.size)) &&
      (t.visibleSlides.push(c),
      t.visibleSlidesIndexes.push(o),
      r[o].classList.add(n.slideVisibleClass)),
      w && r[o].classList.add(n.slideFullyVisibleClass),
      (c.progress = i ? -p : p),
      (c.originalProgress = i ? -m : m);
  }
}
function ey(e) {
  const t = this;
  if (typeof e > "u") {
    const f = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * f) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: l, isEnd: s, progressLoop: a } = t;
  const o = l,
    c = s;
  if (r === 0) (i = 0), (l = !0), (s = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const f = Math.abs(e - t.minTranslate()) < 1,
      p = Math.abs(e - t.maxTranslate()) < 1;
    (l = f || i <= 0), (s = p || i >= 1), f && (i = 0), p && (i = 1);
  }
  if (n.loop) {
    const f = t.getSlideIndexByData(0),
      p = t.getSlideIndexByData(t.slides.length - 1),
      m = t.slidesGrid[f],
      v = t.slidesGrid[p],
      g = t.slidesGrid[t.slidesGrid.length - 1],
      w = Math.abs(e);
    w >= m ? (a = (w - m) / g) : (a = (w + g - v) / g), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: l, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !o && t.emit("reachBeginning toEdge"),
    s && !c && t.emit("reachEnd toEdge"),
    ((o && !l) || (c && !s)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function ty() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    l = e.virtual && n.virtual.enabled,
    s = e.grid && n.grid && n.grid.rows > 1,
    a = (p) => it(r, `.${n.slideClass}${p}, swiper-slide${p}`)[0];
  t.forEach((p) => {
    p.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let o, c, f;
  if (l)
    if (n.loop) {
      let p = i - e.virtual.slidesBefore;
      p < 0 && (p = e.virtual.slides.length + p),
        p >= e.virtual.slides.length && (p -= e.virtual.slides.length),
        (o = a(`[data-swiper-slide-index="${p}"]`));
    } else o = a(`[data-swiper-slide-index="${i}"]`);
  else
    s
      ? ((o = t.filter((p) => p.column === i)[0]),
        (f = t.filter((p) => p.column === i + 1)[0]),
        (c = t.filter((p) => p.column === i - 1)[0]))
      : (o = t[i]);
  o &&
    (o.classList.add(n.slideActiveClass),
    s
      ? (f && f.classList.add(n.slideNextClass),
        c && c.classList.add(n.slidePrevClass))
      : ((f = bg(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !f && (f = t[0]),
        f && f.classList.add(n.slideNextClass),
        (c = Vg(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !c === 0 && (c = t[t.length - 1]),
        c && c.classList.add(n.slidePrevClass))),
    e.emitSlidesClasses();
}
const yi = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  Xl = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  qs = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const s = i,
        a = [s - t];
      a.push(...Array.from({ length: t }).map((o, c) => s + r + c)),
        e.slides.forEach((o, c) => {
          a.includes(o.column) && Xl(e, c);
        });
      return;
    }
    const l = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let s = i - t; s <= l + t; s += 1) {
        const a = ((s % n) + n) % n;
        (a < i || a > l) && Xl(e, a);
      }
    else
      for (let s = Math.max(i - t, 0); s <= Math.min(l + t, n - 1); s += 1)
        s !== i && (s > l || s < i) && Xl(e, s);
  };
function ny(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let l = 0; l < t.length; l += 1)
    typeof t[l + 1] < "u"
      ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
        ? (i = l)
        : r >= t[l] && r < t[l + 1] && (i = l + 1)
      : r >= t[l] && (i = l);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function ry(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: l, realIndex: s, snapIndex: a } = t;
  let o = e,
    c;
  const f = (v) => {
    let g = v - t.virtual.slidesBefore;
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    );
  };
  if ((typeof o > "u" && (o = ny(t)), r.indexOf(n) >= 0)) c = r.indexOf(n);
  else {
    const v = Math.min(i.slidesPerGroupSkip, o);
    c = v + Math.floor((o - v) / i.slidesPerGroup);
  }
  if ((c >= r.length && (c = r.length - 1), o === l && !t.params.loop)) {
    c !== a && ((t.snapIndex = c), t.emit("snapIndexChange"));
    return;
  }
  if (o === l && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = f(o);
    return;
  }
  const p = t.grid && i.grid && i.grid.rows > 1;
  let m;
  if (t.virtual && i.virtual.enabled && i.loop) m = f(o);
  else if (p) {
    const v = t.slides.filter((w) => w.column === o)[0];
    let g = parseInt(v.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(g) && (g = Math.max(t.slides.indexOf(v), 0)),
      (m = Math.floor(g / i.grid.rows));
  } else if (t.slides[o]) {
    const v = t.slides[o].getAttribute("data-swiper-slide-index");
    v ? (m = parseInt(v, 10)) : (m = o);
  } else m = o;
  Object.assign(t, {
    previousSnapIndex: a,
    snapIndex: c,
    previousRealIndex: s,
    realIndex: m,
    previousIndex: l,
    activeIndex: o,
  }),
    t.initialized && qs(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (s !== m && t.emit("realIndexChange"), t.emit("slideChange"));
}
function iy(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a);
    });
  let l = !1,
    s;
  if (i) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === i) {
        (l = !0), (s = a);
        break;
      }
  }
  if (i && l)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = s);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var ly = {
  updateSize: Xg,
  updateSlides: Kg,
  updateAutoHeight: qg,
  updateSlidesOffset: Zg,
  updateSlidesProgress: Jg,
  updateProgress: ey,
  updateSlidesClasses: ty,
  updateActiveIndex: ry,
  updateClickedSlide: iy,
};
function sy(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let s = $g(l, e);
  return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
}
function oy(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: l, progress: s } = n;
  let a = 0,
    o = 0;
  const c = 0;
  n.isHorizontal() ? (a = r ? -e : e) : (o = e),
    i.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : o),
    i.cssMode
      ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -o)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (o -= n.cssOverflowAdjustment()),
        (l.style.transform = `translate3d(${a}px, ${o}px, ${c}px)`));
  let f;
  const p = n.maxTranslate() - n.minTranslate();
  p === 0 ? (f = 0) : (f = (e - n.minTranslate()) / p),
    f !== s && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function ay() {
  return -this.snapGrid[0];
}
function uy() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function cy(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const l = this,
    { params: s, wrapperEl: a } = l;
  if (l.animating && s.preventInteractionOnTransition) return !1;
  const o = l.minTranslate(),
    c = l.maxTranslate();
  let f;
  if (
    (r && e > o ? (f = o) : r && e < c ? (f = c) : (f = e),
    l.updateProgress(f),
    s.cssMode)
  ) {
    const p = l.isHorizontal();
    if (t === 0) a[p ? "scrollLeft" : "scrollTop"] = -f;
    else {
      if (!l.support.smoothScroll)
        return (
          Tf({ swiper: l, targetPosition: -f, side: p ? "left" : "top" }), !0
        );
      a.scrollTo({ [p ? "left" : "top"]: -f, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(f),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionEnd")))
      : (l.setTransition(t),
        l.setTranslate(f),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionStart")),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (m) {
              !l ||
                l.destroyed ||
                (m.target === this &&
                  (l.wrapperEl.removeEventListener(
                    "transitionend",
                    l.onTranslateToWrapperTransitionEnd
                  ),
                  (l.onTranslateToWrapperTransitionEnd = null),
                  delete l.onTranslateToWrapperTransitionEnd,
                  n && l.emit("transitionEnd")));
            }),
          l.wrapperEl.addEventListener(
            "transitionend",
            l.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var dy = {
  getTranslate: sy,
  setTranslate: oy,
  minTranslate: ay,
  maxTranslate: uy,
  translateTo: cy,
};
function fy(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Lf(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: l, previousIndex: s } = t;
  let a = r;
  if (
    (a || (l > s ? (a = "next") : l < s ? (a = "prev") : (a = "reset")),
    t.emit(`transition${i}`),
    n && l !== s)
  ) {
    if (a === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      a === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function py(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Lf({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function hy(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Lf({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var my = { setTransition: fy, transitionStart: py, transitionEnd: hy };
function vy(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const l = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: c,
    previousIndex: f,
    activeIndex: p,
    rtlTranslate: m,
    wrapperEl: v,
    enabled: g,
  } = l;
  if (
    (l.animating && a.preventInteractionOnTransition) ||
    (!g && !r && !i) ||
    l.destroyed
  )
    return !1;
  const w = Math.min(l.params.slidesPerGroupSkip, s);
  let _ = w + Math.floor((s - w) / l.params.slidesPerGroup);
  _ >= o.length && (_ = o.length - 1);
  const u = -o[_];
  if (a.normalizeSlideIndex)
    for (let h = 0; h < c.length; h += 1) {
      const y = -Math.floor(u * 100),
        S = Math.floor(c[h] * 100),
        P = Math.floor(c[h + 1] * 100);
      typeof c[h + 1] < "u"
        ? y >= S && y < P - (P - S) / 2
          ? (s = h)
          : y >= S && y < P && (s = h + 1)
        : y >= S && (s = h);
    }
  if (
    l.initialized &&
    s !== p &&
    ((!l.allowSlideNext &&
      (m
        ? u > l.translate && u > l.minTranslate()
        : u < l.translate && u < l.minTranslate())) ||
      (!l.allowSlidePrev &&
        u > l.translate &&
        u > l.maxTranslate() &&
        (p || 0) !== s))
  )
    return !1;
  s !== (f || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(u);
  let d;
  if (
    (s > p ? (d = "next") : s < p ? (d = "prev") : (d = "reset"),
    (m && -u === l.translate) || (!m && u === l.translate))
  )
    return (
      l.updateActiveIndex(s),
      a.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      a.effect !== "slide" && l.setTranslate(u),
      d !== "reset" && (l.transitionStart(n, d), l.transitionEnd(n, d)),
      !1
    );
  if (a.cssMode) {
    const h = l.isHorizontal(),
      y = m ? u : -u;
    if (t === 0) {
      const S = l.virtual && l.params.virtual.enabled;
      S &&
        ((l.wrapperEl.style.scrollSnapType = "none"),
        (l._immediateVirtual = !0)),
        S && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
          ? ((l._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              v[h ? "scrollLeft" : "scrollTop"] = y;
            }))
          : (v[h ? "scrollLeft" : "scrollTop"] = y),
        S &&
          requestAnimationFrame(() => {
            (l.wrapperEl.style.scrollSnapType = ""), (l._immediateVirtual = !1);
          });
    } else {
      if (!l.support.smoothScroll)
        return (
          Tf({ swiper: l, targetPosition: y, side: h ? "left" : "top" }), !0
        );
      v.scrollTo({ [h ? "left" : "top"]: y, behavior: "smooth" });
    }
    return !0;
  }
  return (
    l.setTransition(t),
    l.setTranslate(u),
    l.updateActiveIndex(s),
    l.updateSlidesClasses(),
    l.emit("beforeTransitionStart", t, r),
    l.transitionStart(n, d),
    t === 0
      ? l.transitionEnd(n, d)
      : l.animating ||
        ((l.animating = !0),
        l.onSlideToWrapperTransitionEnd ||
          (l.onSlideToWrapperTransitionEnd = function (y) {
            !l ||
              l.destroyed ||
              (y.target === this &&
                (l.wrapperEl.removeEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd
                ),
                (l.onSlideToWrapperTransitionEnd = null),
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(n, d)));
          }),
        l.wrapperEl.addEventListener(
          "transitionend",
          l.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function gy(e, t, n, r) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  const l = i.grid && i.params.grid && i.params.grid.rows > 1;
  let s = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) s = s + i.virtual.slidesBefore;
    else {
      let a;
      if (l) {
        const m = s * i.params.grid.rows;
        a = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === m
        )[0].column;
      } else a = i.getSlideIndexByData(s);
      const o = l
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: c } = i.params;
      let f = i.params.slidesPerView;
      f === "auto"
        ? (f = i.slidesPerViewDynamic())
        : ((f = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          c && f % 2 === 0 && (f = f + 1));
      let p = o - a < f;
      if ((c && (p = p || a < Math.ceil(f / 2)), p)) {
        const m = c
          ? a < i.activeIndex
            ? "prev"
            : "next"
          : a - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: m,
          slideTo: !0,
          activeSlideIndex: m === "next" ? a + 1 : a - o + 1,
          slideRealIndex: m === "next" ? i.realIndex : void 0,
        });
      }
      if (l) {
        const m = s * i.params.grid.rows;
        s = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === m
        )[0].column;
      } else s = i.getSlideIndexByData(s);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(s, t, n, r);
    }),
    i
  );
}
function yy(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: l, animating: s } = r;
  if (!i || r.destroyed) return r;
  let a = l.slidesPerGroup;
  l.slidesPerView === "auto" &&
    l.slidesPerGroup === 1 &&
    l.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const o = r.activeIndex < l.slidesPerGroupSkip ? 1 : a,
    c = r.virtual && l.virtual.enabled;
  if (l.loop) {
    if (s && !c && l.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && l.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + o, e, t, n);
        }),
        !0
      );
  }
  return l.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + o, e, t, n);
}
function wy(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: l,
      slidesGrid: s,
      rtlTranslate: a,
      enabled: o,
      animating: c,
    } = r;
  if (!o || r.destroyed) return r;
  const f = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (c && !f && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const p = a ? r.translate : -r.translate;
  function m(u) {
    return u < 0 ? -Math.floor(Math.abs(u)) : Math.floor(u);
  }
  const v = m(p),
    g = l.map((u) => m(u));
  let w = l[g.indexOf(v) - 1];
  if (typeof w > "u" && i.cssMode) {
    let u;
    l.forEach((d, h) => {
      v >= d && (u = h);
    }),
      typeof u < "u" && (w = l[u > 0 ? u - 1 : u]);
  }
  let _ = 0;
  if (
    (typeof w < "u" &&
      ((_ = s.indexOf(w)),
      _ < 0 && (_ = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((_ = _ - r.slidesPerViewDynamic("previous", !0) + 1),
        (_ = Math.max(_, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const u =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(u, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(_, e, t, n);
      }),
      !0
    );
  return r.slideTo(_, e, t, n);
}
function Sy(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed) return r.slideTo(r.activeIndex, e, t, n);
}
function xy(e, t, n, r) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  let l = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, l),
    a = s + Math.floor((l - s) / i.params.slidesPerGroup),
    o = i.rtlTranslate ? i.translate : -i.translate;
  if (o >= i.snapGrid[a]) {
    const c = i.snapGrid[a],
      f = i.snapGrid[a + 1];
    o - c > (f - c) * r && (l += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[a - 1],
      f = i.snapGrid[a];
    o - c <= (f - c) * r && (l -= i.params.slidesPerGroup);
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, i.slidesGrid.length - 1)),
    i.slideTo(l, e, t, n)
  );
}
function Ey() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    l;
  const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (l = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              it(n, `${s}[data-swiper-slide-index="${l}"]`)[0]
            )),
            Xs(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            it(n, `${s}[data-swiper-slide-index="${l}"]`)[0]
          )),
          Xs(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var _y = {
  slideTo: vy,
  slideToLoop: gy,
  slideNext: yy,
  slidePrev: wy,
  slideReset: Sy,
  slideToClosest: xy,
  slideToClickedSlide: Ey,
};
function Py(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      it(r, `.${n.slideClass}, swiper-slide`).forEach((p, m) => {
        p.setAttribute("data-swiper-slide-index", m);
      });
    },
    l = t.grid && n.grid && n.grid.rows > 1,
    s = n.slidesPerGroup * (l ? n.grid.rows : 1),
    a = t.slides.length % s !== 0,
    o = l && t.slides.length % n.grid.rows !== 0,
    c = (f) => {
      for (let p = 0; p < f; p += 1) {
        const m = t.isElement
          ? Wi("swiper-slide", [n.slideBlankClass])
          : Wi("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(m);
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const f = s - (t.slides.length % s);
      c(f), t.recalcSlides(), t.updateSlides();
    } else
      Hi(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (o) {
    if (n.loopAddBlankSlides) {
      const f = n.grid.rows - (t.slides.length % n.grid.rows);
      c(f), t.recalcSlides(), t.updateSlides();
    } else
      Hi(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function Ty(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: l,
    byController: s,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const {
      slides: c,
      allowSlidePrev: f,
      allowSlideNext: p,
      slidesEl: m,
      params: v,
    } = o,
    { centeredSlides: g } = v;
  if (
    ((o.allowSlidePrev = !0),
    (o.allowSlideNext = !0),
    o.virtual && v.virtual.enabled)
  ) {
    n &&
      (!v.centeredSlides && o.snapIndex === 0
        ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && o.snapIndex < v.slidesPerView
        ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
        : o.snapIndex === o.snapGrid.length - 1 &&
          o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
      (o.allowSlidePrev = f),
      (o.allowSlideNext = p),
      o.emit("loopFix");
    return;
  }
  let w = v.slidesPerView;
  w === "auto"
    ? (w = o.slidesPerViewDynamic())
    : ((w = Math.ceil(parseFloat(v.slidesPerView, 10))),
      g && w % 2 === 0 && (w = w + 1));
  const _ = v.slidesPerGroupAuto ? w : v.slidesPerGroup;
  let u = _;
  u % _ !== 0 && (u += _ - (u % _)),
    (u += v.loopAdditionalSlides),
    (o.loopedSlides = u);
  const d = o.grid && v.grid && v.grid.rows > 1;
  c.length < w + u
    ? Hi(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : d &&
      v.grid.fill === "row" &&
      Hi(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const h = [],
    y = [];
  let S = o.activeIndex;
  typeof l > "u"
    ? (l = o.getSlideIndex(
        c.filter((L) => L.classList.contains(v.slideActiveClass))[0]
      ))
    : (S = l);
  const P = r === "next" || !r,
    O = r === "prev" || !r;
  let E = 0,
    k = 0;
  const x = d ? Math.ceil(c.length / v.grid.rows) : c.length,
    N = (d ? c[l].column : l) + (g && typeof i > "u" ? -w / 2 + 0.5 : 0);
  if (N < u) {
    E = Math.max(u - N, _);
    for (let L = 0; L < u - N; L += 1) {
      const j = L - Math.floor(L / x) * x;
      if (d) {
        const b = x - j - 1;
        for (let Pe = c.length - 1; Pe >= 0; Pe -= 1)
          c[Pe].column === b && h.push(Pe);
      } else h.push(x - j - 1);
    }
  } else if (N + w > x - u) {
    k = Math.max(N - (x - u * 2), _);
    for (let L = 0; L < k; L += 1) {
      const j = L - Math.floor(L / x) * x;
      d
        ? c.forEach((b, Pe) => {
            b.column === j && y.push(Pe);
          })
        : y.push(j);
    }
  }
  if (
    ((o.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      o.__preventObserver__ = !1;
    }),
    O &&
      h.forEach((L) => {
        (c[L].swiperLoopMoveDOM = !0),
          m.prepend(c[L]),
          (c[L].swiperLoopMoveDOM = !1);
      }),
    P &&
      y.forEach((L) => {
        (c[L].swiperLoopMoveDOM = !0),
          m.append(c[L]),
          (c[L].swiperLoopMoveDOM = !1);
      }),
    o.recalcSlides(),
    v.slidesPerView === "auto"
      ? o.updateSlides()
      : d &&
        ((h.length > 0 && O) || (y.length > 0 && P)) &&
        o.slides.forEach((L, j) => {
          o.grid.updateSlide(j, L, o.slides);
        }),
    v.watchSlidesProgress && o.updateSlidesOffset(),
    n)
  ) {
    if (h.length > 0 && O) {
      if (typeof t > "u") {
        const L = o.slidesGrid[S],
          b = o.slidesGrid[S + E] - L;
        a
          ? o.setTranslate(o.translate - b)
          : (o.slideTo(S + E, 0, !1, !0),
            i &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - b),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - b)));
      } else if (i) {
        const L = d ? h.length / v.grid.rows : h.length;
        o.slideTo(o.activeIndex + L, 0, !1, !0),
          (o.touchEventsData.currentTranslate = o.translate);
      }
    } else if (y.length > 0 && P)
      if (typeof t > "u") {
        const L = o.slidesGrid[S],
          b = o.slidesGrid[S - k] - L;
        a
          ? o.setTranslate(o.translate - b)
          : (o.slideTo(S - k, 0, !1, !0),
            i &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - b),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - b)));
      } else {
        const L = d ? y.length / v.grid.rows : y.length;
        o.slideTo(o.activeIndex - L, 0, !1, !0);
      }
  }
  if (
    ((o.allowSlidePrev = f),
    (o.allowSlideNext = p),
    o.controller && o.controller.control && !s)
  ) {
    const L = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: l,
      byController: !0,
    };
    Array.isArray(o.controller.control)
      ? o.controller.control.forEach((j) => {
          !j.destroyed &&
            j.params.loop &&
            j.loopFix({
              ...L,
              slideTo: j.params.slidesPerView === v.slidesPerView ? n : !1,
            });
        })
      : o.controller.control instanceof o.constructor &&
        o.controller.control.params.loop &&
        o.controller.control.loopFix({
          ...L,
          slideTo:
            o.controller.control.params.slidesPerView === v.slidesPerView
              ? n
              : !1,
        });
  }
  o.emit("loopFix");
}
function Cy() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const l =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[l] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var ky = { loopCreate: Py, loopFix: Ty, loopDestroy: Cy };
function Oy(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function Ly() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var My = { setGrabCursor: Oy, unsetGrabCursor: Ly };
function Iy(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Fn() || r === Ve()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function Su(e, t, n) {
  const r = Ve(),
    { params: i } = e,
    l = i.edgeSwipeDetection,
    s = i.edgeSwipeThreshold;
  return l && (n <= s || n >= r.innerWidth - s)
    ? l === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function Ny(e) {
  const t = this,
    n = Fn();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    Su(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: l, touches: s, enabled: a } = t;
  if (
    !a ||
    (!l.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && l.preventInteractionOnTransition)
  )
    return;
  !t.animating && l.cssMode && l.loop && t.loopFix();
  let o = r.target;
  if (
    (l.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(o)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const c = !!l.noSwipingClass && l.noSwipingClass !== "",
    f = r.composedPath ? r.composedPath() : r.path;
  c && r.target && r.target.shadowRoot && f && (o = f[0]);
  const p = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    m = !!(r.target && r.target.shadowRoot);
  if (l.noSwiping && (m ? Iy(p, o) : o.closest(p))) {
    t.allowClick = !0;
    return;
  }
  if (l.swipeHandler && !o.closest(l.swipeHandler)) return;
  (s.currentX = r.pageX), (s.currentY = r.pageY);
  const v = s.currentX,
    g = s.currentY;
  if (!Su(t, r, v)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (s.startX = v),
    (s.startY = g),
    (i.touchStartTime = Ui()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (i.allowThresholdMove = !1);
  let w = !0;
  o.matches(i.focusableElements) &&
    ((w = !1), o.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== o &&
      n.activeElement.blur();
  const _ = w && t.allowTouchMove && l.touchStartPreventDefault;
  (l.touchStartForcePreventDefault || _) &&
    !o.isContentEditable &&
    r.preventDefault(),
    l.freeMode &&
      l.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function zy(e) {
  const t = Fn(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: l, rtlTranslate: s, enabled: a } = n;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let o = e;
  if (
    (o.originalEvent && (o = o.originalEvent),
    o.type === "pointermove" &&
      (r.touchId !== null || o.pointerId !== r.pointerId))
  )
    return;
  let c;
  if (o.type === "touchmove") {
    if (
      ((c = [...o.changedTouches].filter((P) => P.identifier === r.touchId)[0]),
      !c || c.identifier !== r.touchId)
    )
      return;
  } else c = o;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
    return;
  }
  const f = c.pageX,
    p = c.pageY;
  if (o.preventedByNestedSwiper) {
    (l.startX = f), (l.startY = p);
    return;
  }
  if (!n.allowTouchMove) {
    o.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(l, { startX: f, startY: p, currentX: f, currentY: p }),
        (r.touchStartTime = Ui()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (p < l.startY && n.translate <= n.maxTranslate()) ||
        (p > l.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (f < l.startX && n.translate <= n.maxTranslate()) ||
      (f > l.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    o.target === t.activeElement &&
    o.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", o),
    (l.previousX = l.currentX),
    (l.previousY = l.currentY),
    (l.currentX = f),
    (l.currentY = p);
  const m = l.currentX - l.startX,
    v = l.currentY - l.startY;
  if (n.params.threshold && Math.sqrt(m ** 2 + v ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let P;
    (n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (r.isScrolling = !1)
      : m * m + v * v >= 25 &&
        ((P = (Math.atan2(Math.abs(v), Math.abs(m)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? P > i.touchAngle
          : 90 - P > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", o),
    typeof r.startMoving > "u" &&
      (l.currentX !== l.startX || l.currentY !== l.startY) &&
      (r.startMoving = !0),
    r.isScrolling)
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && o.cancelable && o.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && o.stopPropagation();
  let g = n.isHorizontal() ? m : v,
    w = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
  i.oneWayMovement &&
    ((g = Math.abs(g) * (s ? 1 : -1)), (w = Math.abs(w) * (s ? 1 : -1))),
    (l.diff = g),
    (g *= i.touchRatio),
    s && ((g = -g), (w = -w));
  const _ = n.touchesDirection;
  (n.swipeDirection = g > 0 ? "prev" : "next"),
    (n.touchesDirection = w > 0 ? "prev" : "next");
  const u = n.params.loop && !i.cssMode,
    d =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (u && d && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const P = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(P);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o);
  }
  let h;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      _ !== n.touchesDirection &&
      u &&
      d &&
      Math.abs(g) >= 1)
  ) {
    Object.assign(l, {
      startX: f,
      startY: p,
      currentX: f,
      currentY: p,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", o),
    (r.isMoved = !0),
    (r.currentTranslate = g + r.startTranslate);
  let y = !0,
    S = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (S = 0),
    g > 0
      ? (u &&
          d &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((y = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + g) ** S)))
      : g < 0 &&
        (u &&
          d &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((y = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - g) ** S))),
    y && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(g) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (r.currentTranslate = r.startTranslate),
          (l.diff = n.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function Ry(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((S) => S.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: s,
    touches: a,
    rtlTranslate: o,
    slidesGrid: c,
    enabled: f,
  } = t;
  if (!f || (!s.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && s.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  s.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const p = Ui(),
    m = p - n.touchStartTime;
  if (t.allowClick) {
    const S = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((S && S[0]) || r.target, S),
      t.emit("tap click", r),
      m < 300 &&
        p - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = Ui()),
    Xs(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let v;
  if (
    (s.followFinger
      ? (v = o ? t.translate : -t.translate)
      : (v = -n.currentTranslate),
    s.cssMode)
  )
    return;
  if (s.freeMode && s.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: v });
    return;
  }
  const g = v >= -t.maxTranslate() && !t.params.loop;
  let w = 0,
    _ = t.slidesSizesGrid[0];
  for (
    let S = 0;
    S < c.length;
    S += S < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
  ) {
    const P = S < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    typeof c[S + P] < "u"
      ? (g || (v >= c[S] && v < c[S + P])) && ((w = S), (_ = c[S + P] - c[S]))
      : (g || v >= c[S]) && ((w = S), (_ = c[c.length - 1] - c[c.length - 2]));
  }
  let u = null,
    d = null;
  s.rewind &&
    (t.isBeginning
      ? (d =
          s.virtual && s.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (u = 0));
  const h = (v - c[w]) / _,
    y = w < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
  if (m > s.longSwipesMs) {
    if (!s.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (h >= s.longSwipesRatio
        ? t.slideTo(s.rewind && t.isEnd ? u : w + y)
        : t.slideTo(w)),
      t.swipeDirection === "prev" &&
        (h > 1 - s.longSwipesRatio
          ? t.slideTo(w + y)
          : d !== null && h < 0 && Math.abs(h) > s.longSwipesRatio
          ? t.slideTo(d)
          : t.slideTo(w));
  } else {
    if (!s.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(w + y)
        : t.slideTo(w)
      : (t.swipeDirection === "next" && t.slideTo(u !== null ? u : w + y),
        t.swipeDirection === "prev" && t.slideTo(d !== null ? d : w));
  }
}
function xu() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e,
    s = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = s && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !s
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
}
function Ay(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Dy() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const l = e.maxTranslate() - e.minTranslate();
  l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function jy(e) {
  const t = this;
  yi(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function $y() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const Mf = (e, t) => {
  const n = Fn(),
    { params: r, el: i, wrapperEl: l, device: s } = e,
    a = !!r.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    c = t;
  n[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: a }),
    i[o]("touchstart", e.onTouchStart, { passive: !1 }),
    i[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[o]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("touchend", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[o]("click", e.onClick, !0),
    r.cssMode && l[o]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[c](
          s.ios || s.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          xu,
          !0
        )
      : e[c]("observerUpdate", xu, !0),
    i[o]("load", e.onLoad, { capture: !0 });
};
function Fy() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = Ny.bind(e)),
    (e.onTouchMove = zy.bind(e)),
    (e.onTouchEnd = Ry.bind(e)),
    (e.onDocumentTouchStart = $y.bind(e)),
    t.cssMode && (e.onScroll = Dy.bind(e)),
    (e.onClick = Ay.bind(e)),
    (e.onLoad = jy.bind(e)),
    Mf(e, "on");
}
function Vy() {
  Mf(this, "off");
}
var by = { attachEvents: Fy, detachEvents: Vy };
const Eu = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function By() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    l = r.breakpoints;
  if (!l || (l && Object.keys(l).length === 0)) return;
  const s = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
  if (!s || e.currentBreakpoint === s) return;
  const o = (s in l ? l[s] : void 0) || e.originalParams,
    c = Eu(e, r),
    f = Eu(e, o),
    p = r.enabled;
  c && !f
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !c &&
      f &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((o.grid.fill && o.grid.fill === "column") ||
        (!o.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((u) => {
      if (typeof o[u] > "u") return;
      const d = r[u] && r[u].enabled,
        h = o[u] && o[u].enabled;
      d && !h && e[u].disable(), !d && h && e[u].enable();
    });
  const m = o.direction && o.direction !== r.direction,
    v = r.loop && (o.slidesPerView !== r.slidesPerView || m),
    g = r.loop;
  m && n && e.changeDirection(), Re(e.params, o);
  const w = e.params.enabled,
    _ = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    p && !w ? e.disable() : !p && w && e.enable(),
    (e.currentBreakpoint = s),
    e.emit("_beforeBreakpoint", o),
    n &&
      (v
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !g && _
        ? (e.loopCreate(t), e.updateSlides())
        : g && !_ && e.loopDestroy()),
    e.emit("breakpoint", o);
}
function Uy(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = Ve(),
    l = t === "window" ? i.innerHeight : n.clientHeight,
    s = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1));
        return { value: l * o, point: a };
      }
      return { value: a, point: a };
    });
  s.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < s.length; a += 1) {
    const { point: o, value: c } = s[a];
    t === "window"
      ? i.matchMedia(`(min-width: ${c}px)`).matches && (r = o)
      : c <= n.clientWidth && (r = o);
  }
  return r || "max";
}
var Hy = { setBreakpoint: By, getBreakpoint: Uy };
function Wy(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function Gy() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: l } = e,
    s = Wy(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: l.android },
        { ios: l.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...s), i.classList.add(...t), e.emitContainerClasses();
}
function Yy() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var Qy = { addClasses: Gy, removeClasses: Yy };
function Xy() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > l;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Ky = { checkOverflow: Xy },
  Zs = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function qy(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      l = r[i];
    if (typeof l != "object" || l === null) {
      Re(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in l))
    ) {
      Re(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Re(t, r);
  };
}
const Kl = {
    eventsEmitter: Qg,
    update: ly,
    translate: dy,
    transition: my,
    slide: _y,
    loop: ky,
    grabCursor: My,
    events: by,
    breakpoints: Hy,
    checkOverflow: Ky,
    classes: Qy,
  },
  ql = {};
let ta = class at {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++)
      i[l] = arguments[l];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = Re({}, n)),
      t && !n.el && (n.el = t);
    const s = Fn();
    if (
      n.el &&
      typeof n.el == "string" &&
      s.querySelectorAll(n.el).length > 1
    ) {
      const f = [];
      return (
        s.querySelectorAll(n.el).forEach((p) => {
          const m = Re({}, n, { el: p });
          f.push(new at(m));
        }),
        f
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = kf()),
      (a.device = Of({ userAgent: n.userAgent })),
      (a.browser = Wg()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const o = {};
    a.modules.forEach((f) => {
      f({
        params: n,
        swiper: a,
        extendParams: qy(n, o),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const c = Re({}, Zs, o);
    return (
      (a.params = Re({}, c, ql, n)),
      (a.originalParams = Re({}, a.params)),
      (a.passedParams = Re({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((f) => {
          a.on(f, a.params.on[f]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = it(n, `.${r.slideClass}, swiper-slide`),
      l = Gi(i[0]);
    return Gi(t) - l;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = it(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      s = (r.maxTranslate() - i) * t + i;
    r.translateTo(s, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: l,
        slidesGrid: s,
        slidesSizesGrid: a,
        size: o,
        activeIndex: c,
      } = r;
    let f = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let p = l[c] ? Math.ceil(l[c].swiperSlideSize) : 0,
        m;
      for (let v = c + 1; v < l.length; v += 1)
        l[v] &&
          !m &&
          ((p += Math.ceil(l[v].swiperSlideSize)), (f += 1), p > o && (m = !0));
      for (let v = c - 1; v >= 0; v -= 1)
        l[v] &&
          !m &&
          ((p += l[v].swiperSlideSize), (f += 1), p > o && (m = !0));
    } else if (t === "current")
      for (let p = c + 1; p < l.length; p += 1)
        (n ? s[p] + a[p] - s[c] < o : s[p] - s[c] < o) && (f += 1);
    else for (let p = c - 1; p >= 0; p -= 1) s[c] - s[p] < o && (f += 1);
    return f;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
        s.complete && yi(t, s);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let l;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const s = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        l = t.slideTo(s.length - 1, 0, !1, !0);
      } else l = t.slideTo(t.activeIndex, 0, !1, !0);
      l || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((l) => {
          t === "vertical" ? (l.style.width = "") : (l.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let s =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : it(r, i())[0];
    return (
      !s &&
        n.params.createElements &&
        ((s = Wi("div", n.params.wrapperClass)),
        r.append(s),
        it(r, `.${n.params.slideClass}`).forEach((a) => {
          s.append(a);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: s,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : s,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || Ct(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || Ct(r, "direction") === "rtl"),
        wrongRTL: Ct(s, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((l) => {
        l.complete
          ? yi(n, l)
          : l.addEventListener("load", (s) => {
              yi(n, s.target);
            });
      }),
      qs(n),
      (n.initialized = !0),
      qs(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: l, wrapperEl: s, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          l.removeAttribute("style"),
          s.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((o) => {
              o.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                o.removeAttribute("style"),
                o.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((o) => {
          r.off(o);
        }),
        t !== !1 && ((r.el.swiper = null), Dg(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Re(ql, t);
  }
  static get extendedDefaults() {
    return ql;
  }
  static get defaults() {
    return Zs;
  }
  static installModule(t) {
    at.prototype.__modules__ || (at.prototype.__modules__ = []);
    const n = at.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => at.installModule(n)), at)
      : (at.installModule(t), at);
  }
};
Object.keys(Kl).forEach((e) => {
  Object.keys(Kl[e]).forEach((t) => {
    ta.prototype[t] = Kl[e][t];
  });
});
ta.use([Gg, Yg]);
const If = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function tn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function kn(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : tn(t[r]) && tn(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : kn(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function Nf(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function zf(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Rf(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function Af(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function Zy(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function Jy(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: l,
    prevEl: s,
    scrollbarEl: a,
    paginationEl: o,
  } = e;
  const c = i.filter(
      (k) => k !== "children" && k !== "direction" && k !== "wrapperClass"
    ),
    {
      params: f,
      pagination: p,
      navigation: m,
      scrollbar: v,
      virtual: g,
      thumbs: w,
    } = t;
  let _, u, d, h, y, S, P, O;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    f.thumbs &&
    !f.thumbs.swiper &&
    (_ = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      f.controller &&
      !f.controller.control &&
      (u = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || o) &&
      (f.pagination || f.pagination === !1) &&
      p &&
      !p.el &&
      (d = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || a) &&
      (f.scrollbar || f.scrollbar === !1) &&
      v &&
      !v.el &&
      (h = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || s) &&
      (r.navigation.nextEl || l) &&
      (f.navigation || f.navigation === !1) &&
      m &&
      !m.prevEl &&
      !m.nextEl &&
      (y = !0);
  const E = (k) => {
    t[k] &&
      (t[k].destroy(),
      k === "navigation"
        ? (t.isElement && (t[k].prevEl.remove(), t[k].nextEl.remove()),
          (f[k].prevEl = void 0),
          (f[k].nextEl = void 0),
          (t[k].prevEl = void 0),
          (t[k].nextEl = void 0))
        : (t.isElement && t[k].el.remove(),
          (f[k].el = void 0),
          (t[k].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (f.loop && !r.loop ? (S = !0) : !f.loop && r.loop ? (P = !0) : (O = !0)),
    c.forEach((k) => {
      if (tn(f[k]) && tn(r[k]))
        Object.assign(f[k], r[k]),
          (k === "navigation" || k === "pagination" || k === "scrollbar") &&
            "enabled" in r[k] &&
            !r[k].enabled &&
            E(k);
      else {
        const x = r[k];
        (x === !0 || x === !1) &&
        (k === "navigation" || k === "pagination" || k === "scrollbar")
          ? x === !1 && E(k)
          : (f[k] = r[k]);
      }
    }),
    c.includes("controller") &&
      !u &&
      t.controller &&
      t.controller.control &&
      f.controller &&
      f.controller.control &&
      (t.controller.control = f.controller.control),
    i.includes("children") && n && g && f.virtual.enabled
      ? ((g.slides = n), g.update(!0))
      : i.includes("virtual") &&
        g &&
        f.virtual.enabled &&
        (n && (g.slides = n), g.update(!0)),
    i.includes("children") && n && f.loop && (O = !0),
    _ && w.init() && w.update(!0),
    u && (t.controller.control = f.controller.control),
    d &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-pagination"),
        o.part.add("pagination"),
        t.el.appendChild(o)),
      o && (f.pagination.el = o),
      p.init(),
      p.render(),
      p.update()),
    h &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-scrollbar"),
        a.part.add("scrollbar"),
        t.el.appendChild(a)),
      a && (f.scrollbar.el = a),
      v.init(),
      v.updateSize(),
      v.setTranslate()),
    y &&
      (t.isElement &&
        ((!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-next"),
          (l.innerHTML = t.hostEl.constructor.nextButtonSvg),
          l.part.add("button-next"),
          t.el.appendChild(l)),
        (!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-prev"),
          (s.innerHTML = t.hostEl.constructor.prevButtonSvg),
          s.part.add("button-prev"),
          t.el.appendChild(s))),
      l && (f.navigation.nextEl = l),
      s && (f.navigation.prevEl = s),
      m.init(),
      m.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (S || O) && t.loopDestroy(),
    (P || O) && t.loopCreate(),
    t.update();
}
function e0(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  kn(n, Zs), (n._emitClasses = !0), (n.init = !1);
  const l = {},
    s = If.map((o) => o.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((o) => {
      typeof e[o] > "u" ||
        (s.indexOf(o) >= 0
          ? tn(e[o])
            ? ((n[o] = {}), (i[o] = {}), kn(n[o], e[o]), kn(i[o], e[o]))
            : ((n[o] = e[o]), (i[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
          ? t
            ? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
          : (l[o] = e[o]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
    }),
    { params: n, passedParams: i, rest: l, events: r }
  );
}
function t0(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: l,
    scrollbarEl: s,
    swiper: a,
  } = e;
  Nf(t) &&
    r &&
    i &&
    ((a.params.navigation.nextEl = r),
    (a.originalParams.navigation.nextEl = r),
    (a.params.navigation.prevEl = i),
    (a.originalParams.navigation.prevEl = i)),
    zf(t) &&
      l &&
      ((a.params.pagination.el = l), (a.originalParams.pagination.el = l)),
    Rf(t) &&
      s &&
      ((a.params.scrollbar.el = s), (a.originalParams.scrollbar.el = s)),
    a.init(n);
}
function n0(e, t, n, r, i) {
  const l = [];
  if (!t) return l;
  const s = (o) => {
    l.indexOf(o) < 0 && l.push(o);
  };
  if (n && r) {
    const o = r.map(i),
      c = n.map(i);
    o.join("") !== c.join("") && s("children"),
      r.length !== n.length && s("children");
  }
  return (
    If.filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (tn(e[o]) && tn(t[o])) {
            const c = Object.keys(e[o]),
              f = Object.keys(t[o]);
            c.length !== f.length
              ? s(o)
              : (c.forEach((p) => {
                  e[o][p] !== t[o][p] && s(o);
                }),
                f.forEach((p) => {
                  e[o][p] !== t[o][p] && s(o);
                }));
          } else e[o] !== t[o] && s(o);
      }),
    l
  );
}
const r0 = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Yi() {
  return (
    (Yi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yi.apply(this, arguments)
  );
}
function Df(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function jf(e) {
  const t = [];
  return (
    te.Children.toArray(e).forEach((n) => {
      Df(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          jf(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function i0(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    te.Children.toArray(e).forEach((r) => {
      if (Df(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = jf(r.props.children);
        i.length > 0 ? i.forEach((l) => t.push(l)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function l0(e, t, n) {
  if (!n) return null;
  const r = (f) => {
      let p = f;
      return (
        f < 0 ? (p = t.length + f) : p >= t.length && (p = p - t.length), p
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: l, to: s } = n,
    a = e.params.loop ? -t.length : 0,
    o = e.params.loop ? t.length * 2 : t.length,
    c = [];
  for (let f = a; f < o; f += 1) f >= l && f <= s && c.push(t[r(f)]);
  return c.map((f, p) =>
    te.cloneElement(f, { swiper: e, style: i, key: `slide-${p}` })
  );
}
function dr(e, t) {
  return typeof window > "u" ? D.useEffect(e, t) : D.useLayoutEffect(e, t);
}
const _u = D.createContext(null),
  s0 = D.createContext(null),
  $f = D.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: l,
        onSwiper: s,
        ...a
      } = e === void 0 ? {} : e,
      o = !1;
    const [c, f] = D.useState("swiper"),
      [p, m] = D.useState(null),
      [v, g] = D.useState(!1),
      w = D.useRef(!1),
      _ = D.useRef(null),
      u = D.useRef(null),
      d = D.useRef(null),
      h = D.useRef(null),
      y = D.useRef(null),
      S = D.useRef(null),
      P = D.useRef(null),
      O = D.useRef(null),
      { params: E, passedParams: k, rest: x, events: I } = e0(a),
      { slides: N, slots: L } = i0(l),
      j = () => {
        g(!v);
      };
    Object.assign(E.on, {
      _containerClasses(R, A) {
        f(A);
      },
    });
    const b = () => {
      Object.assign(E.on, I), (o = !0);
      const R = { ...E };
      if (
        (delete R.wrapperClass,
        (u.current = new ta(R)),
        u.current.virtual && u.current.params.virtual.enabled)
      ) {
        u.current.virtual.slides = N;
        const A = {
          cache: !1,
          slides: N,
          renderExternal: m,
          renderExternalUpdate: !1,
        };
        kn(u.current.params.virtual, A),
          kn(u.current.originalParams.virtual, A);
      }
    };
    _.current || b(), u.current && u.current.on("_beforeBreakpoint", j);
    const Pe = () => {
        o ||
          !I ||
          !u.current ||
          Object.keys(I).forEach((R) => {
            u.current.on(R, I[R]);
          });
      },
      Vt = () => {
        !I ||
          !u.current ||
          Object.keys(I).forEach((R) => {
            u.current.off(R, I[R]);
          });
      };
    D.useEffect(() => () => {
      u.current && u.current.off("_beforeBreakpoint", j);
    }),
      D.useEffect(() => {
        !w.current &&
          u.current &&
          (u.current.emitSlidesClasses(), (w.current = !0));
      }),
      dr(() => {
        if ((t && (t.current = _.current), !!_.current))
          return (
            u.current.destroyed && b(),
            t0(
              {
                el: _.current,
                nextEl: y.current,
                prevEl: S.current,
                paginationEl: P.current,
                scrollbarEl: O.current,
                swiper: u.current,
              },
              E
            ),
            s && !u.current.destroyed && s(u.current),
            () => {
              u.current && !u.current.destroyed && u.current.destroy(!0, !1);
            }
          );
      }, []),
      dr(() => {
        Pe();
        const R = n0(k, d.current, N, h.current, (A) => A.key);
        return (
          (d.current = k),
          (h.current = N),
          R.length &&
            u.current &&
            !u.current.destroyed &&
            Jy({
              swiper: u.current,
              slides: N,
              passedParams: k,
              changedParams: R,
              nextEl: y.current,
              prevEl: S.current,
              scrollbarEl: O.current,
              paginationEl: P.current,
            }),
          () => {
            Vt();
          }
        );
      }),
      dr(() => {
        r0(u.current);
      }, [p]);
    function M() {
      return E.virtual
        ? l0(u.current, N, p)
        : N.map((R, A) =>
            te.cloneElement(R, { swiper: u.current, swiperSlideIndex: A })
          );
    }
    return te.createElement(
      r,
      Yi({ ref: _, className: Af(`${c}${n ? ` ${n}` : ""}`) }, x),
      te.createElement(
        s0.Provider,
        { value: u.current },
        L["container-start"],
        te.createElement(
          i,
          { className: Zy(E.wrapperClass) },
          L["wrapper-start"],
          M(),
          L["wrapper-end"]
        ),
        Nf(E) &&
          te.createElement(
            te.Fragment,
            null,
            te.createElement("div", {
              ref: S,
              className: "swiper-button-prev",
            }),
            te.createElement("div", { ref: y, className: "swiper-button-next" })
          ),
        Rf(E) &&
          te.createElement("div", { ref: O, className: "swiper-scrollbar" }),
        zf(E) &&
          te.createElement("div", { ref: P, className: "swiper-pagination" }),
        L["container-end"]
      )
    );
  });
$f.displayName = "Swiper";
const Ff = D.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: l,
    zoom: s,
    lazy: a,
    virtualIndex: o,
    swiperSlideIndex: c,
    ...f
  } = e === void 0 ? {} : e;
  const p = D.useRef(null),
    [m, v] = D.useState("swiper-slide"),
    [g, w] = D.useState(!1);
  function _(y, S, P) {
    S === p.current && v(P);
  }
  dr(() => {
    if (
      (typeof c < "u" && (p.current.swiperSlideIndex = c),
      t && (t.current = p.current),
      !(!p.current || !l))
    ) {
      if (l.destroyed) {
        m !== "swiper-slide" && v("swiper-slide");
        return;
      }
      return (
        l.on("_slideClass", _),
        () => {
          l && l.off("_slideClass", _);
        }
      );
    }
  }),
    dr(() => {
      l && p.current && !l.destroyed && v(l.getSlideClasses(p.current));
    }, [l]);
  const u = {
      isActive: m.indexOf("swiper-slide-active") >= 0,
      isVisible: m.indexOf("swiper-slide-visible") >= 0,
      isPrev: m.indexOf("swiper-slide-prev") >= 0,
      isNext: m.indexOf("swiper-slide-next") >= 0,
    },
    d = () => (typeof r == "function" ? r(u) : r),
    h = () => {
      w(!0);
    };
  return te.createElement(
    n,
    Yi(
      {
        ref: p,
        className: Af(`${m}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": o,
        onLoad: h,
      },
      f
    ),
    s &&
      te.createElement(
        _u.Provider,
        { value: u },
        te.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof s == "number" ? s : void 0,
          },
          d(),
          a &&
            !g &&
            te.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !s &&
      te.createElement(
        _u.Provider,
        { value: u },
        d(),
        a &&
          !g &&
          te.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
Ff.displayName = "SwiperSlide";
function Vf(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let l = it(e.el, `.${r[i]}`)[0];
          l || ((l = Wi("div", r[i])), (l.className = r[i]), e.el.append(l)),
            (n[i] = l),
            (t[i] = l);
        }
      }),
    n
  );
}
function o0(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null });
  function l(g) {
    let w;
    return g &&
      typeof g == "string" &&
      t.isElement &&
      ((w = t.el.querySelector(g)), w)
      ? w
      : (g &&
          (typeof g == "string" && (w = [...document.querySelectorAll(g)]),
          t.params.uniqueNavElements &&
            typeof g == "string" &&
            w.length > 1 &&
            t.el.querySelectorAll(g).length === 1 &&
            (w = t.el.querySelector(g))),
        g && !w ? g : w);
  }
  function s(g, w) {
    const _ = t.params.navigation;
    (g = se(g)),
      g.forEach((u) => {
        u &&
          (u.classList[w ? "add" : "remove"](..._.disabledClass.split(" ")),
          u.tagName === "BUTTON" && (u.disabled = w),
          t.params.watchOverflow &&
            t.enabled &&
            u.classList[t.isLocked ? "add" : "remove"](_.lockClass));
      });
  }
  function a() {
    const { nextEl: g, prevEl: w } = t.navigation;
    if (t.params.loop) {
      s(w, !1), s(g, !1);
      return;
    }
    s(w, t.isBeginning && !t.params.rewind), s(g, t.isEnd && !t.params.rewind);
  }
  function o(g) {
    g.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"));
  }
  function c(g) {
    g.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext"));
  }
  function f() {
    const g = t.params.navigation;
    if (
      ((t.params.navigation = Vf(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(g.nextEl || g.prevEl))
    )
      return;
    let w = l(g.nextEl),
      _ = l(g.prevEl);
    Object.assign(t.navigation, { nextEl: w, prevEl: _ }),
      (w = se(w)),
      (_ = se(_));
    const u = (d, h) => {
      d && d.addEventListener("click", h === "next" ? c : o),
        !t.enabled && d && d.classList.add(...g.lockClass.split(" "));
    };
    w.forEach((d) => u(d, "next")), _.forEach((d) => u(d, "prev"));
  }
  function p() {
    let { nextEl: g, prevEl: w } = t.navigation;
    (g = se(g)), (w = se(w));
    const _ = (u, d) => {
      u.removeEventListener("click", d === "next" ? c : o),
        u.classList.remove(...t.params.navigation.disabledClass.split(" "));
    };
    g.forEach((u) => _(u, "next")), w.forEach((u) => _(u, "prev"));
  }
  r("init", () => {
    t.params.navigation.enabled === !1 ? v() : (f(), a());
  }),
    r("toEdge fromEdge lock unlock", () => {
      a();
    }),
    r("destroy", () => {
      p();
    }),
    r("enable disable", () => {
      let { nextEl: g, prevEl: w } = t.navigation;
      if (((g = se(g)), (w = se(w)), t.enabled)) {
        a();
        return;
      }
      [...g, ...w]
        .filter((_) => !!_)
        .forEach((_) => _.classList.add(t.params.navigation.lockClass));
    }),
    r("click", (g, w) => {
      let { nextEl: _, prevEl: u } = t.navigation;
      (_ = se(_)), (u = se(u));
      const d = w.target;
      if (t.params.navigation.hideOnClick && !u.includes(d) && !_.includes(d)) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === d || t.pagination.el.contains(d))
        )
          return;
        let h;
        _.length
          ? (h = _[0].classList.contains(t.params.navigation.hiddenClass))
          : u.length &&
            (h = u[0].classList.contains(t.params.navigation.hiddenClass)),
          i(h === !0 ? "navigationShow" : "navigationHide"),
          [..._, ...u]
            .filter((y) => !!y)
            .forEach((y) =>
              y.classList.toggle(t.params.navigation.hiddenClass)
            );
      }
    });
  const m = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        f(),
        a();
    },
    v = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        p();
    };
  Object.assign(t.navigation, {
    enable: m,
    disable: v,
    update: a,
    init: f,
    destroy: p,
  });
}
function Kn(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function a0(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const l = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (u) => u,
      formatFractionTotal: (u) => u,
      bulletClass: `${l}-bullet`,
      bulletActiveClass: `${l}-bullet-active`,
      modifierClass: `${l}-`,
      currentClass: `${l}-current`,
      totalClass: `${l}-total`,
      hiddenClass: `${l}-hidden`,
      progressbarFillClass: `${l}-progressbar-fill`,
      progressbarOppositeClass: `${l}-progressbar-opposite`,
      clickableClass: `${l}-clickable`,
      lockClass: `${l}-lock`,
      horizontalClass: `${l}-horizontal`,
      verticalClass: `${l}-vertical`,
      paginationDisabledClass: `${l}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let s,
    a = 0;
  function o() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function c(u, d) {
    const { bulletActiveClass: h } = t.params.pagination;
    u &&
      ((u = u[`${d === "prev" ? "previous" : "next"}ElementSibling`]),
      u &&
        (u.classList.add(`${h}-${d}`),
        (u = u[`${d === "prev" ? "previous" : "next"}ElementSibling`]),
        u && u.classList.add(`${h}-${d}-${d}`)));
  }
  function f(u) {
    const d = u.target.closest(Kn(t.params.pagination.bulletClass));
    if (!d) return;
    u.preventDefault();
    const h = Gi(d) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === h) return;
      t.slideToLoop(h);
    } else t.slideTo(h);
  }
  function p() {
    const u = t.rtl,
      d = t.params.pagination;
    if (o()) return;
    let h = t.pagination.el;
    h = se(h);
    let y, S;
    const P =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      O = t.params.loop
        ? Math.ceil(P / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((S = t.previousRealIndex || 0),
          (y =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
        ? ((y = t.snapIndex), (S = t.previousSnapIndex))
        : ((S = t.previousIndex || 0), (y = t.activeIndex || 0)),
      d.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const E = t.pagination.bullets;
      let k, x, I;
      if (
        (d.dynamicBullets &&
          ((s = Ks(E[0], t.isHorizontal() ? "width" : "height", !0)),
          h.forEach((N) => {
            N.style[t.isHorizontal() ? "width" : "height"] = `${
              s * (d.dynamicMainBullets + 4)
            }px`;
          }),
          d.dynamicMainBullets > 1 &&
            S !== void 0 &&
            ((a += y - (S || 0)),
            a > d.dynamicMainBullets - 1
              ? (a = d.dynamicMainBullets - 1)
              : a < 0 && (a = 0)),
          (k = Math.max(y - a, 0)),
          (x = k + (Math.min(E.length, d.dynamicMainBullets) - 1)),
          (I = (x + k) / 2)),
        E.forEach((N) => {
          const L = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (j) => `${d.bulletActiveClass}${j}`
            ),
          ]
            .map((j) =>
              typeof j == "string" && j.includes(" ") ? j.split(" ") : j
            )
            .flat();
          N.classList.remove(...L);
        }),
        h.length > 1)
      )
        E.forEach((N) => {
          const L = Gi(N);
          L === y
            ? N.classList.add(...d.bulletActiveClass.split(" "))
            : t.isElement && N.setAttribute("part", "bullet"),
            d.dynamicBullets &&
              (L >= k &&
                L <= x &&
                N.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),
              L === k && c(N, "prev"),
              L === x && c(N, "next"));
        });
      else {
        const N = E[y];
        if (
          (N && N.classList.add(...d.bulletActiveClass.split(" ")),
          t.isElement &&
            E.forEach((L, j) => {
              L.setAttribute("part", j === y ? "bullet-active" : "bullet");
            }),
          d.dynamicBullets)
        ) {
          const L = E[k],
            j = E[x];
          for (let b = k; b <= x; b += 1)
            E[b] &&
              E[b].classList.add(...`${d.bulletActiveClass}-main`.split(" "));
          c(L, "prev"), c(j, "next");
        }
      }
      if (d.dynamicBullets) {
        const N = Math.min(E.length, d.dynamicMainBullets + 4),
          L = (s * N - s) / 2 - I * s,
          j = u ? "right" : "left";
        E.forEach((b) => {
          b.style[t.isHorizontal() ? j : "top"] = `${L}px`;
        });
      }
    }
    h.forEach((E, k) => {
      if (
        (d.type === "fraction" &&
          (E.querySelectorAll(Kn(d.currentClass)).forEach((x) => {
            x.textContent = d.formatFractionCurrent(y + 1);
          }),
          E.querySelectorAll(Kn(d.totalClass)).forEach((x) => {
            x.textContent = d.formatFractionTotal(O);
          })),
        d.type === "progressbar")
      ) {
        let x;
        d.progressbarOpposite
          ? (x = t.isHorizontal() ? "vertical" : "horizontal")
          : (x = t.isHorizontal() ? "horizontal" : "vertical");
        const I = (y + 1) / O;
        let N = 1,
          L = 1;
        x === "horizontal" ? (N = I) : (L = I),
          E.querySelectorAll(Kn(d.progressbarFillClass)).forEach((j) => {
            (j.style.transform = `translate3d(0,0,0) scaleX(${N}) scaleY(${L})`),
              (j.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      d.type === "custom" && d.renderCustom
        ? ((E.innerHTML = d.renderCustom(t, y + 1, O)),
          k === 0 && i("paginationRender", E))
        : (k === 0 && i("paginationRender", E), i("paginationUpdate", E)),
        t.params.watchOverflow &&
          t.enabled &&
          E.classList[t.isLocked ? "add" : "remove"](d.lockClass);
    });
  }
  function m() {
    const u = t.params.pagination;
    if (o()) return;
    const d =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
        ? t.slides.length / Math.ceil(t.params.grid.rows)
        : t.slides.length;
    let h = t.pagination.el;
    h = se(h);
    let y = "";
    if (u.type === "bullets") {
      let S = t.params.loop
        ? Math.ceil(d / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && S > d && (S = d);
      for (let P = 0; P < S; P += 1)
        u.renderBullet
          ? (y += u.renderBullet.call(t, P, u.bulletClass))
          : (y += `<${u.bulletElement} ${
              t.isElement ? 'part="bullet"' : ""
            } class="${u.bulletClass}"></${u.bulletElement}>`);
    }
    u.type === "fraction" &&
      (u.renderFraction
        ? (y = u.renderFraction.call(t, u.currentClass, u.totalClass))
        : (y = `<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`)),
      u.type === "progressbar" &&
        (u.renderProgressbar
          ? (y = u.renderProgressbar.call(t, u.progressbarFillClass))
          : (y = `<span class="${u.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      h.forEach((S) => {
        u.type !== "custom" && (S.innerHTML = y || ""),
          u.type === "bullets" &&
            t.pagination.bullets.push(...S.querySelectorAll(Kn(u.bulletClass)));
      }),
      u.type !== "custom" && i("paginationRender", h[0]);
  }
  function v() {
    t.params.pagination = Vf(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" }
    );
    const u = t.params.pagination;
    if (!u.el) return;
    let d;
    typeof u.el == "string" && t.isElement && (d = t.el.querySelector(u.el)),
      !d &&
        typeof u.el == "string" &&
        (d = [...document.querySelectorAll(u.el)]),
      d || (d = u.el),
      !(!d || d.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof u.el == "string" &&
          Array.isArray(d) &&
          d.length > 1 &&
          ((d = [...t.el.querySelectorAll(u.el)]),
          d.length > 1 &&
            (d = d.filter((h) => Cf(h, ".swiper")[0] === t.el)[0])),
        Array.isArray(d) && d.length === 1 && (d = d[0]),
        Object.assign(t.pagination, { el: d }),
        (d = se(d)),
        d.forEach((h) => {
          u.type === "bullets" &&
            u.clickable &&
            h.classList.add(...(u.clickableClass || "").split(" ")),
            h.classList.add(u.modifierClass + u.type),
            h.classList.add(
              t.isHorizontal() ? u.horizontalClass : u.verticalClass
            ),
            u.type === "bullets" &&
              u.dynamicBullets &&
              (h.classList.add(`${u.modifierClass}${u.type}-dynamic`),
              (a = 0),
              u.dynamicMainBullets < 1 && (u.dynamicMainBullets = 1)),
            u.type === "progressbar" &&
              u.progressbarOpposite &&
              h.classList.add(u.progressbarOppositeClass),
            u.clickable && h.addEventListener("click", f),
            t.enabled || h.classList.add(u.lockClass);
        }));
  }
  function g() {
    const u = t.params.pagination;
    if (o()) return;
    let d = t.pagination.el;
    d &&
      ((d = se(d)),
      d.forEach((h) => {
        h.classList.remove(u.hiddenClass),
          h.classList.remove(u.modifierClass + u.type),
          h.classList.remove(
            t.isHorizontal() ? u.horizontalClass : u.verticalClass
          ),
          u.clickable &&
            (h.classList.remove(...(u.clickableClass || "").split(" ")),
            h.removeEventListener("click", f));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((h) =>
          h.classList.remove(...u.bulletActiveClass.split(" "))
        );
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const u = t.params.pagination;
    let { el: d } = t.pagination;
    (d = se(d)),
      d.forEach((h) => {
        h.classList.remove(u.horizontalClass, u.verticalClass),
          h.classList.add(
            t.isHorizontal() ? u.horizontalClass : u.verticalClass
          );
      });
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? _() : (v(), m(), p());
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && p();
    }),
    r("snapIndexChange", () => {
      p();
    }),
    r("snapGridLengthChange", () => {
      m(), p();
    }),
    r("destroy", () => {
      g();
    }),
    r("enable disable", () => {
      let { el: u } = t.pagination;
      u &&
        ((u = se(u)),
        u.forEach((d) =>
          d.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass
          )
        ));
    }),
    r("lock unlock", () => {
      p();
    }),
    r("click", (u, d) => {
      const h = d.target,
        y = se(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        y &&
        y.length > 0 &&
        !h.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && h === t.navigation.nextEl) ||
            (t.navigation.prevEl && h === t.navigation.prevEl))
        )
          return;
        const S = y[0].classList.contains(t.params.pagination.hiddenClass);
        i(S === !0 ? "paginationShow" : "paginationHide"),
          y.forEach((P) => P.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const w = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: u } = t.pagination;
      u &&
        ((u = se(u)),
        u.forEach((d) =>
          d.classList.remove(t.params.pagination.paginationDisabledClass)
        )),
        v(),
        m(),
        p();
    },
    _ = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: u } = t.pagination;
      u &&
        ((u = se(u)),
        u.forEach((d) =>
          d.classList.add(t.params.pagination.paginationDisabledClass)
        )),
        g();
    };
  Object.assign(t.pagination, {
    enable: w,
    disable: _,
    render: m,
    update: p,
    init: v,
    destroy: g,
  });
}
const u0 = ({ selected: e, setSelected: t }) => {
  D.useState();
  const [n, r] = D.useState(null),
    i = D.useRef(null),
    l = () => {
      if (n !== null) {
        const s = e.frames[n.activeIndex];
        t({ ...e, currentFrame: s });
      }
    };
  return C.jsx("div", {
    className: "slide-container",
    ref: i,
    children:
      e.frames &&
      C.jsx($f, {
        pagination: { type: "progressbar" },
        navigation: !0,
        onSwiper: r,
        onSlideChange: l,
        modules: [a0, o0],
        children: e.frames.map((s, a) =>
          C.jsx(
            Ff,
            {
              className: " w-full h-48 flex justify-center items-center",
              children: C.jsx(_f, { src: s, selected: e }),
            },
            a
          )
        ),
      }),
  });
};
function bf(e) {
  const t = document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)");
  return t ? t.pop() : "";
}
function c0({ setSelected: e, selected: t, ids: n }) {
  const [r, i] = D.useState(n[0] ? n[0].id : ""),
    [l, s] = D.useState();
  D.useEffect(() => {
    var o = { method: "GET", redirect: "follow" };
    i(n[0] ? n[0].id : ""),
      fetch(ot + "get_frame/" + t.currentFrame.id, o)
        .then((c) => c.json())
        .then((c) => s(c))
        .catch((c) => console.log("error", c));
  }, [t]);
  const a = (o) => {
    if ((o.preventDefault(), !t.currentFrame)) alert("please choose one");
    else if (!r) alert("please enter an id");
    else {
      const c = bf("csrftoken"),
        f = { givenId: r, comment: l.comment };
      fetch(ot + "get_frame/" + t.currentFrame.id, {
        method: "PATCH",
        body: JSON.stringify(f),
        headers: { "Content-Type": "application/json", "X-CSRFToken": c },
      })
        .then((p) => p.json())
        .then((p) => console.log(p))
        .then(e({ ...t, dogId: "" }));
    }
  };
  return C.jsxs("div", {
    className: "m-2 flex flex-col gap-4",
    children: [
      C.jsx("div", {
        children: C.jsxs("div", {
          children: [
            "CurrentID = ",
            (l == null ? void 0 : l.given_id) || "Not Assigned",
          ],
        }),
      }),
      n &&
        C.jsxs("form", {
          className:
            "w-full h-full flex-col gap-4 justify-center  items-center",
          action: "",
          children: [
            C.jsx("label", { htmlFor: "", children: " Write your comment:" }),
            C.jsx("textarea", {
              value: l != null && l.comment ? l.comment : "",
              onChange: (o) => s({ ...l, comment: o.target.value }),
              className: "w-full mb-2 rounded-lg p-2 text-slate-600",
            }),
            C.jsxs("select", {
              value: r.givenId,
              className: "p-2 bg-white w-full   rounded-lg  text-slate-600 ",
              onChange: (o) => i(o.target.value),
              children: [
                !r && C.jsx("option", { children: "select one id" }),
                n.map((o, c) =>
                  C.jsx("option", { value: o.id, children: o.id_name }, c)
                ),
              ],
            }),
            C.jsx("br", {}),
            C.jsx("button", {
              onClick: a,
              className:
                " w-full m-2 bg-sky-700 rounded-3xl text-center p-3 hover:shadow-lg hover:bg-sky-800 transition text-white text-bold",
              children: "Submit",
            }),
          ],
        }),
    ],
  });
}
function d0({ child: e, selected: t }) {
  const [n, r] = D.useState();
  D.useEffect(() => {
    var l = { method: "GET", redirect: "follow" };
    fetch(ot + "get_frame_by_id/" + e.id, l)
      .then((s) => s.json())
      .then((s) => r(s))
      .catch((s) => console.log("error", s));
  }, [e]);
  const i = (l) => {
    var s = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
    };
    fetch(ot + "delete_frame_id/" + l, s)
      .then((a) => a.text())
      .then((a) => {
        console.log(a);
        const o = n.frames.filter((c) => c.id !== l);
        r({ ...n, frames: o });
      })
      .catch((a) => console.log("error", a));
  };
  return C.jsxs("div", {
    className: "flex h-full flex-col items-center",
    children: [
      C.jsxs("div", { children: ["id Name = ", e.id_name] }),
      n != null && n.frames
        ? C.jsx("div", {
            className: "grid grid-cols-3 w-full h-3/4  overflow-y-scroll",
            children: n.frames.map((l, s) =>
              C.jsxs(
                "div",
                {
                  className:
                    " p-2 col-span-1 gap-2 flex flex-col items-center shadow-xl rounded-lg ",
                  children: [
                    C.jsxs("button", {
                      onClick: () => i(l.id),
                      className:
                        " bg-red-400 float-left  text-white hover:shadow-md hover:bg-red-500 rounded-md p-1 text-xs",
                      children: [" ", "delete"],
                    }),
                    C.jsx("div", {
                      className: "",
                      children: C.jsx(_f, { src: l, selected: t }),
                    }),
                  ],
                },
                s
              )
            ),
          })
        : C.jsx("div", { children: "None" }),
    ],
  });
}
function f0({ selected: e, ids: t, setIds: n }) {
  const [r, i] = D.useState(!0),
    [l, s] = D.useState(),
    a = (o) => {
      var c = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(ot + "delete_given_id/" + o, c)
        .then((f) => f.text())
        .then((f) => {
          console.log(f);
          const p = t.filter((m) => m.id !== o);
          n(p);
        })
        .catch((f) => console.log("error", f));
    };
  return C.jsxs("div", {
    className: "",
    children: [
      C.jsx("div", {
        className: " flex flex-col gap-2",
        children:
          t &&
          t.map((o, c) =>
            C.jsxs(
              "div",
              {
                className: " flex gap-2 justify-between",
                children: [
                  C.jsx("span", {
                    onClick: () => {
                      i(!0), s(o);
                    },
                    className:
                      "text-sm text-center cursor-pointer bg-slate-300 border-2 w-full transition text-slate-700 block rounded-full hover:bg-white",
                    children: o.id_name,
                  }),
                  C.jsx("div", {
                    onClick: () => a(o.id),
                    className:
                      " text-sm text-center cursor-pointer   transition bg-slate-300 border-2 px-2 text-slate-700 block rounded-full hover:bg-red-500 ",
                    children: "-",
                  }),
                ],
              },
              c
            )
          ),
      }),
      r &&
        l &&
        C.jsx("div", {
          className:
            " absolute bg-slate-100/60 left-0 top-0 w-screen h-screen z-10",
          children: C.jsx("div", {
            className:
              " flex h-full w-full bg-slate-600/20 justify-center items-center  ",
            children: C.jsxs("div", {
              className: " w-1/2 h-1/2 p-3  bg-slate-200 rounded-lg shadow-md",
              children: [
                C.jsx("div", {
                  className: "h-10 text-right ",
                  children: C.jsx("span", {
                    onClick: () => i(!1),
                    className:
                      "hover:shadow-lg  hover:text-red-500   cursor-pointer",
                    children: "close",
                  }),
                }),
                C.jsx(d0, { selected: e, child: l }),
                " ",
              ],
            }),
          }),
        }),
    ],
  });
}
function p0({ selected: e, setSelected: t, ids: n, setIds: r }) {
  const [i, l] = D.useState(),
    s = (a) => {
      if ((a.preventDefault(), i)) {
        var o = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id_name: i }),
          redirect: "follow",
        };
        fetch(ot + "get_ids/", o)
          .then((c) => c.text())
          .then((c) => console.log(c))
          .then(() => t({ ...e, dogId: "a" }))
          .catch((c) => console.log("error", c));
      } else alert("write an id");
    };
  return C.jsx("div", {
    className: " w-full   ",
    children: C.jsxs("form", {
      className: "flex  justify-between gap-2",
      action: "",
      children: [
        C.jsx("input", {
          onChange: (a) => l(a.target.value),
          className: " appearance-none rounded-full px-2 w-5/6 ",
          type: "text",
        }),
        C.jsx("button", {
          onClick: s,
          className: "bg-slate-200 rounded-full px-1 ",
          type: "submit",
          children: "+",
        }),
      ],
    }),
  });
}
function h0({ selected: e, setSelected: t }) {
  const [n, r] = D.useState();
  return (
    D.useEffect(() => {
      var i = { method: "GET", redirect: "follow" };
      fetch(ot + "get_ids/", i)
        .then((l) => l.json())
        .then((l) => r(l))
        .catch((l) => console.log("error", l));
    }, [e]),
    C.jsxs("div", {
      className: "sm:grid grid-cols-10 min-w-full  gap-6  ",
      children: [
        C.jsxs("div", {
          className: " container  flex flex-col gap-24 h-full col-span-4",
          children: [
            C.jsx("div", {
              className: "bg-slate-300 rounded-xl",
              children: C.jsx(u0, {
                className: "  bg-slate-300 ",
                selected: e,
                setSelected: t,
              }),
            }),
            C.jsxs("div", {
              children: [
                C.jsx("div", {
                  children: C.jsx("img", {
                    className: " rounded-xl",
                    src: `${e.filesDirectory}images/${e.currentFrame.original_image}`,
                    alt: "Current frame",
                  }),
                }),
                C.jsxs("span", {
                  className:
                    " w-full text-center block font-sans   text-slate-600",
                  children: ["Current Frame:", e.currentFrame.original_image],
                }),
              ],
            }),
          ],
        }),
        C.jsxs("div", {
          className: "container flex flex-col justify-between col col-span-5 ",
          children: [
            C.jsx("div", {
              className: " rounded-xl  overflow-hidden border-gray-400  ",
              children: C.jsx(zg, { selected: e }),
            }),
            C.jsx("div", {
              children: n && C.jsx(c0, { setSelected: t, ids: n, selected: e }),
            }),
          ],
        }),
        C.jsxs("div", {
          className:
            " px-2 py-4 rounded-lg flex flex-col justify-between container bg-slate-300 ",
          children: [
            C.jsx(f0, { setIds: r, selected: e, ids: n }),
            C.jsx(p0, { selected: e, setSelected: t, ids: n, setIds: r }),
          ],
        }),
      ],
    })
  );
}
function m0({ setIsLoading: e }) {
  const [t, n] = D.useState(null),
    r = (l) => {
      n(l.target.files[0]);
    },
    i = async (l) => {
      if ((l.preventDefault(), !t)) {
        alert("Please select a file.");
        return;
      }
      const s = new FormData();
      s.append("file", t);
      const a = bf("csrftoken"),
        o = {
          method: "POST",
          body: s,
          headers: { "X-CSRFToken": a },
          redirect: "follow",
        };
      e(!0),
        fetch(ot + "upload_file/", o)
          .then((c) => c.json())
          .then((c) => {
            console.log(c), e(!1);
          })
          .catch((c) => {
            console.log("error", c), e(!1);
          });
    };
  return C.jsxs("div", {
    children: [
      C.jsx("h2", {
        className: " text-2xl m-10 font-black text-slate-700 text-center",
        children: "Upload New Video",
      }),
      C.jsxs("form", {
        className: " flex flex-col gap-4",
        onSubmit: i,
        children: [
          C.jsx("input", {
            className: "text-center",
            accept: ".zip",
            type: "file",
            onChange: r,
          }),
          " ",
          C.jsx("br", {}),
          C.jsx("button", {
            className:
              "bg-sky-400 hover:shadow-md transition   p-2 rounded-full text-white",
            type: "submit",
            children: "Upload",
          }),
        ],
      }),
    ],
  });
}
function v0() {
  const [e, t] = D.useState(!1),
    [n, r] = D.useState(),
    [i, l] = D.useState({
      videoFile: "",
      frames: "",
      currentFrame: "",
      dogId: "",
      filesDirectory: "",
    });
  D.useEffect(() => {
    (async () => {
      try {
        const o = { method: "GET", redirect: "follow" },
          f = await (await fetch(ot + "get_all", o)).json();
        r(f);
      } catch (o) {
        console.log("error", o);
      }
    })();
  }, [e]);
  const s = (a) => {
    const o = a.target.value,
      c = n.filter((f) => f.video_file === o);
    console.log(o),
      l({
        ...i,
        videoFile: c[0].video_file,
        frames: c[0].frames,
        currentFrame: c[0].frames[0],
        filesDirectory: `${ot}Files/${c[0].directory_name}/`,
      });
  };
  return C.jsxs("div", {
    className: " bg-slate-200 border-2 flex gap-2 h-screen px-16 flex-col ",
    children: [
      e &&
        C.jsxs("div", {
          className: " absolute h-full w-full bg-slate-100/5 backdrop-blur-lg ",
          children: [
            " ",
            C.jsxs("div", {
              className:
                " h-full flex flex-col gap-8 items-center justify-center",
              children: [
                C.jsx("div", {
                  className:
                    "h-48 w-48  border-8 border-r-sky-600 animate-spin rounded-full",
                }),
                C.jsxs("div", {
                  className: "text-2xl font-black text-slate-700",
                  children: [" ", "Uploading file ,please wait..."],
                }),
              ],
            }),
          ],
        }),
      C.jsx("div", {
        className: "flex justify-center items-center",
        children: C.jsxs("div", {
          className: " w-full flex flex-col justify-center items-center gap-2",
          children: [
            C.jsx("span", {
              className: "text-2xl font-black text-slate-700",
              children: "Select your video File",
            }),
            n &&
              C.jsxs("select", {
                onDoubleClick: s,
                className:
                  "  px-4 py-2  rounded-lg w-1/2  text-slate-60 bg-white  border-slate-300 border-2",
                onChange: s,
                children: [
                  !i.videoFile &&
                    C.jsx("option", {
                      className: "text-slate-400",
                      children: "select one video file",
                    }),
                  n.map((a, o) =>
                    C.jsx(
                      "option",
                      { defaultValue: !0, id: a, children: a.video_file },
                      o
                    )
                  ),
                ],
              }),
          ],
        }),
      }),
      !i.currentFrame &&
        C.jsx("div", {
          className: "h-4/6 flex items-center justify-center",
          children: C.jsx("div", { children: C.jsx(m0, { setIsLoading: t }) }),
        }),
      i.currentFrame &&
        C.jsx("div", {
          className: "h-4/6 ",
          children: C.jsx(h0, { selected: i, setSelected: l }),
        }),
    ],
  });
}
Zl.createRoot(document.getElementById("root")).render(
  C.jsx(te.StrictMode, { children: C.jsx(v0, {}) })
);
export { Pu as g, cv as p, D as r, dl as u };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
