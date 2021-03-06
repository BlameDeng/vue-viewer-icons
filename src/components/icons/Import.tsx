import { defineComponent, SVGAttributes } from "vue";

  export const SvgImport = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m4 3.4h10v7h-2.2l-2.5 2h6.7v-11h-14v5.6l2-1.6z"/><path d="m0 13.3c1.7-1.7 3.7-3.1 7-3v2l5-4-5-4v2c-3.5 0-7 3.1-7 7"/></svg>;
    },
  });