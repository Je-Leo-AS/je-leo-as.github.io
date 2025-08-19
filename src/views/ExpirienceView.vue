<template>
    <section id="experience" class="section">
      <h2>{{ t('experience_title') }}</h2>
      <div class="experience-content">
        <div class="experience-item">
          <div class="education-text">
            <h3><a href='https://ufpr.br/' target="_blank">{{ t('experience_iotag') }}</a></h3>
            <p>{{ t('experience_iotag_description') }}</p>
            <p class="experience-date">10/2022 - {{ t('present') }}</p>      
          </div>
          <img :src="require('@/assets/images/iotag.webp')" alt="Work Image" class="experience-image">
        </div>
        <div class="experience-item">
          <div class="education-text">
            <h3><a href='https://gics.ufpr.br/' target="_blank">{{ t('experience_gics') }}</a></h3>
            <p>{{ t('experience_pet_description') }}</p>
            <p class="experience-date">10/2022 - {{ t('present') }}</p>      
          </div>
          <img :src="require('@/assets/images/GICS.webp')" alt="Work Image" class="experience-image">
        </div>
        <div class="experience-item">
          <div class="education-text">
            <h3><a href="https://insta.ufpr.br/projetos/baja-sae/" target="_blank">{{ t('experience_baja') }}</a></h3>
            <p>{{ t('experience_baja_description') }}</p>
            <p class="experience-date">10/2022 - {{ t('present') }}</p>      
          </div>
          <img :src="require('@/assets/images/BAJA.webp')" alt="Work Image" class="experience-image">
        </div>
        <div class="experience-item">
          <div class="education-text">
            <h3><a href='https://lactec.com.br/' target="_blank">{{ t('experience_lactec') }}</a></h3>
            <p>{{ t('experience_gics_description') }}</p>
            <p class="experience-date">10/2022 - {{ t('present') }}</p>      
          </div>
          <img :src="require('@/assets/images/Lactec.webp')" alt="Work Image" class="experience-image">
        </div>
        <div class="experience-item">
          <div class="education-text">
            <h3><a href='https://www.instagram.com/pet_eletrica/' target="_blank">{{ t('experience_PET') }}</a></h3>
            <p>{{ t('experience_lactec_description') }}</p>
            <p class="experience-date">10/2022 - {{ t('present') }}</p>      
          </div>
          <img :src="require('@/assets/images/PET.webp')" alt="Work Image" class="experience-image">
        </div>
      </div>
    </section>


</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()


</script>