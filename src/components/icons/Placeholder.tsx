import { defineComponent, SVGAttributes } from "vue";

  export const SvgPlaceholder = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m0 0v16h16v-16zm14.85714 1.94286v12.11428l-6.05714-6.05714zm-6.85714 5.25714-6.05714-6.05714h12.11428zm-.8.8-6.05714 6.05714v-12.11428zm.8.8 6.05714 6.05714h-12.11428z"/></svg>;
    },
  });