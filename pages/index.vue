<script setup>
const router = useRouter()
const config = useRuntimeConfig()

onMounted(() => {
  if (config.app.baseURL !== '/') {
    router.push(config.app.baseURL)
  }
})
</script>