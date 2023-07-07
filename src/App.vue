<template>
  <div v-if="googleMapsApiKey">
    <div class="buttons">
      <button @click="showMarker = !showMarker">{{ showMarker ? 'Hide' : 'Show' }} Marker</button>
      <button @click="showMarkersList = !showMarkersList">{{ showMarkersList ? 'Hide' : 'Show' }} Multiple</button>
      <label>
        <input type="checkbox" v-model="markersVisible" />
        Markers visible
      </label>
    </div>
    <div class="map">
      <GmvMap :center="{ lat: 10, lng: 10 }" :zoom="7" map-type-id="terrain">
        <GmvMarker v-if="showMarker" :position="{ lat: 10, lng: 10 }" :options="{ visible: markersVisible }" />

        <GmvMarker v-for="(marker, index) in markersList" :key="index" :position="marker" :options="{ visible: markersVisible }" />
      </GmvMap>
    </div>
  </div>
  <div v-else class="buttons">
    <label>
      Google Maps API Key:
      <input type="text" v-model="googleMapsApiKeyModel" />
    </label>
    <button @click="saveGoogleMapsApiKey">Save in localStorage</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const googleMapsApiKey = localStorage.getItem('googleMapsApiKey');
const googleMapsApiKeyModel = ref();
function saveGoogleMapsApiKey(): void {
  localStorage.setItem('googleMapsApiKey', googleMapsApiKeyModel.value);
  window.location.reload();
}

// Case 1
const showMarker = ref(false)

// Case 2
const showMarkersList = ref(false)

const markersList = computed(() => {
  if (showMarkersList.value) {
    return [
      { lat: 10, lng: 11 },
      { lat: 10, lng: 12 },
      { lat: 10, lng: 13 }
    ]
  } else {
    return []
  }
})

// Visibility
const markersVisible = ref(true)
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
