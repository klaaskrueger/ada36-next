import { breadcrumbStructuredData } from '@/lib/seo';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const structuredData = breadcrumbStructuredData(items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol className="breadcrumb-list">
          {items.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {index === items.length - 1 ? (
                <span aria-current="page" className="breadcrumb-current">
                  {item.name}
                </span>
              ) : (
                <a href={item.url} className="breadcrumb-link">
                  {item.name}
                </a>
              )}
              {index < items.length - 1 && (
                <span className="breadcrumb-separator" aria-hidden="true">
                  ›
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
