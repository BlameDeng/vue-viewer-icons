import { defineComponent, SVGAttributes } from "vue";

  export const SvgImportant = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m6 0h4v3.64535l-.77252 7.3234h-2.47341l-.75407-7.3234zm.13818 12.08193h3.73332v3.91807h-3.73332z"/></svg>;
    },
  });