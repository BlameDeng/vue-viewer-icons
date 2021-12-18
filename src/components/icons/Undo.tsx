import { defineComponent, SVGAttributes } from "vue";

  export const SvgUndo = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m16 14c0-5.2-4.2-9.3-9-9.4v-2.6l-7 5.3 7 5.3v-2.6c4.3 0 6.7 1.8 9 4"/></svg>;
    },
  });