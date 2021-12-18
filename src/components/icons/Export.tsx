import { defineComponent, SVGAttributes } from "vue";

  export const SvgExport = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m12 12h-10v-7h2.2l2.5-2h-6.7v11h14v-5.6l-2 1.6z"/><path d="m4 10c1.7-1.7 3.7-3.1 7-3v2l5-4-5-4v2c-3.5 0-7 3.1-7 7"/></svg>;
    },
  });