import { Schema, model } from 'mongoose';
import {
  TStudent,
  TGuardianData,
  TPresentAddress,
  TUserName,
  StudentModel,
} from './student.interface';

const nameSchema = new Schema<TUserName>({
  firstName: { type: String },
  lastName: { type: String },
});

const guardianSchema = new Schema<TGuardianData>({
  fatherName: { type: String },
  motherName: { type: String },
  contact: { type: Number },
});

const presentAddressSchema = new Schema<TPresentAddress>({
  country: { type: String },
  district: { type: String },
  village: { type: String },
  road: { type: String },
});

const studentSchema = new Schema<TStudent, StudentModel>({
  id: {
    type: String,
    required: [true, 'studentId must be parses'],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'User',
  },
  name: nameSchema,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  doJob: { type: Boolean },
  contact: { type: Number },
  guardian: guardianSchema,
  presentAddress: presentAddressSchema,
  isDelete: {
    type: Boolean,
    default: false,
  },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemester',
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicDepartment',
  },
});

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
