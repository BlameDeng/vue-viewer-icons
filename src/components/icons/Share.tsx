import { defineComponent, SVGAttributes } from "vue";

  export const SvgShare = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m11.5 10c-.6 0-1.1.2-1.5.6l-5-2.8c0-.1 0-.2 0-.3s0-.2 0-.3l5-2.8c.4.3 1 .6 1.5.6 1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5c0 .2 0 .5.1.7l-4.7 2.7c-.5-.6-1.1-.9-1.9-.9-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5c.8 0 1.4-.3 1.9-.9l4.7 2.7c-.1.2-.1.5-.1.7 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5" fill-rule="evenodd"/></svg>;
    },
  });