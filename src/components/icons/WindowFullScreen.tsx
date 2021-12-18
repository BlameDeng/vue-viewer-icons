import { defineComponent, SVGAttributes } from "vue";

  export const SvgWindowFullScreen = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m16 0v6l-2.2-2.2-3.3 3.3-1.7-1.6 3.3-3.3-2.1-2.2zm-12.2 2.2 3.3 3.3-1.6 1.7-3.3-3.4-2.2 2.2v-6h6zm10 10 2.2-2.2v6h-6l2.2-2.2-3.3-3.3 1.7-1.7zm-6.6-1.7-3.3 3.3 2.1 2.2h-6v-6l2.2 2.2 3.3-3.3z"/></svg>;
    },
  });