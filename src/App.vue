<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import ButtonTest from './components/ButtonTest.vue';

// Importer le Badge et la ProgressBar
import Badge from './components/BadgeTest.vue';
import ProgressBar from './components/ProgressBarTest.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <!-- Bouton de test -->
    <ButtonTest label="Ceci est un test" type="button" />

    <!-- Affichage de la barre de progression -->
    <div class="my-4">
      <h2>Test de la Progress Bar</h2>
      <!-- Barre de progression simple -->
      <ProgressBar :progress="75" color="bg-green-500" />

      <!-- Barre avec pourcentage affiché au-dessus -->
      <ProgressBar :progress="50" color="bg-yellow-500" :showPercentage="true" />

      <!-- Barre fine avec 5 étapes -->
      <ProgressBar :progress="40" color="bg-red-500" height="h-2" :steps="5" />

      <!-- Barre avec pourcentage à l'intérieur et étapes -->
      <ProgressBar :progress="30" color="bg-blue-500" :showPercentage="false" :steps="3" />

      <!-- Barre épaisse pleine largeur avec animation fluide -->
      <ProgressBar :progress="90" color="bg-purple-500" height="h-6" />
    </div>

    <!-- Test du Badge -->
    <div class="my-4">
      <h2>Test du Badge</h2>
      <!-- Badge simple -->
      <Badge label="Succès" color="bg-green-500" />

      <!-- Badge avec icône à gauche et notification (dot) -->
      <Badge label="Message" leftIcon="fa fa-envelope" dot color="bg-blue-500" />

      <!-- Badge avec contour -->
      <Badge label="Erreur" variant="outline" color="bg-red-500" rightIcon="fa fa-exclamation-circle" />

      <!-- Badge avec taille large -->
      <Badge label="Grand Badge" size="large" color="bg-purple-500" />

      <!-- Badge cliquable -->
      <Badge label="Clique-moi" clickable color="bg-yellow-500" />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
