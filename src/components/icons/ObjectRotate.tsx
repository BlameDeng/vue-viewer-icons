import { defineComponent, SVGAttributes } from "vue";

  export const SvgObjectRotate = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m12.9786 8.3218-1.331-1.331.6655-.6655-2.3293-.3328.3328 2.3293.6655-.6655 1.331 1.331zm-6.989-6.90759 2.57887 2.57879-4.57547 4.57539-2.57878-2.57879 4.57539-4.57539m-.00001-1.41421-5.9896 5.9896 3.993 3.993 5.9897-5.9896zm1.0104 10h1v1h-1zm2 0h2v1h-2zm3 0h2v1h-2zm3 0h1v1h-1zm-8 5h1v1h-1zm2 0h2v1h-2zm3 0h2v1h-2zm3 0h1v1h-1zm-8-3h1v2h-1zm8 0h1v2h-1z" fill-rule="evenodd"/></svg>;
    },
  });