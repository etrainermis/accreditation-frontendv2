import { PlaceholderPanel } from "@/components/feedback/placeholder-panel";
import { PageContainer } from "@/components/layout/page-container";
import { DataTablePlaceholder } from "@/components/tables/data-table-placeholder";

export default async function SuperAdminApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <PageContainer
      role="super-admin"
      title={`Application oversight: ${id}`}
      description="Use this dynamic route for super-admin monitoring, assignment visibility, and audit-friendly application oversight."
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <DataTablePlaceholder
          title="Application oversight details"
          description="Replace with timeline, assignment state, and application activity sections."
        />
        <PlaceholderPanel
          eyebrow="Dynamic route"
          title="Oversight guidance"
          description="This route is intentionally distinct from evaluator application review so admin responsibilities stay clear."
          bullets={[
            "Monitor progress and activity here",
            "Keep evaluator-specific review tools in the evaluator portal",
            "Add admin-only controls such as assignment actions or escalation notes",
          ]}
        />
      </div>
    </PageContainer>
  );
}
