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
const eventColor = ref('#3788d8');
const errorMessage = ref('');
const selectedEvent = ref<any>(null);
const isEditMode = ref(false);
const newAttendee = ref('');

const initialEvents = [
    {
        title: 'Réunion 1',
        start: '2024-11-15T08:00:00Z',
        end: '2024-11-15T09:00:00Z',
        color: '#ff5722',
        extendedProps: {
            attendees: ['alice@example.com', 'bob@example.com'],
            summary: 'Réunion de coordination'
        }
    },
    {
        title: 'Rendez-vous 2',
        start: '2024-11-16T14:00:00Z',
        end: '2024-11-16T15:00:00Z',
        color: '#4caf50',
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
    initialDate: new Date().toISOString().split('T')[0],
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

        const clickedHour = info.date.getUTCHours();
        const defaultHour = clickedHour === 23 ? 8 : clickedHour;
        const defaultMinute = 0;

        eventStart.value = `${defaultHour.toString().padStart(2, '0')}:${defaultMinute.toString().padStart(2, '0')}`;
        eventEnd.value = `${(defaultHour + 1).toString().padStart(2, '0')}:${defaultMinute.toString().padStart(2, '0')}`;

        eventTitle.value = '';
        eventSummary.value = '';
        eventAttendees.value = [];
        eventColor.value = '#3788d8';
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
            const hours = startDate.getUTCHours().toString().padStart(2, '0');
            const minutes = startDate.getUTCMinutes().toString().padStart(2, '0');
            eventStart.value = `${hours}:${minutes}`;
        }

        if (endDate) {
            const hours = endDate.getUTCHours().toString().padStart(2, '0');
            const minutes = endDate.getUTCMinutes().toString().padStart(2, '0');
            eventEnd.value = `${hours}:${minutes}`;
        }

        eventSummary.value = info.event.extendedProps.summary || '';
        eventAttendees.value = info.event.extendedProps.attendees || [];
        eventColor.value = info.event.backgroundColor || '#3788d8';

        eventDate.value = startDate?.toISOString().split('T')[0] || '';

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
    const startDate = new Date(`${eventDate.value}T${eventStart.value}Z`);
    const endDate = new Date(`${eventDate.value}T${eventEnd.value}Z`);
    if (endDate <= startDate) {
        errorMessage.value = "L'heure de fin doit être après l'heure de début.";
        return;
    }

    if (eventTitle.value && eventStart.value && eventEnd.value) {
        const newEvent = {
            title: eventTitle.value,
            start: startDate.toISOString(),
            end: endDate.toISOString(),
            color: eventColor.value,
            extendedProps: {
                summary: eventSummary.value,
                attendees: eventAttendees.value
            }
        };
        calendarInstance.value?.addEvent(newEvent);
        showCreatePopup.value = false;
    } else {
        errorMessage.value = "Veuillez remplir tous les champs obligatoires.";
    }
};

const updateEvent = () => {
    if (selectedEvent.value) {
        const startDate = new Date(`${eventDate.value}T${eventStart.value}Z`);
        const endDate = new Date(`${eventDate.value}T${eventEnd.value}Z`);
        if (endDate <= startDate) {
            errorMessage.value = "L'heure de fin doit être après l'heure de début.";
            return;
        }

        selectedEvent.value.setProp('title', eventTitle.value);
        selectedEvent.value.setStart(startDate);
        selectedEvent.value.setEnd(endDate);
        selectedEvent.value.setProp('backgroundColor', eventColor.value);
        selectedEvent.value.setExtendedProp('summary', eventSummary.value);
        selectedEvent.value.setExtendedProp('attendees', eventAttendees.value);

        calendarInstance.value?.refetchEvents();
        showCreatePopup.value = false;
    } else {
        console.error("Aucun événement sélectionné pour la mise à jour !");
    }
};

const deleteEvent = () => {
    if (selectedEvent.value) {
        selectedEvent.value.remove();
        selectedEvent.value = null;
        showCreatePopup.value = false;
    } else {
        console.error("Aucun événement sélectionné pour la suppression !");
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

    <!-- Popup pour création et modification -->
    <div v-if="showCreatePopup"
        class="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg z-10 w-96">
        <h2 class="text-xl font-semibold mb-4">{{ isEditMode ? 'Modifier une réunion' : 'Créer une réunion' }}</h2>

        <form @submit.prevent="isEditMode ? updateEvent() : addEvent()">
            <label for="eventTitle" class="block text-sm font-medium text-gray-700">Titre de la réunion</label>
            <input v-model="eventTitle" id="eventTitle" type="text" class="mt-2 p-2 border rounded w-full"
                placeholder="Titre" required />

            <div class="flex justify-between mt-4">
                <div class="w-1/2 pr-2">
                    <label for="eventStart" class="block text-sm font-medium text-gray-700">Heure de début</label>
                    <input v-model="eventStart" id="eventStart" type="time" class="mt-2 p-2 border rounded w-full" />
                </div>
                <div class="w-1/2 pl-2">
                    <label for="eventEnd" class="block text-sm font-medium text-gray-700">Heure de fin</label>
                    <input v-model="eventEnd" id="eventEnd" type="time" class="mt-2 p-2 border rounded w-full" />
                </div>
            </div>

            <label for="eventDate" class="block text-sm font-medium text-gray-700 mt-4">Date de la réunion</label>
            <input v-model="eventDate" id="eventDate" type="date" class="mt-2 p-2 border rounded w-full" />

            <label for="eventColor" class="block text-sm font-medium text-gray-700 mt-4">Couleur</label>
            <div class="flex items-center mt-2">
                <input v-model="eventColor" id="eventColor" type="color" class="p-2 border rounded w-full" />
                <div class="ml-4 w-8 h-8 rounded border shadow" :style="{ backgroundColor: eventColor }"
                    title="Aperçu de la couleur sélectionnée"></div>
            </div>


            <label for="eventSummary" class="block text-sm font-medium text-gray-700 mt-4">Résumé</label>
            <textarea v-model="eventSummary" id="eventSummary" class="mt-2 p-2 border rounded w-full"
                placeholder="Résumé"></textarea>

            <label for="eventAttendees" class="block text-sm font-medium text-gray-700 mt-4">Participants</label>
            <div class="flex items-center space-x-2 mt-2">
                <input v-model="newAttendee" id="eventAttendees" type="email" class="w-2/3 p-2 border rounded flex-grow"
                    placeholder="Ajouter un participant" />
                <button @click.prevent="addAttendee"
                    class="px-4 py-2 bg-green-500 text-white rounded shadow">Ajouter</button>
            </div>

            <ul class="mt-4">
                <li v-for="(attendee, index) in eventAttendees" :key="index"
                    class="flex justify-between items-center mb-2">
                    <span>{{ attendee }}</span>
                    <button @click="removeAttendee(index)"
                        class="px-3 py-1 bg-red-500 text-white text-xs rounded shadow ml-2">Supprimer</button>
                </li>
            </ul>

            <p v-if="errorMessage" class="text-red-500 text-sm mt-4">{{ errorMessage }}</p>

            <div class="mt-6 flex justify-end space-x-2">
                <button @click.prevent="closeEventDetailsPopup" class="px-4 py-2 bg-gray-300 rounded shadow">
                    Annuler
                </button>

                <button v-if="isEditMode" @click.prevent="deleteEvent"
                    class="px-4 py-2 bg-red-500 text-white rounded shadow">
                    Supprimer
                </button>

                <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded shadow">
                    {{ isEditMode ? 'Modifier' : 'Créer' }}
                </button>
            </div>

        </form>
    </div>
</template>
