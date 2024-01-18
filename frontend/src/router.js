import { createRouter, createWebHashHistory } from "vue-router";
import FormPage from "@/pages/FormPage.vue";
import ResumesPage from "@/pages/ResumesPage.vue";

const routes = [
    {
        path: "/",
        component: FormPage,
    },
    { path: "/resumes", component: ResumesPage },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router;