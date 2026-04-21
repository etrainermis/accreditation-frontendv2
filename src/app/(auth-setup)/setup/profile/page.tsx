import { Suspense } from "react";
import { ProfileSetupForm } from "@/features/evaluator-setup/components/profile-setup-form";

export default function SetupProfilePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileSetupForm />
    </Suspense>
  );
}
