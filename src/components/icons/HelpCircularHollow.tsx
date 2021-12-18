import { defineComponent, SVGAttributes } from "vue";

  export const SvgHelpCircularHollow = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m10.015 6.34611a2.51955 2.51955 0 0 1 -.93 1.79 1.99113 1.99113 0 0 0 -.78992 1.5h-1.11008a2.92148 2.92148 0 0 1 1.12-2.29c.78686-.67739.62127-1.96-.38-1.96-.63324.02175-.74.69627-.74 1.28h-1.2a2.8677 2.8677 0 0 1 .68-2.09 2.04145 2.04145 0 0 1 3.35 1.77zm-1.5196 4.80527a.74526.74526 0 1 1 -.74526-.74526.74525.74525 0 0 1 .74526.74526zm-.4954-9.65027a6.49889 6.49889 0 1 1 -6.4989 6.49889 6.50625 6.50625 0 0 1 6.4989-6.49889m0-1.5a7.99889 7.99889 0 1 0 7.9989 7.99889 7.99889 7.99889 0 0 0 -7.9989-7.99889z"/></svg>;
    },
  });