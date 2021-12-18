import { defineComponent, SVGAttributes } from "vue";

  export const SvgTable = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 11h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm0-2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm0-2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm-5 4h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm0-2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm0-2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm-5 4h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm0-2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm0-2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm12.5-5h-14a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-10a1 1 0 0 0 -1-1zm-5 1v2h-4v-2zm-9 0h4v2h-4zm0 10v-7h4v7zm5 0v-7h4v7zm9 0h-4v-7h4zm0-8h-4v-2h4z"/></svg>;
    },
  });