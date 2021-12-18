import { defineComponent, SVGAttributes } from "vue";

  export const SvgStatusRejectedHollow = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 1.47978a6.5 6.5 0 1 1 -6.5 6.5 6.50737 6.50737 0 0 1 6.5-6.5m0-1.5a8 8 0 1 0 8 8 8 8 0 0 0 -8-8zm5.5 9.99971h-11v-4h11zm-10-1h9v-2h-9z"/></svg>;
    },
  });