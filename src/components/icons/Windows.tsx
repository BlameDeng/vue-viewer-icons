import { defineComponent, SVGAttributes } from "vue";

  export const SvgWindows = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m0 2.042 6-.824v5.782h-5.999m5.999 1v5.782l-5.999-.832v-4.95zm1-6.899 8-1.101v7h-8m8 1v7l-8-1.111v-5.889z"/></svg>;
    },
  });