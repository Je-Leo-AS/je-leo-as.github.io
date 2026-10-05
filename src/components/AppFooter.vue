<template>
  <footer class="footer" id="contact">
    <div class="sections-container">
      <!-- Seção Contato -->
      <section class="section">
        <h2>{{ t('contact_title') }}</h2>
        <div class="contact-content">
          <p>Email: <a href="mailto:leo.santos.engineering@gmail.com">leo.santos.engineering@gmail.com</a></p>
          <p>{{ t('contact_phone') }} : (61) 415 846 213</p>
          <div class="social-links">
            <a :href="linkedInUrl" target="_blank" class="social-button">
              <i class="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a :href="lattesUrl" target="_blank" class="social-button">
              <i class="fas fa-file-alt"></i> Lattes
            </a>
            <a :href="githubUrl" target="_blank" class="social-button">
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="resume-title">{{ t('portifolio_title') }}</h2>
        <p class="resume-helper">{{ t('resume_helper') }}</p>
        <select v-model="selectedResumeId" class="resume-select">
          <option v-for="resume in resumeItems" :key="resume.id" :value="resume.id">
            {{ resumeLabel(resume) }}
          </option>
        </select>
        <div class="resume-actions">
          <a :href="resumeUrl" download class="resume-download-button">{{ t('resume_download') }}</a>
          <a href="/career-db/resume_catalog.json" target="_blank" class="resume-data-link">{{ t('career_data') }}</a>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useI18n } from 'vue-i18n'
import { ref, computed, onMounted } from 'vue'

const { t, locale } = useI18n()

const linkedInUrl = process.env.VUE_APP_LINKEDIN_URL
const lattesUrl = process.env.VUE_APP_LATTES_URL
const githubUrl = process.env.VUE_APP_GITHUB_URL

const fallbackResumes = [
  {
    id: 'official-en',
    label: {
      pt: 'Currículo oficial em inglês',
      en: 'Official resume in English',
      es: 'Currículum oficial en inglés',
    },
    url: 'https://github.com/Je-Leo-AS/Curriculo/raw/refs/heads/EN/main.pdf',
  },
  {
    id: 'official-pt',
    label: {
      pt: 'Currículo oficial em português',
      en: 'Official resume in Portuguese',
      es: 'Currículum oficial en portugués',
    },
    url: 'https://github.com/Je-Leo-AS/Curriculo/raw/refs/heads/PT-BR/main.pdf',
  },
]

const resumeItems = ref(fallbackResumes)
const selectedResumeId = ref('official-en')

const selectedResume = computed(() => {
  return resumeItems.value.find((resume) => resume.id === selectedResumeId.value) || resumeItems.value[0]
})

const resumeUrl = computed(() => selectedResume.value?.url || fallbackResumes[0].url)

function resumeLabel(resume) {
  const language = locale.value || 'pt'
  return resume?.label?.[language] || resume?.label?.pt || resume?.label?.en || resume?.id || 'Resume'
}

onMounted(async () => {
  try {
    const response = await fetch('/career-db/resume_catalog.json', { cache: 'no-cache' })
    if (!response.ok) return
    const catalog = await response.json()
    if (Array.isArray(catalog.items) && catalog.items.length > 0) {
      resumeItems.value = catalog.items
      selectedResumeId.value = catalog.default || catalog.items[0].id
    }
  } catch (error) {
    console.warn('Could not load resume catalog', error)
  }
})
</script>
