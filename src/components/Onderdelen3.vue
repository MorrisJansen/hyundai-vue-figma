<template>
  <div class="onderdelen-8"><frame9 v-bind="frame9Props" /></div>
</template>

<script>
import Frame9 from "./Frame9";
export default {
  name: "Onderdelen3",
  components: {
    Frame9,
  },
  props: ["frame9Props"],
};
</script>

<style>
.onderdelen-8 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--text-grey);
  border-radius: 10px;
  display: flex;
  height: 326px;
  position: relative;
  width: 240px;
}
</style>
