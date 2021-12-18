import { defineComponent, SVGAttributes } from "vue";

  export const SvgMap = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m11.2 11.4-1.5 4.6h6.3v-3.2zm.5-1.6 4.3 1.3v-11.1h-1.2zm-6.7-5.6a1.7 1.7 0 1 1 -1.7 1.7 1.7 1.7 0 0 1 1.7-1.7zm-5-4.2v16h8l5.1-16zm6.8 9.5c-.7 1.2-1.8 2.9-1.8 2.9a28.86638 28.86638 0 0 1 -1.8-2.9 7.88933 7.88933 0 0 1 -1.4-3.6 3.15907 3.15907 0 0 1 3.2-3.2 3.15907 3.15907 0 0 1 3.2 3.2 7.88933 7.88933 0 0 1 -1.4 3.6"/></svg>;
    },
  });