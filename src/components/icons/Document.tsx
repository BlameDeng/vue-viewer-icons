import { defineComponent, SVGAttributes } from "vue";

  export const SvgDocument = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m10 0h-8v16h12v-12h-4zm1 0v3h3z"/></svg>;
    },
  });