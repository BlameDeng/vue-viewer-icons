import { defineComponent, SVGAttributes } from "vue";

  export const SvgLink = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m7.2 8.9c.8.8 2.2.8 3 0l3-3c.8-.8.8-2.2 0-3s-2.2-.8-3 0l-1 1c-.9-.3-1.8-.4-2.7-.3l2.3-2.3c1.7-1.7 4.3-1.7 6 0 1.6 1.7 1.6 4.4 0 6l-3 3c-3.6 3.6-6.5-.5-6.7-.8l1.4-1.4zm3.7-2.4c-.2-.3-.3-.4-.7-.8-1.6-1.7-4.2-1.7-5.9.1l-3 3c-1.7 1.7-1.7 4.3 0 6s4.3 1.7 6 0l2.3-2.3c-1 .2-1.9.1-2.8-.2l-1.1 1.1c-.8.8-2.2.8-3 0s-.8-2.2 0-3l3-3c1.7-1.7 3.5.5 3.6.8z"/></svg>;
    },
  });