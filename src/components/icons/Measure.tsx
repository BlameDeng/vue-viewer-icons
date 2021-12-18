import { defineComponent, SVGAttributes } from "vue";

  export const SvgMeasure = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15.9 4.2-4.1-4.1c-.1-.1-.4-.1-.5 0l-11.2 11.1c-.1.1-.1.4 0 .5l4.1 4.1c.1.1.4.1.5 0l11.2-11c.1-.2.1-.4 0-.6m-12 8.8-1.9-1.8.7-.7 1.9 1.9zm.4-2.3-.9-1 .7-.7.9 1zm2.4-.5-1.9-1.9.7-.7 1.9 1.9zm.5-2.3-1-1 .7-.7.9.9zm2.3-.5-1.9-1.9.7-.7 1.9 1.9zm.5-2.3-1-1 .7-.7.9.9zm2.4-.5-1.9-1.9.6-.7 1.9 1.9z"/></svg>;
    },
  });