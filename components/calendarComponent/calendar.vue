<template>
  <div class="nft-drops-calendar">
    <div class="d-flex align-center justify-space-between mb-4">
      <h2 class="barlow-32-black-italic-uppercase">NFT DROPS CALENDAR</h2>
      <div class="carousel-controls">
        <v-btn
          icon
          variant="text"
          color="white"
          class="carousel-control left"
          @click="prev"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          icon
          variant="text"
          color="white"
          class="carousel-control right"
          @click="next"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>

    <v-carousel
      v-model="currentSlide"
      hide-delimiters
      :show-arrows="false"
      height="auto"
    >
      <v-carousel-item
        v-for="(slide, i) in props.items"
        :key="i"
      >
        <v-img
          :src="resolveSrc(slide.imageUrl)"
          :aspect-ratio="2.5"
          class="rounded-lg responsive-height-img"
          cover
          loading="lazy"
        />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useResolveSrc } from '../../utils/common/resolveSrc'

const { resolveSrc } = useResolveSrc()

const props = defineProps({
  items: Array
})

const currentSlide = ref(0)

const slides = computed(() => props.items || [])

const next = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prev = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}
</script>

<style lang="scss" scoped>
@use './calendar.scss';
</style>
