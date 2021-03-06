import { defineComponent, SVGAttributes } from "vue";

  export const SvgStatusRejected = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8-.02022a8 8 0 1 0 8 8 8 8 0 0 0 -8-8zm5 9.5h-10v-3h10z"/></svg>;
    },
  });