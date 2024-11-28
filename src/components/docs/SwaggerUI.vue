<template>
  <div id="swagger-ui" ref="swaggerContainer" class="swagger-container"></div>
</template>

<script>
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
import swaggerSpec from '../../assets/swagger.yml';

export default {
  name: 'SwaggerUI',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.initSwagger();
  },
  watch: {
    url() {
      this.initSwagger();
    },
  },
  methods: {
    initSwagger() {
      SwaggerUI({
        dom_id: '#swagger-ui',
        url: swaggerSpec,
        presets: [SwaggerUI.presets.apis],
        layout: 'BaseLayout',
      });
    },
  },
};
</script>

<style scoped>
.swagger-container {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: #f9f9f9;
}
</style>
