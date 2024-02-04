import vl from 'vega-lite-api';
export const viz = vl.markArea({ size: 5, opacity: 1 })
  .encode(
    vl.x().fieldT('timestamp'),
    vl.y().fieldQ('temperature'),
    vl.tooltip().fieldN('temperature')
  );