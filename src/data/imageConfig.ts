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
  
  // 2025 New images
  'house-im-garten-IMG_4520.webp': { width: 1200, height: 800, aspectRatio: 1.5 },
  
  // 2025 Flat images (4032x2268 = 16:9 aspect ratio)
  'Bad_IMG_4713.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'amerikanische-Kueche-IMG_4737.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'ausblick-balkon-IMG_4750.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'balkon-IMG_4743.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'fluegeltueren-IMG_4756.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'schlafzimmer-fluegeltueren-IMG_4775.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'wohnzimmer-geschlossene-fluegeltueren-IMG_4778.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'wohnzimmer_IMG_4728.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'Wohnzimmer-IMG_4759.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  
  // 2025 Flat images (5712x3213 = 16:9 aspect ratio)
  'Schlafzimmer_IMG_4722.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'Schlafzimmer_kleiderschrank_IMG_4724.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'Wohnzimmer-sofa-IMG_4731.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'schlafzimmer-ausblick-IMG_4771.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'wohnzimmer-IMG_4754.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'wohnzimmer-ausblick-IMG_4730.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'wohnzimmer-esstisch-IMG_4733.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  'begehbarer-kleiderschrank-IMG_4726.webp': { width: 1200, height: 675, aspectRatio: 1.78 },
  
  // 2025 Flat images (2000x1548 = 4:3 aspect ratio)
  'grundriss-adalberstr-2025.webp': { width: 1200, height: 900, aspectRatio: 1.33 },
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
