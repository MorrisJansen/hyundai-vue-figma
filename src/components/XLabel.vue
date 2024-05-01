<template>
  <div class="label">
    <div class="nieuw hyundaisansheadoffice-bold-sonic-silver-11-4px">{{ nieuw }}</div>
  </div>
</template>

<script>
export default {
  name: "XLabel",
  props: ["nieuw"],
};
</script>

<style>
.label,
.label-1 {
  align-items: center;
  background-color: var(--light-grey);
  border-radius: 31.43px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 7.14px;
  justify-content: center;
  overflow: hidden;
  padding: 2.86px 15.71px;
  position: relative;
}

.nieuw,
.nieuw-1 {
  letter-spacing: 0;
  line-height: 22.9px;
  margin-top: -0.71px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
