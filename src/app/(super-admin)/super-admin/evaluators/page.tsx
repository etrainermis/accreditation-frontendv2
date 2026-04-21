import { PageContainer } from "@/components/layout/page-container";
import { DataTable, Column } from "@/components/ui/data-table";
import { useGetEvaluatorAssignments } from "@/hooks/queries/useSuperAdminQueries";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvaluatorAssignmentDTO } from "@/lib/api/super-admin-api";

export default function SuperAdminEvaluatorsPage() {
  const { data: assignmentsResponse } = useGetEvaluatorAssignments();
  const assignments = assignmentsResponse?.data || [];

  const columns: Column<EvaluatorAssignmentDTO>[] = [
    {
      header: "Evaluator",
      accessor: "evaluatorName",
    },
    {
      header: "Application ID",
      accessor: "applicationId",
    },
    {
      header: "Assigned Date",
      accessor: (item) => new Date(item.assignedAt).toLocaleDateString(),
    },
    {
      header: "Status",
      accessor: (item) => <StatusBadge status={item.status as any} />,
    },
  ];

  return (
    <PageContainer
      role="super-admin"
      title="Evaluator management"
      description="Review and manage evaluator assignments for all accreditation requests."
    >
      <div className="space-y-6">
        <DataTable
          title="Active Assignments"
          description="View all current evaluator assignments across the system."
          data={assignments}
          columns={columns}
        />
      </div>
    </PageContainer>
  );
}
