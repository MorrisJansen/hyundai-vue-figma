<template>
  <div :class="[`keurmerk`, className || ``]" :style="{ 'background-image': 'url(' + src + ')' }"></div>
</template>

<script>
export default {
  name: "Keurmerk",
  props: ["src", "className"],
};
</script>

<style>
.keurmerk {
  background-position: 50% 50%;
  background-size: cover;
  height: 40.06px;
  margin-top: 52px;
  width: 35px;
}

.keurmerk.keurmerk-1 {
  height: 60px;
  margin-top: 39px;
  width: 52.42px;
}
</style>
