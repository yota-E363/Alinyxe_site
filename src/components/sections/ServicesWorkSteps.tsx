"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { WorkStep } from "@/components/ui/WorkStep";

export function ServicesWorkSteps() {
  const { t } = useLocale();
  const workSteps = t.services.workSteps;

  return (
    <WorkStep
      eyebrow={workSteps.eyebrow}
      title={workSteps.title}
      subtitle={workSteps.subtitle}
      steps={workSteps.steps}
    />
  );
}

export default ServicesWorkSteps;
