import { redirect } from "next/navigation";

export default async function SupervisorEvaluationsRoot() {
  redirect("/supervisor/evaluations/applications");
}
