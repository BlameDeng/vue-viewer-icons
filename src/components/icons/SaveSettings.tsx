import { defineComponent, SVGAttributes } from "vue";

  export const SvgSaveSettings = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m16 12.7124v-1.4274l-1.10095-.222a3.04046 3.04046 0 0 0 -.18811-.45136l.62085-.93493-1.00891-1.00929-.93274.61981a3.02242 3.02242 0 0 0 -.45618-.19067l-.22052-1.09381h-1.42688l-.22056 1.09381a3.00974 3.00974 0 0 0 -.45856.19183l-.92883-.61725-1.00887 1.00928.619.932a3.0236 3.0236 0 0 0 -.19019.45739l-1.0932.22052v1.42731l1.09955.2218a3.02623 3.02623 0 0 0 .18945.45178l-.62085.93482 1.009 1.00928.93981-.62458a3.02883 3.02883 0 0 0 .44721.186l.22229 1.10326h1.42688l.22327-1.10748a3.0286 3.0286 0 0 0 .44427-.18585l.94037.62487 1.00891-1.00921-.625-.9411a3.03037 3.03037 0 0 0 .18634-.44629zm-2.47711-.7164a1.52313 1.52313 0 1 1 0-.00049zm-13.52289-11.996v12l2 2h5.54a4.19464 4.19464 0 0 1 -.33-1h-3.21a1.003 1.003 0 0 1 -1-1v-3a1.003 1.003 0 0 1 1-1h5.18a4.867 4.867 0 0 1 4.82-.47v-7.53zm12 6.5a.49511.49511 0 0 1 -.5.5h-9a.49511.49511 0 0 1 -.5-.5v-5a.49511.49511 0 0 1 .5-.5h9a.49511.49511 0 0 1 .5.5zm-7 2.5a1 1 0 0 1 1 1v1a1 1 0 0 1 -2 0v-1a1 1 0 0 1 1-1z"/></svg>;
    },
  });