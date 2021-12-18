import { defineComponent, SVGAttributes } from "vue";

  export const SvgWindowMinimize = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m0 16v-4.3l1.6 1.5 2.3-2.3 1.2 1.2-2.3 2.3 1.5 1.6m8.7-6h-7v-7h7zm-6-1h5v-5h-5zm-7-9v10h1v-9h14v14h-9v1h10v-16z"/></svg>;
    },
  });