<template>
  <div :class="[`button-2`, className || ``]">
    <div class="vraag-offerte-aan-1 hyundaisansheadoffice-bold-white-27px">Vraag offerte aan</div>
    <img class="arrow-5" :src="arrowButton" alt="Arrow" />
  </div>
</template>

<script>
export default {
  name: "XButton2",
  props: ["arrowButton", "className"],
};
</script>

<style>
.button-2,
.button-2.button-1 {
  align-items: center;
  background-color: var(--primary-blue);
  border-radius: 7px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 28px;
  overflow: hidden;
  padding: 34px 25px;
  position: relative;
}

.vraag-offerte-aan-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -2px;
  position: relative;
  width: fit-content;
}

.arrow-5 {
  height: 13px;
  position: relative;
  width: 24px;
}

.button-2.button-3 {
  align-self: center;
  flex: unset;
  height: 101px;
  margin-left: -1px;
  margin-top: 63px;
  width: 330px;
}

.button-2.button-4 {
  flex: unset;
  height: 101px;
  margin-left: 202.6px;
  width: 330px;
}
</style>
