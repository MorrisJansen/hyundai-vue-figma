<template>
  <div class="onderdelen-6"><frame12 v-bind="frame12Props" /></div>
</template>

<script>
import Frame12 from "./Frame12";
export default {
  name: "Onderdelen",
  components: {
    Frame12,
  },
  props: ["frame12Props"],
};
</script>

<style>
.onderdelen-6 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--text-grey);
  border-radius: 10px;
  display: flex;
  height: 1608.8px;
  position: relative;
  width: 207.19px;
}
</style>
