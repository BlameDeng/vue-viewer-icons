import { defineComponent, SVGAttributes } from "vue";

  export const SvgEdit = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8.8 2.8 4.4 4.4-8.8 8.8h-4.4v-4.4zm-5 11.8 1-1-2.5-2.5-1 1v1.1h1.4v1.4zm5.6-9.8c0-.2-.1-.2-.2-.2s-.1 0-.2.1l-5.7 5.7s-.1.1-.1.2c0 .2.1.2.2.2s.1 0 .2-.1l5.7-5.7s.1-.1.1-.2m6.6-1c0 .4-.1.7-.4 1l-1.8 1.8-4.3-4.5 1.8-1.7c.3-.3.6-.4 1-.4s.7.1 1 .4l2.5 2.5c.1.2.2.6.2.9"/></svg>;
    },
  });