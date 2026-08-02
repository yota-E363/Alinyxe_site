"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { AiPipelineFlow } from "@/components/ui/ai-pipeline-flow";

export function ServicesPipeline() {
  const { t } = useLocale();
  const pipeline = t.services.pipeline;

  return (
    <AiPipelineFlow
      eyebrow={pipeline.eyebrow}
      title={pipeline.title}
      subtitle={pipeline.subtitle}
      steps={pipeline.steps}
    />
  );
}

export default ServicesPipeline;
