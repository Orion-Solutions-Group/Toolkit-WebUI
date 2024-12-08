<!-- Section Documentation -->
<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        OrionCalendar
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        OrionCalendar est un composant de calendrier interactif basé sur
        FullCalendar. Il permet de gérer des événements, de personnaliser leur
        apparence et de répondre aux interactions utilisateur.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Props
      </h2>
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
      >
        <ul class="space-y-4 text-gray-600 dark:text-gray-300">
          <li>
            <strong>initialEvents</strong> : <em>Array</em> (par défaut : []) -
            Liste des événements initiaux du calendrier.
          </li>
          <li>
            <strong>locale</strong> : <em>String</em> (par défaut : "fr") -
            Langue du calendrier.
          </li>
          <li>
            <strong>initialView</strong> : <em>String</em> (par défaut :
            "dayGridMonth") - Vue par défaut du calendrier (ex. :
            "dayGridMonth", "timeGridWeek").
          </li>
          <li>
            <strong>initialDate</strong> : <em>String</em> (par défaut :
            aujourd'hui) - Date initiale affichée dans le calendrier.
          </li>
          <li>
            <strong>minTime</strong> : <em>String</em> (par défaut : "06:00:00")
            - Heure de début des créneaux dans les vues horaires.
          </li>
          <li>
            <strong>maxTime</strong> : <em>String</em> (par défaut : "21:00:00")
            - Heure de fin des créneaux dans les vues horaires.
          </li>
          <li>
            <strong>headerToolbar</strong> : <em>Object</em> (par défaut :
            outils par défaut) - Configuration des boutons de navigation.
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Aperçu interactif
      </h2>
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
      >
        <OrionCalendar
          :initialEvents="events"
          :locale="'fr'"
          :initialView="'dayGridMonth'"
          :headerToolbar="headerToolbar"
          :minTime="'08:00:00'"
          :maxTime="'18:00:00'"
        />
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Code d'exemple
      </h2>
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
      >
        <pre
          class="overflow-x-auto bg-gray-900 text-white p-4 rounded-lg text-sm"
        >
<code>&lt;template&gt;
  &lt;div class="page-calendrier"&gt;
    &lt;h1 class="text-2xl font-bold mb-4"&gt;Mon Calendrier&lt;/h1&gt;
    &lt;orion-calendar
      :initialEvents="events"
      :locale="'fr'"
      :initialView="'dayGridMonth'"
      :headerToolbar="headerToolbar"
      :minTime="'08:00:00'"
      :maxTime="'18:00:00'"
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import OrionCalendar from '@/components/OrionCalendar.vue';

const headerToolbar = {
  left: 'prev,next today',
  center: 'title',
  right: 'dayGridMonth,timeGridWeek,timeGridDay',
};

const events = [
  {
    title: 'Réunion de projet',
    start: '2024-11-29T09:00:00',
    end: '2024-11-29T10:00:00',
    color: '#ff6347',
    extendedProps: {
      summary: 'Réunion pour discuter du projet X',
      attendees: ['alice@example.com', 'bob@example.com'],
    },
  },
  {
    title: 'Formation interne',
    start: '2024-11-30T14:00:00',
    end: '2024-11-30T16:00:00',
    color: '#3b82f6',
    extendedProps: {
      summary: 'Formation pour l\'équipe sur la nouvelle API',
      attendees: ['carol@example.com', 'dave@example.com'],
    },
  },
];
&lt;/script&gt;</code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import OrionCalendar from '@/components/OrionCalendar.vue';

const headerToolbar = {
  left: 'prev,next today',
  center: 'title',
  right: 'dayGridMonth,timeGridWeek,timeGridDay',
};

const events = [
  {
    title: 'Réunion de projet',
    start: '2024-11-29T09:00:00',
    end: '2024-11-29T10:00:00',
    color: '#ff6347',
    extendedProps: {
      summary: 'Réunion pour discuter du projet X',
      attendees: ['alice@example.com', 'bob@example.com'],
    },
  },
  {
    title: 'Formation interne',
    start: '2024-11-30T14:00:00',
    end: '2024-11-30T16:00:00',
    color: '#3b82f6',
    extendedProps: {
      summary: "Formation pour l'équipe sur la nouvelle API",
      attendees: ['carol@example.com', 'dave@example.com'],
    },
  },
];
</script>
