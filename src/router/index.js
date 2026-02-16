import { createRouter, createWebHistory } from "vue-router";

// importa os componentes de cada "página"
import HomeView from "../views/HomeView.vue";
import ExpirienceView from "@/views/ExpirienceView.vue";
import AcademicView from "@/views/AcademicView.vue";
import ProjectsView from "@/views/ProjectsView.vue";

// define as rotas
const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/experiences", name: "Expirience", component: ExpirienceView },
  { path: "/academic", name: "academic", component: AcademicView },
  { path: "/projects", name: "projects", component: ProjectsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
