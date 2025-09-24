// Animaciones predefinidas para componentes
export const fadeInUp = {
  from: {
    opacity: 0,
    translateY: 50,
  },
  animate: {
    opacity: 1,
    translateY: 0,
  },
  transition: {
    type: 'timing',
    duration: 500,
  },
};

export const fadeInLeft = {
  from: {
    opacity: 0,
    translateX: -50,
  },
  animate: {
    opacity: 1,
    translateX: 0,
  },
  transition: {
    type: 'spring',
    damping: 15,
  },
};

export const fadeInRight = {
  from: {
    opacity: 0,
    translateX: 50,
  },
  animate: {
    opacity: 1,
    translateX: 0,
  },
  transition: {
    type: 'spring',
    damping: 15,
  },
};

export const scaleIn = {
  from: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    type: 'spring',
    damping: 15,
  },
};

export const slideInFromBottom = {
  from: {
    translateY: 100,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
  },
  transition: {
    type: 'spring',
    damping: 20,
    stiffness: 100,
  },
};

export const rotateIn = {
  from: {
    scale: 0,
    rotate: '-180deg',
  },
  animate: {
    scale: 1,
    rotate: '0deg',
  },
  transition: {
    type: 'spring',
    damping: 15,
    stiffness: 150,
  },
};

// Función para crear animación con delay
export const createDelayedAnimation = (baseAnimation: any, delay: number) => ({
  ...baseAnimation,
  transition: {
    ...baseAnimation.transition,
    delay,
  },
});

// Animación de pulso para loading
export const pulse = {
  from: {
    scale: 1,
  },
  animate: {
    scale: 1.1,
  },
  transition: {
    type: 'timing',
    duration: 800,
    loop: true,
    repeatReverse: true,
  },
};

// Animación de shake para errores
export const shake = {
  from: {
    translateX: 0,
  },
  animate: {
    translateX: [-10, 10, -10, 10, 0],
  },
  transition: {
    type: 'timing',
    duration: 500,
  },
};

export default {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideInFromBottom,
  rotateIn,
  createDelayedAnimation,
  pulse,
  shake,
};