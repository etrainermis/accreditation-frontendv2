/**
 * Super Admin Seed Data
 * These mock objects simulate the backend responses for development and initial integration.
 */

export const ADMIN_DASHBOARD_STATS_SEED = {
  totalApplications: 124,
  pendingApplications: 45,
  approvedApplications: 68,
  rejectedApplications: 11,
  totalInstitutions: 28,
  totalUsers: 156,
  activeEvaluators: 12,
};

export const USERS_SEED = [
  {
    id: "user-1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "APPLICANT",
    status: "ACTIVE",
    createdAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "user-2",
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.j@rtb.rw",
    role: "EVALUATOR",
    status: "ACTIVE",
    createdAt: "2026-02-10T14:30:00Z",
  },
  {
    id: "user-3",
    firstName: "Bob",
    lastName: "Smith",
    email: "bob.smith@example.com",
    role: "APPLICANT",
    status: "INACTIVE",
    createdAt: "2026-03-01T09:15:00Z",
  },
];

export const INSTITUTIONS_SEED = [
  {
    id: "inst-1",
    name: "Kigali Polytechnic",
    code: "KP-001",
    location: "Kigali",
    status: "REGISTERED",
  },
  {
    id: "inst-2",
    name: "Musanze Technical College",
    code: "MTC-002",
    location: "Musanze",
    status: "REGISTERED",
  },
];

export const EVALUATOR_ASSIGNMENTS_SEED = [
  {
    id: "assign-1",
    applicationId: "app-101",
    evaluatorName: "Alice Johnson",
    assignedAt: "2026-04-10T08:00:00Z",
    status: "ACTIVE",
  },
];
