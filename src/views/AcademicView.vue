<template>
    <section id="education" class="section">
      <h2>{{ t('education_title') }}</h2>
      <div class="education-content">
        <div class="education-item">
          <div class="education-text">
            <h3>
                <a href="https://ufpr.br/" target="_blank">{{ t('education_ufpr') }}</a>
            </h3>

            <h4>{{ t('education_bachelor') }}</h4>
            <p>{{ t('education_bachelor_description') }}</p>
            <p class="education-date">2019 - 2024</p>

            <h4>{{ t('education_master') }}</h4>
            <p>{{ t('education_master_description') }}</p>
            <p class="education-date">2024 - {{ t('present') }}</p>
            
        </div>
          <img :src="require('@/assets/images/UFPR.webp')" alt="Education Image" class="education-image">
        </div>
        
      </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

