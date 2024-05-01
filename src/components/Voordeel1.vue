<template>
  <div :class="[`voordeel-1`, className || ``]">
    <img class="icons-lease" :src="iconsLease" alt="Icons lease" />
    <div
      class="rijden-in-een-nieuwe-hyundai hyundaisansheadoffice-bold-midnight-blue-24px"
      v-html="rijdenInEenNieuweHyundai"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Voordeel1",
  props: ["iconsLease", "rijdenInEenNieuweHyundai", "className"],
};
</script>

<style>
.voordeel-1 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16.6px;
  box-shadow: 0px 26.98px 41.51px #26397e24;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  overflow: hidden;
  padding: 40px 30px;
  position: relative;
  width: 100%;
}

.icons-lease {
  height: 40px;
  position: relative;
  width: 40px;
}

.rijden-in-een-nieuwe-hyundai {
  letter-spacing: 0;
  line-height: 36px;
  margin-top: -1.04px;
  position: relative;
  width: fit-content;
}

.voordeel-1.voordeel-2 .rijden-in-een-nieuwe-hyundai,
.voordeel-1.voordeel-3 .rijden-in-een-nieuwe-hyundai,
.voordeel-1.voordeel-4 .rijden-in-een-nieuwe-hyundai,
.voordeel-1.voordeel .rijden-in-een-nieuwe-hyundai {
  width: 213.78px;
}
</style>
