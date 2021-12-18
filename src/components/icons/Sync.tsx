import { defineComponent, SVGAttributes } from "vue";

  export const SvgSync = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m14 8 2-1.5v5.5a1.0444 1.0444 0 0 1 -1 1h-11v2l-4-3 4-3v2h10zm-12-3h10v2l4-3-4-3v2h-11a1.0444 1.0444 0 0 0 -1 1v5.5l2-1.5z"/></svg>;
    },
  });