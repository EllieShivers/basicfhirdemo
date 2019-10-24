// Model for FHIR Patient object, may not be required.
export class Patient {
  active: boolean;
  id: string;
  birthDate: string;
  gender: string;
  address: Array<Object>;
  identifier: Array<Object>;
  name: Array<Object>;
  telecom: Array<Object>;
}
