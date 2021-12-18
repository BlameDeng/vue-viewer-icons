import { defineComponent, SVGAttributes } from "vue";

  export const SvgGroupUngroup = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m12 8a4 4 0 1 1 -4 4 4 4 0 0 1 4-4" opacity=".5"/><path d="m4 0-4 8h8"/></g></svg>;
    },
  });