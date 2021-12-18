import { defineComponent, SVGAttributes } from "vue";

  export const SvgCopy = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="m5 10h-2a1 1 0 0 1 -1-1v-7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2h1v-2a2 2 0 0 0 -2-2h-5a2 2 0 0 0 -2 2v7a2 2 0 0 0 2 2h2zm8-4a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1-1v-7a1 1 0 0 1 1-1zm0-1h-5a2 2 0 0 0 -2 2v7a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-7a2 2 0 0 0 -2-2z"/></svg>;
    },
  });