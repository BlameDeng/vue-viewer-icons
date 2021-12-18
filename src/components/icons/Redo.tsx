import { defineComponent, SVGAttributes } from "vue";

  export const SvgRedo = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m0 14a9.3804 9.3804 0 0 1 9-9.4v-2.6l7 5.3-7 5.3v-2.6c-4.3 0-6.7 1.8-9 4"/></svg>;
    },
  });