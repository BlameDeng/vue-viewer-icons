import { defineComponent, SVGAttributes } from "vue";

  export const SvgActivity = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m31 16h-10.3l-2.2 5-4.3-20.2-4.7 15.2h-8.1c-.6 0-1.1.4-1.3.9-.3 1.2.3 2.1 1.3 2.1h10.1l2.2-7.2 4 18.5 4.8-11.3h8.1c1 0 1.6-.9 1.3-2.1-.2-.5-.7-.9-1.3-.9"/></svg>;
    },
  });