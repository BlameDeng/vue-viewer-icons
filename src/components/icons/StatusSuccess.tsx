import { defineComponent, SVGAttributes } from "vue";

  export const SvgStatusSuccess = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 0a8 8 0 1 0 8 8 8 8 0 0 0 -8-8zm-1.35 12-3.65-3.41 1.4-1.3 2.36 2.2 4.83-4.49 1.41 1.29z"/></svg>;
    },
  });