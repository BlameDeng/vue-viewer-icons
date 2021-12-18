import { defineComponent, SVGAttributes } from "vue";

  export const SvgWindowZoomOut = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m16 0v6l-2.2-2.2-3.3 3.4-1.7-1.7 3.4-3.3-2.2-2.2z"/><path d="m7.2 10.5-3.4 3.3 2.2 2.2h-6v-6l2.2 2.2 3.3-3.4z"/></svg>;
    },
  });