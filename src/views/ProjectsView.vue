<template>
    <section id="projects" class="section">
      <h2>{{ t('projects_title') }}</h2>
      <div class="projects-content">
        <div class="project-item">
          <div class="education-text">
            <h3><a href='https://github.com/PET-Eletrica-UFPR/Fechadura' target="_blank">{{ t('project_lock') }}</a></h3>
            <p>{{ t('project_lock_description') }}</p>      
            <p class="experience-date">10/2021 - 10/2022</p>      
          </div>
          <img :src="require('@/assets/images/locker.png')" alt="Work Image" class="experience-image">
        </div>
        <div class="project-item">
          <div class="education-text">
            <h3><a href='https://github.com/Je-Leo-AS/TRNG' target="_blank">{{ t('project_trng') }}</a></h3>
            <p v-html="t('project_trng_description')"></p>
            <p class="experience-date">10/2021 - 10/2022</p>      
          </div>
          <img :src="require('@/assets/images/trng.png')" alt="Work Image" class="experience-image">
        </div>
        <div class="project-item">
          <div class="education-text">
            <h3><a href='https://www.kaggle.com/code/chanchal24/fake-news-detection' target="_blank">{{ t('project_fake_news') }}</a></h3>
            <p>{{ t('project_fake_news_description') }}</p>
            <p class="experience-date">10/2021 - 10/2022</p>      
          </div>
          <img :src="require('@/assets/images/lemmatization.png')" alt="Work Image" class="experience-image">
        </div> 
        <div class="project-item">
          <div class="education-text">
            <h3><a href='https://github.com/Je-Leo-AS/DPD' target="_blank">{{ t('project_DPD') }}</a></h3>
            <p v-html="t('project_DPD_description')"></p>
            <p class="experience-date">10/2022 - 10/2024</p>      
          </div>
          <img :src="require('@/assets/images/DPD.png')" alt="Work Image" class="experience-image">
        </div>
        <div class="project-item">
          <div class="education-text">
            <h3><a href="https://n8n.io" target="_blank">{{ t('project_n8n_agents') }}</a></h3>
            <p v-html="t('project_n8n_intro')"></p>
            <ul>
              <li><p>{{ t('project_n8n_agent_infra') }}</p></li>
              <li><p>{{ t('project_n8n_agent_comm') }}</p></li>
            </ul>
            <p class="experience-date">10/2024 - {{ t('present') }}</p>
          </div>
          <img :src="require('@/assets/images/n8n.png')" alt="n8n logo" class="experience-image">
        </div>
      </div>
    </section>

  
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>