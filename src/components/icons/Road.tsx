import { defineComponent, SVGAttributes } from "vue";

  export const SvgRoad = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m13 0h1v15h-1m-10-15v15h9v-15zm5 14h-1v-3h1zm0-5h-1v-3h1zm0-5h-1v-3h1zm-7-4h1v15h-1"/></svg>;
    },
  });