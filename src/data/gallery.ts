/**
 * Selección de trabajos de la portada.
 *
 * Para añadir una foto: copiarla a src/assets/trabajos/ y poner su nombre en `image`.
 * Astro genera automáticamente AVIF/WebP en varios tamaños.
 * Mientras `image` no exista, se muestra una placa "Foto pendiente".
 *
 * `size` controla la composición: 'feature' (pieza protagonista), 'tall' (vertical), 'regular', 'wide'.
 */
export type Work = {
  image?: string;
  alt: string;
  title?: string;
  /** Nombre tal y como aparece en src/data/artists.ts */
  artist?: string;
  /** Estilo, solo si está confirmado. Activa los filtros cuando haya suficientes. */
  category?: string;
  description?: string;
  size: 'feature' | 'tall' | 'regular' | 'wide';
};

export const works: Work[] = [
  { size: 'feature', alt: 'Trabajo del estudio (foto pendiente)' },
  { size: 'tall', alt: 'Trabajo del estudio (foto pendiente)' },
  { size: 'regular', alt: 'Trabajo del estudio (foto pendiente)' },
  { size: 'regular', alt: 'Trabajo del estudio (foto pendiente)' },
  { size: 'tall', alt: 'Trabajo del estudio (foto pendiente)' },
  { size: 'wide', alt: 'Trabajo del estudio (foto pendiente)' },
  { size: 'regular', alt: 'Trabajo del estudio (foto pendiente)' },
  { size: 'regular', alt: 'Trabajo del estudio (foto pendiente)' },
];

/** Foto principal del hero (src/assets/...). */
export const heroImage: { image?: string; alt: string } = {
  alt: 'Tatuaje realizado en La Llorona (foto pendiente)',
};

/** Fotos del espacio. */
export const studioImages: { image?: string; alt: string }[] = [
  { alt: 'Interior del estudio (foto pendiente)' },
  { alt: 'Detalle del puesto de trabajo (foto pendiente)' },
];
