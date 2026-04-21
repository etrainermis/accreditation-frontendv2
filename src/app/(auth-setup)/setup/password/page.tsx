import { Suspense } from "react";
import { PasswordSetupForm } from "@/features/evaluator-setup/components/password-setup-form";

export default function SetupPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PasswordSetupForm />
    </Suspense>
  );
}
