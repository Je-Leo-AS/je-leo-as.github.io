<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="logo">Leonardo Santos</div>

      <!-- Links -->
      <div class="nav-links">
        <router-link to="/" class="nav-link">{{ t('nav_home') }}</router-link>
        <router-link to="/academic" class="nav-link">{{ t('nav_education') }}</router-link>
        <router-link to="/experiences" class="nav-link">{{ t('nav_experience') }}</router-link>
        <router-link to="/projects" class="nav-link">{{ t('nav_projects') }}</router-link>
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

