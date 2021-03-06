import { defineComponent, SVGAttributes } from "vue";

  export const SvgEllipse = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 4.2c3.686 0 6.8 1.74019 6.8 3.8s-3.114 3.8-6.8 3.8-6.8-1.74019-6.8-3.8 3.114-3.8 6.8-3.8m0-1.2c-4.41828 0-8 2.23858-8 5s3.58172 5 8 5 8-2.23858 8-5-3.58172-5-8-5z"/></svg>;
    },
  });