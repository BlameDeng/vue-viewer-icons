import { defineComponent, SVGAttributes } from "vue";

  export const SvgSmileyNeutral = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 0a8 8 0 1 0 8 8 7.9978 7.9978 0 0 0 -8-8zm-3 5a1.1465 1.1465 0 0 1 1 1.25 1.1465 1.1465 0 0 1 -1 1.25 1.1465 1.1465 0 0 1 -1-1.25 1.1465 1.1465 0 0 1 1-1.25zm6.5 6h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm-.5-3.5a1.1465 1.1465 0 0 1 -1-1.25 1.1465 1.1465 0 0 1 1-1.25 1.1465 1.1465 0 0 1 1 1.25 1.1465 1.1465 0 0 1 -1 1.25z"/></svg>;
    },
  });