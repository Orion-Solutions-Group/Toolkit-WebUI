<template>
  <div class="w-full h-screen bg-[#2C3B50] text-[#333] font-sans">
    <div class="flex h-full">
      <!-- Sidebar -->
      <aside class="w-[280px] bg-white h-full p-6 border-r border-gray-200">
        <!-- Logo -->
        <div class="flex items-center mb-8">
          <div class="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
          <span class="text-xl font-semibold text-[#333]">Orion Toolkit</span>
        </div>

        <nav class="text-sm">
          <h2 class="text-xs font-semibold text-gray-400 uppercase mb-3">
            Guides
          </h2>
          <ul class="space-y-2">
            <li @click="currentComponent = ''">
              <a href="#" class="text-[#333] hover:text-[#333]">Introduction</a>
            </li>
            <li>
              <a
                href="#"
                @click.prevent="toggleMenu('composants')"
                class="text-[#333] flex items-center"
              >
                <span
                  :class="{
                    'bg-green-500': openMenu === 'composants',
                    'bg-gray-300': openMenu !== 'composants',
                  }"
                  class="w-1 h-4 rounded-full mr-2 transition-colors duration-300"
                ></span>
                Components
              </a>
              <transition name="fade-slide">
                <ul
                  v-if="openMenu === 'composants'"
                  class="pl-6 mt-2 space-y-1 text-gray-600"
                >
                  <li @click="currentComponent = 'Input'">
                    <a href="#" class="hover:text-[#333]">Input</a>
                  </li>
                  <li @click="currentComponent = 'Breadcrumb'">
                    <a href="#" class="hover:text-[#333]">Breadcrumb</a>
                  </li>
                  <li @click="currentComponent = 'Modal'">
                    <a href="#" class="hover:text-[#333]">Modal</a>
                  </li>
                  <li @click="currentComponent = 'Calendar'">
                    <a href="#" class="hover:text-[#333]">Calendar</a>
                  </li>
                  <li @click="currentComponent = 'Progress'">
                    <a href="#" class="hover:text-[#333]">Progress</a>
                  </li>
                  <li @click="currentComponent = 'Button'">
                    <a href="#" class="hover:text-[#333]">Button</a>
                  </li>
                  <li @click="currentComponent = 'Card'">
                    <a href="#" class="hover:text-[#333]">Card</a>
                  </li>
                  <li @click="currentComponent = 'Form'">
                    <a href="#" class="hover:text-[#333]">Form</a>
                  </li>
                  <li @click="currentComponent = 'Header'">
                    <a href="#" class="hover:text-[#333]">Header</a>
                  </li>
                  <li @click="currentComponent = 'Drawer'">
                    <a href="#" class="hover:text-[#333]">Drawer</a>
                  </li>
                  <li @click="currentComponent = 'Sidebar'">
                    <a href="#" class="hover:text-[#333]">Sidebar</a>
                  </li>
                  <li @click="currentComponent = 'Layout'">
                    <a href="#" class="hover:text-[#333]">Layout</a>
                  </li>
                  <li @click="currentComponent = 'Table'">
                    <a href="#" class="hover:text-[#333]">Tables</a>
                  </li>
                  <li @click="currentComponent = 'CreateComponent'">
                    <a href="#" class="hover:text-[#333]">Nouveau composant</a>
                  </li>
                </ul>
              </transition>
            </li>
            <li>
              <a
                href="#"
                @click.prevent="toggleMenu('services')"
                class="text-[#333] flex items-center"
              >
                <span
                  :class="{
                    'bg-green-500': openMenu === 'services',
                    'bg-gray-300': openMenu !== 'services',
                  }"
                  class="w-1 h-4 rounded-full mr-2 transition-colors duration-300"
                ></span>
                Services
              </a>
              <transition name="fade-slide">
                <ul
                  v-if="openMenu === 'services'"
                  class="pl-6 mt-2 space-y-1 text-gray-600"
                >
                  <li>
                    <a href="#" class="hover:text-[#333]">Orion Toaster</a>
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-8 bg-white overflow-y-auto">
        <!-- Header with Tabs -->
        <div
          class="flex items-center justify-between border-b border-gray-200 pb-4 mb-6"
        >
          <div class="flex items-center space-x-6">
            <a
              href="#"
              @click.prevent="setActiveTab('Documentation')"
              :class="{ 'font-bold': activeTab === 'Documentation' }"
              class="text-sm font-medium text-[#333] hover:underline"
            >
              Documentation
            </a>
            <a
              href="#"
              @click.prevent="setActiveTab('API')"
              :class="{ 'font-bold': activeTab === 'API' }"
              class="text-sm font-medium text-[#333] hover:underline"
            >
              API
            </a>
            <a
              href="#"
              @click.prevent="setActiveTab('Support')"
              :class="{ 'font-bold': activeTab === 'Support' }"
              class="text-sm font-medium text-[#333] hover:underline"
            >
              Support
            </a>
            <a
              href="#"
              @click.prevent="setActiveTab('Examples')"
              :class="{ 'font-bold': activeTab === 'Examples' }"
              class="text-sm font-medium text-[#333] hover:underline"
              >Examples</a
            >
          </div>
        </div>

        <!-- Dynamic Content based on activeTab -->
        <section class="max-w-3xl">
          <div v-if="activeTab === 'API'">
            <div
              class="flex items-center justify-between border-b border-gray-200 pb-4 mb-6"
            >
              <div class="flex items-center space-x-6">
                <a
                  href="#"
                  @click.prevent="setActiveTab2('CRM')"
                  :class="{ 'font-bold': activeTab2 === 'CRM' }"
                  class="text-sm font-medium text-[#333] hover:underline"
                >
                  CRM
                </a>
                <a
                  href="#"
                  @click.prevent="setActiveTab2('CMS')"
                  :class="{ 'font-bold': activeTab2 === 'CMS' }"
                  class="text-sm font-medium text-[#333] hover:underline"
                >
                  CMS
                </a>
                <a
                  href="#"
                  @click.prevent="setActiveTab2('LMS')"
                  :class="{ 'font-bold': activeTab2 === 'LMS' }"
                  class="text-sm font-medium text-[#333] hover:underline"
                >
                  LMS
                </a>
                <a
                  href="#"
                  @click.prevent="setActiveTab2('PORTAL')"
                  :class="{ 'font-bold': activeTab2 === 'PORTAL' }"
                  class="text-sm font-medium text-[#333] hover:underline"
                >
                  PORTAL
                </a>
              </div>
            </div>

            <div
              v-if="activeTab2 === 'CRM'"
              class="flex items-center justify-between border-b border-gray-200 pb-4 mb-6"
            >
              <SwaggerUI url="https://api.protocol.chat/docs" />
            </div>

            <div
              v-if="activeTab2 === 'CMS'"
              class="flex items-center justify-between border-b border-gray-200 pb-4 mb-6"
            >
              <SwaggerUI url="https://api.protocol.chat/docs" />
            </div>

            <div
              v-if="activeTab2 === 'LMS'"
              class="flex items-center justify-between border-b border-gray-200 pb-4 mb-6"
            >
              <SwaggerUI url="https://api.protocol.chat/docs" />
            </div>
            <div v-if="activeTab2 === 'PORTAL'">
              <SwaggerUI url="https://api.protocol.chat/docs" />
            </div>
          </div>
          <div v-else-if="activeTab === 'Documentation'">
            <div v-if="getCurrentValueOfCurrentComponent() == 'Input'">
              <InputDoc />
            </div>
            <div v-if="getCurrentValueOfCurrentComponent() == 'Breadcrumb'">
              <BreadcrumbDoc />
            </div>
            <div v-if="getCurrentValueOfCurrentComponent() == 'Modal'">
              <ModalDoc />
            </div>
            <div v-if="getCurrentValueOfCurrentComponent() == 'Button'">
              <ButtonDoc />
            </div>
            <div v-if="getCurrentValueOfCurrentComponent() == 'Calendar'">
              <CalendarDoc />
            </div>
            <div v-if="getCurrentValueOfCurrentComponent() == 'Card'">
              <CardDoc />
            </div>
            <div v-if="getCurrentValueOfCurrentComponent() == 'Drawer'">
              <DrawerDoc />
            </div>
            <div v-if="getCurrentValueOfCurrentComponent() == 'Form'">
              <FormDoc />
            </div>
            <div v-if="getCurrentValueOfCurrentComponent() == 'Header'">
              <HeaderDoc />
            </div>
            <div v-if="getCurrentValueOfCurrentComponent() == 'Layout'">
              <LayoutDoc />
            </div>
            <div v-if="getCurrentValueOfCurrentComponent() == 'Progress'">
              <ProgressDoc />
            </div>
            <div v-if="getCurrentValueOfCurrentComponent() == 'Sidebar'">
              <SidebarDoc />
            </div>
            <div v-if="getCurrentValueOfCurrentComponent() == 'Table'">
              <TableDoc />
            </div>
            <div
              v-if="getCurrentValueOfCurrentComponent() == 'CreateComponent'"
            >
              <AddComponent />
            </div>
            <div v-if="getCurrentValueOfCurrentComponent() == ''">
              <h1
                class="text-3xl font-bold text-gray-800 dark:text-white mt-4 mb-6"
              >
                Introduction
              </h1>
              <p class="text-gray-600 dark:text-gray-300 mb-8">
                Bienvenue sur la documentation de l'outil
                <strong>Orion</strong>. Ce guide vous explique comment installer
                et utiliser le toolkit dans votre projet.
              </p>

              <h2
                class="text-2xl font-semibold text-gray-800 dark:text-white mb-4"
              >
                Étape 1 : Configuration du fichier <code>.npmrc</code>
              </h2>
              <div
                class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm mb-6"
              >
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Créez un fichier <code>.npmrc</code> à la racine de votre
                  projet avec le contenu suivant :
                </p>
                <pre
                  class="overflow-x-auto bg-gray-900 text-white p-4 rounded-lg text-sm"
                ><code>@orion-solutions-group:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=github_token</code></pre>
                <p class="text-gray-600 dark:text-gray-300 mt-4">
                  Remplacez <code>github_token</code> par votre token GitHub
                  personnel disposant des permissions nécessaires pour accéder
                  au package.
                </p>
              </div>

              <h2
                class="text-2xl font-semibold text-gray-800 dark:text-white mb-4"
              >
                Étape 2 : Installation du toolkit
              </h2>
              <div
                class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
              >
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Une fois le fichier <code>.npmrc</code> configuré, exécutez la
                  commande suivante pour installer la dernière version du
                  toolkit :
                </p>
                <pre
                  class="overflow-x-auto bg-gray-900 text-white p-4 rounded-lg text-sm"
                ><code>npm install @orion-solutions-group/orion-toolkit@latest</code></pre>
                <p class="text-gray-600 dark:text-gray-300 mt-4">
                  Cela téléchargera la version la plus récente du toolkit et
                  l'ajoutera à votre projet.
                </p>
              </div>
            </div>
          </div>
          <div v-else-if="activeTab === 'Support'">
            <h1 class="text-2xl font-semibold text-[#333] mt-2 mb-4">
              Support
            </h1>
            <p class="text-gray-600 mb-6">
              Need help? Contact our support team.
            </p>
            <a
              href="https://orion-rennes.atlassian.net/servicedesk/customer/portals"
              class="text-green-500 hover:underline"
              >Contact Support</a
            >
          </div>
          <div v-else-if="activeTab === 'Examples'">
            <h1 class="text-2xl font-semibold text-[#333] mt-2 mb-4">
              Examples
            </h1>
            <p class="text-gray-600 mb-6">
              Explore some examples to get started quickly with the toolkit.
            </p>
            <ul class="list-disc pl-6">
              <li>
                <a href="#" class="text-green-500 hover:underline"
                  >Example 1: Basic Setup</a
                >
              </li>
              <li>
                <a href="#" class="text-green-500 hover:underline"
                  >Example 2: Advanced Features</a
                >
              </li>
              <li>
                <a href="#" class="text-green-500 hover:underline"
                  >Example 3: Customization</a
                >
              </li>
            </ul>
          </div>
        </section>
      </main>

      <!-- Request & Response Panel -->
      <!--      <aside class="w-[360px] bg-gray-900 text-white p-6 space-y-4">-->
      <!--        &lt;!&ndash; Request Panel &ndash;&gt;-->
      <!--        <div class="bg-[#1D1F27] rounded-lg p-4">-->
      <!--          <div-->
      <!--            class="flex items-center justify-between pb-2 border-b border-gray-700"-->
      <!--          >-->
      <!--            <span class="text-sm font-medium text-gray-400">Request</span>-->
      <!--            <div class="flex space-x-4 text-gray-500 text-xs">-->
      <!--              <span class="text-green-400">cURL</span>-->
      <!--              <span>JavaScript</span>-->
      <!--              <span>Python</span>-->
      <!--              <span>PHP</span>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <pre class="text-xs mt-4">-->
      <!--            <code class="text-gray-300">POST /v1/messages-->
      <!--            curl https://api.protocol.chat/v1/messages \-->
      <!--              -H "Authorization: Bearer {token}" \-->
      <!--              -d conversation_id="xgQQXg3hrtjh7AvZ" \-->
      <!--              -d message="You’re what the French call ‘les incompetents’"-->
      <!--            </code>-->
      <!--          </pre>-->
      <!--        </div>-->
      <!--        &lt;!&ndash; Response Panel &ndash;&gt;-->
      <!--        <div class="bg-[#1D1F27] rounded-lg p-4">-->
      <!--          <div-->
      <!--            class="flex items-center justify-between pb-2 border-b border-gray-700"-->
      <!--          >-->
      <!--            <span class="text-sm font-medium text-gray-400">Response</span>-->
      <!--          </div>-->
      <!--          <pre class="text-xs mt-4"><code class="text-gray-300">{-->
      <!--            "id": "WqY86BMRFHi5o1I",-->
      <!--            "conversation_id": "xgQQXg3hrtjh7AvZ",-->
      <!--            "contact": {-->
      <!--              "id": "inEFRVzj6YLXM3o",-->
      <!--              "username": "LinnieMcCallister",-->
      <!--              "phone_number": "1-800-759-3000",-->
      <!--              "avatar_url": "https://assets.protocol.chat/avatars/linnie.jpg",-->
      <!--              "last_active_at": 70510320,-->
      <!--              "created_at": 69223320-->
      <!--            },-->
      <!--            "message": "You’re what the French call ‘les incompetents’",-->
      <!--            "reactions": [],-->
      <!--            "attachments": []-->
      <!--          }</code></pre>-->
      <!--        </div>-->
      <!--      </aside>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SwaggerUI from '@/components/docs/SwaggerUI.vue';
import InputDoc from '@/components/docs/InputDoc.vue';
import BreadcrumbDoc from '@/components/docs/BreadcrumbDoc.vue';
import ModalDoc from '@/components/docs/ModalDoc.vue';
import ButtonDoc from '@/components/docs/ButtonDoc.vue';
import CalendarDoc from '@/components/docs/CalendarDoc.vue';
import CardDoc from '@/components/docs/CardDoc.vue';
import DrawerDoc from '@/components/docs/DrawerDoc.vue';
import FormDoc from '@/components/docs/FormDoc.vue';
import HeaderDoc from '@/components/docs/HeaderDoc.vue';
import LayoutDoc from '@/components/docs/LayoutDoc.vue';
import ProgressDoc from '@/components/docs/ProgressDoc.vue';
import SidebarDoc from '@/components/docs/SidebarDoc.vue';
import TableDoc from '@/components/docs/TableDoc.vue';
import AddComponent from '@/components/docs/AddComponent.vue';

const openMenu = ref<string | null>(null);
const activeTab = ref('Documentation');
const activeTab2 = ref('CRM');
const currentComponent = ref('');

const getCurrentValueOfCurrentComponent = () => {
  return currentComponent.value;
};

const toggleMenu = (menu: string) => {
  openMenu.value = openMenu.value === menu ? null : menu;
};

const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};

const setActiveTab2 = (tab: string) => {
  activeTab2.value = tab;
};
</script>
