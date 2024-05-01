import Vue from "vue";
import Router from "vue-router";
import CampagneHyundaiMobiel from "./components/CampagneHyundaiMobiel";
import CampagneHyundaiDesktopTest from "./components/CampagneHyundaiDesktopTest";
import { campagneHyundaiMobielData, campagneHyundaiDesktopTestData } from "./data";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/campagne-hyundai-mobiel",
      component: CampagneHyundaiMobiel,
      props: { ...campagneHyundaiMobielData },
    },
    {
      path: "/campagne-hyundai-desktop",
      component: CampagneHyundaiDesktopTest,
      props: { ...campagneHyundaiDesktopTestData },
    },
  ],
});




const resizeHandler = () => {
  if (window.innerWidth < 700) {
    if (router.currentRoute.path !== "/campagne-hyundai-mobiel") {
      router.replace("/campagne-hyundai-mobiel");
    }
  } else {
    if (router.currentRoute.path !== "/campagne-hyundai-desktop") {
      router.replace("/campagne-hyundai-desktop");
    }
  }
};

window.addEventListener("resize", resizeHandler);

window.addEventListener("load", resizeHandler);

export default router;
