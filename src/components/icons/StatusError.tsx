import { defineComponent, SVGAttributes } from "vue";

  export const SvgStatusError = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 0a8 8 0 1 0 8 8 8 8 0 0 0 -8-8zm1 12h-2v-2h2zm0-3h-2v-5h2z"/></svg>;
    },
  });