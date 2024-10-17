<script setup lang="ts">

import { ref } from 'vue';
import OrionModal from './components/OrionModal.vue';
import DataTable from "@/components/OrionTable.vue";
import OrionTable from "@/components/OrionTable.vue";

const showModal = ref(false);

const handleAccept = () => {
  showModal.value = false;
  console.log('Modal accepted');
  console.log("showModal", showModal.value);
};
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>


<!--  <button @click="showModal = true" class="btn-primary">Open Modal</button>-->
<!--  <div>-->
<!--    <OrionModal-->
<!--        :open="showModal"-->
<!--        title="Supprimer un client ?"-->
<!--        message="Voulez-vous vraiment supprimer ce client ? Cette action est irréversible."-->
<!--        confirmText="Accepter"-->
<!--        cancelText="Annuler"-->
<!--        @accept="handleAccept"-->
<!--        @update:open="handleAccept"-->
<!--        size="lg"-->
<!--        type="secondary"-->
<!--    />-->
<!--  </div>-->

  <OrionTable
      :rows="[
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { name: 'Alice Brown', age: 22, email: 'alice@example.com' }
  ]"
      :columns="[
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' }
  ]"
  type="hover"
  />

</template>

