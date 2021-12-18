import { defineComponent, SVGAttributes } from "vue";

  export const SvgLayers = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m16 4.8-8-4.3-8 4.3 8 4.3zm-8 5.8-6.5-3.5-1.5.8 8 4.3 8-4.3-1.5-.8zm0 3-6.5-3.5-1.5.8 8 4.3 8-4.3-1.5-.8z"/></svg>;
    },
  });