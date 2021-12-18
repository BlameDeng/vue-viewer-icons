import { defineComponent, SVGAttributes } from "vue";

  export const SvgRefresh = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m2.1 9h-2.1v5l1.5-1.4a7.74114 7.74114 0 0 0 6.5 3.4 7.99306 7.99306 0 0 0 7.9-7h-2a6.01624 6.01624 0 0 1 -5.9 5 5.93367 5.93367 0 0 1 -5-2.7l2.4-2.3zm5.9-9a7.99306 7.99306 0 0 0 -7.9 7h2a6.01624 6.01624 0 0 1 5.9-5 5.71978 5.71978 0 0 1 5.1 2.9l-2.1 2.1h5v-5l-1.4 1.4a8.3288 8.3288 0 0 0 -6.6-3.4z"/></svg>;
    },
  });