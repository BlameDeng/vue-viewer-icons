import { defineComponent, SVGAttributes } from "vue";

  export const SvgSortDown = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m7 0v12.7l-3.8-3.7-1.2 1.2 6 5.8 1.2-1.2 4.8-4.6-1.2-1.2-3.8 3.7v-12.7z"/></svg>;
    },
  });