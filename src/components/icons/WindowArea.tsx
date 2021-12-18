import { defineComponent, SVGAttributes } from "vue";

  export const SvgWindowArea = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m6 0v1h-2v-1zm-6 .00354v1.99646h1v-1h1v-1zm1 3.99646h-1v2h1zm0 4h-1v2h1zm0 4h-1v3h2v-1h-1zm3 2v1h2v-1zm4 0v1h2v-1zm6 0h-2v1h3v-2h-1zm0-5v2h1v-2zm1-4.47a4.55817 4.55817 0 0 1 -4.52 4.6h-.08a4.52722 4.52722 0 0 1 -2.6-.79l-3.7 3.67-1.1-1.09 3.7-3.67a4.8688 4.8688 0 0 1 -.8-2.58 4.49879 4.49879 0 0 1 4.35-4.66.75608.75608 0 0 1 .15-.01 4.56666 4.56666 0 0 1 4.6 4.53zm-1.4.035a3.1001 3.1001 0 1 0 -3.1001 3.1 3.10007 3.10007 0 0 0 3.1001-3.1z"/></svg>;
    },
  });