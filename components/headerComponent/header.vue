<template>
  <!-- Header -->
  <v-app-bar
    v-if="!drawer || !isMobile"
    app
    color="#000000"
    dark
    elevation="0"
    class="px-2 header"
  >
    <!-- Mobile Menu Button -->
    <v-app-bar-nav-icon
      class="d-md-none"
      @click="drawer = !drawer"
    />

    <!-- Logo -->
    <div class="d-flex align-center ml-md-4">
      <nuxt-link to="/homePage" class="d-flex align-center text-decoration-none">
        <img
          src="/images/header/logo.png"
          alt="ZTECH Logo"
          loading="lazy"
          class="ztech-logo mr-2"
        />
      </nuxt-link>
    </div>

    <!-- Desktop Menu -->
    <div class="d-none d-md-flex mx-8">
      <v-btn
        v-for="(item, i) in menuItemsRef"
        :key="i"
        to="/homePage"
        variant="text"
        class="mx-2 nav-btn inter-14-medium-uppercase"
        :class="{ 'text-yellow font-weight-bold': $route.path === item.route }"
      >
        {{ item.title }}
      </v-btn>
    </div>

    <v-spacer />

    <!-- Auth Buttons -->
    <div class="d-flex mr-md-4">
      <v-btn
        rounded="pill"
        class="sign-up-btn barlow-16-black-italic-uppercase mr-2"
        to="/homePage"
      >
        SIGN UP
      </v-btn>
      <v-btn
        rounded="pill"
        class="log-in-btn barlow-16-black-italic-uppercase"
        to="/homePage"
      >
        LOG IN
      </v-btn>
    </div>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-if="isMobile && drawer"
    v-model="drawer"
    location="top"
    temporary
    scrim
    class="mobile-drawer"
    color="#1a1a1c"
    dark
    elevation="0"
    @update:model-value="handleDrawerChange"
  >
    <!-- Drawer Header -->
    <div class="d-flex align-center justify-space-between px-2 py-2">
      <div class="d-flex align-center">
        <v-btn icon @click="drawer = false" class="close-menu-mobile">
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
        <img
          src="/images/header/logo.png"
          alt="ZTECH Logo"
          class="ztech-logo ml-1"
          loading="lazy"
        />
      </div>

      <div class="d-flex align-center">
        <v-btn
          rounded="pill"
          class="sign-up-btn barlow-16-black-italic-uppercase mr-2"
          to="/homePage"
          @click="drawer = false"
        >
          SIGN UP
        </v-btn>
        <v-btn
          rounded="pill"
          class="log-in-btn barlow-16-black-italic-uppercase"
          to="/homePage"
          @click="drawer = false"
        >
          LOG IN
        </v-btn>
      </div>
    </div>

    <!-- Drawer Menu Items -->
    <v-list class="mt-8">
      <v-list-item
        v-for="(item, i) in menuItemsRef"
        :key="i"
        @click="drawer = false"
        class="mobile-menu-item mb-4 justify-center"
        :class="{ 'active-menu-item': $route.path === item.route }"
        rounded="xl"
      >
        <v-list-item-title class="text-center text-uppercase inter-14-medium-uppercase">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- Hero Carousel -->
  <v-main>
    <div class="hero-section">
      <v-carousel :show-arrows="false" class="full-carousel">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
        >
          <img
            :src="resolveSrc(item.src)"
            alt="Carousel"
            class="carousel-img"
            loading="lazy"
          />
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-main>

  <!-- Feature Navigation -->
  <div class="feature-nav">
    <v-container class="feature-container">
      <nuxt-link
        v-for="(feature, i) in featuresRef"
        :key="i"
        to="/homePage"
        class="feature-item"
      >
        <div class="feature-icon-wrapper">
          <img
            :src="resolveSrc(`images/header/${feature.icon}`)"
            :alt="feature.title"
            class="feature-icon"
            loading="lazy"
          />
          <div
            v-if="feature.badge"
            class="feature-badge"
            :class="feature.badgeClass"
          >
            {{ feature.badge }}
          </div>
        </div>
        <span class="feature-title inter-14-regular-uppercase">
          {{ feature.title }}
        </span>
      </nuxt-link>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { itemsSliderDesktop, itemsSliderMobile, menuItems, features } from '../../utils/data/mockDataHeader'
import { useResolveSrc } from '../../utils/common/resolveSrc'

const { resolveSrc } = useResolveSrc()
const drawer = ref(false)
const isMounted = ref(false)

const { smAndDown } = useDisplay()
const isMobile = computed(() => isMounted.value && smAndDown.value)
const items = computed(() => (isMobile.value ? itemsSliderMobile : itemsSliderDesktop))

const menuItemsRef = ref(menuItems)
const featuresRef = ref(features)

const handleDrawerChange = (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
}

watch(drawer, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
  document.documentElement.style.overflow = val ? 'hidden' : '';
})

onMounted(() => {
  isMounted.value = true
})
</script>

<style lang="scss" scoped>
@use './header.scss';
</style>
