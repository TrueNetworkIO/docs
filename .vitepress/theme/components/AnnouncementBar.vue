<template>
  <transition name="announcement-fade">
    <div
      v-if="hasAnnouncement && !dismissed"
      class="announcement-bar"
      role="status"
      aria-live="polite"
    >
      <div class="announcement-inner">
        <p class="announcement-text">
          <span class="announcement-message">{{ text }}</span>
          <template v-for="(link, index) in links" :key="`${link.href}-${index}`">
            <span class="announcement-separator" aria-hidden="true">•</span>
            <a
              class="announcement-link"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.label }}
            </a>
          </template>
        </p>
        <button
          v-if="isDismissible"
          type="button"
          class="announcement-dismiss"
          aria-label="Dismiss announcement"
          @click="dismiss"
        >
          ×
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()

const dismissed = ref(false)
const announcement = computed(() => theme.value.announcementBar ?? null)
const isDismissible = computed(() => announcement.value?.dismissible !== false)
const storageKey = computed(() => `announcement-${announcement.value?.id ?? 'default'}`)
const hasAnnouncement = computed(() => Boolean(announcement.value?.text))
const text = computed(() => announcement.value?.text ?? '')
const links = computed(() => announcement.value?.links ?? [])

onMounted(() => {
  if (!isDismissible.value) return

  const alreadyDismissed = localStorage.getItem(storageKey.value) === 'dismissed'
  dismissed.value = alreadyDismissed
})

const dismiss = () => {
  if (!isDismissible.value) return

  dismissed.value = true
  localStorage.setItem(storageKey.value, 'dismissed')
}
</script>

<style scoped>
.announcement-bar {
  position: relative;
  z-index: 1;
  background: linear-gradient(90deg, rgba(255, 64, 0, 0.12), rgba(255, 64, 0, 0.06));
  border-bottom: 1px solid rgba(255, 64, 0, 0.2);
  color: var(--vp-c-text-1);
  backdrop-filter: blur(6px);
}

.announcement-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
}

.announcement-text {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.95rem;
  line-height: 1.4;
}

.announcement-message {
  color: var(--vp-c-text-1);
}

.announcement-link {
  color: var(--vp-c-brand-1);
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: rgba(255, 64, 0, 0.35);
  text-decoration-thickness: 2px;
}

.announcement-link:hover {
  text-decoration-color: rgba(255, 64, 0, 0.7);
}

.announcement-separator {
  color: rgba(0, 0, 0, 0.35);
  padding: 0 0.25rem;
}

.announcement-dismiss {
  background: transparent;
  border: none;
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  transition: color 0.2s ease;
}

.announcement-dismiss:hover {
  color: var(--vp-c-brand-1);
}

.announcement-fade-enter-active,
.announcement-fade-leave-active {
  transition: opacity 0.2s ease;
}

.announcement-fade-enter-from,
.announcement-fade-leave-to {
  opacity: 0;
}
</style>
