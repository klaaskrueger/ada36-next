# Product Requirements Document (PRD)
## ADA36 Website Image Update 2025

### Document Information
- **Version**: 1.0
- **Date**: January 2025
- **Project**: ADA36 Next.js Website
- **Phase**: Content Update & Image Refresh

---

## 1. Executive Summary

### Project Overview
Complete refresh of the ADA36 website images with new, high-quality photographs taken in 2025. The current website images are outdated, particularly the indoor photos, and need to be replaced with fresh, professional images that better represent the current state of the loft.

### Business Objectives
- **Primary**: Update visual content to reflect current loft condition and attract more bookings
- **Secondary**: Improve user engagement through fresh, appealing imagery and video content
- **Tertiary**: Maintain professional presentation standards
- **New**: Add Vimeo video as hero content on homepage for enhanced visual storytelling

### Success Metrics
- 100% replacement of outdated indoor images
- Improved visual appeal and user engagement
- Maintained website performance and SEO rankings
- Enhanced booking conversion rates

---

## 2. Current State Analysis

### Existing Image Inventory
The website currently contains **34 WebP images** in `/public/assets/images/fullsize/`:

#### Indoor Images (Primary Focus - Outdated)
- **Living Room**: 5 images (living-01 to living-05, living-night)
- **Kitchen**: 3 images (kitchen-01 to kitchen-03)
- **Bedroom**: 4 images (sleeping-01 to sleeping-04)
- **Bathroom**: 3 images (bathroom-01, bathroom-02, bathroom-entrance)
- **Storage/Cupboard**: 2 images (cupboard-01, sleeping-cupboard)
- **Connector Elements**: 1 image (connector-doors-sleeping)

#### Outdoor Images (Secondary Focus - Some Usable)
- **Balcony**: 3 images (balcony-01 to balcony-03)
- **Garden**: 1 image (garden)
- **Entrance**: 1 image (entrance)

#### Neighborhood/Location Images (Keep Most)
- **Engelbecken**: 1 image (engelbecken)
- **St. Michael**: 2 images (st-michael-01, st-michael-02)
- **Adalbertstr**: 2 images (adalbertstr-cold-war-01, adalbertstr-cold-war-text)
- **Other Details**: 6 images (cat-statue, mirror, shelf-detail, working-01, floorplan)

### Technical Configuration
- Images are configured in `src/data/imageConfig.ts`
- Optimized for different aspect ratios (3:2, 4:3)
- Responsive sizing with Next.js Image component
- WebP format for optimal performance

---

## 3. New Content Analysis

### Available New Images (2025)

#### Flat/Indoor Images (18 files)
**Kitchen & Living Area:**
- `amerikanische-Kueche-IMG_4737.jpg` → Replace kitchen images
- `wohnzimmer_IMG_4728.jpg` → Replace living room images
- `wohnzimmer-ausblick-IMG_4730.jpg` → Replace living room images
- `wohnzimmer-esstisch-IMG_4733.jpg` → Replace living room images
- `wohnzimmer-IMG_4754.jpg` → Replace living room images
- `Wohnzimmer-IMG_4759.jpg` → Replace living room images
- `Wohnzimmer-sofa-IMG_4731.jpg` → Replace living room images
- `wohnzimmer-geschlossene-fluegeltueren-IMG_4778.jpg` → Replace living room images

**Bedroom & Storage:**
- `Schlafzimmer_IMG_4722.jpg` → Replace bedroom images
- `Schlafzimmer_kleiderschrank_IMG_4724.jpg` → Replace cupboard images
- `schlafzimmer-ausblick-IMG_4771.jpg` → Replace bedroom images
- `schlafzimmer-fluegeltueren-IMG_4775.jpg` → Replace bedroom images
- `begehbarer-kleiderschrank-IMG_4726.jpg` → Replace cupboard images

**Bathroom:**
- `Bad_IMG_4713.jpg` → Replace bathroom images

**Balcony & Views:**
- `balkon-IMG_4743.jpg` → Replace balcony images
- `ausblick-balkon-IMG_4750.jpg` → Replace balcony images

**Architectural Features:**
- `fluegeltueren-IMG_4756.jpg` → Replace connector doors
- `grundriss-adalberstr-2025.png` → Replace floorplan

#### House/Outdoor Images (9 files)
**Exterior & Building:**
- `aussenansicht-IMG_4513.jpg` → Replace entrance image
- `fahrstuhl-IMG_4531.jpg` → New: elevator image
- `hausflur-IMG_4516.jpg` → New: hallway image
- `hausflur-vertikal-IMG_4530.jpg` → New: hallway vertical

**Garden & Outdoor:**
- `garten-IMG_4524.jpg` → Replace garden image
- `garten-detail-IMG_4523.jpg` → New: garden detail
- `garten-von-oben_IMG_4721.jpg` → New: garden from above
- `gartenausblick-IMG_4528.jpg` → New: garden view
- `im-garten-IMG_4520.jpg` → New: in garden

### New Text Content
Three comprehensive text files with updated descriptions:

1. **`objekt-portal-format-de-en.txt`** - Complete property description (DE/EN)
2. **`ausstattung-portal-format-de-en.txt`** - Equipment and features (DE/EN)
3. **`lage-portal-format-de-en.txt`** - Location and neighborhood (DE/EN)

---

## 4. Requirements

### 4.1 Functional Requirements

#### Image Replacement
- **FR-1**: Replace all outdated indoor images with new 2025 photographs
- **FR-2**: Update outdoor images where new versions are available
- **FR-3**: Maintain existing image naming convention for seamless integration
- **FR-4**: Convert new JPG/PNG images to WebP format for performance
- **FR-5**: Update image configuration in `imageConfig.ts` with new dimensions
- **FR-6**: **CRITICAL**: Ensure new images work correctly in Next.js pages (homepage.tsx, images/page.tsx)
- **FR-7**: **CRITICAL**: Remove old flat images completely from the project
- **FR-8**: **CRITICAL**: Update or remove headlines/sections for deleted images

#### Content Integration
- **FR-9**: Integrate new text content into existing i18n translation system
- **FR-10**: Update section descriptions with new, more detailed content
- **FR-11**: Maintain bilingual support (German/English) for all new content
- **FR-12**: **NEW**: Add Vimeo video as hero content on homepage (above all images)

#### Technical Requirements
- **FR-13**: Preserve existing responsive image optimization
- **FR-14**: Maintain SEO optimization with proper alt texts
- **FR-15**: Ensure all images meet performance standards (< 3s load time)
- **FR-16**: Update sitemap and metadata if needed
- **FR-17**: **NEW**: Implement responsive Vimeo video embed with proper iframe attributes

### 4.2 Non-Functional Requirements

#### Performance
- **NFR-1**: All new images must load within 3 seconds
- **NFR-2**: Maintain Core Web Vitals scores
- **NFR-3**: Optimize image file sizes without quality loss

#### Quality
- **NFR-4**: All images must be professionally composed and well-lit
- **NFR-5**: Consistent image quality and style across all photos
- **NFR-6**: Proper aspect ratios for responsive display

#### Compatibility
- **NFR-7**: Images must display correctly on all devices (mobile, tablet, desktop)
- **NFR-8**: Maintain cross-browser compatibility
- **NFR-9**: Preserve existing accessibility features

---

## 5. Implementation Plan

### 5.1 Phase 1: Image Processing & Conversion
**Duration**: 1-2 days

#### Tasks:
1. **Image Analysis**
   - Analyze dimensions and aspect ratios of new images
   - Identify optimal replacement mappings
   - Plan naming convention updates

2. **Image Conversion**
   - Convert JPG/PNG to WebP format
   - Optimize file sizes while maintaining quality
   - Generate multiple sizes for responsive display

3. **File Organization**
   - Organize images by category (flat, house, neighborhood)
   - Implement consistent naming convention
   - Backup existing images

4. **Vimeo Video Integration**
   - Add Vimeo video as hero section on homepage
   - Implement responsive iframe with proper attributes
   - Position video above all image sections

### 5.2 Phase 2: Page Integration & Cleanup
**Duration**: 1-2 days

#### Tasks:
1. **Page Integration Verification**
   - Verify images work correctly in `src/app/page.tsx` (homepage)
   - Verify images work correctly in `src/app/images/page.tsx` (images gallery)
   - Test all image sections in `src/data/sections.ts`
   - Ensure proper Next.js Image component integration

2. **Old Image Removal**
   - Remove all old flat images completely from the project
   - Clean up unused image files
   - Update image references in sections data

3. **Section & Headline Updates**
   - Update or remove headlines for deleted images
   - Ensure section titles match new image content
   - Maintain consistent naming conventions

### 5.3 Phase 3: Configuration Updates
**Duration**: 1 day

#### Tasks:
1. **Configuration Updates**
   - Update `imageConfig.ts` with new image dimensions
   - Adjust aspect ratios and sizing parameters
   - Test responsive behavior

2. **Component Updates**
   - Update image references in components
   - Verify alt text and SEO metadata
   - Test image loading and display

### 5.4 Phase 4: Content Integration
**Duration**: 1-2 days

#### Tasks:
1. **Text Content Integration**
   - Parse new text files and extract content
   - Update translation files (`homepage.json`, etc.)
   - Maintain bilingual consistency

2. **Section Updates**
   - Update section descriptions with new content
   - Enhance property descriptions
   - Improve location and neighborhood information

### 5.5 Phase 5: Testing & Optimization
**Duration**: 1 day

#### Tasks:
1. **Quality Assurance**
   - Test all images on different devices
   - Verify responsive behavior
   - Check loading performance

2. **SEO Verification**
   - Verify alt texts and metadata
   - Test sitemap generation
   - Check structured data

3. **Final Optimization**
   - Fine-tune image compression
   - Optimize loading priorities
   - Performance testing

---

## 6. Image Mapping Strategy

### 6.1 Direct Replacements
| New Image | Replaces | Category |
|-----------|----------|----------|
| `amerikanische-Kueche-IMG_4737.jpg` | `kitchen-01.webp`, `kitchen-02.webp`, `kitchen-03.webp` | Kitchen |
| `wohnzimmer_IMG_4728.jpg` | `living-01.webp` | Living Room |
| `wohnzimmer-ausblick-IMG_4730.jpg` | `living-02.webp` | Living Room |
| `wohnzimmer-esstisch-IMG_4733.jpg` | `living-03.webp` | Living Room |
| `wohnzimmer-IMG_4754.jpg` | `living-04.webp` | Living Room |
| `Wohnzimmer-IMG_4759.jpg` | `living-05.webp` | Living Room |
| `Wohnzimmer-sofa-IMG_4731.jpg` | `living-night.webp` | Living Room |
| `Schlafzimmer_IMG_4722.jpg` | `sleeping-01.webp` | Bedroom |
| `Schlafzimmer_kleiderschrank_IMG_4724.jpg` | `sleeping-02.webp` | Bedroom |
| `schlafzimmer-ausblick-IMG_4771.jpg` | `sleeping-03.webp` | Bedroom |
| `schlafzimmer-fluegeltueren-IMG_4775.jpg` | `sleeping-04.webp` | Bedroom |
| `Bad_IMG_4713.jpg` | `bathroom-01.webp`, `bathroom-02.webp` | Bathroom |
| `balkon-IMG_4743.jpg` | `balcony-01.webp`, `balcony-02.webp` | Balcony |
| `ausblick-balkon-IMG_4750.jpg` | `balcony-03.webp` | Balcony |
| `begehbarer-kleiderschrank-IMG_4726.jpg` | `sleeping-cupboard.webp` | Storage |
| `fluegeltueren-IMG_4756.jpg` | `connector-doors-sleeping.webp` | Architecture |
| `grundriss-adalberstr-2025.png` | `floorplan.webp` | Floor Plan |

### 6.2 New Additions
| New Image | Category | Purpose |
|-----------|----------|---------|
| `aussenansicht-IMG_4513.jpg` | House | Building exterior |
| `fahrstuhl-IMG_4531.jpg` | House | Elevator feature |
| `hausflur-IMG_4516.jpg` | House | Hallway |
| `hausflur-vertikal-IMG_4530.jpg` | House | Hallway vertical |
| `garten-IMG_4524.jpg` | House | Garden overview |
| `garten-detail-IMG_4523.jpg` | House | Garden detail |
| `garten-von-oben_IMG_4721.jpg` | House | Garden from above |
| `gartenausblick-IMG_4528.jpg` | House | Garden view |
| `im-garten-IMG_4520.jpg` | House | In garden |

### 6.3 Content Updates
| Text File | Integration Target | Language |
|-----------|-------------------|----------|
| `objekt-portal-format-de-en.txt` | Homepage sections | DE/EN |
| `ausstattung-portal-format-de-en.txt` | Equipment sections | DE/EN |
| `lage-portal-format-de-en.txt` | Neighborhood sections | DE/EN |

---

## 7. Risk Assessment

### 7.1 Technical Risks
- **Risk**: Image conversion quality loss
  - **Mitigation**: Use high-quality conversion tools, test on multiple devices
- **Risk**: Performance degradation
  - **Mitigation**: Optimize file sizes, implement lazy loading
- **Risk**: Responsive display issues
  - **Mitigation**: Test on all device sizes, adjust aspect ratios

### 7.2 Content Risks
- **Risk**: Inconsistent image quality
  - **Mitigation**: Standardize image processing pipeline
- **Risk**: SEO impact from content changes
  - **Mitigation**: Maintain existing SEO structure, update gradually

### 7.3 Timeline Risks
- **Risk**: Image processing takes longer than expected
  - **Mitigation**: Start with critical images first, batch process
- **Risk**: Content integration complexity
  - **Mitigation**: Use existing i18n structure, test incrementally

---

## 8. Success Criteria

### 8.1 Technical Success
- ✅ All new images load within 3 seconds
- ✅ Responsive display works on all devices
- ✅ WebP conversion maintains quality
- ✅ No broken image links or missing files

### 8.2 Content Success
- ✅ All outdated indoor images replaced
- ✅ New content integrated into i18n system
- ✅ Bilingual consistency maintained
- ✅ Enhanced property descriptions

### 8.3 Business Success
- ✅ Improved visual appeal of website
- ✅ Better representation of current loft condition
- ✅ Maintained or improved booking conversion
- ✅ Professional presentation standards met

---

## 9. Post-Implementation

### 9.1 Monitoring
- Monitor website performance metrics
- Track user engagement with new images
- Monitor booking conversion rates
- Check for any technical issues

### 9.2 Maintenance
- Regular image optimization
- Content updates as needed
- Performance monitoring
- SEO tracking

### 9.3 Future Considerations
- Plan for regular image updates
- Consider seasonal content variations
- Monitor user feedback on new images
- Plan for additional content enhancements

---

## 10. Appendices

### Appendix A: Current Image Inventory
[Detailed list of all 34 current images with dimensions and usage]

### Appendix B: New Image Specifications
[Detailed analysis of new images with dimensions and quality metrics]

### Appendix C: Content Mapping
[Detailed mapping of new text content to existing sections]

### Appendix D: Technical Specifications
[Detailed technical requirements for image processing and integration]

---

**Document Status**: Draft
**Next Review**: After Phase 1 completion
**Approval Required**: Project Owner
