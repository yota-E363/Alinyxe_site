"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { ServiceCategoryGrid } from "@/components/ui/service-category-grid";

export function AboutServiceCategories() {
  const { t } = useLocale();
  const categories = t.about.offerings.categories;

  return (
    <ServiceCategoryGrid
      eyebrow={categories.eyebrow}
      title={categories.title}
      subtitle={categories.subtitle}
      items={categories.items}
    />
  );
}

export default AboutServiceCategories;
