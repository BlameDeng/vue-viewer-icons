import { defineComponent, SVGAttributes } from "vue";

  export const SvgStatusPendingHollow = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m7.6 4v4.1l3.7 2.2.7-1-3.2-2v-3.3zm.4-2.5a6.487 6.487 0 1 1 -.026 0q.013 0 .026 0m0-1.5a8 8 0 1 0 8 8 8.02351 8.02351 0 0 0 -8-8z"/></svg>;
    },
  });