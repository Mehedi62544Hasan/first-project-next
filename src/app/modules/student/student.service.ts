import mongoose from 'mongoose';
import { Student } from './student.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { TStudent } from './student.interface';

const getAllStudentInDb = async () => {
  const result = await Student.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const getStudentInDb = async (id: string) => {
  const result = await Student.findOne({ id })
    .populate('admissionSemester')
    .populate('academicDepartment');
  return result;
};

//......................Update start....................//

const updateStudentInDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardian, presentAddress, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (presentAddress && Object.keys(presentAddress).length) {
    for (const [key, value] of Object.entries(presentAddress)) {
      modifiedUpdatedData[`presentAddress.${key}`] = value;
    }
  }

  const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

//......................Update end....................//

const deleteStudentInDb = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDelete: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Student delete unsuccessfully',
      );
    }

    const deletedUser = await Student.findOneAndUpdate(
      { id },
      { isDelete: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'User delete unsuccessfully');
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete student');
  }
};

export const studentService = {
  getAllStudentInDb,
  getStudentInDb,
  updateStudentInDB,
  deleteStudentInDb,
};
