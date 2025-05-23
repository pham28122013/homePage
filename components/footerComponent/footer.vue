<template>
  <v-footer class="bg-black text-white footer">
    <v-container>
      <v-row class="justify-start">
        <v-col
          v-for="(section, index) in footerSections"
          :key="index"
          cols="6"
          sm="6"
          md="3"
          class="pl-0 ml-0"
        >
          <h3
            v-if="section.title"
            class="barlow-18-black-italic-uppercase mb-3"
          >
            {{ section.title }}
          </h3>

          <div class="d-flex flex-column">
            <template v-for="(item, i) in section.items" :key="i">
              <v-btn
                v-if="!item.isEmail"
                variant="text"
                class="inter-14-regular-uppercase text-start px-0 footer-link"
                density="compact"
                :href="item.link || '#'"
              >
                {{ item.text }}
              </v-btn>

              <a
                v-else
                :href="`mailto:${item.text}`"
                class="text-white text-decoration-none mb-2 footer-link"
              >
                {{ item.text }}
              </a>
            </template>
          </div>

          <img
            v-if="section.title === 'CONTACT US'"
            src="/images/footer/installapp.png"
            alt="Install App"
            class="install-app-img mt-4"
            width="150"
            height="42"
            loading="lazy"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue'
import { footerSections } from '../../utils/data/mockDataFooter'
</script>

<style lang="scss" scoped>
@use './footer.scss';
</style>
