import { defineComponent, SVGAttributes } from "vue";

  export const SvgPlay = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m5 3a1.00006 1.00006 0 0 0 -1 1v8a.99991.99991 0 0 0 1.4961.8682l7.0001-4a1 1 0 0 0 0-1.7364l-7.0001-4a.99862.99862 0 0 0 -.4961-.1318z"/></svg>;
    },
  });