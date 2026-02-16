<template>
    <section id="experience" class="section">
      <h2>{{ t('experience_title') }}</h2>
      <div class="experience-content">
        <div class="experience-item">
          <div class="education-text">
            <h3><a href='https://iotag.com.br' target="_blank">{{ t('experience_iotag') }}</a></h3>
            <p>{{ t('experience_iotag_description') }}</p>
            <p class="experience-date">10/2022 - {{ t('present') }}</p>      
          </div>
          <img :src="require('@/assets/images/iotag.webp')" alt="Work Image" class="education-image">
        </div>
        <div class="experience-item">
          <div class="education-text">
            <h3><a href='https://gics.ufpr.br/' target="_blank">{{ t('experience_gics') }}</a></h3>
            <p>{{ t('experience_gics_description') }}</p>
            <p class="experience-date">08/2021 - 12/2024</p>      
          </div>
          <img :src="require('@/assets/images/GICS.webp')" alt="Work Image" class="education-image">
        </div>
        <div class="experience-item">
          <div class="education-text">
            <h3><a href="https://insta.ufpr.br/projetos/baja-sae/" target="_blank">{{ t('experience_baja') }}</a></h3>
            <p>{{ t('experience_baja_description') }}</p>
            <p class="experience-date">10/2022 - {{ t('present') }}</p>      
          </div>
          <img :src="require('@/assets/images/BAJA.webp')" alt="Work Image" class="education-image">
        </div>
        <div class="experience-item">
          <div class="education-text">
            <h3><a href='https://lactec.com.br/' target="_blank">{{ t('experience_lactec') }}</a></h3>
            <p>{{ t('experience_lactec_description') }}</p>
            <p class="experience-date">03/2019 - 04/2021</p>      
          </div>
          <img :src="require('@/assets/images/Lactec.webp')" alt="Work Image" class="education-image">
        </div>
        <div class="experience-item">
          <div class="education-text">
            <h3><a href='https://www.instagram.com/pet_eletrica/' target="_blank">{{ t('experience_PET') }}</a></h3>
            <p>{{ t('experience_PET_description') }}</p>
            <p class="experience-date">06/2021 - 06/2023</p>      
          </div>
          <img :src="require('@/assets/images/PET.webp')" alt="Work Image" class="education-image">
        </div>
      </div>
    </section>


</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()


</script>