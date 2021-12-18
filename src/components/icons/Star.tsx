import { defineComponent, SVGAttributes } from "vue";

  export const SvgStar = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m10.7 5-2.1-4.4a.642.642 0 0 0 -1.2 0l-2.1 4.4-4.8.7c-.6.1-.6.7-.2 1.1l3.4 3.3-.9 4.8c-.1.7.5.8.9.6l4.3-2.2 4.3 2.2a.5811.5811 0 0 0 .9-.6l-.8-4.8 3.5-3.4a.66889.66889 0 0 0 -.4-1z"/></svg>;
    },
  });