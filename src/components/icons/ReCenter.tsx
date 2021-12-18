import { defineComponent, SVGAttributes } from "vue";

  export const SvgReCenter = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15.11 7.11h-.98a6.17309 6.17309 0 0 0 -5.24-5.24v-.98a.89.89 0 0 0 -1.78 0v.98a6.17309 6.17309 0 0 0 -5.24 5.24h-.98a.89.89 0 0 0 0 1.78h.98a6.17311 6.17311 0 0 0 5.24 5.24v.98a.89.89 0 1 0 1.78 0v-.98a6.17311 6.17311 0 0 0 5.24-5.24h.98a.89.89 0 1 0 0-1.78zm-7.11 5.41a4.52 4.52 0 1 1 4.52-4.52 4.51534 4.51534 0 0 1 -4.52 4.52zm0-6.52a2 2 0 1 1 -2 2 2 2 0 0 1 2-2z"/></svg>;
    },
  });