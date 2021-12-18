import { defineComponent, SVGAttributes } from "vue";

  export const SvgCaretLeftSmall = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m9.99737 4.80681v6.39946a.27938.27938 0 0 1 -.44292.24059l-3.45479-3.17567a.34022.34022 0 0 1 -.00046-.4807l.00046-.00044 3.45479-3.22382a.269.269 0 0 1 .44292.24058z"/></svg>;
    },
  });