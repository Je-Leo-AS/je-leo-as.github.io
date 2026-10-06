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
        <p class="resume-current">{{ currentResumeLabel }}</p>
        <div class="resume-actions">
          <a :href="resumeUrl" download class="resume-download-button">{{ t('resume_download') }}</a>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, locale } = useI18n()

const linkedInUrl = process.env.VUE_APP_LINKEDIN_URL
const lattesUrl = process.env.VUE_APP_LATTES_URL
const githubUrl = process.env.VUE_APP_GITHUB_URL

const fallbackResumes = [
  {
    id: 'base-en',
    kind: 'base-cv',
    language: 'en',
    label: {
      pt: 'Currículo base em inglês',
      en: 'Base CV in English',
      es: 'Currículum base en inglés',
    },
    url: '/resumes/base-en.pdf',
  },
  {
    id: 'base-pt-BR',
    kind: 'base-cv',
    language: 'pt-BR',
    label: {
      pt: 'Currículo base em português',
      en: 'Base CV in Portuguese',
      es: 'Currículum base en portugués',
    },
    url: '/resumes/base-pt-BR.pdf',
  },
]

const localeToResumeLanguage = computed(() => {
  if (locale.value === 'pt') return 'pt-BR'
  if (locale.value === 'en') return 'en'
  return 'en'
})

const selectedResume = computed(() => {
  return (
    fallbackResumes.find((resume) => resume.language === localeToResumeLanguage.value) ||
    fallbackResumes.find((resume) => resume.language === 'en') ||
    fallbackResumes[0]
  )
})

const resumeUrl = computed(() => selectedResume.value?.url || fallbackResumes[0].url)

const currentResumeLabel = computed(() => resumeLabel(selectedResume.value))

function resumeLabel(resume) {
  const language = locale.value || 'pt'
  return resume?.label?.[language] || resume?.label?.pt || resume?.label?.en || resume?.id || 'Resume'
}
</script>
