import { defineComponent, SVGAttributes } from "vue";

  export const SvgStatusSuccessHollow = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 1.5a6.5 6.5 0 1 1 -6.5001 6.5 6.5 6.5 0 0 1 6.5001-6.5m0-1.5a8 8 0 1 0 8 8 8 8 0 0 0 -8-8zm-1.349 11.9937-3.651-3.3999 1.3959-1.3 2.3625 2.2 4.8322-4.5 1.3959 1.2999z"/></svg>;
    },
  });