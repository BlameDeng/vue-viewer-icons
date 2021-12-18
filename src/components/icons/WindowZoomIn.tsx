import { defineComponent, SVGAttributes } from "vue";

  export const SvgWindowZoomIn = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m9 7v-5.9l2.1 2.2 3.2-3.3 1.7 1.7-3.3 3.2 2.2 2.1z"/><path d="m0 14.4 3.3-3.3-2.2-2.1h5.9v5.9l-2.1-2.1-3.2 3.3z"/></svg>;
    },
  });