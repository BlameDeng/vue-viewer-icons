import { defineComponent, SVGAttributes } from "vue";

  export const SvgDocumentReference = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m11 0v3h3zm-1 4v-4h-8v16h12v-12zm1.1 10.1h-6.2v-8.3h4.1v2.1h2.1zm-1.5-6.8v-1.5l1.6 1.6h-1.6z"/></svg>;
    },
  });