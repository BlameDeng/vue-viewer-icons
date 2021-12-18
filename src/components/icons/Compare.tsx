import { defineComponent, SVGAttributes } from "vue";

  export const SvgCompare = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8.6 2.4h4l-2.8 5.2v.3c0 1.7 1.4 3 3.1 3s3.1-1.4 3.1-3v-.3l-2.8-5.2h.4v-.5h-11.2v.5h.4l-2.8 5.2v.3c0 1.7 1.4 3 3.1 3s3.1-1.4 3.1-3v-.3l-2.8-5.2h4.1v9.2h-2v1h5.1v-1h-2zm-8 5.2 2.5-4.7 2.5 4.7zm12.3-4.7 2.5 4.7h-5z"/></svg>;
    },
  });