// Model for FHIR Patient object, may not be required.
export interface Patient  {
  active: boolean;
  id: string;
  birthDate: string;
  gender: string;
  address: Array<any>;
  identifier: Array<any>;
  name: Array<any>;
  telecom: Array<any>;
}
