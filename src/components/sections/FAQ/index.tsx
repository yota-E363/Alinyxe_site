'use client'

import { useLocale } from "@/lib/i18n/locale-context";
import {
  FeatureCard,
  GaugeChart,
  NotificationsPreview,
  ChatPreview,
  GrowthChart,
  AnalyticsDashboard,
} from "@/components/sections/FAQ/components";
import { SectionTitle } from "@/components/sections";

export function FAQ() {
  const { t } = useLocale();
  const items = t.home.keyFeatures.items;

  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow={t.home.keyFeatures.eyebrow}
          title={t.home.keyFeatures.title}
          subtitle={t.home.keyFeatures.subtitle}
        />

        <div className="mt-16 flex flex-wrap items-center content-center justify-center gap-[20px]">
          {/* Ligne 1 — 48% / 48% */}
          <FeatureCard
            className="w-full sm:w-[48%]"
            title={items[0].title}
            description={items[0].description}
          >
            <NotificationsPreview />
          </FeatureCard>

          <FeatureCard
            className="w-full sm:w-[48%]"
            title={items[1].title}
            description={items[1].description}
          >
            <ChatPreview />
          </FeatureCard>

          {/* Ligne 2 — 30% / 30% / 30% */}
          <FeatureCard
            className="w-full sm:w-[30%]"
            title={items[2].title}
            description={items[2].description}
          >
            <GrowthChart />
          </FeatureCard>

          <FeatureCard
            className="w-full sm:w-[30%]"
            title={items[3].title}
            description={items[3].description}
          >
            <GaugeChart value={78} />
          </FeatureCard>

          <FeatureCard
            className="w-full sm:w-[30%]"
            title={items[4].title}
            description={items[4].description}
          >
            <AnalyticsDashboard />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
