<template>
  <GmvMap :center="{ lat: 10, lng: 10 }" :zoom="7" map-type-id="terrain">
    <GmvMarker :position="{ lat: 10, lng: 10 }" />
  </GmvMap>
</template>

<script setup lang="ts">
</script>

<style>
.gmv-map {
  width: 100vw;
  height: 100vh;
}
</style>
