<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="logo">Leonardo Santos</div>

      <!-- Links -->
      <div class="nav-links">
        <a router-link="/" class="nav-link">{{ t('nav_home') }}</a>
        <a router-link="/academic" class="nav-link">{{ t('nav_education') }}</a>
        <a router-link="/experiences" class="nav-link">{{ t('nav_experience') }}</a>
        <a router-link="/projects" class="nav-link">{{ t('nav_projects') }}</a>
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

