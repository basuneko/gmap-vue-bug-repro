<template>
  <div>
    <div class="buttons">
      <button @click="showMarker = !showMarker">Toggle Marker</button>
    </div>
    <div class="map">
      <GmvMap :center="{ lat: 10, lng: 10 }" :zoom="7" map-type-id="terrain">
        <GmvMarker v-if="showMarker" :position="{ lat: 10, lng: 10 }" />
      </GmvMap>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showMarker = ref(false)
</script>

<style>
.buttons {
  padding: 10px;
  display: flex;
  gap: 20px;
}

.gmv-map {
  width: 100vw;
  height: 100vh;
}
</style>
