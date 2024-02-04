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

  const csvURL = 'https://gist.githubusercontent.com/curran/9938078a93a4ba380a0e/raw/8c489c0c1855c00f702f27c7546037e2941ae549/auto-mpg.csv';

  const getData = async () => {
    const data = await d3.csv(csvURL);

    console.log(data[0]);

    return data;
  };

  const viz = vl.markCircle({ size: 300, opacity: 0.5 })
    .encode(
      vl.x().fieldQ('mpg').scale({ zero: false }),
      vl.y().fieldQ('horsepower').scale({ zero: false }),
      vl.color().fieldN('origin'),
      vl.tooltip().fieldN('name')
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
