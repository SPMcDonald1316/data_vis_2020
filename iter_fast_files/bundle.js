(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vega'), require('vega-lite'), require('vega-lite-api'), require('vega-tooltip'), require('d3')) :
  typeof define === 'function' && define.amd ? define(['vega', 'vega-lite', 'vega-lite-api', 'vega-tooltip', 'd3'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vega, global.vegaLite, global.vl, global.vegaTooltip));
})(this, (function (vega, vegaLite, vl, vegaTooltip) { 'use strict';

  vl.markPoint()
    .encode(
      vl.x().fieldQ('acceleration').scale({ zero: false }),
      vl.y().fieldQ('horsepower').scale({ zero: false }),
      vl.tooltip().fieldN('name')
    );

  vl.register(vega, vegaLite, {
    view: { renderer: 'svg' },
    init: view => { view.tooltip(new vegaTooltip.Handler().call); }
  });

}));
