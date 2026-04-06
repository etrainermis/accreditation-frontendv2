import Link from "next/link";

const applications = [
  {
    id: "xyz-javascript",
    name: "XYZ Ltd JavaScript Accreditation",
    institution: "XYZ Ltd",
    trade: "JavaScript",
    status: "In Review",
    date: "2026-03-15",
  },
  {
    id: "abc-python",
    name: "ABC Corp Python Accreditation",
    institution: "ABC Corp",
    trade: "Python",
    status: "Pending",
    date: "2026-03-20",
  },
  {
    id: "def-react",
    name: "DEF Institute React Accreditation",
    institution: "DEF Institute",
    trade: "React",
    status: "Completed",
    date: "2026-02-28",
  },
];

export function EvaluatorApplicationsList() {
  return (
    <div className="mx-auto w-full max-w-7xl p-4 md:p-6 lg:p-8">
      <div className="mb-6 lg:mb-8">
        <h1 className="mb-2 text-2xl font-semibold tracking-tight text-[#101828] lg:text-3xl">Applications</h1>
        <p className="text-sm font-medium text-[#475467] lg:text-base">Manage and review accreditation applications</p>
      </div>

      <div className="grid gap-4 md:gap-6">
        {applications.map((app) => (
          <Link
            key={app.id}
            href={`/evaluator/applications/${app.id}/general`}
            className="block rounded-lg border border-[#eaecf0] bg-white p-4 transition-all hover:border-[#0a77ff] hover:shadow-md lg:p-6"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 truncate text-base font-semibold text-[#101828] lg:text-lg">{app.name}</h3>
                <div className="flex flex-wrap gap-2 text-xs text-[#475467] lg:text-sm">
                  <span>Institution: {app.institution}</span>
                  <span className="hidden md:inline">&bull;</span>
                  <span>Trade: {app.trade}</span>
                  <span className="hidden md:inline">&bull;</span>
                  <span>{app.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium lg:text-sm ${
                    app.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : app.status === "In Review"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {app.status}
                </span>
                <svg className="h-5 w-5 shrink-0 text-[#667085]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
