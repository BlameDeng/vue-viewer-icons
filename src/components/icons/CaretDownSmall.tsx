import { defineComponent, SVGAttributes } from "vue";

  export const SvgCaretDownSmall = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m4.8067 6h6.3953a.27961.27961 0 0 1 .24043.44321l-3.1736 3.45707a.33969.33969 0 0 1 -.48085 0l-3.2217-3.45707a.26909.26909 0 0 1 .24042-.44321z"/></svg>;
    },
  });