import { defineComponent, SVGAttributes } from "vue";

  export const SvgGesturePinch = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15.99969 9.15967a1.05056 1.05056 0 0 0 -1.08648-1.01526 1.02955 1.02955 0 0 0 -.90821.49066v-.03387a1.06472 1.06472 0 0 0 -1.0866-1.0322 1.054 1.054 0 0 0 -.90851.47394v-.01694a1.06445 1.06445 0 0 0 -1.08655-1.03229 1.05341 1.05341 0 0 0 -.90833.47376l-.01293.01819v-2.48566c0-.0238-.01191-.04376-.01355-.06714a.98049.98049 0 0 0 -.03453-.17041.97346.97346 0 0 0 -.07123-.21185c-.00824-.0163-.00769-.03443-.017-.05042v-.00006a.9334.9334 0 0 0 -.07263-.0824.97248.97248 0 0 0 -.148-.16778 1.35248 1.35248 0 0 0 -.3247-.18555.97163.97163 0 0 0 -.19581-.03949.94135.94135 0 0 0 -.12329-.0249c-.0213 0-.03906.0108-.06.01208a1.58764 1.58764 0 0 0 -.38257.10224c-.01911.00946-.04016.009-.0589.01984l-2.59809 1.5a.99985.99985 0 0 0 -.366 1.366v.00006a1 1 0 0 0 1.366.366l1.09888-.63446v3.54968a.12122.12122 0 0 1 -.12787-.03546l-1.06976-1a1.08823 1.08823 0 0 0 -1.346-.11481.99813.99813 0 0 0 -.44867.6886.95018.95018 0 0 0 .24164.78687l2.64014 3.03276a3.9533 3.9533 0 0 0 3.01965 1.3606h1.63921a3.48323 3.48323 0 0 0 2.43292-.96722 3.17187 3.17187 0 0 0 1.01808-2.31147z" fill-rule="evenodd"/><path d="m7.35352 1.35352-1.5 1.5 1.14648 1.14648h-3v-3l1.14648 1.14648 1.5-1.5a.5.5 0 0 1 .707.707zm-5.207 3.793-1.5 1.5a.5.5 0 0 0 .707.707l1.5-1.5 1.14648 1.14648v-3h-3z" opacity=".55"/></svg>;
    },
  });