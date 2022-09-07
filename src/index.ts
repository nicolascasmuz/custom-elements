import { init as initHeader } from "../components/header/header";
import { init as initFooter } from "../components/footer/footer";
import { init as initH1 } from "../components/h1/h1";
import { init as initH2 } from "../components/h2/h2";
import { init as initH3 } from "../components/h3/h3";
import { init as initP } from "../components/p/p";
import { init as initTextField } from "../components/text-field/text-field";
import { init as initVolver } from "../components/volver/volver";
import { init as initEnviar } from "../components/enviar/enviar";

(function main() {
  initHeader();
  initFooter();
  initH1();
  initH2();
  initH3();
  initP();
  initTextField();
  initVolver();
  initEnviar();
})();
