export interface SectionData {
  title: string;
  sortingNumber: number;
  label: 'homepage' | 'images' | 'neighbourhood';
  text: string;
  imagePath: string;
  imageText: string;
}

export interface NavigationItem {
  name: string;
  url: string;
  pages?: string[];
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    images: string[];
  };
}

