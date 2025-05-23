<template>
  <div class="promotion">
    <div class="mb-4">
      <h2 class="barlow-32-black-italic-uppercase">{{ title }}</h2>
    </div>

    <div>
      <v-img
        :src="resolveSrc(image)"
        alt="Promotion NFT"
        class="rounded-lg promotion-image mx-auto mb-2"
        cover
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup>
import { useResolveSrc } from '../../utils/common/resolveSrc'

const { resolveSrc } = useResolveSrc()

defineProps({
  title: String,
  image: String,
})
</script>

<style lang="scss" scoped>
@use './card.scss';
</style>
