import { defineComponent, SVGAttributes } from "vue";

  export const SvgEmail = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m16 14v-10l-8 6-8-6v10z"/><path d="m0 2h16l-8 6z"/></svg>;
    },
  });