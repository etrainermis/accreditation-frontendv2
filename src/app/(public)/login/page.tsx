import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <p>This is login page</p>
      <div className="flex flex-col gap-3">
        <Link
          href="/applicant/onboarding"
          className="rounded-md border px-4 py-2 text-center"
        >
          Applicant Portal
        </Link>
        <Link
          href="/evaluator/dashboard"
          className="rounded-md border px-4 py-2 text-center"
        >
          Evaluator Portal
        </Link>
        <Link
          href="/super-admin/dashboard"
          className="rounded-md border px-4 py-2 text-center"
        >
          Super Admin Portal
        </Link>
      </div>
    </main>
  );
}
