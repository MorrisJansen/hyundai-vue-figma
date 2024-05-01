<template>
  <div :class="[`frame-9-1 hyundaisansheadoffice-regular-normal-port-gore-21px`, className || ``]">
    <div class="profile-groups-2">{{ profileGroups }}</div>
    <img class="separators-61" :src="separators1" alt="Separators" />
    <div class="frame-9-item">{{ accountViwers }}</div>
    <img class="separators-59" :src="separators2" alt="Separators" />
    <div class="frame-9-item">{{ socialMediaDashboa }}</div>
    <img class="separators-59" :src="separators3" alt="Separators" />
    <div class="frame-9-item">{{ shopifyDashboard }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame9",
  props: [
    "profileGroups",
    "separators1",
    "accountViwers",
    "separators2",
    "socialMediaDashboa",
    "separators3",
    "shopifyDashboard",
    "className",
  ],
};
</script>

<style>
.frame-9-1 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 20.31px;
  position: relative;
}

.profile-groups-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.02px;
  position: relative;
  width: fit-content;
}

.separators-61 {
  height: 1.15px;
  position: relative;
  width: 186px;
}

.frame-9-item {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.separators-59 {
  height: 1.15px;
  position: relative;
  width: 186px;
}

.frame-9-1.frame-9-2 {
  height: 229.88px;
  margin-left: 26.4px;
  margin-top: 53px;
  width: 186px;
}

.frame-9-1.frame-9-2 .separators-61,
.frame-9-1.frame-10-1-1 .separators-61,
.frame-9-1.frame-10-1 .separators-61 {
  height: 1.15px;
}

.frame-9-1.frame-10-1,
.frame-9-1.frame-10-1-1 {
  height: 229.88px;
  margin-left: 27.1px;
  margin-top: 48px;
  width: 186px;
}
</style>
