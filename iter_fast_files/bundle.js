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

  const csvURL = 'https://gist.githubusercontent.com/curran/805413fb3b2efaada1ce/raw/f030ce7bd9a46f3d4c09b4c8db1729fab885cc33/religionByCountryTop5.csv';

  const getData = async () => {
    const data = await d3.csv(csvURL);

    console.log(data[0]);

    return data;
  };

  const viz = vl.markBar()
    .encode(
      vl.x().fieldN('country').sort('-y'),
      vl.y().fieldQ('population'),
      vl.color().fieldN('religion'),
      vl.tooltip().fieldN('population')
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
