import { defineComponent, SVGAttributes } from "vue";

  export const SvgCloud = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m16 9.9c0 1.7-1.4 3.1-3.1 3.1h-9.8c-1.7 0-3.1-1.4-3.1-3.1 0-1.6 1.1-2.8 2.6-3 0-.1 0-.2 0-.3 0-1.1.9-1.9 2-1.9.5 0 .9.2 1.3.5.6-1.4 1.4-2.6 3.6-2.6 2.7 0 4 2 4 4.2v.3c1.4.1 2.5 1.2 2.5 2.8"/></svg>;
    },
  });