<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="logo">Leonardo Santos</div>

      <!-- Links -->
      <div class="nav-links">
        <a href="/" class="nav-link">{{ t('nav_home') }}</a>
        <a href="academic" class="nav-link">{{ t('nav_education') }}</a>
        <a href="experiences" class="nav-link">{{ t('nav_experience') }}</a>
        <a href="projects" class="nav-link">{{ t('nav_projects') }}</a>
        <a href="#contact" class="nav-link">{{ t('nav_contact') }}</a>
      </div>

      <!-- Select Idioma -->
      <select v-model="locale" class="language-select">
        <option value="en">English</option>
        <option value="pt">Português</option>
        <option value="es">Español</option>
      </select>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

