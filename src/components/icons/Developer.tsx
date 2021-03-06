import { defineComponent, SVGAttributes } from "vue";

  export const SvgDeveloper = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m4.9 3.7c-.3-.3-.7-.3-1 0l-3.7 3.8c-.3.3-.3.7 0 1l3.7 3.8c.3.3.7.3 1 0s.3-.7 0-1l-3.2-3.3 3.2-3.3c.3-.3.3-.7 0-1m10.9 3.8-3.7-3.8c-.3-.3-.7-.3-1 0s-.3.7 0 1l3.2 3.3-3.2 3.3c-.3.3-.3.7 0 1s.7.3 1 0l3.7-3.8c.3-.3.3-.7 0-1m-6.1-3.9c-.3-.1-.8 0-.9.4l-2.9 7.5c-.1.4 0 .8.4.9s.8 0 .9-.4l2.9-7.5c.2-.4 0-.8-.4-.9"/></svg>;
    },
  });