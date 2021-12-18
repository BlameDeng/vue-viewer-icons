import { defineComponent, SVGAttributes } from "vue";

  export const SvgCaretUp = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m14.7 12.4h-13.3a.63355.63355 0 0 1 -.5-1l6.6-7.8a.66806.66806 0 0 1 1 0l6.6 7.8c.4.3.1 1-.4 1z"/></svg>;
    },
  });