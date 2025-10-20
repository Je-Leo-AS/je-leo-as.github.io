<template>
  <footer class="footer" id = "contact">
    <div class="sections-container">
      <!-- Seção Contato -->
      <section class="section">
        <h2>{{ t('contact_title') }}</h2>
        <div class="contact-content">
          <p>Email: <a href="mailto:leo.santos.engineering@gmail.com">leo.santos.engineering@gmail.com</a></p>
          <p>Phone: (62) 996843248</p>
          <div class="social-links">
            <a :href="linkedInUrl" target="_blank" class="social-button">
              <i class="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a :href="lattesUrl" target="_blank" class="social-button">
              <i class="fas fa-file-alt"></i> Lattes
            </a>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="resume-title">{{ t('portifolio_title') }}</h2>
        <select v-model="selectedResumeLang" class="resume-select">
          <option value="pt">{{ t('curriculo_pt') }}</option>
          <option value="en">{{ t('curriculo_en') }}</option>
        </select>
        <a :href="resumeUrl" download class="resume-download-button">Download</a>
      </section>
    </div>
  </footer>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()


import { ref, computed } from 'vue'
const linkedInUrl = process.env.VUE_APP_LINKEDIN_URL
const lattesUrl = process.env.VUE_APP_LATTES_URL

const selectedResumeLang = ref('pt') // Idioma padrão: Português
const resumeUrl = computed(() => {
  return selectedResumeLang.value === 'en'
    ? 'https://github.com/Je-Leo-AS/Curriculo/raw/refs/heads/EN/main.pdf'
    : 'https://github.com/Je-Leo-AS/Curriculo/raw/refs/heads/PT-BR/main.pdf'
})

</script>
