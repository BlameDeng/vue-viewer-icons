import { defineComponent, SVGAttributes } from "vue";

  export const SvgSortMenu = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m4 10v-8h-2v8h-2l3 5 3-5zm4-5h7v2h-7zm0 3h6v2h-6zm0 3h5v2h-5zm0-9h8v2h-8z"/></svg>;
    },
  });