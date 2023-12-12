import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";

const createAcademicDepartmentInDb = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllAcademicDepartmentInDb = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

const getSingleAcademicDepartment = async (id: string) => {
  const result = await AcademicDepartment.findById(id).populate('academicFaculty');
  return result;
};

const updateAcademicDepartmentInDb = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicDepartmentService = {
  createAcademicDepartmentInDb,
  getAllAcademicDepartmentInDb,
  getSingleAcademicDepartment,
  updateAcademicDepartmentInDb,
};
