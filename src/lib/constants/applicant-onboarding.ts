export const applicantOnboardingSteps = [
  {
    key: "institution-details",
    title: "Institution Details",
    description: "Enter the basic identification details of your institution.",
    fields: [
      "Name of Institution",
      "Institution Type",
      "P.O Box",
      "Email",
      "Phone Number",
    ],
  },
  {
    key: "address-information",
    title: "Address Information",
    description: "Where your institution is located",
    fields: [
      "Province",
      "District",
      "Sector",
      "Cell",
      "Village",
      "City",
      "Address Line",
    ],
  },
  {
    key: "legal-representatives",
    title: "Legal Representatives",
    description: "Authorized persons representing the institution",
    fields: [
      "First Name",
      "Last Name",
      "Position in Institution",
      "Gender",
      "Email",
      "Phone Number",
    ],
  },
  {
    key: "about-the-institution",
    title: "About the Institution",
    description: "Overview of your institution and its activities",
    fields: [
      "Institution's mission",
      "Institution's vision",
      "Institution's objectives",
    ],
  },
  {
    key: "technical-and-administrative-staff",
    title: "Technical and Administrative Staff",
    description: "Summary of your institution's staffing structure",
    fields: [
      "Qualification",
      "Position",
      "Number",
      "Availability Status",
    ],
  },
  {
    key: "review-application",
    title: "Review Application",
    description: "Verify all your information before final submission.",
    fields: [],
  },
] as const;

export type ApplicantOnboardingStepKey = (typeof applicantOnboardingSteps)[number]["key"];
