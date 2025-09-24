// Utilidades para formateo y validación
export const formatters = {
  // Formatear nombre para mostrar
  formatName: (name: string): string => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  },

  // Formatear email
  formatEmail: (email: string): string => {
    return email.toLowerCase().trim();
  },

  // Formatear teléfono para display
  formatPhone: (phone: string): string => {
    // Limpiar caracteres no numéricos excepto + y -
    const cleaned = phone.replace(/[^\d+\-\s()]/g, '');
    return cleaned;
  },

  // Formatear URL para navegación
  formatUrl: (url: string): string => {
    if (!url) return '';
    
    // Agregar protocolo si no existe
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return `https://${url}`;
    }
    
    return url;
  },

  // Formatear dirección en una línea
  formatAddress: (address: any): string => {
    if (!address) return '';
    
    const parts = [
      address.street,
      address.suite,
      address.city,
      address.zipcode
    ].filter(Boolean);
    
    return parts.join(', ');
  }
};

export const validators = {
  // Validar email básico
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validar si la cadena no está vacía
  isNotEmpty: (value: string): boolean => {
    return Boolean(value && value.trim().length > 0);
  },

  // Validar URL básica
  isValidUrl: (url: string): boolean => {
    try {
      new URL(formatters.formatUrl(url));
      return true;
    } catch {
      return false;
    }
  }
};

export const helpers = {
  // Debounce para búsqueda
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: ReturnType<typeof setTimeout>;
    
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Generar color consistente basado en string
  stringToColor: (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 50%)`;
  },

  // Calcular tiempo relativo
  getTimeAgo: (date: Date): string => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Hace un momento';
    if (diffInSeconds < 3600) return `Hace ${Math.floor(diffInSeconds / 60)} minutos`;
    if (diffInSeconds < 86400) return `Hace ${Math.floor(diffInSeconds / 3600)} horas`;
    
    return `Hace ${Math.floor(diffInSeconds / 86400)} días`;
  },

  // Truncar texto con elipsis
  truncateText: (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
  },

  // Generar ID único simple
  generateId: (): string => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
};

export const constants = {
  // Configuración de paginación
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 8,
    MAX_PAGE_SIZE: 20,
  },

  // Tiempos de cache
  CACHE: {
    USER_DATA_TTL: 5 * 60 * 1000, // 5 minutos
    SEARCH_DEBOUNCE_TIME: 300, // 300ms
  },

  // Configuración de animaciones
  ANIMATIONS: {
    DEFAULT_DURATION: 300,
    SPRING_CONFIG: {
      damping: 15,
      stiffness: 100,
    },
    TIMING_CONFIG: {
      duration: 250,
    },
  },

  // URLs y endpoints
  API: {
    BASE_URL: 'https://jsonplaceholder.typicode.com',
    ENDPOINTS: {
      USERS: '/users',
      USER_BY_ID: (id: number) => `/users/${id}`,
    },
  },

  // Mensajes de error
  ERROR_MESSAGES: {
    NETWORK_ERROR: 'Error de conexión. Verifica tu internet.',
    GENERIC_ERROR: 'Algo salió mal. Inténtalo de nuevo.',
    USER_NOT_FOUND: 'Usuario no encontrado.',
    LOADING_ERROR: 'Error cargando los datos.',
  },

  // Configuración de tema
  THEME: {
    TRANSITION_DURATION: 200,
    BORDER_RADIUS: {
      SMALL: 4,
      MEDIUM: 8,
      LARGE: 12,
      EXTRA_LARGE: 16,
    }
  }
};

export default {
  formatters,
  validators,
  helpers,
  constants,
};