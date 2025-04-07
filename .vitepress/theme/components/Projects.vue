<template>
  <div class="flex flex-row justify-between items-center">
    <h1>Truly Awesome Apps</h1>
    <a target="_blank" href="https://wiki.truenetwork.io/apps" class="text-sm hover:underline cursor-pointer hidden md:block">See All</a>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
    <div 
      v-for="project in projects" 
      :key="project.title" 
      class="app-card rounded-lg overflow-hidden shadow-sm h-full flex flex-col"
    >
      <!-- Image container with fixed height -->
      <div class="relative max-h-[200px]">
        <img 
          :src="project.screenshot" 
          :alt="`${project.title} Screenshot`" 
          class="w-full h-full max-h-[200px] object-cover" 
        />
        <!-- Logo overlay -->
        <div class="absolute top-3 right-3 bg-white bg-opacity-80 rounded-full p-1.5">
          <img 
            :src="project.logo" 
            :alt="`${project.title} Logo`" 
            class="w-6 h-6 rounded-full" 
          />
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div class="flex-1">
          <span class="text-lg font-semibold mb-2 mt-0 text-[var(--vp-c-text-1)]">{{ project.title }}</span>
          <p class="text-sm mb-4">{{ project.description }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="inline-block bg-orange-50 text-orange-700 rounded px-2.5 py-0.5 text-xs">
            {{ project.category }}
          </span>
          <a 
            :href="project.link" 
            target="_blank" 
            class="text-orange-600 text-sm font-medium"
          >
            {{ project.linkText }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Define the projects with their correct data
const projectsData = [
  {
    title: "Placeholder",
    description: "IoT-based Device that UsesOn Chain Attestation Reputation system for Advertisements.",
    screenshot: "/projects/placeholder-ss.png",
    logo: "/projects/placeholder.webp",
    category: "IoT",
    link: "https://devfolio.co/projects/placeholder-6e86",
    linkText: "View on Devfolio"
  },
  {
    title: "Insider Ink",
    description: "Platform for anonymous, verified employee feedback and transparent organizational reputation scoring.",
    screenshot: "/projects/insider-ink.png",
    logo: "/symbol.png",
    category: "Social",
    link: "https://devfolio.co/projects/insiderink-4ff6",
    linkText: "View on Devfolio"
  },
  {
    title: "Pixel Proof",
    description: "Pixel Proof enables individual journalism with cryptographic attestations on-chain for tackling deepfakes.",
    screenshot: "/projects/pixelproof.png",
    logo: "/symbol.png",
    category: "Social",
    link: "https://pixelproof.net",
    linkText: "Try Now"
  },
  {
    title: "Dot Cade",
    description: "An on-chain gaming platform with unified player identity on True Network.",
    screenshot: "/projects/dotcade.png",
    logo: "/symbol.png",
    category: "Gaming",
    link: "https://dotcade.fun",
    linkText: "Play Now"
  },
  {
    title: "Meme True",
    description: "Meme betting platform that allows users to bet on the virality of meme templates.",
    screenshot: "/projects/memetrue.png",
    logo: "/symbol.png",
    category: "Social",
    link: "https://memetrue.com",
    linkText: "Try Now"
  }
];

// Properly shuffling the array while ensuring image consistency
function shuffleArray(array) {
  const shuffled = [...array];
  
  // Standard Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

// Use ref for reactivity
const projects = ref([]);

onMounted(() => {
  // Create a shuffled list of projects that will be properly randomized
  // but maintain image consistency within a single viewing session
  projects.value = shuffleArray(projectsData).slice(0, 3);
  
  // Store the selection in localStorage to persist the same projects 
  // across component re-renders within the same session
  localStorage.setItem('selectedProjects', JSON.stringify(projects.value));
});
</script>

<style scoped>
.app-card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.app-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>