<template>
  <div>
    <!-- Seção Hero -->
    <section id="home" class="hero-section">
      <div class="hero-content">
        <h1>Leonardo Santos</h1>
        <p>{{ t('hero_subtitle') }}</p>
      </div>
      
      <div class="hero-image">
        <h2 class="tech-title">🛠️  {{ t('tools') }}</h2> 
          <div class="tech-icons" align="center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" alt="python logo" />
            <img width="12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="40" alt="cplusplus logo" />
            <img width="12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" height="40" alt="c logo" />
            <img width="12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="40" alt="java logo" />
            <img width="12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo" />
            <img width="12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo" />
            <img width="12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo" />
            <img width="12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" height="40" alt="opencv logo" />
            <img width="12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" height="40" alt="fastapi logo" />
            <img width="12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" height="40" alt="docker logo" />
            <img width="12" />
            <img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/crewai-color.svg" style="height: 40px; width: auto;" alt="crewai logo" />
            <img width="12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" height="40" alt="vuejs logo" />
          </div>
        </div>
      </section>
      
    <!-- Seção Sobre -->
    <section id="about" class="section">
      <h2>{{ t('about_title') }}</h2>
      <div class="about-content">
        <p>{{ t('about_text') }}</p>
        <img :src="require('@/assets/images/perfil.jpeg')" alt="Leonardo Santos" class="about-image" />
      </div>
    </section>
  
  </div>

  <!-- Seção Skills -->
<section id="skills" class="section">
  <h2>{{ t('skills_title') }}</h2>
  <div class="skills-container">
    <div class="skill-item">
      <h3>{{ t('skills_programming') }}</h3>
      <p>{{ t('skills_programming_list') }}</p>
    </div>
    <div class="skill-item">
      <h3>{{ t('skills_circuits') }}</h3>
      <p>{{ t('skills_circuits_list') }}</p>
    </div>
    <div class="skill-item">
      <h3>{{ t('skills_3d') }}</h3>
      <p>{{ t('skills_3d_list') }}</p>
    </div>
    <div class="skill-item">
      <h3>{{ t('skills_frameworks') }}</h3>
      <p>{{ t('skills_frameworks_list') }}</p>
    </div>
    <div class="skill-item">
      <h3>{{ t('skills_databases') }}</h3>
      <p>{{ t('skills_databases_list') }}</p>
    </div>
    <div class="skill-item">
      <h3>{{ t('skills_others') }}</h3>
      <p>{{ t('skills_others_list') }}</p>
    </div>
  </div>
</section>

</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()


</script>

