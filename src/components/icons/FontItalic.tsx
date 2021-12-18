import { defineComponent, SVGAttributes } from "vue";

  export const SvgFontItalic = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m6.6.4.1-.4h7.8l-.2.4a2.54449 2.54449 0 0 0 -1.6.5 4.06473 4.06473 0 0 0 -1 2l-2.9 10.2a6.35622 6.35622 0 0 0 -.3 1.5.90783.90783 0 0 0 .3.7 2.9843 2.9843 0 0 0 1.6.3l-.1.4h-7.9l.1-.4a2.45706 2.45706 0 0 0 1.7-.5 4.06473 4.06473 0 0 0 1-2l3-10.2a5.017 5.017 0 0 0 .3-1.4.90783.90783 0 0 0 -.3-.7 4.01589 4.01589 0 0 0 -1.6-.4"/></svg>;
    },
  });