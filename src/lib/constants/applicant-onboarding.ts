export const applicantOnboardingSteps = [
  {
    key: "institution-details",
    title: "Institution Details",
    description: "Enter the basic identification details of your institution.",
    fields: [
      "Name of Institution",
      "Institution Type",
      "Institution Category",
      "P.O Box",
      "Email",
      "Phone Number",
    ],
  },
  {
    key: "address-information",
    title: "Address Information",
    description: "Provide the official physical and postal address of the institution.",
    fields: [
      "Province",
      "District",
      "Sector",
      "Cell",
      "Village",
      "Address Line",
    ],
  },
  {
    key: "legal-representatives",
    title: "Legal Representatives",
    description: "Add details of the person or people legally representing the institution.",
    fields: [
      "First Name",
      "Last Name",
      "Role",
      "Email",
      "Phone",
      "Gender",
    ],
  },
  {
    key: "about-the-institution",
    title: "About the Institution",
    description: "Give a brief overview of the institution and its services.",
    fields: [
      "Institution Summary",
      "Mission or Mandate",
      "Programs Offered",
    ],
  },
  {
    key: "technical-and-administrative-staff",
    title: "Technical and Administrative Staff",
    description: "Specify the number of staff by category, qualification, and position.",
    fields: [
      "Qualification",
      "Position",
      "Specialization",
      "Number",
      "Availability Status",
    ],
  },
  {
    key: "review-application",
    title: "Review Application",
    description: "Review the information provided before submitting your application.",
    fields: [],
  },
] as const;

export type ApplicantOnboardingStepKey = (typeof applicantOnboardingSteps)[number]["key"];
