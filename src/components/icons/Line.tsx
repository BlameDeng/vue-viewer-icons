import { defineComponent, SVGAttributes } from "vue";

  export const SvgLine = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m.79 7.25h14.42v1.5h-14.42z" transform="matrix(.83205 -.5547 .5547 .83205 -3.09 5.78)"/></svg>;
    },
  });