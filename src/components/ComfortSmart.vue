<template>
  <div :class="[`tabel-1-item-1`, className || ``]">
    <div class="titel-20">
      <div class="titel-21 hyundaisansheadoffice-bold-port-gore-41px">{{ titel }}</div>
    </div>
    <onderdelen2 :frame12Props="onderdelen2Props.frame12Props" />
  </div>
</template>

<script>
import Onderdelen2 from "./Onderdelen2";
export default {
  name: "ComfortSmart",
  components: {
    Onderdelen2,
  },
  props: ["titel", "className", "onderdelen2Props"],
};
</script>

<style>
.tabel-1-item-1 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 7px;
  overflow: hidden;
  position: relative;
}

.titel-20 {
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--text-grey);
  border-radius: 10px;
  display: flex;
  height: 208.21px;
  position: relative;
  width: 207.19px;
}

.titel-21 {
  height: 102px;
  letter-spacing: 0;
  line-height: 51px;
  margin-left: 0.1px;
  margin-top: 65.6px;
  text-align: center;
  width: 206.07px;
}

.tabel-1-item-1.tabel-1-item .titel-21 {
  height: 51px;
}
</style>
