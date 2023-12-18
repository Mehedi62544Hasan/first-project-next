import httpStatus, { BAD_REQUEST } from 'http-status';
import AppError from '../../errors/AppError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistration } from './semesterRegistration.model';
import QueryBuilder from '../../builder/QueryBuilder';

const createSemesterRegistrationInDb = async (
  payload: TSemesterRegistration,
) => {
  const academicSemester = payload.academicSemester;

  const isSemesterExists = await AcademicSemester.findById(academicSemester);

  if (!isSemesterExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This semester is Not Found');
  }

  const isSemesterRegistrationExists = await SemesterRegistration.findOne({
    academicSemester,
  });

  if (isSemesterRegistrationExists) {
    throw new AppError(
      httpStatus.CONFLICT,
      'SemesterRegistration is already registered',
    );
  }

  const result = await SemesterRegistration.create(payload);

  return result;
};

const getAllSemesterRegistrationFromDb = async (
  query: Record<string, unknown>,
) => {
  const semesterRegistrationQuery = new QueryBuilder(
    SemesterRegistration.find().populate('academicSemester'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await semesterRegistrationQuery.modelQuery;
  return result;
};

const getSingleSemesterRegistrationsFromDB = async (id: string) => {
  const result = await SemesterRegistration.findById(id);

  return result;
};

const updateSemesterRegistrationFromDb = async (id: string, payload: Partial<TSemesterRegistration>) => {
  const requestedSemester = await SemesterRegistration.findById(id);
  if (requestedSemester?.status === 'ENDED') {
    throw new AppError(
      BAD_REQUEST,
      `requested ${requestedSemester.status} is ENDED`,
    );
  }
};

export const semesterRegistrationServices = {
  createSemesterRegistrationInDb,
  getAllSemesterRegistrationFromDb,
  getSingleSemesterRegistrationsFromDB,
  updateSemesterRegistrationFromDb,
};
