import { defineComponent, SVGAttributes } from "vue";

  export const SvgTableOfContents = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m3 5h-2v-2h2zm12-2h-10v2h10zm-10 6h-2v-2h2zm10-2h-8v2h8zm-10 6h-2v-2h2zm10-2h-8v2h8z" fill-rule="evenodd"/></svg>;
    },
  });