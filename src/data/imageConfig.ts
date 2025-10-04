// Image configuration with optimized dimensions and settings
export interface ImageConfig {
  width: number;
  height: number;
  aspectRatio: number;
  priority?: boolean;
  sizes?: string;
}

// Optimized image configurations based on actual image dimensions
export const imageConfigs: Record<string, ImageConfig> = {
  // Nikon D5200 images (6000x4000 = 3:2 aspect ratio)
  'living-01.webp': { width: 1200, height: 800, aspectRatio: 1.5, priority: true },
  'living-02.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
  'living-03.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
  'living-05.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
  'bathroom-01.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
  'kitchen-03.webp': { width: 1200, height: 800, aspectRatio: 1.5, priority: true },
  'sleeping-01.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
  'working-01.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
  'mirror.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
  'balcony-01.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
  'garden.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
  'sleeping-cupboard.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
  'connector-doors-sleeping.webp': { width: 1200, height: 800, aspectRatio: 1.5 },

  // iPhone 6s images (4032x3024 = 4:3 aspect ratio)
  'living-04.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'sleeping-02.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'sleeping-03.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'sleeping-04.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'bathroom-02.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'bathroom-entrance.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'balcony-02.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'balcony-03.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'entrance.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'shelf-detail.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'cupboard-01.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'cat-statue.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'engelbecken.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'st-michael-01.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'st-michael-02.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'adalbertstr-cold-war-01.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
  'adalbertstr-cold-war-text.webp': { width: 1200, height: 900, aspectRatio: 1.33 },

  // Special cases
  'floorplan.webp': { width: 1200, height: 1000, aspectRatio: 1.2 },
  'living-night.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
  'kitchen-01.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
  'kitchen-02.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
};

// Default configuration for unknown images
export const defaultImageConfig: ImageConfig = {
  width: 1200,
  height: 800,
  aspectRatio: 1.5,
  priority: false,
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
};

// Get image configuration by filename
export const getImageConfig = (imagePath: string): ImageConfig => {
  const filename = imagePath.split('/').pop() || '';
  return imageConfigs[filename] || defaultImageConfig;
};

// Generate optimized sizes string based on image type
export const getOptimizedSizes = (aspectRatio: number): string => {
  if (aspectRatio >= 1.4) {
    // Wide images (3:2 ratio)
    return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  } else if (aspectRatio >= 1.2) {
    // Medium images (4:3 ratio)
    return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw';
  } else {
    // Square-ish images
    return '(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw';
  }
};
