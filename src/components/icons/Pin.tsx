import { defineComponent, SVGAttributes } from "vue";

  export const SvgPin = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15.8 6.3-6.1-6.1c-.3-.3-.8-.3-1.1 0l-.9.9c-.3.3-.3.8 0 1.1l.2.2-4 4-3.2.2 3.5 3.5-3.6 3.6-.6 2.3 2.3-.5 3.6-3.7 3.5 3.6.1-3.4 3.9-3.9.3.3c.2.1.4.2.6.2s.4-.1.6-.3l.9-.9c.3-.3.3-.8 0-1.1m-1.5 1.1-5.8-5.8.6-.5 5.8 5.7z"/></svg>;
    },
  });