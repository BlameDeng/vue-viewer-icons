import "./App.css";

import { defineComponent } from "vue";

import { HelloWorld } from "./HelloWorld";

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <h1>vue-viewer-icons</h1>
        <p>
          Vue wrapper for svgs from
          <a
            href="https://www.npmjs.com/package/@itwin/itwinui-icons"
            target="_blank"
          >
            @itwin/itwinui-icons
          </a>
        </p>
        <HelloWorld />
      </>
    );
  },
});
