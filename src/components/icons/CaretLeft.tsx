import { defineComponent, SVGAttributes } from "vue";

  export const SvgCaretLeft = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 1.2v13.3a.63355.63355 0 0 1 -1 .5l-7.8-6.6a.66806.66806 0 0 1 0-1l7.8-6.6c.3-.4 1-.1 1 .4z"/></svg>;
    },
  });