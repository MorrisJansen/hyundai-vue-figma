<template>
  <div class="button">
    <div class="vraag-offerte-aan">{{ vraagOfferteAan }}</div>
    <img class="arrow-4" :src="arrow" alt="Arrow" />
  </div>
</template>

<script>
export default {
  name: "XButton",
  props: ["vraagOfferteAan", "arrow"],
};
</script>

<style>
.button {
  align-items: center;
  background-color: var(--primary-blue);
  border-radius: 5.28px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 21.13px;
  overflow: hidden;
  padding: 25.65px 18.86px;
  position: relative;
}

.vraag-offerte-aan {
  color: var(--white);
  font-family: var(--font-family-hyundai_sans_head_office-bold);
  font-size: 20.4px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.51px;
  position: relative;
  width: fit-content;
}

.arrow-4 {
  height: 9.81px;
  position: relative;
  width: 18.11px;
}
</style>
