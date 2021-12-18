import { defineComponent, SVGAttributes } from "vue";

  export const SvgCaretDown = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m1.4 3.3h13.3a.63355.63355 0 0 1 .5 1l-6.6 7.8a.66806.66806 0 0 1 -1 0l-6.7-7.8a.60782.60782 0 0 1 .5-1z"/></svg>;
    },
  });