# SST-QN directed network embed

Adapted from the user-supplied `sdg-network-panel-a-echarts-v14.zip` for Model Figure 50.

The original graph contains 12 SDG nodes and 20 directed relationships from the
frozen `future_risk_stress` configuration. Node values, edge values, endpoints,
signs, conditions, positions, and the supplied desktop/mobile routing presets
are preserved. Styling uses the Wiki's existing Lexend font and Dry Lab palette.

All HTML, CSS, JavaScript, and dependency licenses are kept in this directory.
The 12 AVIF icons and Lexend font load from the team's existing `static.igem.wiki`
URLs. No images, fonts, or Base64 media are bundled in the repository. Runtime
canvas images support the original rounded node symbols and PNG export.

The HTML reports its intrinsic height to the same-origin parent frame, including
the optional keyboard detail panel. Zoom, pan, node dragging, hover/tap details,
reset, and PNG export are retained. Keyboard buttons expose the same recorded
node and edge values in a persistent detail region.

Dependencies retain the versions from the supplied archive:

- Apache ECharts 5.6.0, Apache License 2.0, with bundled ZRender.
- Lucide 0.468.0, ISC License.

See `vendor/ECHARTS-LICENSE.md`, `vendor/ECHARTS-NOTICE.md`, and
`vendor/LUCIDE-LICENSE.md` for their original notices.
