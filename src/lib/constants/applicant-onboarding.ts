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
    description: "Provide the official physical and postal address of the institution.",
    fields: [
      "Province or State",
      "District or City",
      "Street Address",
      "Postal Address",
      "Landmark",
    ],
  },
  {
    key: "legal-representatives",
    title: "Legal Representatives",
    description: "Add details of the person or people legally representing the institution.",
    fields: [
      "Representative Name",
      "Role or Title",
      "Email Address",
      "Phone Number",
      "National ID or Passport",
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
      "Years of Operation",
      "Website",
    ],
  },
  {
    key: "technical-and-administrative-staff",
    title: "Technical and Administrative Staff",
    description: "Specify the number of staff by category, qualification, and position.",
    fields: [
      "Academic Staff Count",
      "Administrative Staff Count",
      "Leadership Team",
      "Qualification Summary",
      "Supporting Notes",
    ],
  },
  {
    key: "review-application",
    title: "Review Application",
    description: "Review the information provided before submitting the application.",
    fields: [],
  },
] as const;

export type ApplicantOnboardingStepKey = (typeof applicantOnboardingSteps)[number]["key"];
