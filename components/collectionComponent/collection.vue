<template>
  <div class="nft-carousel">
    <div class="d-flex justify-space-between align-center mb-4">
      <h3 class="barlow-32-black-italic-uppercase">New NFT Collections</h3>
      <div>
        <v-btn icon variant="text" color="white" class="carousel-control left" @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon variant="text" color="white" class="carousel-control right" @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>

    <v-carousel
      v-model="active"
      :show-arrows="false"
      hide-delimiters
      height="auto"
      cycle
    >
      <v-carousel-item
        v-for="(chunk, index) in chunkedItems"
        :key="index"
      >
        <div class="d-flex flex-row flex-wrap gap-4 justify-center">
          <v-img
            v-for="(item, i) in chunk"
            :key="i"
            :src="item"
            class="rounded-lg nft-img"
            
            cover
            :class="{ 'mr-4': i !== chunk.length - 1 }"
          />
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps({
  items: Array
})

const { smAndDown } = useDisplay()
const active = ref(0)

// chunkSize responsive: 3 (mobile), 6 (desktop)
const chunkSize = computed(() => smAndDown.value ? 3 : 6)

const chunkedItems = computed(() => {
  const chunks = []
  for (let i = 0; i < props.items.length; i += chunkSize.value) {
    chunks.push(props.items.slice(i, i + chunkSize.value))
  }
  return chunks
})

const next = () => {
  active.value = (active.value + 1) % chunkedItems.value.length
}

const prev = () => {
  active.value = (active.value - 1 + chunkedItems.value.length) % chunkedItems.value.length
}
</script>

<style lang="scss" scoped>
@use './collection.scss';
</style>
