<template>
  <div class="w-full mx-auto bg-gray-50 dark:bg-[#202126] rounded-xl mt-[2rem]">
    <div class="relative h-108 md:h-96 rounded-xl overflow-hidden shadow-md" id="carousel-container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

function shuffleArray(array) {
  // Create a copy to avoid modifying the original array
  const shuffled = [...array];
  
  // Start from the last element and swap with a random element
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

// Define your carousel items
const cI = [
  {
    id: 1,
    title: "True Network at ETHIndia 2024",
    image: "https://pbs.twimg.com/media/GeHmI3xakAIzG0B?format=jpg&name=4096x4096",
    about: "20+ projects built on True Network at ETHIndia 2024, showcasing the developer enthusiasm over on-chain repuation.",
    action: {
      text: "View Projects",
      link: "https://ethindia2024.devfolio.co/projects?tracks=f5593d7630854b32a07f4e7e2614500c&tracks=337ec365350143c6af5270c88e1935f2&tracks=7d8c07867c044c2da2447b06137c58a5&show_winners=false"
    },
    date: "Dec 2024"
  },
  {
    id: 2,
    title: "True Network's Winning Duo",
    image: "./image.png",
    about: "True hackers dominates WTH Hackathon with Dotcade (on-chain gaming) and MemeTrUE (meme-betting) winning top positions.",
    action: {
      text: "View Tweet",
      link: "https://x.com/PolkadotNow/status/1871165294519185895"
    },
    date: "Nov 2024, Bangalore"
  },
  {
    id: 3,
    title: "Join Developer Community",
    image: "https://pbs.twimg.com/media/Gdk4iK1boAAqicL?format=jpg&name=large",
    about: "Top two projects at what the hack <wth/> hackathon, hosted in Bangalore was secured by projects built on True Network.",
    action: {
      text: "Join Now",
      link: "https://at.truenetwork.io/community"
    },
    date: "Jan 2024"
  },
  {
    id: 4,
    title: "Presented at UN University Japan",
    image: "https://pbs.twimg.com/media/GUc9ZqaWsAAkJ3A?format=jpg&name=large",
    about: "During EDCON 2024, True Network was among 10 selected projects to present at the United Nations University.",
    action: {
      text: "View Tweet",
      link: "https://x.com/EDCON_Official/status/1817030646596010323"
    },
    date: "Aug 2024, Tokyo"
  },{
    id: 5,
    title: "Khoj: Finalist, ETHIndia 2024",
    image: "https://pbs.twimg.com/media/GeW3CO2aYAADXOl?format=jpg&name=small",
    about: "Bridging digital and physical worlds through AI-powered treasure hunts with True Network reputation tracking.",
    action: {
      text: "View Project",
      link: "https://devfolio.co/projects/khoj-3336"
    },
    date: "Dec 2024, Bangalore"
  },
  {
    id: 6,
    title: "Insider Ink: Finalist, ETHIndia 2024",
    image: "https://pbs.twimg.com/media/GeW3HBUaQAAMIr5?format=jpg&name=medium",
    about: "Platform for anonymous, verified employee feedback and transparent organizational reputation scoring transparently.",
    action: {
      text: "View Project",
      link: "https://devfolio.co/projects/insiderink-4ff6"
    },
    date: "Dec 2024, Bangalore"
  }
];

const carouselItems = shuffleArray(cI);

onMounted(() => {
  const carouselContainer = document.getElementById('carousel-container');
  if (!carouselContainer) return;
  
  let activeIndex = 0;
  let isTransitioning = false;

  // Initialize carousel
  function initCarousel() {
    // Create slides
    carouselItems.forEach((item, index) => {
      const slideElement = createSlideElement(item, index);
      carouselContainer.appendChild(slideElement);
    });

    // Create navigation elements
    createNavigationElements();

    // Set initial active slide
    updateActiveSlide();

    // Start auto-rotation
    startAutoRotation();
  }

  // Create a slide element
  function createSlideElement(item, index) {
    const slide = document.createElement('div');
    slide.id = `slide-${index}`;
    slide.className = `carousel-slide transition-all duration-700 ease-in-out ${index === 0 ? 'active' : ''}`;
    const bgColor = item.bgColor;
    console.log(bgColor);
    slide.innerHTML = `
      <div class="flex h-full flex-col md:flex-row">
        <!-- Left side - Photo -->
        <div class="w-full h-full relative overflow-hidden">
          <div 
            class="w-full h-full image-hover transition-all"
            style="background: url(${item.image}) center/cover; background-size: cover;"
          ></div>
          <!-- Gradient overlay that goes from left to right -->
          
        </div>
        
        <!-- Right side - Content -->
        <div class="w-full h-full md:w-1/3 p-8 absolute bottom-0 right-0 flex-col justify-center bg-gradient-to-r from-transparent to-white/30 backdrop-blur-xs">
          <div class="mb-3 text-gray-200 text-sm tracking-wider text-shadow-md">
            ${item.date}
          </div>
          <div class="flex flex-col h-full justify-between mr-2">
            <div class="flex flex-col">
              <span class="ftfamily text-2xl font-bold tracking-tight text-white text-shadow-lg slide-title pb-4">${item.title}</span>
            
              <p class="text-[#000] text-lg text-shadow-xs highlight slide-description">${item.about}</p>
            </div>
            <a 
              target="_blank"
              href=${item.action.link} 
              class="flex items-center text-blue-600 hover:text-blue-800 transition-colors link-text py-8 text-shadow-md"
            >
              <span class="mr-1 font-medium">${item.action.text}</span>
              <svg class="link-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;
    
    return slide;
  }

  // Create navigation elements
  function createNavigationElements() {
    // Create prev and next buttons
    const prevButton = document.createElement('button');
    prevButton.className = 'absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-80 hover:opacity-100 z-10';
    prevButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 3L5.5 8L10.5 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    prevButton.addEventListener('click', handlePrev);
    
    const nextButton = document.createElement('button');
    nextButton.className = 'absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-80 hover:opacity-100 z-10';
    nextButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    nextButton.addEventListener('click', handleNext);
    
    carouselContainer.appendChild(prevButton);
    carouselContainer.appendChild(nextButton);
    
    // Create progress indicators
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.className = 'absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10';
    
    carouselItems.forEach((_, index) => {
      const indicator = document.createElement('button');
      indicator.className = `w-12 h-1 rounded-full transition-all duration-500 ${
        index === activeIndex ? 'bg-blue-600 w-16' : 'bg-gray-300 w-8'
      }`;
      indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
      indicator.addEventListener('click', () => goToSlide(index));
      
      indicatorsContainer.appendChild(indicator);
    });
    
    carouselContainer.appendChild(indicatorsContainer);
  }

  // Update which slide is active
  function updateActiveSlide() {
    const slides = carouselContainer.querySelectorAll('.carousel-slide');
    const indicators = carouselContainer.querySelectorAll('[aria-label^="Go to slide"]');
    
    slides.forEach((slide, index) => {
      if (index === activeIndex) {
        slide.classList.add('active');
        slide.classList.remove('prev');
      } else if (index < activeIndex) {
        slide.classList.remove('active');
        slide.classList.add('prev');
      } else {
        slide.classList.remove('active', 'prev');
      }
    });
    
    indicators.forEach((indicator, index) => {
      if (index === activeIndex) {
        indicator.classList.add('bg-blue-600', 'w-16');
        indicator.classList.remove('bg-gray-300', 'w-8');
      } else {
        indicator.classList.remove('bg-blue-600', 'w-16');
        indicator.classList.add('bg-gray-300', 'w-8');
      }
    });
  }

  // Handle next slide
  function handleNext() {
    if (isTransitioning) return;
    
    isTransitioning = true;
    activeIndex = (activeIndex + 1) % carouselItems.length;
    
    updateActiveSlide();
    
    setTimeout(() => {
      isTransitioning = false;
    }, 700);
  }

  // Handle previous slide
  function handlePrev() {
    if (isTransitioning) return;
    
    isTransitioning = true;
    activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
    
    updateActiveSlide();
    
    setTimeout(() => {
      isTransitioning = false;
    }, 700);
  }

  // Go to a specific slide
  function goToSlide(index) {
    if (isTransitioning || index === activeIndex) return;
    
    isTransitioning = true;
    activeIndex = index;
    
    updateActiveSlide();
    
    setTimeout(() => {
      isTransitioning = false;
    }, 700);
  }

  // Start auto-rotation
  function startAutoRotation() {
    setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 6000); // Change slide every 6 seconds
  }

  // Initialize on page load
  initCarousel();
});
</script>
