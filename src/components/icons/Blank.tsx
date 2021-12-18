import { defineComponent, SVGAttributes } from "vue";

  export const SvgBlank = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"/>;
    },
  });