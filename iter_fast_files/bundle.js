(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vega'), require('vega-lite'), require('vega-lite-api'), require('vega-tooltip'), require('d3')) :
  typeof define === 'function' && define.amd ? define(['vega', 'vega-lite', 'vega-lite-api', 'vega-tooltip', 'd3'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vega, global.vegaLite, global.vl, global.vegaTooltip, global.d3));
})(this, (function (vega, vegaLite, vl, vegaTooltip, d3) { 'use strict';

  const dark = '#3e3c38';
  const config = {
    axis: {
      domain: false,
      tickColor: 'lightGray'
    },
    style: {
      "guide-label": {
        fontSize: 20,
        fill: dark
      },
      "guide-title": {
        fontSize: 30,
        fill: dark,
        labelLimit: 0
      }
    }
  };

  const csvURL = 'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv';

  const getData = async () => {
    const data = await d3.csv(csvURL);

    console.log(data[0]);

    return data;
  };

  const viz = vl.markArea({ size: 5, opacity: 1 })
    .encode(
      vl.x().fieldT('timestamp'),
      vl.y().fieldQ('temperature'),
      vl.tooltip().fieldN('temperature')
    );

  vl.register(vega, vegaLite, {
    view: { renderer: 'svg' },
    init: view => { view.tooltip(new vegaTooltip.Handler().call); }
  });

  const run = async () => {
    const marks = viz
      .data(await getData())
      .width(window.innerWidth)
      .height(window.innerHeight)
      .autosize({ type: 'fit', contains: 'padding' })
      .config(config);

    document.body.appendChild(await marks.render());
  };
  run();

}));
