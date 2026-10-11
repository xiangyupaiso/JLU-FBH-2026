/** Invisible host bookmarks calibrated against the live official form on
 * 2026-10-11. Recalibrate after official content/layout changes. Widths are
 * iframe viewport widths, not site viewport widths. */
type Calibration = {
  width: number;
  contentHeight: number;
  offsets: readonly number[];
};

const layouts: { minWidth: number; samples: Calibration[] }[] = [
  {
    minWidth: 0,
    samples: [
      {
        width: 305,
        contentHeight: 22573,
        offsets: [288, 11708, 12598, 13958, 22246],
      },
      {
        width: 596,
        contentHeight: 21125,
        offsets: [192, 11580, 12470, 13570, 20798],
      },
    ],
  },
  {
    minWidth: 640,
    samples: [
      {
        width: 695,
        contentHeight: 22234,
        offsets: [192, 12284, 13222, 14382, 21906],
      },
    ],
  },
  {
    minWidth: 768,
    samples: [
      {
        width: 774,
        contentHeight: 13932,
        offsets: [192, 7640, 8300, 9264, 13604],
      },
      {
        width: 819,
        contentHeight: 13812,
        offsets: [192, 7540, 8200, 9144, 13484],
      },
      {
        width: 1443,
        contentHeight: 11490,
        offsets: [144, 7092, 7474, 8190, 11162],
      },
    ],
  },
];

export function getAttributionBookmarks(width: number) {
  const layout = layouts.reduce(
    (selected, entry) => (width >= entry.minWidth ? entry : selected),
    layouts[0],
  );
  const samples = layout.samples;
  const upper =
    samples.find((sample) => sample.width >= width) ??
    samples[samples.length - 1];
  const lower = samples.reduce(
    (selected, sample) => (sample.width <= width ? sample : selected),
    samples[0],
  );
  const fraction =
    lower === upper ? 0 : (width - lower.width) / (upper.width - lower.width);
  const interpolate = (a: number, b: number) =>
    Math.round(a + (b - a) * fraction);
  return {
    contentHeight: interpolate(lower.contentHeight, upper.contentHeight),
    offsets: lower.offsets.map((offset, index) =>
      interpolate(offset, upper.offsets[index]),
    ),
  };
}
