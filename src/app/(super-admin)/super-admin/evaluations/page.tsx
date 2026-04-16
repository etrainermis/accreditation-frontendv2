import { redirect } from "next/navigation";

export default async function SuperAdminEvaluationsRoot() {
  redirect("/super-admin/evaluations/applications");
}
