import { DataTablePlaceholder } from "@/components/tables/data-table-placeholder";
import { PlaceholderPanel } from "@/components/feedback/placeholder-panel";
import { PageContainer } from "@/components/layout/page-container";

export default function SuperAdminAssignmentsPage() {
  return (
    <PageContainer
      role="super-admin"
      title="Evaluator assignments"
      description="Use this route for assigning evaluators to applications, managing workload balancing, and reviewing ownership."
    >
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <DataTablePlaceholder
          title="Assignment control center"
          description="Replace with assignment tables, workload filters, and assignment mutation surfaces."
        />
        <PlaceholderPanel
          eyebrow="Super admin only"
          title="Boundary note"
          description="Keep assignment orchestration inside the super-admin portal even if evaluator-facing views reuse some visual patterns."
          bullets={[
            "Super Admin and Evaluator are separate portals",
            "Shared components may exist, but workflow ownership should stay role-specific",
            "Assignment mutations belong in src/features/evaluator-management",
          ]}
        />
      </div>
    </PageContainer>
  );
}
