import { defineComponent, SVGAttributes } from "vue";

  export const SvgFilterHollow = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15 1v.5l-5.6 4.7-.4.3v.5 5.5l-2 1.5v-7-.5l-.4-.3-5.6-4.7v-.5zm1-1h-16v2l6 5v9l4-3v-6l6-5z"/></svg>;
    },
  });