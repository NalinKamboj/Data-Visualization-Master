// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/minard.js":[function(require,module,exports) {
createData();

function createData() {
  //Orignial geo.json data which will be parsed by this function...
  //TODO: Look into grouping later...
  var labelledData = [{
    lon: 24,
    lat: 54.9,
    size: 340000,
    dir: 1,
    group: 1
  }, {
    lon: 24.5,
    lat: 55,
    size: 340000,
    dir: 1,
    group: 1
  }, {
    lon: 25.5,
    lat: 54.5,
    size: 340000,
    dir: 1,
    group: 1
  }, {
    lon: 26,
    lat: 54.7,
    size: 320000,
    dir: 1,
    group: 1
  }, {
    lon: 27,
    lat: 54.8,
    size: 300000,
    dir: 1,
    group: 1
  }, {
    lon: 28,
    lat: 54.9,
    size: 280000,
    dir: 1,
    group: 1
  }, {
    lon: 28.5,
    lat: 55,
    size: 240000,
    dir: 1,
    group: 1
  }, {
    lon: 29,
    lat: 55.1,
    size: 210000,
    dir: 1,
    group: 1
  }, {
    lon: 30,
    lat: 55.2,
    size: 180000,
    dir: 1,
    group: 1
  }, {
    lon: 30.3,
    lat: 55.3,
    size: 175000,
    dir: 1,
    group: 1
  }, {
    lon: 32,
    lat: 54.8,
    size: 145000,
    dir: 1,
    group: 1
  }, {
    lon: 33.2,
    lat: 54.9,
    size: 140000,
    dir: 1,
    group: 1
  }, {
    lon: 34.4,
    lat: 55.5,
    size: 127100,
    dir: 1,
    group: 1
  }, {
    lon: 35.5,
    lat: 55.4,
    size: 100000,
    dir: 1,
    group: 1
  }, {
    lon: 36,
    lat: 55.5,
    size: 100000,
    dir: 1,
    group: 1
  }, {
    lon: 37.6,
    lat: 55.8,
    size: 100000,
    dir: 1,
    group: 1
  }, {
    lon: 37.7,
    lat: 55.7,
    size: 100000,
    dir: -1,
    group: 1
  }, {
    lon: 37.5,
    lat: 55.7,
    size: 98000,
    dir: -1,
    group: 1
  }, {
    lon: 37,
    lat: 55,
    size: 97000,
    dir: -1,
    group: 1
  }, {
    lon: 36.8,
    lat: 55,
    size: 96000,
    dir: -1,
    group: 1
  }, {
    lon: 35.4,
    lat: 55.3,
    size: 87000,
    dir: -1,
    group: 1
  }, {
    lon: 34.3,
    lat: 55.2,
    size: 55000,
    dir: -1,
    group: 1
  }, {
    lon: 33.3,
    lat: 54.8,
    size: 37000,
    dir: -1,
    group: 1
  }, {
    lon: 32,
    lat: 54.6,
    size: 24000,
    dir: -1,
    group: 1
  }, {
    lon: 30.4,
    lat: 54.4,
    size: 20000,
    dir: -1,
    group: 1
  }, {
    lon: 29.2,
    lat: 54.3,
    size: 20000,
    dir: -1,
    group: 1
  }, {
    lon: 28.5,
    lat: 54.2,
    size: 20000,
    dir: -1,
    group: 1
  }, {
    lon: 28.3,
    lat: 54.3,
    size: 20000,
    dir: -1,
    group: 1
  }, {
    lon: 27.5,
    lat: 54.5,
    size: 20000,
    dir: -1,
    group: 1
  }, {
    lon: 26.8,
    lat: 54.3,
    size: 12000,
    dir: -1,
    group: 1
  }, {
    lon: 26.4,
    lat: 54.4,
    size: 14000,
    dir: -1,
    group: 1
  }, {
    lon: 25,
    lat: 54.4,
    size: 8000,
    dir: -1,
    group: 1
  }, {
    lon: 24.4,
    lat: 54.4,
    size: 4000,
    dir: -1,
    group: 1
  }, {
    lon: 24.2,
    lat: 54.4,
    size: 4000,
    dir: -1,
    group: 1
  }, {
    lon: 24.1,
    lat: 54.4,
    size: 4000,
    dir: -1,
    group: 1
  }, {
    lon: 24,
    lat: 55.1,
    size: 60000,
    dir: 1,
    group: 2
  }, {
    lon: 24.5,
    lat: 55.2,
    size: 60000,
    dir: 1,
    group: 2
  }, {
    lon: 25.5,
    lat: 54.7,
    size: 60000,
    dir: 1,
    group: 2
  }, {
    lon: 26.6,
    lat: 55.7,
    size: 40000,
    dir: 1,
    group: 2
  }, {
    lon: 27.4,
    lat: 55.6,
    size: 33000,
    dir: 1,
    group: 2
  }, {
    lon: 28.7,
    lat: 55.5,
    size: 33000,
    dir: 1,
    group: 2
  }, {
    lon: 28.7,
    lat: 55.5,
    size: 33000,
    dir: -1,
    group: 2
  }, {
    lon: 29.2,
    lat: 54.2,
    size: 30000,
    dir: -1,
    group: 2
  }, {
    lon: 28.5,
    lat: 54.1,
    size: 30000,
    dir: -1,
    group: 2
  }, {
    lon: 28.3,
    lat: 54.2,
    size: 28000,
    dir: -1,
    group: 2
  }, {
    lon: 24,
    lat: 55.2,
    size: 22000,
    dir: 1,
    group: 3
  }, {
    lon: 24.5,
    lat: 55.3,
    size: 22000,
    dir: 1,
    group: 3
  }, {
    lon: 24.6,
    lat: 55.8,
    size: 6000,
    dir: 1,
    group: 3
  }, {
    lon: 24.6,
    lat: 55.8,
    size: 6000,
    dir: -1,
    group: 3
  }, {
    lon: 24.2,
    lat: 54.4,
    size: 6000,
    dir: -1,
    group: 3
  }, {
    lon: 24.1,
    lat: 54.4,
    size: 6000,
    dir: -1,
    group: 3
  }];
  var citiesData = [{
    lon: 24,
    lat: 55,
    city: "Kowno",
    temp: 0
  }, {
    lon: 25.3,
    lat: 54.7,
    city: "Wilna",
    temp: 0
  }, {
    lon: 26.4,
    lat: 54.4,
    city: "Smorgoni",
    temp: -9
  }, {
    lon: 26.8,
    lat: 54.3,
    city: "Moiodexno",
    temp: -21
  }, {
    lon: 27.7,
    lat: 55.2,
    city: "Gloubokoe",
    temp: -11
  }, {
    lon: 27.6,
    lat: 53.9,
    city: "Minsk",
    temp: -20
  }, {
    lon: 28.5,
    lat: 54.3,
    city: "Studienska",
    temp: -24
  }, {
    lon: 28.7,
    lat: 55.5,
    city: "Polotzk",
    temp: -30
  }, {
    lon: 29.2,
    lat: 54.4,
    city: "Bobr",
    temp: -26
  }, {
    lon: 30.2,
    lat: 55.3,
    city: "Witebsk",
    temp: "NA"
  }, {
    lon: 30.4,
    lat: 54.5,
    city: "Orscha",
    temp: "NA"
  }, {
    lon: 30.4,
    lat: 53.9,
    city: "Mohilow",
    temp: "NA"
  }, {
    lon: 32,
    lat: 54.8,
    city: "Smolensk",
    temp: "NA"
  }, {
    lon: 33.2,
    lat: 54.9,
    city: "Dorogobouge",
    temp: "NA"
  }, {
    lon: 34.3,
    lat: 55.2,
    city: "Wixma",
    temp: "NA"
  }, {
    lon: 34.4,
    lat: 55.5,
    city: "Chjat",
    temp: "NA"
  }, {
    lon: 36,
    lat: 55.5,
    city: "Mojaisk",
    temp: "NA"
  }, {
    lon: 37.6,
    lat: 55.8,
    city: "Moscou",
    temp: "NA"
  }, {
    lon: 36.6,
    lat: 55.3,
    city: "Tarantino",
    temp: "NA"
  }, {
    lon: 36.5,
    lat: 55,
    city: "Malo-Jarosewii",
    temp: "NA"
  }]; // console.log(labelledData);

  var dataset1 = []; //For army attacking
  //Using only one dataset for now...

  var dataset2 = []; //For army returning
  //Starting feature extraction

  labelledData.forEach(function (data) {
    if (data.dir == 1) {
      dataset1.push(data);
    } else if (data.dir == -1) {
      dataset2.push(data);
    }
  }); //Draw the chart.

  drawChart(dataset1, dataset2, citiesData);
} //TODO: Write this function for stroke width manipulation acc. to army size.


function scaleValue(value) {//Assuming army size is between
}

function drawChart(dataset1, dataset2, cityData) {
  //Update this to two or more arguments later
  //First split dataset1 into 3 different datasets according to group...
  var data1 = [];
  var data2 = [];
  var data3 = [];
  dataset1.forEach(function (data) {
    if (data.group == 1) {
      data1.push(data);
    } else if (data.group == 2) {
      data2.push(data);
    } else data3.push(data);
  });
  var returnData1 = [];
  var returnData2 = [];
  var returnData3 = [];
  dataset2.forEach(function (data) {
    if (data.group == 1) {
      returnData1.push(data);
    } else if (data.group == 2) {
      returnData2.push(data);
    } else returnData3.push(data);
  }); //Start actual chart drawing...

  am4core.useTheme(am4themes_animated);
  am4core.useTheme(am4themes_material);
  var chart = am4core.create("minard-map", am4charts.XYChart);
  chart.data = dataset1;
  var xAxis = chart.xAxes.push(new am4charts.ValueAxis());
  xAxis.renderer.minGridDistance = 50;
  var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
  yAxis.renderer.minGridDistance = 50;
  var attackSeries1 = chart.series.push(new am4charts.LineSeries());
  attackSeries1.data = data1;
  attackSeries1.dataFields.valueY = "lat";
  attackSeries1.dataFields.valueX = "lon";
  attackSeries1.stroke = am4core.color("#e91e63");
  attackSeries1.strokeWidth = 8;
  attackSeries1.legendSettings.labelText = "[bold{color}]Group 1 (Attack)[/]";
  var attackSeries2 = chart.series.push(attackSeries1.clone());
  attackSeries2.data = data2;
  attackSeries2.strokeWidth = 5;
  attackSeries2.stroke = am4core.color("#4caf50");
  attackSeries2.legendSettings.labelText = "[bold{color}]Group 2 (Attack)[/]";
  var attackSeries3 = chart.series.push(attackSeries1.clone());
  attackSeries3.data = data3;
  attackSeries3.strokeWidth = 4;
  attackSeries3.stroke = am4core.color("#fbc02d");
  attackSeries3.legendSettings.labelText = "[bold{color}]Group 3 (Attack)[/]";
  var returnSeries1 = chart.series.push(attackSeries1.clone());
  returnSeries1.data = returnData1;
  returnSeries1.stroke = am4core.color("#00acc1");
  returnSeries1.strokeWidth = 2;
  returnSeries1.zIndex = -1;
  returnSeries1.legendSettings.labelText = "[bold{color}]Return[/]";
  var returnSeries2 = chart.series.push(returnSeries1.clone());
  returnSeries2.data = returnData2;
  var returnSeries3 = chart.series.push(returnSeries1.clone());
  returnSeries3.data = returnData3; //Draw city points on the chart

  var citySeries = chart.series.push(attackSeries1.clone());
  citySeries.data = cityData;
  citySeries.strokeWidth = 0;
  citySeries.zIndex = -1;
  var cityBullet = citySeries.bullets.push(new am4charts.CircleBullet());
  cityBullet.circle.strokeWidth = 2;
  cityBullet.circle.radius = 7; //Adding shadow to bullet

  var shadow = new am4core.DropShadowFilter();
  shadow.dx = 2;
  shadow.dy = 2;
  cityBullet.circle.filters.push(shadow);
  cityBullet.circle.fill = "#616161";
  cityBullet.circle.stroke = "#fff";
  cityBullet.tooltipText = "[bold]{city}\nTemp: {temp}[/]"; // cityBullet.tooltip.getFillFromObject = false;
  //Create bullet hover element

  var cityHover = cityBullet.states.create("hover");
  cityHover.properties.scale = 1.7;
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.xAxis = xAxis;
  chart.cursor.yAxis = yAxis;
  chart.cursor.tooltipText = "{size}";
  chart.cursor.lineX.stroke = am4core.color("#ffeeff");
  chart.cursor.lineX.strokeWidth = 4;
  chart.cursor.lineX.strokeOpacity = 0.2;
  chart.cursor.lineX.strokeDasharray = "";
  chart.cursor.lineY.stroke = am4core.color("#ffeeff");
  chart.cursor.lineY.strokeWidth = 4;
  chart.cursor.lineY.strokeOpacity = 0.2;
  chart.cursor.lineY.strokeDasharray = "";
  chart.scrollbarY = new am4core.Scrollbar();
  chart.scrollbarX = new am4core.Scrollbar(); //Create chart legend

  chart.legend = new am4charts.Legend();
  chart.legend.markers.template.disabled = true;
}
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49229" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/minard.js"], null)
//# sourceMappingURL=/minard.be876ffb.js.map