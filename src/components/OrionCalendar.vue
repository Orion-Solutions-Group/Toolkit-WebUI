<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const calendarRef = ref<HTMLElement | null>(null);
const calendarInstance = ref<Calendar | null>(null);
const showCreatePopup = ref(false);
const showEventDetailsPopup = ref(false);
const eventTitle = ref('');
const eventStart = ref('');
const eventEnd = ref('');
const eventDate = ref('');
const eventSummary = ref('');
const eventAttendees = ref<string[]>([]);
const errorMessage = ref('');
const selectedEvent = ref<any>(null);
const isEditMode = ref(false);
const newAttendee = ref('');

const initialEvents = [
    {
        title: 'Réunion 1',
        start: '2024-11-15T10:00:00',
        end: '2024-11-15T11:00:00',
        extendedProps: {
            attendees: ['alice@example.com', 'bob@example.com'],
            summary: 'Réunion de coordination'
        }
    },
    {
        title: 'Rendez-vous 2',
        start: '2024-11-16T14:00:00',
        end: '2024-11-16T15:00:00',
        extendedProps: {
            attendees: ['carol@example.com', 'dave@example.com'],
            summary: 'Discussion projet X'
        }
    }
];

const calendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    locale: 'fr',
    initialView: 'dayGridMonth',
    validRange: {
        start: '2024-11-01',
        end: '2024-11-30'
    },
    events: initialEvents,
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    firstDay: 1,
    eventDurationEditable: true,
    dateClick(info: any) {
        eventDate.value = info.dateStr;
        const clickedHour = info.date.getHours();
        const clickedMinute = info.date.getMinutes();
        eventStart.value = `${clickedHour.toString().padStart(2, '0')}:${clickedMinute.toString().padStart(2, '0')}`;
        eventEnd.value = `${(clickedHour + 1).toString().padStart(2, '0')}:${clickedMinute.toString().padStart(2, '0')}`;
        eventTitle.value = ''; 
        eventSummary.value = ''; 
        eventAttendees.value = []; 
        showCreatePopup.value = true;
        isEditMode.value = false;
        errorMessage.value = '';
    },
    eventClick(info: any) {
        selectedEvent.value = info.event;

        eventTitle.value = info.event.title;

        const startDate = info.event.start;
        const endDate = info.event.end;

        if (startDate) {
            const hours = startDate.getHours().toString().padStart(2, '0');
            const minutes = startDate.getMinutes().toString().padStart(2, '0');
            eventStart.value = `${hours}:${minutes}`;
        }

        if (endDate) {
            const hours = endDate.getHours().toString().padStart(2, '0');
            const minutes = endDate.getMinutes().toString().padStart(2, '0');
            eventEnd.value = `${hours}:${minutes}`;
        }

        eventSummary.value = info.event.extendedProps.summary || '';
        eventAttendees.value = info.event.extendedProps.attendees || [];

        showCreatePopup.value = true;
        isEditMode.value = true;
        errorMessage.value = '';
    }
};

onMounted(() => {
    if (calendarRef.value) {
        calendarInstance.value = new Calendar(calendarRef.value, calendarOptions);
        calendarInstance.value.render();
    }
});

const addEvent = () => {
    const startDate = new Date(eventDate.value + 'T' + eventStart.value);
    const endDate = new Date(eventDate.value + 'T' + eventEnd.value);
    if (endDate <= startDate) {
        errorMessage.value = "L'heure de fin doit être après l'heure de début.";
        return;
    }

    if (eventTitle.value && eventStart.value && eventEnd.value) {
        const newEvent = {
            title: eventTitle.value,
            start: startDate,
            end: endDate,
            extendedProps: {
                summary: eventSummary.value,
                attendees: eventAttendees.value
            }
        };
        if (calendarInstance.value) {
            calendarInstance.value.addEvent(newEvent);
            calendarInstance.value.refetchEvents();
        } else {
            console.error("L'instance de calendrier n'est pas initialisée !");
        }
        showCreatePopup.value = false;
    } else {
        errorMessage.value = "Veuillez remplir tous les champs obligatoires.";
    }
};

const updateEvent = () => {
    if (selectedEvent.value) {
        const startDate = new Date(eventDate.value + 'T' + eventStart.value);
        const endDate = new Date(eventDate.value + 'T' + eventEnd.value);
        if (endDate <= startDate) {
            errorMessage.value = "L'heure de fin doit être après l'heure de début.";
            return;
        }

        selectedEvent.value.setProp('title', eventTitle.value);
        selectedEvent.value.setStart(startDate);
        selectedEvent.value.setEnd(endDate);
        selectedEvent.value.setExtendedProp('summary', eventSummary.value);
        selectedEvent.value.setExtendedProp('attendees', eventAttendees.value);

        calendarInstance.value?.refetchEvents();
        showCreatePopup.value = false;
    } else {
        console.error("Aucun événement sélectionné pour la mise à jour !");
    }
};

const addAttendee = () => {
    if (newAttendee.value.trim()) {
        eventAttendees.value.push(newAttendee.value.trim());
        newAttendee.value = '';
    }
};

const removeAttendee = (index: number) => {
    eventAttendees.value.splice(index, 1);
};

const closeEventDetailsPopup = () => {
    showCreatePopup.value = false;
};
</script>

<template>
    <div ref="calendarRef" class="w-full h-screen"></div>

    <!-- Création ou modification de réunions -->
    <div v-if="showCreatePopup"
        class="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg z-10 w-96">
        <h2 class="text-xl font-semibold mb-4">{{ isEditMode ? 'Modifier une réunion' : 'Créer une réunion' }}</h2>

        <form @submit.prevent="isEditMode ? updateEvent() : addEvent()">
            <label for="eventTitle" class="block text-sm font-medium text-gray-700">Titre de la réunion:</label>
            <input v-model="eventTitle" id="eventTitle" required class="mt-1 p-2 border rounded w-full" />

            <label for="eventStart" class="block text-sm font-medium text-gray-700 mt-4">Début:</label>
            <input v-model="eventStart" id="eventStart" type="time" required class="mt-1 p-2 border rounded w-full" />

            <label for="eventEnd" class="block text-sm font-medium text-gray-700 mt-4">Fin:</label>
            <input v-model="eventEnd" id="eventEnd" type="time" required class="mt-1 p-2 border rounded w-full" />

            <label for="eventSummary" class="block text-sm font-medium text-gray-700 mt-4">Résumé:</label>
            <textarea v-model="eventSummary" id="eventSummary" class="mt-1 p-2 border rounded w-full"></textarea>

            <label for="eventAttendees" class="block text-sm font-medium text-gray-700 mt-4">Participants:</label>
            <ul>
                <li v-for="(attendee, index) in eventAttendees" :key="index">
                    {{ attendee }}
                    <button @click="removeAttendee(index)" class="ml-2 text-red-500">Supprimer</button>
                </li>
            </ul>
            <input v-model="newAttendee" id="eventAttendees" type="email" placeholder="Ajouter un participant" class="mt-2 p-2 border rounded w-full" />
            <button type="button" @click="addAttendee" class="mt-2 px-4 py-2 bg-green-500 text-white rounded">Ajouter</button>

            <div v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</div>

            <button type="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">{{ isEditMode ? 'Sauvegarder' : 'Enregistrer' }}</button>
        </form>

        <button @click="closeEventDetailsPopup" class="mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Fermer</button>
    </div>
</template>
