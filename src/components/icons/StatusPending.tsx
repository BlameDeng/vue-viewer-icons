import { defineComponent, SVGAttributes } from "vue";

  export const SvgStatusPending = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m7.9092 0a8 8 0 1 0 8 8 8 8 0 0 0 -8-8zm3.2354 10.9238-4.2354-2.6465v-4.2773h1v3.7227l3.7646 2.3535z"/></svg>;
    },
  });