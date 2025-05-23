<template>
  <div class="bg-black">
    <v-container class="home-wrap">

      <!-- SECTION 1: NFT Carousel -->
      <section class="nft-carousel-section">
        <Collection :items="collections" />
      </section>

      <!-- SECTION 2: Calendar + Cards -->
      <section class="calendar-cards-section">
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <Calendar :items="slides" />
          </v-col>

          <v-col
            v-for="(card, index) in cards"
            :key="index"
            cols="6"
            md="3"
            lg="3"
          >
            <Card :title="card.title" :image="card.image" />
          </v-col>
        </v-row>
      </section>

    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Components
import Collection from '@/components/collectionComponent/collection.vue'
import Calendar from '@/components/calendarComponent/calendar.vue'
import Card from '@/components/cardComponent/card.vue'

// Data
import { cards, collections, slides } from '../../utils/data/mockDataHome'

// Utils
import { useResolveSrc } from '../../utils/common/resolveSrc'
const { resolveSrc } = useResolveSrc()
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
