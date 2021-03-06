import { defineComponent, SVGAttributes } from "vue";

  export const SvgBookmark = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m4 1.6v12.8l4-2.4 4 2.4v-12.8z" fill-rule="evenodd"/></svg>;
    },
  });