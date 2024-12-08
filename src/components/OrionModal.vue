<template>
  <div
    v-if="isOpen"
    class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50"
    id="modal-id"
  >
    <div
      class="absolute bg-black opacity-50 inset-0 z-0"
      @click="closeModal"
    ></div>
    <div
      :class="modalSizeClass"
      class="p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
    >
      <div>
        <!-- Header -->
        <div class="text-center p-5 flex-auto justify-center">
          <component
            :is="iconComponent"
            class="w-8 h-8 flex items-center mx-auto"
            :class="iconColorClass"
          />
          <h2 class="text-xl font-bold py-4">{{ title }}</h2>
        </div>

        <!-- Body Slot -->
        <div class="px-8 py-4">
          <slot>
            <p class="text-sm text-gray-500">
              This is the default content for the modal. You can replace it by
              providing your own content in a slot.
            </p>
          </slot>
        </div>

        <!-- Footer -->
        <div class="p-3 mt-2 text-center space-x-4 md:block">
          <button
            @click="closeModal"
            class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
          >
            {{ cancelText }}
          </button>
          <button
            v-if="confirmText"
            @click="confirmAction"
            :class="confirmButtonClass"
            class="mb-2 md:mb-0 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg"
          >
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, watch, computed } from 'vue';
import { BeakerIcon, TrashIcon, HomeIcon } from '@heroicons/vue/24/solid';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Modal Title',
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
    confirmText: {
      type: String,
      default: 'Okay, got it',
    },
    open: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Object,
      default: null,
    },
    size: {
      type: String,
      default: 'lg',
    },
    type: {
      type: String,
      default: 'primary',
    },
    customColor: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const isOpen = ref(props.open);

    watch(
      () => props.open,
      (newValue) => {
        isOpen.value = newValue;
      }
    );

    const closeModal = () => {
      isOpen.value = false;
      emit('update:open', false);
    };

    const confirmAction = () => {
      emit('accept');
      closeModal();
    };

    const iconComponent = computed(() => {
      if (props.icon) {
        return props.icon;
      } else {
        switch (props.type) {
          case 'primary':
            return BeakerIcon;
          case 'danger':
            return TrashIcon;
          case 'success':
            return HomeIcon;
          default:
            return BeakerIcon;
        }
      }
    });

    const modalSizeClass = computed(() => {
      switch (props.size) {
        case 'sm':
          return 'max-w-sm';
        case 'md':
          return 'max-w-md';
        case 'xl':
          return 'max-w-xl';
        case 'lg':
        default:
          return 'max-w-lg';
      }
    });

    const iconColorClass = computed(() => {
      if (props.customColor) {
        return `text-[${props.customColor}]`;
      }
      switch (props.type) {
        case 'primary':
          return 'text-blue-500';
        case 'danger':
          return 'text-red-500';
        case 'success':
          return 'text-green-500';
        default:
          return 'text-blue-500';
      }
    });

    const confirmButtonClass = computed(() => {
      if (props.customColor) {
        return `bg-[${props.customColor}] border-[${props.customColor}] hover:bg-opacity-90`;
      }
      return typeColorClass.value;
    });

    const typeColorClass = computed(() => {
      switch (props.type) {
        case 'primary':
          return 'bg-blue-500 border-blue-500 hover:bg-blue-600';
        case 'danger':
          return 'bg-red-500 border-red-500 hover:bg-red-600';
        case 'success':
          return 'bg-green-500 border-green-500 hover:bg-green-600';
        default:
          return 'bg-blue-500 border-blue-500 hover:bg-blue-600';
      }
    });

    return {
      isOpen,
      closeModal,
      confirmAction,
      iconComponent,
      modalSizeClass,
      iconColorClass,
      confirmButtonClass,
    };
  },
});
</script>
