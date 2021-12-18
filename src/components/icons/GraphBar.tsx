import { defineComponent, SVGAttributes } from "vue";

  export const SvgGraphBar = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m1 14v-14h-1v15h16v-1z"/><path d="m12 6h3v7h-3z"/><path d="m7 2h3v11h-3z"/><path d="m2 4h3v9h-3z"/></svg>;
    },
  });