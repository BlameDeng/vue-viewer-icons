import { defineComponent, SVGAttributes } from "vue";

  export const SvgCloseCircular = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m11.4 5.4-.8-.8-2.6 2.7-2.6-2.7-.8.8 2.7 2.6-2.7 2.6.8.8 2.6-2.7 2.6 2.7.8-.8-2.7-2.6z"/><path d="m8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5m0-1.5c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/></svg>;
    },
  });