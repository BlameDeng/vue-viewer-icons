import { defineComponent, SVGAttributes } from "vue";

  export const SvgObjectMove = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15 9-1.5-2-1.5 2h1v2a1.00113 1.00113 0 0 1 -1 1h-1v1h1a2 2 0 0 0 2-2v-2zm-8-9h9v6h-9zm1 1h7v4h-7zm-8 8h1v1h-1zm2 0h2v1h-2zm3 0h2v1h-2zm3 0h1v1h-1zm-8 5h1v1h-1zm2 0h2v1h-2zm3 0h2v1h-2zm3 0h1v1h-1zm-8-3h1v2h-1zm8 0h1v2h-1z" fill-rule="evenodd"/></svg>;
    },
  });