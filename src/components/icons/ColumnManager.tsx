import { defineComponent, SVGAttributes } from "vue";

  export const SvgColumnManager = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m1 0h2v16h-2m6-16h2v16h-2m6-16h2v16h-2"/></svg>;
    },
  });