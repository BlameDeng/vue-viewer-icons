import { defineComponent, SVGAttributes } from "vue";

  export const SvgGoToEnd = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m3.7778 4a.76016.76016 0 0 0 -.3904.1081.80441.80441 0 0 0 -.3874.6919v6.4a.80441.80441 0 0 0 .3874.6919.75908.75908 0 0 0 .7763.0027l5.4444-3.2a.8115.8115 0 0 0 0-1.3892l-5.4444-3.2a.76069.76069 0 0 0 -.3859-.1054zm7.2222-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-8a1 1 0 0 0 -1-1z"/></svg>;
    },
  });