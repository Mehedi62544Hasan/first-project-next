import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { AcademicDepartmentService } from './academicDepartment.service';


const createAcademicDepartment: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentService.createAcademicDepartmentInDb(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department is retrieved successfully',
    data: result,
  });
});

const getAllAcademicDepartment: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentService.getAllAcademicDepartmentInDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all academic Department is successfully',
    data: result,
  });
});

const getSingleAcademicSemester: RequestHandler = catchAsync(
  async (req, res) => {
    const { _id } = req.params;
    const result = await AcademicDepartmentService.getSingleAcademicDepartment(_id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get all academic Department is successfully',
      data: result,
    });
  },
);

const updateAcademicDepartment: RequestHandler = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const result = await AcademicDepartmentService.updateAcademicDepartmentInDb(
    _id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update Department is successfully',
    data: result,
  });
});

export const academicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicSemester,
  updateAcademicDepartment,
};
