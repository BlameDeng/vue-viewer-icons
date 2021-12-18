import { defineComponent, SVGAttributes } from "vue";

  export const SvgGraphPieChart = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m11.9 15.8c2.1-1.1 4-4 4.1-6.7h-7.4z"/><path d="m0 8.4c0 4 3.3 7.3 7.3 7.3.9 0 1.8-.2 2.6-.5-.1-.2-3-6.7-3-6.7v-7.4c-3.9.2-6.9 3.4-6.9 7.3"/><path d="m8.3 0v7.7h7.7c-.3-4.1-3.6-7.4-7.7-7.7"/></svg>;
    },
  });