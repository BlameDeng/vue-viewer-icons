import { defineComponent, SVGAttributes } from "vue";

  export const SvgArchive = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m11 7v2h-6v-2h-5v7h16v-7zm-5 0h4v1h-4m5-8v2h-6v-2h-5v6h16v-6zm-5 0h4v1h-4"/></svg>;
    },
  });