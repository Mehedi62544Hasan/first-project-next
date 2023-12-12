import { Types } from 'mongoose';
import { Model } from 'mongoose';

export type TUserName = {
  firstName: string;
  lastName: string;
};

export type TGuardianData = {
  fatherName: string;
  motherName: string;
  contact: number;
};

export type TPresentAddress = {
  country: string;
  district: string;
  village: string;
  road?: number;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: TUserName;
  email: string;
  gender: 'male' | 'female';
  doJob: boolean;
  contact: number;
  guardian: TGuardianData;
  presentAddress: TPresentAddress;
  isDelete: boolean;
  admissionSemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
};

export interface StudentModel extends Model<TStudent> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(studentId: string): Promise<TStudent | null>;
}
