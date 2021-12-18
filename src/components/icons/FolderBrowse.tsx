import { defineComponent, SVGAttributes } from "vue";

  export const SvgFolderBrowse = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.332,12H1a1.07539,1.07539,0,0,1-1-1V1A1.07539,1.07539,0,0,1,1,0H5A1.07539,1.07539,0,0,1,6,1V2h7a1.07539,1.07539,0,0,1,1,1V8.726L12.55176,7.27588a1.2877,1.2877,0,0,0-.918-.38233A1.30274,1.30274,0,0,0,10.332,8.19434Zm4.11674,1.09917,1.36385-.5529a.3.3,0,0,0,.09958-.49L11.84406,7.98209a.3.3,0,0,0-.51229.212V13.9175a.3.3,0,0,0,.41271.278l1.50178-.60886.98779,2.29443a.19659.19659,0,0,0,.2583.10285l.83038-.35754a.19655.19655,0,0,0,.10285-.25831Z"/></svg>;
    },
  });