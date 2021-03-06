import { defineComponent, SVGAttributes } from "vue";

  export const SvgMoreSmall = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m5 7a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm3 0a1 1 0 1 1 -1 1 .9999.9999 0 0 1 1-1zm3 0a1 1 0 1 1 -1.0001 1 1 1 0 0 1 1.0001-1z" fill-rule="evenodd"/></svg>;
    },
  });