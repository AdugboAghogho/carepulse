// Ensure your @/types/index.d.ts (or @/types/index.ts) is updated EXACTLY as below
// The error indicates the types file still has the OLD plain object for 'params' (not a Promise)
// Copy-paste this full content to replace the existing file, then restart your TS server (VS Code: Cmd/Ctrl + Shift + P > "TypeScript: Restart TS Server")

/* eslint-disable no-unused-vars */

export type SearchParamProps = {
  params: Promise<{ [key: string]: string }>; // MUST be Promise to satisfy PageProps; resolves to {} for static / route
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>; // MUST be Promise for async components
};

export type Gender = "male" | "female" | "other";
export type Status = "pending" | "scheduled" | "cancelled";

export interface CreateUser Params {
  name: string;
  email: string;
  phone: string;
}

export interface User extends CreateUser Params {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  $id: string;
}

export interface RegisterUser Params extends CreateUser Params {
  userId: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

export type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
};

export type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  timeZone: string;
  appointment: Appointment; // Define Appointment interface if missing (see notes below)
  type: string;
};

// Optional: Add this if 'Appointment' is referenced but not defined
export interface Appointment {
  $id: string;
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
