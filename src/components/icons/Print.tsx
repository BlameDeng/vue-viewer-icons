import { defineComponent, SVGAttributes } from "vue";

  export const SvgPrint = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g><path d="m5 12h5v1h-5z"/><path d="m4 1h8v2h1v-2c0-.6-.4-1-1-1h-8c-.6 0-1 .4-1 1v2h1v-2"/><path d="m5 10h6v1h-6z"/><path d="m15 4h-14c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h2v3c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-3h2c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1m-3 11h-8v-6h8v6m2-8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1"/></g></svg>;
    },
  });