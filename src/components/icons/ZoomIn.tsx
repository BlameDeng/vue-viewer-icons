import { defineComponent, SVGAttributes } from "vue";

  export const SvgZoomIn = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 0a5.4931 5.4931 0 0 0 -4.3621 8.8406l-1.6569 1.6374-.25-.25a.3461.3461 0 0 0 -.5012 0l-3.6228 3.617a.3462.3462 0 0 0 0 .5l1.549 1.547a.3736.3736 0 0 0 .524 0l3.6-3.617a.3461.3461 0 0 0 0-.5005l-.251-.273 1.636-1.6345a5.4976 5.4976 0 1 0 3.335-9.867m0 9.5a4 4 0 1 1 4-4 4.0045 4.0045 0 0 1 -4 4"/><path d="m13 5h-2v-2h-1v2h-2v1h2v2h1v-2h2z"/></svg>;
    },
  });