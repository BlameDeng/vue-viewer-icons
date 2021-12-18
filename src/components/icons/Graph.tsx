import { defineComponent, SVGAttributes } from "vue";

  export const SvgGraph = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15 14.5-2-1.5v1h-10.6l2.1-3.6 2.1 3.1 2-5 2 3 2.8-6.6 1 .5-.1-3.6-2.8 2.2 1 .5-2.1 5-2-3-2 5-1.9-2.9-2.5 4.1v-9.7h1l-1.5-2-1.5 2h1v12h12v1z"/></svg>;
    },
  });