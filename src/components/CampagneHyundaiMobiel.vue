<template>
  <div class="container-center-horizontal">
    <div class="campagne-hyundai-mobiel screen">
      <div class="group-1">
        <div class="top-balk">
          <img
            class="logo-hyundai"
            src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/logo-hyundai.svg"
            alt="Logo Hyundai"
          />
          <keurmerk :src="keurmerkProps.src" />
        </div>
      </div>
      <div class="overlap-group4">
        <div class="section-header">
          <div class="hoofd-titel-tekst">
            <x-label :nieuw="xLabelProps.nieuw" />
            <div class="frame-5">
              <img class="de-vernieuwde-hyundai-i10" :src="deVernieuwdeHyundaiI10" alt="De vernieuwde Hyundai i10" />
              <div class="maak-een-groots-statement">{{ maakEenGrootsStatement }}</div>
            </div>
          </div>
          <p
            class="profiteer-nu-van-een hyundaisansheadoffice-regular-normal-black-16px"
            v-html="profiteerNuVanEen"
          ></p>
          <div class="overlap-group3">
            <div class="groot-beeld-slider" :style="{ 'background-image': 'url(' + grootBeeldSlider + ')' }"></div>
            <div class="cta-balk">
              <p
                class="private-lease-nu-tij hyundaisansheadoffice-bold-midnight-blue-24px"
                v-html="privateLeaseNuTij"
              ></p>
              <x-button :vraagOfferteAan="xButton1Props.vraagOfferteAan" :arrow="xButton1Props.arrow" />
            </div>
          </div>
          <p class="het-maandbedrag-va">{{ hetMaandbedragVa }}</p>
        </div>
        <div class="navigatie-slider">
          <img class="arrow" :src="arrow1" alt="Arrow" /><img class="arrow-1" :src="arrow2" alt="Arrow" />
        </div>
        <div class="ontdek-meer">{{ ontdekMeer }}</div>
      </div>
      <div class="section-all-inclusive">
        <div class="frame-19">
          <div class="titel-all-inclusive">
            <div class="hyundai-i10 hyundaisansheadoffice-bold-midnight-blue-18px">{{ hyundaiI101 }}</div>
            <h1 class="all-inclusive-geniet hyundaisansheadoffice-bold-midnight-blue-32px">{{ allInclusiveGeniet }}</h1>
          </div>
          <p
            class="vast-maandbedrag-inc hyundaisansheadoffice-regular-normal-black-16px"
            v-html="vastMaandbedragInc"
          ></p>
        </div>
        <div class="overlap-group">
          <img class="vrouw-blij-auto" :src="vrouwBlijAuto" alt="vrouw blij auto" />
          <div class="voordelen-blokken">
            <voordeel1
              :iconsLease="voordeel11Props.iconsLease"
              :rijdenInEenNieuweHyundai="voordeel11Props.rijdenInEenNieuweHyundai"
            />
            <voordeel1
              :iconsLease="voordeel12Props.iconsLease"
              :rijdenInEenNieuweHyundai="voordeel12Props.rijdenInEenNieuweHyundai"
              :className="voordeel12Props.className"
            />
            <voordeel1
              :iconsLease="voordeel13Props.iconsLease"
              :rijdenInEenNieuweHyundai="voordeel13Props.rijdenInEenNieuweHyundai"
              :className="voordeel13Props.className"
            />
            <voordeel1
              :iconsLease="voordeel14Props.iconsLease"
              :rijdenInEenNieuweHyundai="voordeel14Props.rijdenInEenNieuweHyundai"
              :className="voordeel14Props.className"
            />
            <voordeel1
              :iconsLease="voordeel15Props.iconsLease"
              :rijdenInEenNieuweHyundai="voordeel15Props.rijdenInEenNieuweHyundai"
              :className="voordeel15Props.className"
            />
          </div>
        </div>
      </div>
      <div class="section-frisse-kijk-slider">
        <div class="titel-frisse-kijk">
          <div class="hyundai-i10-1 hyundaisansheadoffice-bold-midnight-blue-24px">{{ hyundaiI102 }}</div>
          <p class="een-frisse-kijk-op-een-gedurfd-ontwerp hyundaisansheadoffice-bold-midnight-blue-32px">
            {{ eenFrisseKijkOpEenGedurfdOntwerp }}
          </p>
        </div>
        <div class="slider-images">
          <img class="hand-mobiel" :src="handMobiel" alt="hand mobiel" /><img
            class="binnen-auto"
            :src="binnenAuto"
            alt="binnen auto"
          /><img class="dashboard-auto" :src="dashboardAuto" alt="dashboard auto" /><img
            class="binnen-auto-2"
            :src="binnenAuto2"
            alt="binnen auto 2"
          />
        </div>
      </div>
      <div class="slider-indicator">
        <div class="x01"></div>
        <div class="slider-indicator-item"></div>
        <div class="slider-indicator-item"></div>
      </div>
      <div class="section-uitvoeringen-tabel">
        <div class="overlap-group2">
          <div class="rectangle-2"></div>
          <div class="tabel-sectie">
            <div class="uitvoeringen-en-hun-functionaliteiten hyundaisansheadoffice-bold-midnight-blue-32px">
              {{ uitvoeringenEnHunFunctionaliteiten }}
            </div>
            <div class="tabel">
              <div class="functionaliteiten">
                <div class="titel-3" :style="{ 'background-image': 'url(' + titel1 + ')' }">
                  <div class="bill-montly hyundaisansheadoffice-bold-white-23-8px">{{ billMontly1 }}</div>
                </div>
                <div class="onderdelen-2" :style="{ 'background-image': 'url(' + onderdelen + ')' }">
                  <img class="frame-9" :src="frame9" alt="Frame 9" />
                </div>
              </div>
              <div class="tabel-item">
                <div class="titel">
                  <div class="overlap-group-1">
                    <img class="base" :src="base1" alt="Base" />
                    <div class="titel-4 hyundaisansheadoffice-bold-port-gore-23-8px">{{ titel2 }}</div>
                  </div>
                </div>
                <div class="onderdelen">
                  <div class="overlap-group1">
                    <img class="base-1" :src="base2" alt="Base" />
                    <div class="frame-1">
                      <img class="tabel-icons-5" :src="tabelIcons1" alt="Tabel icons" /><img
                        class="separators-6"
                        :src="separators1"
                        alt="Separators"
                      /><img class="tabel-icons-6" :src="tabelIcons2" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators2"
                        alt="Separators"
                      /><img class="tabel-icons-7" :src="tabelIcons3" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators3"
                        alt="Separators"
                      /><img class="tabel-icons-8" :src="tabelIcons4" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators4"
                        alt="Separators"
                      /><img class="tabel-icons-9" :src="tabelIcons5" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators5"
                        alt="Separators"
                      /><img class="tabel-icons-10" :src="tabelIcons6" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators6"
                        alt="Separators"
                      /><img class="tabel-icons-11" :src="tabelIcons7" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators7"
                        alt="Separators"
                      /><img class="tabel-icons-12" :src="tabelIcons8" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators8"
                        alt="Separators"
                      /><img class="tabel-icons-13" :src="tabelIcons9" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators9"
                        alt="Separators"
                      /><img class="tabel-icons-14" :src="tabelIcons10" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators10"
                        alt="Separators"
                      /><img class="tabel-icons-15" :src="tabelIcons11" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators11"
                        alt="Separators"
                      /><img class="tabel-icons-16" :src="tabelIcons12" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators12"
                        alt="Separators"
                      /><img class="tabel-icons" :src="tabelIcons13" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators13"
                        alt="Separators"
                      /><img class="tabel-icons" :src="tabelIcons14" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators14"
                        alt="Separators"
                      /><img class="tabel-icons" :src="tabelIcons15" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators15"
                        alt="Separators"
                      /><img class="tabel-icons" :src="tabelIcons16" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators16"
                        alt="Separators"
                      /><img class="tabel-icons" :src="tabelIcons17" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators17"
                        alt="Separators"
                      /><img class="tabel-icons" :src="tabelIcons18" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators18"
                        alt="Separators"
                      /><img class="tabel-icons" :src="tabelIcons19" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators19"
                        alt="Separators"
                      /><img class="tabel-icons" :src="tabelIcons20" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators20"
                        alt="Separators"
                      /><img class="tabel-icons" :src="tabelIcons21" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators21"
                        alt="Separators"
                      /><img class="tabel-icons" :src="tabelIcons22" alt="Tabel icons" /><img
                        class="separators"
                        :src="separators22"
                        alt="Separators"
                      /><img class="tabel-icons" :src="tabelIcons23" alt="Tabel icons" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="tabel-item">
                <div class="titel">
                  <img class="base-2" :src="base3" alt="Base" />
                  <div class="titel-5 hyundaisansheadoffice-bold-white-23-8px">
                    <span class="span0 hyundaisansheadoffice-bold-white-23-8px">{{ spanText1 }}</span
                    ><span class="span1">{{ spanText2 }}</span>
                  </div>
                </div>
                <div class="onderdelen">
                  <img class="base-3" :src="base4" alt="Base" />
                  <div class="frame-1">
                    <img class="tabel-icons-17" :src="tabelIcons24" alt="Tabel icons" /><img
                      class="separators-7"
                      :src="separators23"
                      alt="Separators"
                    /><img class="tabel-icons-18" :src="tabelIcons25" alt="Tabel icons" /><img
                      class="separators-8"
                      :src="separators24"
                      alt="Separators"
                    /><img class="tabel-icons-19" :src="tabelIcons26" alt="Tabel icons" /><img
                      class="separators-9"
                      :src="separators25"
                      alt="Separators"
                    /><img class="tabel-icons-20" :src="tabelIcons27" alt="Tabel icons" /><img
                      class="separators-10"
                      :src="separators26"
                      alt="Separators"
                    /><img class="tabel-icons-21" :src="tabelIcons28" alt="Tabel icons" /><img
                      class="separators-11"
                      :src="separators27"
                      alt="Separators"
                    /><img class="tabel-icons-22" :src="tabelIcons29" alt="Tabel icons" /><img
                      class="separators-12"
                      :src="separators28"
                      alt="Separators"
                    /><img class="tabel-icons-23" :src="tabelIcons30" alt="Tabel icons" /><img
                      class="separators-13"
                      :src="separators29"
                      alt="Separators"
                    /><img class="tabel-icons-24" :src="tabelIcons31" alt="Tabel icons" /><img
                      class="separators-14"
                      :src="separators30"
                      alt="Separators"
                    /><img class="tabel-icons-25" :src="tabelIcons32" alt="Tabel icons" /><img
                      class="separators-15"
                      :src="separators31"
                      alt="Separators"
                    /><img class="tabel-icons-26" :src="tabelIcons33" alt="Tabel icons" /><img
                      class="separators-16"
                      :src="separators32"
                      alt="Separators"
                    /><img class="tabel-icons-27" :src="tabelIcons34" alt="Tabel icons" /><img
                      class="separators-17"
                      :src="separators33"
                      alt="Separators"
                    /><img class="tabel-icons-28" :src="tabelIcons35" alt="Tabel icons" /><img
                      class="separators-18"
                      :src="separators34"
                      alt="Separators"
                    /><img class="tabel-icons-1" :src="tabelIcons36" alt="Tabel icons" /><img
                      class="separators-1"
                      :src="separators35"
                      alt="Separators"
                    /><img class="tabel-icons-1" :src="tabelIcons37" alt="Tabel icons" /><img
                      class="separators-1"
                      :src="separators36"
                      alt="Separators"
                    /><img class="tabel-icons-1" :src="tabelIcons38" alt="Tabel icons" /><img
                      class="separators-1"
                      :src="separators37"
                      alt="Separators"
                    /><img class="tabel-icons-1" :src="tabelIcons39" alt="Tabel icons" /><img
                      class="separators-1"
                      :src="separators38"
                      alt="Separators"
                    /><img class="tabel-icons-1" :src="tabelIcons40" alt="Tabel icons" /><img
                      class="separators-1"
                      :src="separators39"
                      alt="Separators"
                    /><img class="tabel-icons-1" :src="tabelIcons41" alt="Tabel icons" /><img
                      class="separators-1"
                      :src="separators40"
                      alt="Separators"
                    /><img class="tabel-icons-1" :src="tabelIcons42" alt="Tabel icons" /><img
                      class="separators-1"
                      :src="separators41"
                      alt="Separators"
                    /><img class="tabel-icons-1" :src="tabelIcons43" alt="Tabel icons" /><img
                      class="separators-1"
                      :src="separators42"
                      alt="Separators"
                    /><img class="tabel-icons-1" :src="tabelIcons44" alt="Tabel icons" /><img
                      class="separators-1"
                      :src="separators43"
                      alt="Separators"
                    /><img class="tabel-icons-1" :src="tabelIcons45" alt="Tabel icons" /><img
                      class="separators-1"
                      :src="separators44"
                      alt="Separators"
                    /><img class="tabel-icons-1" :src="tabelIcons46" alt="Tabel icons" />
                  </div>
                </div>
              </div>
              <div class="tabel-item">
                <div class="titel">
                  <img class="base-4" :src="base5" alt="Base" />
                  <div class="titel-1 hyundaisansheadoffice-bold-port-gore-23-8px">{{ titel3 }}</div>
                </div>
                <div class="onderdelen">
                  <img class="base-5" :src="base6" alt="Base" />
                  <div class="frame-1">
                    <img class="tabel-icons-29" :src="tabelIcons47" alt="Tabel icons" /><img
                      class="separators-19"
                      :src="separators45"
                      alt="Separators"
                    /><img class="tabel-icons-30" :src="tabelIcons48" alt="Tabel icons" /><img
                      class="separators-20"
                      :src="separators46"
                      alt="Separators"
                    /><img class="tabel-icons-31" :src="tabelIcons49" alt="Tabel icons" /><img
                      class="separators-21"
                      :src="separators47"
                      alt="Separators"
                    /><img class="tabel-icons-32" :src="tabelIcons50" alt="Tabel icons" /><img
                      class="separators-22"
                      :src="separators48"
                      alt="Separators"
                    /><img class="tabel-icons-33" :src="tabelIcons51" alt="Tabel icons" /><img
                      class="separators-23"
                      :src="separators49"
                      alt="Separators"
                    /><img class="tabel-icons-34" :src="tabelIcons52" alt="Tabel icons" /><img
                      class="separators-24"
                      :src="separators50"
                      alt="Separators"
                    /><img class="tabel-icons-35" :src="tabelIcons53" alt="Tabel icons" /><img
                      class="separators-25"
                      :src="separators51"
                      alt="Separators"
                    /><img class="tabel-icons-36" :src="tabelIcons54" alt="Tabel icons" /><img
                      class="separators-26"
                      :src="separators52"
                      alt="Separators"
                    /><img class="tabel-icons-37" :src="tabelIcons55" alt="Tabel icons" /><img
                      class="separators-27"
                      :src="separators53"
                      alt="Separators"
                    /><img class="tabel-icons-38" :src="tabelIcons56" alt="Tabel icons" /><img
                      class="separators-28"
                      :src="separators54"
                      alt="Separators"
                    /><img class="tabel-icons-39" :src="tabelIcons57" alt="Tabel icons" /><img
                      class="separators-29"
                      :src="separators55"
                      alt="Separators"
                    /><img class="tabel-icons-40" :src="tabelIcons58" alt="Tabel icons" /><img
                      class="separators-30"
                      :src="separators56"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons59" alt="Tabel icons" /><img
                      class="separators-2"
                      :src="separators57"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons60" alt="Tabel icons" /><img
                      class="separators-2"
                      :src="separators58"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons61" alt="Tabel icons" /><img
                      class="separators-2"
                      :src="separators59"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons62" alt="Tabel icons" /><img
                      class="separators-2"
                      :src="separators60"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons63" alt="Tabel icons" /><img
                      class="separators-2"
                      :src="separators61"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons64" alt="Tabel icons" /><img
                      class="separators-2"
                      :src="separators62"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons65" alt="Tabel icons" /><img
                      class="separators-2"
                      :src="separators63"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons66" alt="Tabel icons" /><img
                      class="separators-2"
                      :src="separators64"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons67" alt="Tabel icons" /><img
                      class="separators-2"
                      :src="separators65"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons68" alt="Tabel icons" /><img
                      class="separators-2"
                      :src="separators66"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons69" alt="Tabel icons" />
                  </div>
                </div>
              </div>
              <div class="tabel-item">
                <div class="titel">
                  <img class="base-6" :src="base7" alt="Base" />
                  <div class="titel-1 hyundaisansheadoffice-bold-port-gore-23-8px">{{ titel4 }}</div>
                </div>
                <div class="onderdelen">
                  <img class="base-7" :src="base8" alt="Base" />
                  <div class="frame-1">
                    <img class="tabel-icons-41" :src="tabelIcons70" alt="Tabel icons" /><img
                      class="separators-31"
                      :src="separators67"
                      alt="Separators"
                    /><img class="tabel-icons-42" :src="tabelIcons71" alt="Tabel icons" /><img
                      class="separators-32"
                      :src="separators68"
                      alt="Separators"
                    /><img class="tabel-icons-43" :src="tabelIcons72" alt="Tabel icons" /><img
                      class="separators-33"
                      :src="separators69"
                      alt="Separators"
                    /><img class="tabel-icons-44" :src="tabelIcons73" alt="Tabel icons" /><img
                      class="separators-34"
                      :src="separators70"
                      alt="Separators"
                    /><img class="tabel-icons-45" :src="tabelIcons74" alt="Tabel icons" /><img
                      class="separators-35"
                      :src="separators71"
                      alt="Separators"
                    /><img class="tabel-icons-46" :src="tabelIcons75" alt="Tabel icons" /><img
                      class="separators-36"
                      :src="separators72"
                      alt="Separators"
                    /><img class="tabel-icons-47" :src="tabelIcons76" alt="Tabel icons" /><img
                      class="separators-37"
                      :src="separators73"
                      alt="Separators"
                    /><img class="tabel-icons-48" :src="tabelIcons77" alt="Tabel icons" /><img
                      class="separators-38"
                      :src="separators74"
                      alt="Separators"
                    /><img class="tabel-icons-49" :src="tabelIcons78" alt="Tabel icons" /><img
                      class="separators-39"
                      :src="separators75"
                      alt="Separators"
                    /><img class="tabel-icons-50" :src="tabelIcons79" alt="Tabel icons" /><img
                      class="separators-40"
                      :src="separators76"
                      alt="Separators"
                    /><img class="tabel-icons-51" :src="tabelIcons80" alt="Tabel icons" /><img
                      class="separators-41"
                      :src="separators77"
                      alt="Separators"
                    /><img class="tabel-icons-52" :src="tabelIcons81" alt="Tabel icons" /><img
                      class="separators-42"
                      :src="separators78"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons82" alt="Tabel icons" /><img
                      class="separators-3"
                      :src="separators79"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons83" alt="Tabel icons" /><img
                      class="separators-3"
                      :src="separators80"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons84" alt="Tabel icons" /><img
                      class="separators-3"
                      :src="separators81"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons85" alt="Tabel icons" /><img
                      class="separators-3"
                      :src="separators82"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons86" alt="Tabel icons" /><img
                      class="separators-3"
                      :src="separators83"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons87" alt="Tabel icons" /><img
                      class="separators-3"
                      :src="separators84"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons88" alt="Tabel icons" /><img
                      class="separators-3"
                      :src="separators85"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons89" alt="Tabel icons" /><img
                      class="separators-3"
                      :src="separators86"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons90" alt="Tabel icons" /><img
                      class="separators-3"
                      :src="separators87"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons91" alt="Tabel icons" /><img
                      class="separators-3"
                      :src="separators88"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons92" alt="Tabel icons" />
                  </div>
                </div>
              </div>
              <div class="tabel-item">
                <div class="n-line">
                  <img class="base-8" :src="base9" alt="Base" />
                  <div class="titel-6 hyundaisansheadoffice-bold-port-gore-23-8px">{{ titel5 }}</div>
                </div>
                <div class="onderdelen">
                  <img class="base-9" :src="base10" alt="Base" />
                  <div class="frame-16">
                    <img class="tabel-icons-53" :src="tabelIcons93" alt="Tabel icons" /><img
                      class="separators-43"
                      :src="separators89"
                      alt="Separators"
                    /><img class="tabel-icons-54" :src="tabelIcons94" alt="Tabel icons" /><img
                      class="separators-44"
                      :src="separators90"
                      alt="Separators"
                    /><img class="tabel-icons-55" :src="tabelIcons95" alt="Tabel icons" /><img
                      class="separators-45"
                      :src="separators91"
                      alt="Separators"
                    /><img class="tabel-icons-56" :src="tabelIcons96" alt="Tabel icons" /><img
                      class="separators-46"
                      :src="separators92"
                      alt="Separators"
                    /><img class="tabel-icons-57" :src="tabelIcons97" alt="Tabel icons" /><img
                      class="separators-47"
                      :src="separators93"
                      alt="Separators"
                    /><img class="tabel-icons-58" :src="tabelIcons98" alt="Tabel icons" /><img
                      class="separators-48"
                      :src="separators94"
                      alt="Separators"
                    /><img class="tabel-icons-59" :src="tabelIcons99" alt="Tabel icons" /><img
                      class="separators-49"
                      :src="separators95"
                      alt="Separators"
                    /><img class="tabel-icons-60" :src="tabelIcons100" alt="Tabel icons" /><img
                      class="separators-50"
                      :src="separators96"
                      alt="Separators"
                    /><img class="tabel-icons-61" :src="tabelIcons101" alt="Tabel icons" /><img
                      class="separators-51"
                      :src="separators97"
                      alt="Separators"
                    /><img class="tabel-icons-62" :src="tabelIcons102" alt="Tabel icons" /><img
                      class="separators-52"
                      :src="separators98"
                      alt="Separators"
                    /><img class="tabel-icons-63" :src="tabelIcons103" alt="Tabel icons" /><img
                      class="separators-53"
                      :src="separators99"
                      alt="Separators"
                    /><img class="tabel-icons-64" :src="tabelIcons104" alt="Tabel icons" /><img
                      class="separators-54"
                      :src="separators100"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons105" alt="Tabel icons" /><img
                      class="separators-4"
                      :src="separators101"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons106" alt="Tabel icons" /><img
                      class="separators-4"
                      :src="separators102"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons107" alt="Tabel icons" /><img
                      class="separators-4"
                      :src="separators103"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons108" alt="Tabel icons" /><img
                      class="separators-4"
                      :src="separators104"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons109" alt="Tabel icons" /><img
                      class="separators-4"
                      :src="separators105"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons110" alt="Tabel icons" /><img
                      class="separators-4"
                      :src="separators106"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons111" alt="Tabel icons" /><img
                      class="separators-4"
                      :src="separators107"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons112" alt="Tabel icons" /><img
                      class="separators-4"
                      :src="separators108"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons113" alt="Tabel icons" /><img
                      class="separators-4"
                      :src="separators109"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons114" alt="Tabel icons" /><img
                      class="separators-4"
                      :src="separators110"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons115" alt="Tabel icons" />
                  </div>
                </div>
              </div>
            </div>
            <x-button2 :arrowButton="xButton2Props.arrowButton" />
            <div class="group-2"><img class="arrow-2" :src="arrow3" alt="arrow" /></div>
            <div class="group-1-1"><img class="arrow-3" :src="arrow4" alt="arrow" /></div>
          </div>
        </div>
      </div>
      <div class="section-prijzentabel">
        <div class="prijzentabel-i10-comfort hyundaisansheadoffice-bold-midnight-blue-32px">
          {{ prijzentabelI10Comfort }}
        </div>
        <div class="tabel-prijzen">
          <div class="aantal-maanden">
            <div class="titel-7" :style="{ 'background-image': 'url(' + titel6 + ')' }">
              <div class="bill-montly-1 hyundaisansheadoffice-bold-white-32px">{{ billMontly2 }}</div>
            </div>
            <div class="onderdelen-3">
              <div class="overlap-group-2" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
                <frame9 v-bind="frame9Props" />
              </div>
            </div>
          </div>
          <div class="aantal-km">
            <div class="titel-2">
              <div class="overlap-group-3">
                <img class="base-10" :src="base11" alt="Base" />
                <div class="titel-8 hyundaisansheadoffice-bold-port-gore-32px">{{ titel7 }}</div>
              </div>
            </div>
            <div class="onderdelen-1">
              <div class="overlap-group1-1">
                <img class="base-11" :src="base12" alt="Base" />
                <div class="frame-10 hyundaisansheadoffice-regular-normal-port-gore-21px">
                  <div class="profile-groups">{{ profileGroups1 }}</div>
                  <img class="separators-55" :src="separators111" alt="Separators" />
                  <div class="account-viwers">{{ accountViwers1 }}</div>
                  <img class="separators-5" :src="separators112" alt="Separators" />
                  <div class="social-media-dashboa">{{ socialMediaDashboa1 }}</div>
                  <img class="separators-5" :src="separators113" alt="Separators" />
                  <div class="shopify-dashboard">{{ shopifyDashboard1 }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="maandbedrag">
            <div class="titel-2">
              <img class="base-12" :src="base13" alt="Base" />
              <div class="titel-9 hyundaisansheadoffice-bold-port-gore-32px">{{ titel8 }}</div>
            </div>
            <div class="onderdelen-1">
              <img class="base-13" :src="base14" alt="Base" />
              <div class="frame-10 hyundaisansheadoffice-regular-normal-port-gore-21px">
                <div class="profile-groups">{{ profileGroups2 }}</div>
                <img class="separators-56" :src="separators114" alt="Separators" />
                <div class="account-viwers-1">{{ accountViwers2 }}</div>
                <img class="separators-57" :src="separators115" alt="Separators" />
                <div class="social-media-dashboa-1">{{ socialMediaDashboa2 }}</div>
                <img class="separators-58" :src="separators116" alt="Separators" />
                <div class="shopify-dashboard-1">{{ shopifyDashboard2 }}</div>
              </div>
            </div>
          </div>
        </div>
        <x-button2 :arrowButton="xButton3Props.arrowButton" :className="xButton3Props.className" />
      </div>
      <footer class="footer">
        <img class="line-2" :src="line2" alt="Line 2" />
        <p class="bekijk-de-privacy hyundaisansheadoffice-regular-normal-silver-16px">{{ bekijkDePrivacy }}</p>
      </footer>
    </div>
  </div>
</template>

<script>
import Keurmerk from "./Keurmerk";
import XLabel from "./XLabel";
import XButton from "./XButton";
import Voordeel1 from "./Voordeel1";
import XButton2 from "./XButton2";
import Frame9 from "./Frame9";
export default {
  name: "CampagneHyundaiMobiel",
  components: {
    Keurmerk,
    XLabel,
    XButton,
    Voordeel1,
    XButton2,
    Frame9,
  },
  props: [
    "deVernieuwdeHyundaiI10",
    "maakEenGrootsStatement",
    "profiteerNuVanEen",
    "grootBeeldSlider",
    "privateLeaseNuTij",
    "hetMaandbedragVa",
    "arrow1",
    "arrow2",
    "ontdekMeer",
    "hyundaiI101",
    "allInclusiveGeniet",
    "vastMaandbedragInc",
    "vrouwBlijAuto",
    "hyundaiI102",
    "eenFrisseKijkOpEenGedurfdOntwerp",
    "handMobiel",
    "binnenAuto",
    "dashboardAuto",
    "binnenAuto2",
    "uitvoeringenEnHunFunctionaliteiten",
    "titel1",
    "billMontly1",
    "onderdelen",
    "frame9",
    "base1",
    "titel2",
    "base2",
    "tabelIcons1",
    "separators1",
    "tabelIcons2",
    "separators2",
    "tabelIcons3",
    "separators3",
    "tabelIcons4",
    "separators4",
    "tabelIcons5",
    "separators5",
    "tabelIcons6",
    "separators6",
    "tabelIcons7",
    "separators7",
    "tabelIcons8",
    "separators8",
    "tabelIcons9",
    "separators9",
    "tabelIcons10",
    "separators10",
    "tabelIcons11",
    "separators11",
    "tabelIcons12",
    "separators12",
    "tabelIcons13",
    "separators13",
    "tabelIcons14",
    "separators14",
    "tabelIcons15",
    "separators15",
    "tabelIcons16",
    "separators16",
    "tabelIcons17",
    "separators17",
    "tabelIcons18",
    "separators18",
    "tabelIcons19",
    "separators19",
    "tabelIcons20",
    "separators20",
    "tabelIcons21",
    "separators21",
    "tabelIcons22",
    "separators22",
    "tabelIcons23",
    "base3",
    "spanText1",
    "spanText2",
    "base4",
    "tabelIcons24",
    "separators23",
    "tabelIcons25",
    "separators24",
    "tabelIcons26",
    "separators25",
    "tabelIcons27",
    "separators26",
    "tabelIcons28",
    "separators27",
    "tabelIcons29",
    "separators28",
    "tabelIcons30",
    "separators29",
    "tabelIcons31",
    "separators30",
    "tabelIcons32",
    "separators31",
    "tabelIcons33",
    "separators32",
    "tabelIcons34",
    "separators33",
    "tabelIcons35",
    "separators34",
    "tabelIcons36",
    "separators35",
    "tabelIcons37",
    "separators36",
    "tabelIcons38",
    "separators37",
    "tabelIcons39",
    "separators38",
    "tabelIcons40",
    "separators39",
    "tabelIcons41",
    "separators40",
    "tabelIcons42",
    "separators41",
    "tabelIcons43",
    "separators42",
    "tabelIcons44",
    "separators43",
    "tabelIcons45",
    "separators44",
    "tabelIcons46",
    "base5",
    "titel3",
    "base6",
    "tabelIcons47",
    "separators45",
    "tabelIcons48",
    "separators46",
    "tabelIcons49",
    "separators47",
    "tabelIcons50",
    "separators48",
    "tabelIcons51",
    "separators49",
    "tabelIcons52",
    "separators50",
    "tabelIcons53",
    "separators51",
    "tabelIcons54",
    "separators52",
    "tabelIcons55",
    "separators53",
    "tabelIcons56",
    "separators54",
    "tabelIcons57",
    "separators55",
    "tabelIcons58",
    "separators56",
    "tabelIcons59",
    "separators57",
    "tabelIcons60",
    "separators58",
    "tabelIcons61",
    "separators59",
    "tabelIcons62",
    "separators60",
    "tabelIcons63",
    "separators61",
    "tabelIcons64",
    "separators62",
    "tabelIcons65",
    "separators63",
    "tabelIcons66",
    "separators64",
    "tabelIcons67",
    "separators65",
    "tabelIcons68",
    "separators66",
    "tabelIcons69",
    "base7",
    "titel4",
    "base8",
    "tabelIcons70",
    "separators67",
    "tabelIcons71",
    "separators68",
    "tabelIcons72",
    "separators69",
    "tabelIcons73",
    "separators70",
    "tabelIcons74",
    "separators71",
    "tabelIcons75",
    "separators72",
    "tabelIcons76",
    "separators73",
    "tabelIcons77",
    "separators74",
    "tabelIcons78",
    "separators75",
    "tabelIcons79",
    "separators76",
    "tabelIcons80",
    "separators77",
    "tabelIcons81",
    "separators78",
    "tabelIcons82",
    "separators79",
    "tabelIcons83",
    "separators80",
    "tabelIcons84",
    "separators81",
    "tabelIcons85",
    "separators82",
    "tabelIcons86",
    "separators83",
    "tabelIcons87",
    "separators84",
    "tabelIcons88",
    "separators85",
    "tabelIcons89",
    "separators86",
    "tabelIcons90",
    "separators87",
    "tabelIcons91",
    "separators88",
    "tabelIcons92",
    "base9",
    "titel5",
    "base10",
    "tabelIcons93",
    "separators89",
    "tabelIcons94",
    "separators90",
    "tabelIcons95",
    "separators91",
    "tabelIcons96",
    "separators92",
    "tabelIcons97",
    "separators93",
    "tabelIcons98",
    "separators94",
    "tabelIcons99",
    "separators95",
    "tabelIcons100",
    "separators96",
    "tabelIcons101",
    "separators97",
    "tabelIcons102",
    "separators98",
    "tabelIcons103",
    "separators99",
    "tabelIcons104",
    "separators100",
    "tabelIcons105",
    "separators101",
    "tabelIcons106",
    "separators102",
    "tabelIcons107",
    "separators103",
    "tabelIcons108",
    "separators104",
    "tabelIcons109",
    "separators105",
    "tabelIcons110",
    "separators106",
    "tabelIcons111",
    "separators107",
    "tabelIcons112",
    "separators108",
    "tabelIcons113",
    "separators109",
    "tabelIcons114",
    "separators110",
    "tabelIcons115",
    "arrow3",
    "arrow4",
    "prijzentabelI10Comfort",
    "titel6",
    "billMontly2",
    "overlapGroup",
    "base11",
    "titel7",
    "base12",
    "profileGroups1",
    "separators111",
    "accountViwers1",
    "separators112",
    "socialMediaDashboa1",
    "separators113",
    "shopifyDashboard1",
    "base13",
    "titel8",
    "base14",
    "profileGroups2",
    "separators114",
    "accountViwers2",
    "separators115",
    "socialMediaDashboa2",
    "separators116",
    "shopifyDashboard2",
    "line2",
    "bekijkDePrivacy",
    "keurmerkProps",
    "xLabelProps",
    "xButton1Props",
    "voordeel11Props",
    "voordeel12Props",
    "voordeel13Props",
    "voordeel14Props",
    "voordeel15Props",
    "xButton2Props",
    "frame9Props",
    "xButton3Props",
  ],
};
</script>

<style>
.campagne-hyundai-mobiel {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 5831px;
  overflow: hidden;
  width: 375px;
}

.group-1 {
  display: flex;
  height: 138px;
  width: 375px;
}

.top-balk {
  background-color: var(--white);
  box-shadow: 0px 31px 81px #00104c33;
  display: flex;
  gap: 110px;
  height: 138.37px;
  position: relative;
  width: 375px;
}

.logo-hyundai {
  height: 26.41px;
  margin-left: 20px;
  margin-top: 59px;
  width: 190px;
}

.overlap-group4 {
  height: 776px;
  margin-top: 50px;
  position: relative;
  width: 379px;
}

.section-header {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 776px;
  padding: 0 0px;
  position: absolute;
  top: 0;
  width: 379px;
}

.hoofd-titel-tekst {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
  margin-right: 4px;
  position: relative;
}

.frame-5 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 2.28px;
  position: relative;
}

.de-vernieuwde-hyundai-i10 {
  flex: 0 0 auto;
  position: relative;
  width: 263.75px;
}

.maak-een-groots-statement {
  color: var(--primary-blue);
  font-family: var(--font-family-hyundai_sans_head_office-bold);
  font-size: 23.3px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 41.1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.profiteer-nu-van-een {
  letter-spacing: 0;
  line-height: 24px;
  margin-right: 4px;
  margin-top: 27px;
  min-height: 72px;
  width: 335px;
}

.overlap-group3 {
  height: 404px;
  margin-right: 4px;
  margin-top: 36px;
  position: relative;
  width: 375px;
}

.groot-beeld-slider {
  background-position: 50% 50%;
  background-size: cover;
  height: 218px;
  left: 0;
  position: absolute;
  top: 0;
  width: 375px;
}

.cta-balk {
  align-items: center;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 31px 81px #00104c33;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  left: 20px;
  overflow: hidden;
  padding: 21px 24px;
  position: absolute;
  top: 194px;
  width: 340px;
}

.private-lease-nu-tij {
  letter-spacing: 0;
  line-height: 36px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: fit-content;
}

.het-maandbedrag-va {
  color: var(--text-grey);
  font-family: var(--font-family-hyundai_sans_head_office-bold);
  font-size: var(--font-size-s);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 16px;
  margin-right: 4px;
  margin-top: 27px;
  min-height: 48px;
  width: 335px;
}

.navigatie-slider {
  align-items: flex-start;
  display: inline-flex;
  gap: 26.48px;
  left: 296px;
  position: absolute;
  top: 464px;
}

.arrow {
  height: 15.38px;
  margin-bottom: -1.09px;
  margin-left: -2.18px;
  margin-top: -1.09px;
  position: relative;
  width: 15.38px;
}

.arrow-1 {
  height: 15.38px;
  margin-bottom: -1.09px;
  margin-right: -2.18px;
  margin-top: -1.09px;
  position: relative;
  width: 15.38px;
}

.ontdek-meer {
  color: var(--white);
  font-family: var(--font-family-hyundai_sans_head_office-medium);
  font-size: 13px;
  font-weight: 500;
  left: 20px;
  letter-spacing: 4.95px;
  line-height: normal;
  position: absolute;
  top: 462px;
}

.section-all-inclusive {
  align-items: center;
  background-color: var(--light-blue);
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin-top: 36px;
  min-height: 1569px;
  padding: 34px 0;
  width: 375px;
}

.frame-19 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 38px;
  margin-left: 5px;
  position: relative;
  width: 340px;
}

.titel-all-inclusive {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.hyundai-i10 {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.all-inclusive-geniet {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 32px;
  position: relative;
}

.vast-maandbedrag-inc {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
}

.overlap-group {
  height: 963px;
  position: relative;
  width: 375px;
}

.vrouw-blij-auto {
  height: 240px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 375px;
}

.voordelen-blokken {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 13.49px;
  left: 20px;
  position: absolute;
  top: 149px;
  width: 335px;
}

.section-frisse-kijk-slider {
  display: flex;
  flex-direction: column;
  gap: 90.3px;
  height: 551px;
  margin-top: 41px;
  width: 1200px;
}

.titel-frisse-kijk {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 13.16px;
  height: 113.16px;
  margin-left: 20px;
  position: relative;
  width: 335px;
}

.hyundai-i10-1 {
  letter-spacing: 0;
  line-height: 36px;
  margin-top: -0.55px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.een-frisse-kijk-op-een-gedurfd-ontwerp {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 32px;
  position: relative;
  text-align: center;
}

.slider-images {
  align-items: flex-start;
  display: flex;
  gap: 30.16px;
  height: 347.11px;
  position: relative;
  width: 1200.35px;
}

.hand-mobiel {
  height: 347.11px;
  object-fit: cover;
  position: relative;
  width: 277.47px;
}

.binnen-auto {
  height: 347.11px;
  position: relative;
  width: 67.37px;
}

.dashboard-auto {
  height: 347.11px;
  margin-bottom: -339.55px;
  margin-right: -6579.37px;
  position: relative;
  width: 277.47px;
}

.binnen-auto-2 {
  height: 347.11px;
  margin-bottom: -339.55px;
  margin-right: -6887px;
  object-fit: cover;
  position: relative;
  width: 277.47px;
}

.slider-indicator {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 16.33px;
  height: 8px;
  margin-left: 1px;
  margin-top: 37px;
  position: relative;
  width: 150px;
}

.x01 {
  background-color: var(--primary-blue);
  border-radius: 40.82px;
  height: 8.16px;
  position: relative;
  width: 64.29px;
}

.slider-indicator-item {
  background-color: var(--text-grey);
  border-radius: 40.82px;
  height: 8.16px;
  position: relative;
  width: 26.53px;
}

.section-uitvoeringen-tabel {
  align-items: flex-start;
  display: flex;
  margin-top: 69px;
  min-width: 963px;
}

.overlap-group2 {
  height: 1464px;
  position: relative;
  width: 963px;
}

.rectangle-2 {
  background-color: var(--light-blue);
  height: 1464px;
  left: 0;
  position: absolute;
  top: 0;
  width: 375px;
}

.tabel-sectie {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 63px;
  left: 20px;
  position: absolute;
  top: 61px;
}

.uitvoeringen-en-hun-functionaliteiten {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 335px;
}

.tabel {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4.13px;
  position: relative;
}

.functionaliteiten {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 4.13px;
  position: relative;
}

.titel-3 {
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  height: 120.99px;
  position: relative;
  width: 319.89px;
}

.bill-montly {
  flex: 1;
  height: 30px;
  letter-spacing: 0;
  line-height: 29.6px;
  margin-left: 13.21%;
  margin-right: 10.68%;
  margin-top: 0.6px;
  width: 243.47px;
}

.onderdelen-2 {
  background-size: 100% 100%;
  border: 0.58px solid;
  border-color: var(--text-grey);
  display: flex;
  height: 934.88px;
  position: relative;
  width: 319.89px;
}

.frame-9 {
  height: 879.09px;
  margin-left: 15.3px;
  margin-top: 30.8px;
  position: relative;
  width: 293px;
}

.tabel-item {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 4.07px;
  overflow: hidden;
  position: relative;
}

.titel {
  height: 120.99px;
  position: relative;
  width: 120.4px;
}

.overlap-group-1 {
  height: 121px;
  position: relative;
  width: 95px;
}

.base {
  height: 121px;
  left: 0;
  position: absolute;
  top: 0;
  width: 31px;
}

.titel-4 {
  left: 20px;
  letter-spacing: 0;
  line-height: 29.6px;
  position: absolute;
  text-align: center;
  top: 38px;
  white-space: nowrap;
}

.onderdelen {
  height: 934.88px;
  position: relative;
  width: 120.4px;
}

.overlap-group1 {
  height: 935px;
  position: relative;
  width: 108px;
}

.base-1 {
  height: 935px;
  left: 0;
  position: absolute;
  top: 0;
  width: 31px;
}

.frame-1 {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 11.21px;
  left: 13px;
  position: absolute;
  top: 29px;
}

.tabel-icons-5 {
  height: 16.06px;
  margin-right: -6490.43px;
  margin-top: -463.98px;
  position: relative;
  width: 16.06px;
}

.separators-6 {
  height: 1px;
  position: relative;
  width: 17.23px;
}

.tabel-icons-6 {
  height: 16.06px;
  margin-right: -6490.43px;
  margin-top: -424.16px;
  position: relative;
  width: 16.06px;
}

.separators {
  height: 1px;
  position: relative;
  width: 17.56px;
}

.tabel-icons-7 {
  height: 16.06px;
  margin-right: -6490.43px;
  margin-top: -385.01px;
  position: relative;
  width: 16.06px;
}

.tabel-icons-8 {
  height: 16.06px;
  margin-right: -6490.43px;
  margin-top: -345.85px;
  position: relative;
  width: 16.06px;
}

.tabel-icons-9 {
  height: 16.06px;
  margin-right: -6490.43px;
  margin-top: -306.7px;
  position: relative;
  width: 16.06px;
}

.tabel-icons-10 {
  height: 16.06px;
  margin-right: -6490.43px;
  margin-top: -267.55px;
  position: relative;
  width: 16.06px;
}

.tabel-icons-11 {
  height: 16.06px;
  margin-right: -6490.43px;
  margin-top: -228.4px;
  position: relative;
  width: 16.06px;
}

.tabel-icons-12 {
  height: 16.06px;
  margin-right: -6490.43px;
  margin-top: -189.25px;
  position: relative;
  width: 16.06px;
}

.tabel-icons-13 {
  height: 16.06px;
  margin-right: -6490.43px;
  margin-top: -150.09px;
  position: relative;
  width: 16.06px;
}

.tabel-icons-14 {
  height: 16.06px;
  margin-right: -6490.43px;
  margin-top: -110.94px;
  position: relative;
  width: 16.06px;
}

.tabel-icons-15 {
  height: 16.06px;
  margin-right: -6490.43px;
  margin-top: -71.79px;
  position: relative;
  width: 16.06px;
}

.tabel-icons-16 {
  height: 16.06px;
  margin-right: -6490.43px;
  margin-top: -32.64px;
  position: relative;
  width: 16.06px;
}

.tabel-icons {
  height: 16.06px;
  margin-right: -6490.43px;
  position: relative;
  width: 16.06px;
}

.base-2 {
  height: 121px;
  left: 6418px;
  position: absolute;
  top: -310px;
  width: 120px;
}

.titel-5 {
  left: 10px;
  letter-spacing: 0;
  line-height: 23.8px;
  position: absolute;
  text-align: center;
  top: 38px;
}

.span0 {
  line-height: 29.6px;
}

.span1 {
  color: var(--white);
  font-family: var(--font-family-hyundai_sans_head_office-regular);
  font-size: 12.2px;
  font-weight: 400;
}

.base-3 {
  height: 935px;
  left: 6418px;
  position: absolute;
  top: -435px;
  width: 120px;
}

.tabel-icons-17 {
  height: 16.06px;
  margin-right: -6366.33px;
  margin-top: -463.98px;
  position: relative;
  width: 16.06px;
}

.separators-7 {
  height: 1.34px;
  margin-right: -6405.46px;
  margin-top: -436.71px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-18 {
  height: 16.06px;
  margin-right: -6366.33px;
  margin-top: -424.16px;
  position: relative;
  width: 16.06px;
}

.separators-8 {
  height: 1px;
  margin-right: -6405.46px;
  margin-top: -396.89px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-19 {
  height: 16.06px;
  margin-right: -6366.33px;
  margin-top: -385.01px;
  position: relative;
  width: 16.06px;
}

.separators-9 {
  height: 1px;
  margin-right: -6405.46px;
  margin-top: -357.74px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-20 {
  height: 16.06px;
  margin-right: -6366.33px;
  margin-top: -345.85px;
  position: relative;
  width: 16.06px;
}

.separators-10 {
  height: 1px;
  margin-right: -6405.46px;
  margin-top: -318.58px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-21 {
  height: 16.06px;
  margin-right: -6366.33px;
  margin-top: -306.7px;
  position: relative;
  width: 16.06px;
}

.separators-11 {
  height: 1px;
  margin-right: -6405.46px;
  margin-top: -279.43px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-22 {
  height: 16.06px;
  margin-right: -6366.33px;
  margin-top: -267.55px;
  position: relative;
  width: 16.06px;
}

.separators-12 {
  height: 1px;
  margin-right: -6405.46px;
  margin-top: -240.28px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-23 {
  height: 16.06px;
  margin-right: -6366.33px;
  margin-top: -228.4px;
  position: relative;
  width: 16.06px;
}

.separators-13 {
  height: 1px;
  margin-right: -6405.46px;
  margin-top: -201.13px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-24 {
  height: 16.06px;
  margin-right: -6366.33px;
  margin-top: -189.25px;
  position: relative;
  width: 16.06px;
}

.separators-14 {
  height: 1px;
  margin-right: -6405.46px;
  margin-top: -161.98px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-25 {
  height: 16.06px;
  margin-right: -6366.33px;
  margin-top: -150.09px;
  position: relative;
  width: 16.06px;
}

.separators-15 {
  height: 1px;
  margin-right: -6405.46px;
  margin-top: -122.82px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-26 {
  height: 16.06px;
  margin-right: -6366.33px;
  margin-top: -110.94px;
  position: relative;
  width: 16.06px;
}

.separators-16 {
  height: 1px;
  margin-right: -6405.46px;
  margin-top: -83.67px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-27 {
  height: 16.06px;
  margin-right: -6366.33px;
  margin-top: -71.79px;
  position: relative;
  width: 16.06px;
}

.separators-17 {
  height: 1px;
  margin-right: -6405.46px;
  margin-top: -44.52px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-28 {
  height: 16.06px;
  margin-right: -6366.33px;
  margin-top: -32.64px;
  position: relative;
  width: 16.06px;
}

.separators-18 {
  height: 1px;
  margin-right: -6405.46px;
  margin-top: -5.37px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-1 {
  height: 16.06px;
  margin-right: -6366.33px;
  position: relative;
  width: 16.06px;
}

.separators-1 {
  height: 1px;
  margin-right: -6405.46px;
  position: relative;
  width: 94.33px;
}

.base-4 {
  height: 121px;
  left: 6294px;
  position: absolute;
  top: -310px;
  width: 120px;
}

.titel-1 {
  left: 0;
  letter-spacing: 0;
  line-height: 29.6px;
  position: absolute;
  text-align: center;
  top: 38px;
  width: 120px;
}

.base-5 {
  height: 935px;
  left: 6294px;
  position: absolute;
  top: -435px;
  width: 120px;
}

.tabel-icons-29 {
  height: 16.06px;
  margin-right: -6241.8px;
  margin-top: -463.98px;
  position: relative;
  width: 16.06px;
}

.separators-19 {
  height: 1.34px;
  margin-right: -6280.93px;
  margin-top: -436.71px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-30 {
  height: 16.06px;
  margin-right: -6241.8px;
  margin-top: -424.16px;
  position: relative;
  width: 16.06px;
}

.separators-20 {
  height: 1px;
  margin-right: -6280.93px;
  margin-top: -396.89px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-31 {
  height: 16.06px;
  margin-right: -6241.8px;
  margin-top: -385.01px;
  position: relative;
  width: 16.06px;
}

.separators-21 {
  height: 1px;
  margin-right: -6280.93px;
  margin-top: -357.74px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-32 {
  height: 16.06px;
  margin-right: -6241.8px;
  margin-top: -345.85px;
  position: relative;
  width: 16.06px;
}

.separators-22 {
  height: 1px;
  margin-right: -6280.93px;
  margin-top: -318.58px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-33 {
  height: 16.06px;
  margin-right: -6241.8px;
  margin-top: -306.7px;
  position: relative;
  width: 16.06px;
}

.separators-23 {
  height: 1px;
  margin-right: -6280.93px;
  margin-top: -279.43px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-34 {
  height: 16.06px;
  margin-right: -6241.8px;
  margin-top: -267.55px;
  position: relative;
  width: 16.06px;
}

.separators-24 {
  height: 1px;
  margin-right: -6280.93px;
  margin-top: -240.28px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-35 {
  height: 16.06px;
  margin-right: -6241.8px;
  margin-top: -228.4px;
  position: relative;
  width: 16.06px;
}

.separators-25 {
  height: 1px;
  margin-right: -6280.93px;
  margin-top: -201.13px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-36 {
  height: 16.06px;
  margin-right: -6241.8px;
  margin-top: -189.25px;
  position: relative;
  width: 16.06px;
}

.separators-26 {
  height: 1px;
  margin-right: -6280.93px;
  margin-top: -161.98px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-37 {
  height: 16.06px;
  margin-right: -6241.8px;
  margin-top: -150.09px;
  position: relative;
  width: 16.06px;
}

.separators-27 {
  height: 1px;
  margin-right: -6280.93px;
  margin-top: -122.82px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-38 {
  height: 16.06px;
  margin-right: -6241.8px;
  margin-top: -110.94px;
  position: relative;
  width: 16.06px;
}

.separators-28 {
  height: 1px;
  margin-right: -6280.93px;
  margin-top: -83.67px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-39 {
  height: 16.06px;
  margin-right: -6241.8px;
  margin-top: -71.79px;
  position: relative;
  width: 16.06px;
}

.separators-29 {
  height: 1px;
  margin-right: -6280.93px;
  margin-top: -44.52px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-40 {
  height: 16.06px;
  margin-right: -6241.8px;
  margin-top: -32.64px;
  position: relative;
  width: 16.06px;
}

.separators-30 {
  height: 1px;
  margin-right: -6280.93px;
  margin-top: -5.37px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-2 {
  height: 16.06px;
  margin-right: -6241.8px;
  position: relative;
  width: 16.06px;
}

.separators-2 {
  height: 1px;
  margin-right: -6280.93px;
  position: relative;
  width: 94.33px;
}

.base-6 {
  height: 121px;
  left: 6169px;
  position: absolute;
  top: -310px;
  width: 120px;
}

.base-7 {
  height: 935px;
  left: 6169px;
  position: absolute;
  top: -435px;
  width: 120px;
}

.tabel-icons-41 {
  height: 16.06px;
  margin-right: -6117.26px;
  margin-top: -463.98px;
  position: relative;
  width: 16.06px;
}

.separators-31 {
  height: 1.34px;
  margin-right: -6156.4px;
  margin-top: -436.71px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-42 {
  height: 16.06px;
  margin-right: -6117.26px;
  margin-top: -424.16px;
  position: relative;
  width: 16.06px;
}

.separators-32 {
  height: 1px;
  margin-right: -6156.4px;
  margin-top: -396.89px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-43 {
  height: 16.06px;
  margin-right: -6117.26px;
  margin-top: -385.01px;
  position: relative;
  width: 16.06px;
}

.separators-33 {
  height: 1px;
  margin-right: -6156.4px;
  margin-top: -357.74px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-44 {
  height: 16.06px;
  margin-right: -6117.26px;
  margin-top: -345.85px;
  position: relative;
  width: 16.06px;
}

.separators-34 {
  height: 1px;
  margin-right: -6156.4px;
  margin-top: -318.58px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-45 {
  height: 16.06px;
  margin-right: -6117.26px;
  margin-top: -306.7px;
  position: relative;
  width: 16.06px;
}

.separators-35 {
  height: 1px;
  margin-right: -6156.4px;
  margin-top: -279.43px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-46 {
  height: 16.06px;
  margin-right: -6117.26px;
  margin-top: -267.55px;
  position: relative;
  width: 16.06px;
}

.separators-36 {
  height: 1px;
  margin-right: -6156.4px;
  margin-top: -240.28px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-47 {
  height: 16.06px;
  margin-right: -6117.26px;
  margin-top: -228.4px;
  position: relative;
  width: 16.06px;
}

.separators-37 {
  height: 1px;
  margin-right: -6156.4px;
  margin-top: -201.13px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-48 {
  height: 16.06px;
  margin-right: -6117.26px;
  margin-top: -189.25px;
  position: relative;
  width: 16.06px;
}

.separators-38 {
  height: 1px;
  margin-right: -6156.4px;
  margin-top: -161.98px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-49 {
  height: 16.06px;
  margin-right: -6117.26px;
  margin-top: -150.09px;
  position: relative;
  width: 16.06px;
}

.separators-39 {
  height: 1px;
  margin-right: -6156.4px;
  margin-top: -122.82px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-50 {
  height: 16.06px;
  margin-right: -6117.26px;
  margin-top: -110.94px;
  position: relative;
  width: 16.06px;
}

.separators-40 {
  height: 1px;
  margin-right: -6156.4px;
  margin-top: -83.67px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-51 {
  height: 16.06px;
  margin-right: -6117.26px;
  margin-top: -71.79px;
  position: relative;
  width: 16.06px;
}

.separators-41 {
  height: 1px;
  margin-right: -6156.4px;
  margin-top: -44.52px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-52 {
  height: 16.06px;
  margin-right: -6117.26px;
  margin-top: -32.64px;
  position: relative;
  width: 16.06px;
}

.separators-42 {
  height: 1px;
  margin-right: -6156.4px;
  margin-top: -5.37px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-3 {
  height: 16.06px;
  margin-right: -6117.26px;
  position: relative;
  width: 16.06px;
}

.separators-3 {
  height: 1px;
  margin-right: -6156.4px;
  position: relative;
  width: 94.33px;
}

.n-line {
  height: 120.99px;
  position: relative;
  width: 121.12px;
}

.base-8 {
  height: 121px;
  left: 6045px;
  position: absolute;
  top: -310px;
  width: 120px;
}

.titel-6 {
  left: 1px;
  letter-spacing: 0;
  line-height: 29.6px;
  position: absolute;
  text-align: center;
  top: 38px;
  width: 120px;
}

.base-9 {
  height: 935px;
  left: 6045px;
  position: absolute;
  top: -435px;
  width: 120px;
}

.frame-16 {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 11.21px;
  left: 14px;
  position: absolute;
  top: 29px;
}

.tabel-icons-53 {
  height: 16.06px;
  margin-right: -5991.55px;
  margin-top: -463.98px;
  position: relative;
  width: 16.06px;
}

.separators-43 {
  height: 1.34px;
  margin-right: -6030.69px;
  margin-top: -436.71px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-54 {
  height: 16.06px;
  margin-right: -5991.55px;
  margin-top: -424.16px;
  position: relative;
  width: 16.06px;
}

.separators-44 {
  height: 1px;
  margin-right: -6030.69px;
  margin-top: -396.89px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-55 {
  height: 16.06px;
  margin-right: -5991.55px;
  margin-top: -385.01px;
  position: relative;
  width: 16.06px;
}

.separators-45 {
  height: 1px;
  margin-right: -6030.69px;
  margin-top: -357.74px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-56 {
  height: 16.06px;
  margin-right: -5991.55px;
  margin-top: -345.85px;
  position: relative;
  width: 16.06px;
}

.separators-46 {
  height: 1px;
  margin-right: -6030.69px;
  margin-top: -318.58px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-57 {
  height: 16.06px;
  margin-right: -5991.55px;
  margin-top: -306.7px;
  position: relative;
  width: 16.06px;
}

.separators-47 {
  height: 1px;
  margin-right: -6030.69px;
  margin-top: -279.43px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-58 {
  height: 16.06px;
  margin-right: -5991.55px;
  margin-top: -267.55px;
  position: relative;
  width: 16.06px;
}

.separators-48 {
  height: 1px;
  margin-right: -6030.69px;
  margin-top: -240.28px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-59 {
  height: 16.06px;
  margin-right: -5991.55px;
  margin-top: -228.4px;
  position: relative;
  width: 16.06px;
}

.separators-49 {
  height: 1px;
  margin-right: -6030.69px;
  margin-top: -201.13px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-60 {
  height: 16.06px;
  margin-right: -5991.55px;
  margin-top: -189.25px;
  position: relative;
  width: 16.06px;
}

.separators-50 {
  height: 1px;
  margin-right: -6030.69px;
  margin-top: -161.98px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-61 {
  height: 16.06px;
  margin-right: -5991.55px;
  margin-top: -150.09px;
  position: relative;
  width: 16.06px;
}

.separators-51 {
  height: 1px;
  margin-right: -6030.69px;
  margin-top: -122.82px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-62 {
  height: 16.06px;
  margin-right: -5991.55px;
  margin-top: -110.94px;
  position: relative;
  width: 16.06px;
}

.separators-52 {
  height: 1px;
  margin-right: -6030.69px;
  margin-top: -83.67px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-63 {
  height: 16.06px;
  margin-right: -5991.55px;
  margin-top: -71.79px;
  position: relative;
  width: 16.06px;
}

.separators-53 {
  height: 1px;
  margin-right: -6030.69px;
  margin-top: -44.52px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-64 {
  height: 16.06px;
  margin-right: -5991.55px;
  margin-top: -32.64px;
  position: relative;
  width: 16.06px;
}

.separators-54 {
  height: 1px;
  margin-right: -6030.69px;
  margin-top: -5.37px;
  position: relative;
  width: 94.33px;
}

.tabel-icons-4 {
  height: 16.06px;
  margin-right: -5991.55px;
  position: relative;
  width: 16.06px;
}

.separators-4 {
  height: 1px;
  margin-right: -6030.69px;
  position: relative;
  width: 94.33px;
}

.group-2 {
  background-color: var(--primary-blue);
  border-radius: 20px;
  display: flex;
  height: 40px;
  left: 253px;
  position: absolute;
  top: 1169px;
  width: 40px;
}

.arrow-2 {
  height: 14.06px;
  margin-left: 12px;
  margin-top: 13px;
  width: 13.91px;
}

.group-1-1 {
  background-color: var(--primary-blue);
  border-radius: 20px;
  display: flex;
  height: 40px;
  left: 199px;
  position: absolute;
  top: 1169px;
  width: 40px;
}

.arrow-3 {
  height: 14.06px;
  margin-left: 14.1px;
  margin-top: 13px;
  width: 13.91px;
}

.section-prijzentabel {
  align-self: center;
  display: flex;
  flex-direction: column;
  height: 749px;
  margin-left: 4px;
  margin-top: 65px;
  position: relative;
  width: 339px;
}

.prijzentabel-i10-comfort {
  height: 64px;
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 41.8px;
  text-align: center;
  width: 253.48px;
}

.tabel-prijzen {
  align-items: flex-start;
  display: flex;
  gap: 7.11px;
  height: 463px;
  margin-top: 58px;
  position: relative;
  width: 337px;
}

.aantal-maanden {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 7.11px;
  position: relative;
  width: 241px;
}

.titel-7 {
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  height: 129px;
  position: relative;
  width: 240px;
}

.bill-montly-1 {
  flex: 1;
  height: 64px;
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 13.21%;
  margin-right: 10.68%;
  margin-top: 1px;
  width: 182.67px;
}

.onderdelen-3 {
  background-color: var(--light-blue);
  flex: 1;
  flex-grow: 1;
  position: relative;
  width: 240px;
}

.overlap-group-2 {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 327px;
  min-width: 240px;
  padding: 44.1px 26.4px;
  position: relative;
}

.aantal-km {
  align-items: flex-start;
  align-self: stretch;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  margin-right: -151.11px;
  position: relative;
}

.titel-2 {
  height: 127px;
  position: relative;
  width: 240px;
}

.overlap-group-3 {
  height: 127px;
  position: relative;
  width: 188px;
}

.base-10 {
  height: 127px;
  left: 0;
  position: absolute;
  top: 0;
  width: 107px;
}

.titel-8 {
  left: 30px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 43px;
  white-space: nowrap;
}

.onderdelen-1 {
  height: 326px;
  position: relative;
  width: 240px;
}

.overlap-group1-1 {
  height: 326px;
  position: relative;
  width: 213px;
}

.base-11 {
  height: 326px;
  left: 0;
  position: absolute;
  top: 0;
  width: 107px;
}

.frame-10 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 20.31px;
  left: 27px;
  position: absolute;
  top: 48px;
}

.profile-groups {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.02px;
  position: relative;
  width: fit-content;
}

.separators-55 {
  height: 1.15px;
  position: relative;
  width: 79.76px;
}

.account-viwers,
.social-media-dashboa,
.shopify-dashboard,
.account-viwers-1,
.social-media-dashboa-1,
.shopify-dashboard-1 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.separators-5 {
  height: 1.15px;
  position: relative;
  width: 79.76px;
}

.maandbedrag {
  align-items: flex-start;
  align-self: stretch;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  margin-right: -398.22px;
  position: relative;
}

.base-12 {
  height: 127px;
  left: 6372px;
  position: absolute;
  top: -1773px;
  width: 240px;
}

.titel-9 {
  left: 10px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 43px;
  white-space: nowrap;
}

.base-13 {
  height: 326px;
  left: 6372px;
  position: absolute;
  top: -1910px;
  width: 240px;
}

.separators-56 {
  height: 2px;
  margin-right: -6344.65px;
  margin-top: -1911.69px;
  position: relative;
  width: 186px;
}

.separators-57 {
  height: 1px;
  margin-right: -6344.65px;
  margin-top: -1843.06px;
  position: relative;
  width: 186px;
}

.separators-58 {
  height: 1px;
  margin-right: -6344.65px;
  margin-top: -1775.43px;
  position: relative;
  width: 186px;
}

.footer {
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  gap: 50px;
  height: 146px;
  margin-top: 81px;
  width: 377px;
}

.line-2 {
  height: 1px;
  margin-left: -2px;
  margin-top: -1px;
  object-fit: cover;
  width: 375px;
}

.bekijk-de-privacy {
  height: 96px;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: -2px;
  text-align: center;
  width: 123.14px;
}
</style>
