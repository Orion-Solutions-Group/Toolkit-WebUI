import { useToast } from 'vue-toast-notification';

export default class ToasterService {
  toast = useToast();

  success(message: string, options = {}) {
    this.toast.success(message, {
      position: 'top-right',
      duration: 3000,
      ...options,
    });
  }

  error(message: string, options = {}) {
    this.toast.error(message, {
      position: 'top-right',
      duration: 3000,
      ...options,
    });
  }

  info(message: string, options = {}) {
    this.toast.info(message, {
      position: 'top-right',
      duration: 3000,
      ...options,
    });
  }

  show(message: string, options = {}) {
    this.toast.open({
      message,
      position: 'top-right',
      duration: 3000,
      ...options,
    });
  }
}
