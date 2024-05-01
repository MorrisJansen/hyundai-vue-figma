<template>
  <div class="container-center-horizontal">
    <div class="campagne-hyundai-desktop-test screen">
      <div class="overlap-group2-1">
        <div class="group-1-2">
          <div class="top-balk-1">
            <img
              class="logo-hyundai-1"
              src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg"
              alt="Logo Hyundai"
            />
            <keurmerk :src="keurmerkProps.src" :className="keurmerkProps.className" />
          </div>
        </div>
        <div class="section-header-1">
          <div class="overlap-group1-2">
            <div class="overlap-group-4" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
              <div class="flex-col">
                <div
                  class="tijdelijk-voor-maar-275-pm hyundaisansheadoffice-bold-white-41px"
                  v-html="tijdelijkVoorMaar275PM"
                ></div>
                <div class="ontdek-meer-1">{{ ontdekMeer }}</div>
              </div>
              <div class="navigatie-slider-1">
                <img class="arrow-left" :src="arrowLeft" alt="Arrow left" /><img
                  class="arrow-right"
                  :src="arrowRight"
                  alt="Arrow right"
                />
              </div>
            </div>
            <div class="cta-balk-1">
              <p
                class="private-lease-nu-tij-1 hyundaisansheadoffice-bold-midnight-blue-24px"
                v-html="privateLeaseNuTij"
              ></p>
              <x-button2 :arrowButton="xButton1Props.arrowButton" />
            </div>
          </div>
          <div class="hoofd-titel-tekst-1">
            <x-label :nieuw="xLabelProps.nieuw" />
            <div class="frame-5-1">
              <h1 class="de-vernieuwde-hyundai-i10-1" v-html="deVernieuwdeHyundaiI10"></h1>
              <div class="maak-een-groots-statement-1">{{ maakEenGrootsStatement }}</div>
            </div>
          </div>
          <p class="profiteer-nu-van-een-1 bodymedium">
            <span class="span0-1 bodymedium">{{ spanText1 }}</span
            ><span class="span1-1">{{ spanText2 }}</span>
          </p>
          <p class="het-maandbedrag-va-1 hyundaisansheadoffice-regular-normal-silver-16px">{{ hetMaandbedragVa }}</p>
        </div>
      </div>
      <div class="section-all-inclusive-1">
        <div class="overlap-group-5">
          <img class="vrouw-blij-auto-1" :src="vrouwBlijAuto" alt="vrouw blij auto" />
          <div class="voordelen-blokken-1">
            <div class="voordeel-1-1">
              <img class="stuurwiel" :src="stuurwiel" alt="stuurwiel" />
              <div
                class="rijden-in-een-nieuwe-hyundai-1 hyundaisansheadoffice-bold-midnight-blue-24px"
                v-html="rijdenInEenNieuweHyundai"
              ></div>
            </div>
            <voordeel2
              :coins="voordeel21Props.coins"
              :aantrekkelijkVastBedragPM="voordeel21Props.aantrekkelijkVastBedragPM"
            />
            <voordeel2
              :coins="voordeel22Props.coins"
              :aantrekkelijkVastBedragPM="voordeel22Props.aantrekkelijkVastBedragPM"
            />
            <voordeel2
              :coins="voordeel23Props.coins"
              :aantrekkelijkVastBedragPM="voordeel23Props.aantrekkelijkVastBedragPM"
            />
            <voordeel2
              :coins="voordeel24Props.coins"
              :aantrekkelijkVastBedragPM="voordeel24Props.aantrekkelijkVastBedragPM"
            />
          </div>
        </div>
        <div class="frame-19-1">
          <div class="titel-all-inclusive-1">
            <div class="hyundai-i10-2 hyundaisansheadoffice-bold-midnight-blue-18px">{{ hyundaiI101 }}</div>
            <p class="all-inclusive-geniet-1 hyundaisansheadoffice-bold-midnight-blue-48px">{{ allInclusiveGeniet }}</p>
          </div>
          <p
            class="vast-maandbedrag-inc-1 hyundaisansheadoffice-regular-normal-black-16px"
            v-html="vastMaandbedragInc"
          ></p>
        </div>
      </div>
      <div class="section-frisse-kijk-slider-1">
        <div class="titel-frisse-kijk-1">
          <div class="hyundai-i10-2 hyundaisansheadoffice-bold-midnight-blue-18px">{{ hyundaiI102 }}</div>
          <p class="een-frisse-kijk-op-een-gedurfd-ontwerp-1 hyundaisansheadoffice-bold-midnight-blue-48px">
            {{ eenFrisseKijkOpEenGedurfdOntwerp }}
          </p>
        </div>
        <div class="slider-images-1">
          <img class="hand-mobiel-1" :src="handMobiel" alt="hand mobiel" /><img
            class="x-auto"
            :src="binnenAuto"
            alt="binnen auto"
          /><img class="x-auto" :src="dashboardAuto" alt="dashboard auto" /><img
            class="binnen-auto-2-1"
            :src="binnenAuto2"
            alt="binnen auto 2"
          />
        </div>
        <div class="slider-indicator-1">
          <div class="x01-1"></div>
          <div class="slider-indicator-item-1"></div>
          <div class="slider-indicator-item-1"></div>
        </div>
      </div>
      <div class="section-uitvoeringen-tabel-1">
        <div class="tabel-sectie-1">
          <div class="uitvoeringen-en-hun-functionaliteiten-1 hyundaisansheadoffice-bold-midnight-blue-48px">
            {{ uitvoeringenEnHunFunctionaliteiten }}
          </div>
          <div class="tabel-1">
            <div class="functionaliteiten-1">
              <div class="titel-11">
                <div class="bill-montly-2 hyundaisansheadoffice-bold-white-41px">{{ billMontly1 }}</div>
              </div>
              <div class="onderdelen-4">
                <div class="frame-9-3 hyundaisansheadoffice-regular-normal-port-gore-21px">
                  <div class="profile-groups-3">{{ profileGroups }}</div>
                  <img class="separators-62" :src="separators1" alt="Separators" />
                  <div class="frame-9-item-1">{{ accountViwers }}</div>
                  <img class="separators-62" :src="separators2" alt="Separators" />
                  <div class="frame-9-item-1">{{ socialMediaDashboa }}</div>
                  <img class="separators-62" :src="separators3" alt="Separators" />
                  <div class="frame-9-item-1">{{ shopifyDashboard }}</div>
                  <img class="separators-62" :src="separators4" alt="Separators" />
                  <div class="frame-9-item-1">{{ mixedDragAndDrop }}</div>
                  <img class="separators-62" :src="separators5" alt="Separators" />
                  <div class="frame-9-item-1">{{ downloadablePdfRep }}</div>
                  <img class="separators-62" :src="separators6" alt="Separators" />
                  <div class="frame-9-item-1">{{ whiteLabelReports }}</div>
                  <img class="separators-62" :src="separators7" alt="Separators" />
                  <div class="frame-9-item-1">{{ competitorAnalytics }}</div>
                  <img class="separators-62" :src="separators8" alt="Separators" />
                  <div class="frame-9-item-1">{{ automatedEmailRepo }}</div>
                  <img class="separators-62" :src="separators9" alt="Separators" />
                  <div class="frame-9-item-1">{{ roiAnalyticsAndTr }}</div>
                  <img class="separators-62" :src="separators10" alt="Separators" />
                  <div class="frame-9-item-1">{{ correlationAnalysis }}</div>
                  <img class="separators-62" :src="separators11" alt="Separators" />
                  <p class="frame-9-item-1">{{ trendDetection1 }}</p>
                  <img class="separators-62" :src="separators12" alt="Separators" />
                  <div class="frame-9-item-1">{{ trendDetection2 }}</div>
                  <img class="separators-62" :src="separators13" alt="Separators" />
                  <p class="frame-9-item-1">{{ trendDetection3 }}</p>
                  <img class="separators-63" :src="separators14" alt="Separators" />
                  <div class="frame-9-item-1">{{ trendDetection4 }}</div>
                  <img class="separators-63" :src="separators15" alt="Separators" />
                  <div class="frame-9-item-1">{{ trendDetection5 }}</div>
                  <img class="separators-63" :src="separators16" alt="Separators" />
                  <div class="frame-9-item-1">{{ trendDetection6 }}</div>
                  <img class="separators-63" :src="separators17" alt="Separators" />
                  <div class="frame-9-item-1">{{ trendDetection7 }}</div>
                  <img class="separators-63" :src="separators18" alt="Separators" />
                  <div class="frame-9-item-1">{{ trendDetection8 }}</div>
                  <img class="separators-63" :src="separators19" alt="Separators" />
                  <div class="frame-9-item-1">{{ trendDetection9 }}</div>
                  <img class="separators-63" :src="separators20" alt="Separators" />
                  <div class="frame-9-item-1">{{ trendDetection10 }}</div>
                  <img class="separators-63" :src="separators21" alt="Separators" />
                  <div class="frame-9-item-1">{{ trendDetection11 }}</div>
                  <img class="separators-63" :src="separators22" alt="Separators" />
                  <div class="frame-9-item-1">{{ trendDetection12 }}</div>
                </div>
              </div>
            </div>
            <div class="tabel-item-1">
              <div class="titel-12">
                <div class="titel-13 hyundaisansheadoffice-bold-port-gore-41px">{{ titel1 }}</div>
              </div>
              <onderdelen :frame12Props="onderdelen1Props.frame12Props" />
            </div>
            <div class="tabel-item-1">
              <div class="titel-14">
                <div class="titel-15 hyundaisansheadoffice-bold-white-41px">
                  <span class="span0-2 hyundaisansheadoffice-bold-white-41px">{{ spanText3 }}</span
                  ><span class="span1-2">{{ spanText4 }}</span>
                </div>
              </div>
              <onderdelen2 :frame12Props="onderdelen2Props.frame12Props" />
            </div>
            <comfort-smart :titel="comfortSmart1Props.titel" :onderdelen2Props="comfortSmart1Props.onderdelen2Props" />
            <comfort-smart
              :titel="comfortSmart2Props.titel"
              :className="comfortSmart2Props.className"
              :onderdelen2Props="comfortSmart2Props.onderdelen2Props"
            />
            <div class="tabel-item-1">
              <div class="n-line-1">
                <div class="titel-16 hyundaisansheadoffice-bold-port-gore-41px">{{ titel2 }}</div>
              </div>
              <onderdelen :frame12Props="onderdelen2Props2.frame12Props" />
            </div>
          </div>
          <x-button2 :arrowButton="xButton2Props.arrowButton" />
        </div>
      </div>
      <div class="section-prijzentabel-1">
        <div class="prijzentabel-i10-comfort-1 hyundaisansheadoffice-bold-midnight-blue-48px">
          {{ prijzentabelI10Comfort }}
        </div>
        <div class="tabel-prijzen-1">
          <div class="aantal-maanden-1">
            <div class="titel-17">
              <div class="bill-montly-3 hyundaisansheadoffice-bold-white-32px">{{ billMontly2 }}</div>
            </div>
            <div class="onderdelen-5"><frame9 v-bind="frame9Props" /></div>
          </div>
          <div class="tabel-prijzen-item">
            <div class="titel-10">
              <div class="titel-18 hyundaisansheadoffice-bold-port-gore-32px">{{ titel3 }}</div>
            </div>
            <onderdelen3 :frame9Props="onderdelen31Props.frame9Props" />
          </div>
          <div class="tabel-prijzen-item">
            <div class="titel-10">
              <div class="titel-19 hyundaisansheadoffice-bold-port-gore-32px">{{ titel4 }}</div>
            </div>
            <onderdelen3 :frame9Props="onderdelen32Props.frame9Props" />
          </div>
        </div>
        <x-button2 :arrowButton="xButton3Props.arrowButton" :className="xButton3Props.className" />
      </div>
      <footer class="footer-1">
        <img class="line-2-1" :src="line2" alt="Line 2" />
        <p class="bekijk-de-privacy-1 hyundaisansheadoffice-regular-normal-silver-16px">{{ bekijkDePrivacy }}</p>
      </footer>
    </div>
  </div>
</template>

<script>
import Keurmerk from "./Keurmerk";
import XButton2 from "./XButton2";
import XLabel from "./XLabel";
import Voordeel2 from "./Voordeel2";
import Onderdelen from "./Onderdelen";
import Onderdelen2 from "./Onderdelen2";
import ComfortSmart from "./ComfortSmart";
import Frame9 from "./Frame9";
import Onderdelen3 from "./Onderdelen3";
export default {
  name: "CampagneHyundaiDesktopTest",
  components: {
    Keurmerk,
    XButton2,
    XLabel,
    Voordeel2,
    Onderdelen,
    Onderdelen2,
    ComfortSmart,
    Frame9,
    Onderdelen3,
  },
  props: [
    "overlapGroup",
    "tijdelijkVoorMaar275PM",
    "ontdekMeer",
    "arrowLeft",
    "arrowRight",
    "privateLeaseNuTij",
    "deVernieuwdeHyundaiI10",
    "maakEenGrootsStatement",
    "spanText1",
    "spanText2",
    "hetMaandbedragVa",
    "vrouwBlijAuto",
    "stuurwiel",
    "rijdenInEenNieuweHyundai",
    "hyundaiI101",
    "allInclusiveGeniet",
    "vastMaandbedragInc",
    "hyundaiI102",
    "eenFrisseKijkOpEenGedurfdOntwerp",
    "handMobiel",
    "binnenAuto",
    "dashboardAuto",
    "binnenAuto2",
    "uitvoeringenEnHunFunctionaliteiten",
    "billMontly1",
    "profileGroups",
    "separators1",
    "accountViwers",
    "separators2",
    "socialMediaDashboa",
    "separators3",
    "shopifyDashboard",
    "separators4",
    "mixedDragAndDrop",
    "separators5",
    "downloadablePdfRep",
    "separators6",
    "whiteLabelReports",
    "separators7",
    "competitorAnalytics",
    "separators8",
    "automatedEmailRepo",
    "separators9",
    "roiAnalyticsAndTr",
    "separators10",
    "correlationAnalysis",
    "separators11",
    "trendDetection1",
    "separators12",
    "trendDetection2",
    "separators13",
    "trendDetection3",
    "separators14",
    "trendDetection4",
    "separators15",
    "trendDetection5",
    "separators16",
    "trendDetection6",
    "separators17",
    "trendDetection7",
    "separators18",
    "trendDetection8",
    "separators19",
    "trendDetection9",
    "separators20",
    "trendDetection10",
    "separators21",
    "trendDetection11",
    "separators22",
    "trendDetection12",
    "titel1",
    "spanText3",
    "spanText4",
    "titel2",
    "prijzentabelI10Comfort",
    "billMontly2",
    "titel3",
    "titel4",
    "line2",
    "bekijkDePrivacy",
    "keurmerkProps",
    "xButton1Props",
    "xLabelProps",
    "voordeel21Props",
    "voordeel22Props",
    "voordeel23Props",
    "voordeel24Props",
    "onderdelen1Props",
    "onderdelen2Props",
    "comfortSmart1Props",
    "comfortSmart2Props",
    "onderdelen2Props2",
    "xButton2Props",
    "frame9Props",
    "onderdelen31Props",
    "onderdelen32Props",
    "xButton3Props",
  ],
};
</script>

<style>
.campagne-hyundai-desktop-test {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 7436px;
  overflow: hidden;
  width: 1920px;
}

.overlap-group2-1 {
  height: 1125px;
  margin-left: 4px;
  position: relative;
  width: 1924px;
}

.group-1-2 {
  display: flex;
  height: 138px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1920px;
}

.top-balk-1 {
  background-color: var(--white);
  box-shadow: 0px 31px 81px #00104c33;
  display: flex;
  gap: 1261px;
  height: 138.37px;
  position: relative;
  width: 1920px;
}

.logo-hyundai-1 {
  height: 42.37px;
  margin-left: 147px;
  margin-top: 48px;
  width: 308px;
}

.section-header-1 {
  height: 987px;
  left: 146px;
  position: absolute;
  top: 138px;
  width: 1778px;
}

.overlap-group1-2 {
  height: 987px;
  left: 1px;
  position: absolute;
  top: 0;
  width: 1773px;
}

.overlap-group-4 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  gap: 264px;
  height: 987px;
  justify-content: flex-end;
  left: 763px;
  min-width: 1010px;
  padding: 101.9px 160.1px;
  position: absolute;
  top: 0;
}

.flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 633px;
  min-height: 757px;
  width: 307px;
}

.tijdelijk-voor-maar-275-pm {
  letter-spacing: 0;
  line-height: 51px;
  margin-left: 0;
  min-height: 102px;
}

.ontdek-meer-1 {
  color: var(--white);
  font-family: var(--font-family-hyundai_sans_head_office-medium);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 6.84px;
  line-height: normal;
  min-height: 22px;
}

.navigatie-slider-1 {
  align-items: flex-start;
  display: inline-flex;
  gap: 43px;
  margin-bottom: 0.64px;
  position: relative;
}

.arrow-left {
  height: 24.98px;
  margin-bottom: -1.77px;
  margin-left: -3.54px;
  margin-top: -1.77px;
  position: relative;
  width: 24.98px;
}

.arrow-right {
  height: 24.98px;
  margin-bottom: -1.77px;
  margin-right: -3.54px;
  margin-top: -1.77px;
  position: relative;
  width: 24.98px;
}

.cta-balk-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 31px 81px #00104c33;
  display: inline-flex;
  gap: 181px;
  left: 0;
  overflow: hidden;
  padding: 21px 24px;
  position: absolute;
  top: 648px;
}

.private-lease-nu-tij-1,
.rijden-in-een-nieuwe-hyundai-1 {
  letter-spacing: 0;
  line-height: 36px;
  position: relative;
  width: fit-content;
}

.hoofd-titel-tekst-1 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
  left: 0;
  position: absolute;
  top: 116px;
}

.frame-5-1 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 5px;
  position: relative;
}

.de-vernieuwde-hyundai-i10-1 {
  color: var(--primary-blue);
  font-family: var(--font-family-hyundai_sans_head_office-bold);
  font-size: 82px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 90px;
  margin-top: -1px;
  position: relative;
  width: 734px;
}

.maak-een-groots-statement-1 {
  color: var(--primary-blue);
  font-family: var(--font-family-hyundai_sans_head_office-bold);
  font-size: 51px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 90px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.profiteer-nu-van-een-1 {
  color: var(--black);
  font-weight: 400;
  left: 0;
  line-height: 36px;
  position: absolute;
  top: 489px;
  width: 547px;
}

.span0-1 {
  font-weight: 500;
}

.span1-1 {
  font-family: var(--font-family-hyundai_sans_head_office-bold);
  font-size: var(--font-size-xl);
  font-weight: 700;
  letter-spacing: 0;
}

.het-maandbedrag-va-1 {
  left: 1px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: 894px;
  width: 575px;
}

.section-all-inclusive-1 {
  background-color: var(--light-blue);
  height: 1157px;
  margin-top: 130px;
  position: relative;
  width: 1920px;
}

.overlap-group-5 {
  height: 905px;
  left: 0;
  position: absolute;
  top: 112px;
  width: 1755px;
}

.vrouw-blij-auto-1 {
  height: 905px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 813px;
}

.voordelen-blokken-1 {
  align-items: flex-start;
  display: inline-flex;
  gap: 13.49px;
  left: 160px;
  position: absolute;
  top: 612px;
}

.voordeel-1-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 16.6px;
  box-shadow: 0px 26.98px 41.51px #26397e24;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 25.94px;
  overflow: hidden;
  padding: 46.7px 49.81px;
  position: relative;
}

.stuurwiel {
  height: 40px;
  position: relative;
  width: 40px;
}

.frame-19-1 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 38px;
  left: 967px;
  position: absolute;
  top: 193px;
}

.titel-all-inclusive-1 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.hyundai-i10-2 {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.all-inclusive-geniet-1 {
  letter-spacing: 0;
  line-height: 59px;
  position: relative;
  width: 674px;
}

.vast-maandbedrag-inc-1 {
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  width: 695px;
}

.section-frisse-kijk-slider-1 {
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  height: 1003px;
  margin-right: -376px;
  margin-top: 157px;
  width: 2189px;
}

.titel-frisse-kijk-1 {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 24px;
  height: 115px;
  margin-left: 413px;
  position: relative;
  width: 867px;
}

.een-frisse-kijk-op-een-gedurfd-ontwerp-1 {
  letter-spacing: 0;
  line-height: 59px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.slider-images-1 {
  align-items: flex-start;
  display: inline-flex;
  gap: 55px;
  height: 633px;
  margin-top: 70px;
  position: relative;
  width: 2189px;
}

.hand-mobiel-1 {
  height: 633px;
  object-fit: cover;
  position: relative;
  width: 506px;
}

.x-auto {
  height: 633px;
  position: relative;
  width: 506px;
}

.binnen-auto-2-1 {
  height: 633px;
  object-fit: cover;
  position: relative;
  width: 130px;
}

.slider-indicator-1 {
  align-items: flex-start;
  display: inline-flex;
  gap: 16px;
  height: 8px;
  margin-left: 741px;
  margin-top: 177px;
  position: relative;
  width: 147px;
}

.x01-1 {
  background-color: var(--primary-blue);
  border-radius: 40px;
  height: 8px;
  position: relative;
  width: 63px;
}

.slider-indicator-item-1 {
  background-color: var(--text-grey);
  border-radius: 40px;
  height: 8px;
  position: relative;
  width: 26px;
}

.section-uitvoeringen-tabel-1 {
  background-color: var(--light-blue);
  display: flex;
  height: 2413px;
  margin-top: 188px;
  width: 1920px;
}

.tabel-sectie-1 {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 63px;
  height: 2110.12px;
  margin-left: 146px;
  margin-top: 145px;
  position: relative;
  width: 1623.24px;
}

.uitvoeringen-en-hun-functionaliteiten-1 {
  letter-spacing: 0;
  line-height: 59px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.tabel-1 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 7.11px;
  position: relative;
}

.functionaliteiten-1 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 7.11px;
  position: relative;
}

.titel-11 {
  align-items: center;
  background-color: var(--primary-blue);
  border: 1px solid;
  border-color: var(--text-grey);
  border-radius: 10px;
  display: flex;
  height: 210.21px;
  margin-left: -1px;
  margin-right: -1px;
  margin-top: -1px;
  overflow: hidden;
  position: relative;
  width: 552.48px;
}

.bill-montly-2 {
  flex: 1;
  height: 51px;
  letter-spacing: 0;
  line-height: 51px;
  margin-left: 13.16%;
  margin-right: 11%;
  margin-top: -1.6px;
  width: 418.98px;
}

.onderdelen-4 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--text-grey);
  border-radius: 10px;
  display: flex;
  height: 1608.8px;
  overflow: hidden;
  position: relative;
  width: 550.48px;
}

.frame-9-3 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 20.31px;
  height: 1517.1px;
  margin-left: 26.4px;
  margin-top: 53px;
  position: relative;
  width: 503px;
}

.profile-groups-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.02px;
  position: relative;
  width: fit-content;
}

.separators-62 {
  height: 1.15px;
  position: relative;
  width: 336.16px;
}

.frame-9-item-1 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.separators-63 {
  height: 1.15px;
  position: relative;
  width: 336.16px;
}

.tabel-item-1 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 7px;
  overflow: hidden;
  position: relative;
}

.titel-12 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--text-grey);
  border-radius: 10px;
  display: flex;
  height: 208.21px;
  position: relative;
  width: 207.19px;
}

.titel-13 {
  height: 51px;
  letter-spacing: 0;
  line-height: 51px;
  margin-left: 35.2px;
  margin-top: 65.6px;
  text-align: center;
  white-space: nowrap;
  width: 129px;
}

.titel-14 {
  background-color: var(--primary-blue);
  border: 1px solid;
  border-color: var(--text-grey);
  border-radius: 10px;
  display: flex;
  height: 208.21px;
  position: relative;
  width: 207.19px;
}

.titel-15 {
  height: 71px;
  letter-spacing: 0;
  line-height: 41px;
  margin-left: 16.9px;
  margin-top: 65.6px;
  text-align: center;
  width: 164px;
}

.span0-2 {
  line-height: 51px;
}

.span1-2 {
  color: var(--white);
  font-family: var(--font-family-hyundai_sans_head_office-regular);
  font-size: var(--font-size-l);
  font-weight: 400;
}

.n-line-1 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--text-grey);
  border-radius: 10px;
  display: flex;
  height: 208.21px;
  position: relative;
  width: 208.43px;
}

.titel-16 {
  height: 51px;
  letter-spacing: 0;
  line-height: 51px;
  margin-left: 2.4px;
  margin-top: 65.6px;
  text-align: center;
  width: 206.07px;
}

.section-prijzentabel-1 {
  display: flex;
  flex-direction: column;
  gap: 63px;
  height: 749px;
  margin-left: 1.22px;
  margin-top: 187px;
  position: relative;
  width: 737px;
}

.prijzentabel-i10-comfort-1 {
  height: 59px;
  letter-spacing: 0;
  line-height: 59px;
  margin-left: 91.1px;
  white-space: nowrap;
  width: 553px;
}

.tabel-prijzen-1 {
  align-items: flex-start;
  display: inline-flex;
  gap: 7.11px;
  height: 463px;
  position: relative;
  width: 735.22px;
}

.aantal-maanden-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 7.11px;
  position: relative;
  width: 241px;
}

.titel-17 {
  align-items: center;
  background-color: var(--primary-blue);
  border: 1px solid;
  border-color: var(--text-grey);
  border-radius: 10px;
  display: flex;
  height: 131px;
  margin-left: -1px;
  margin-top: -1px;
  overflow: hidden;
  position: relative;
  width: 242px;
}

.bill-montly-3 {
  flex: 1;
  height: 64px;
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 13.1%;
  margin-right: 11.42%;
  margin-top: -1px;
  width: 182.67px;
}

.onderdelen-5 {
  background-color: var(--light-blue);
  border: 1px solid;
  border-color: var(--text-grey);
  border-radius: 10px;
  display: flex;
  flex: 1;
  flex-grow: 1;
  margin-bottom: -1px;
  margin-left: -1px;
  overflow: hidden;
  position: relative;
  width: 242px;
}

.tabel-prijzen-item {
  align-items: flex-start;
  align-self: stretch;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.titel-10 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--text-grey);
  border-radius: 10px;
  display: flex;
  height: 127px;
  position: relative;
  width: 240px;
}

.titel-18 {
  height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 30.1px;
  margin-top: 44px;
  text-align: center;
  white-space: nowrap;
  width: 158px;
}

.titel-19 {
  height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 9.6px;
  margin-top: 44px;
  text-align: center;
  white-space: nowrap;
  width: 221px;
}

.footer-1 {
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  gap: 50px;
  height: 74px;
  margin-left: 3px;
  margin-top: 194px;
  width: 1753px;
}

.line-2-1 {
  height: 1px;
  margin-left: -2px;
  margin-top: -1px;
  object-fit: cover;
  width: 1751px;
}

.bekijk-de-privacy-1 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: -2px;
  text-align: center;
  width: 575px;
}
</style>
