import { defineComponent, SVGAttributes } from "vue";

  export const SvgWindowMaximize = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m14 2v4.3l-1.6-1.5-2.3 2.3-1.2-1.2 2.3-2.3-1.5-1.6m-2.7 14h-7v-7h7zm-6-1h5v-5h-5zm-1-15v8h1v-7h14v14h-7v1h8v-16z"/></svg>;
    },
  });