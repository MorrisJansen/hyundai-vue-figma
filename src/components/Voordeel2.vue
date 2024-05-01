<template>
  <div class="voordeel-5">
    <img class="coins" :src="coins" alt="coins" />
    <div class="aantrekkelijk-vast-bedrag-pm hyundaisansheadoffice-bold-midnight-blue-24px">
      {{ aantrekkelijkVastBedragPM }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Voordeel2",
  props: ["coins", "aantrekkelijkVastBedragPM"],
};
</script>

<style>
.voordeel-5 {
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

.coins,
.verzekering,
.schade,
.portmonnee {
  height: 40px;
  position: relative;
  width: 40px;
}

.aantrekkelijk-vast-bedrag-pm,
.inc-verzekering-en-reparatie,
.schadeherstel-en-onderhoud,
.geen-verborgen-kosten {
  letter-spacing: 0;
  line-height: 36px;
  position: relative;
  width: 213.78px;
}
</style>
