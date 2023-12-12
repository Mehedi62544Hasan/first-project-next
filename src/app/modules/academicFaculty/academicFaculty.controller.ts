import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { AcademicFAcultyService } from './academicFaculty.service';

const createAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicFAcultyService.createAcademicFacultyInDb(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty is retrieved successfully',
    data: result,
  });
});

const getAllAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicFAcultyService.getAllAcademicFacultyInDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all academic faculty is successfully',
    data: result,
  });
});

const getSingleAcademicSemester: RequestHandler = catchAsync(
  async (req, res) => {
    const { _id } = req.params;
    const result = await AcademicFAcultyService.getSingleAcademicFaculty(_id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get all academic faculty is successfully',
      data: result,
    });
  },
);

const updateAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const result = await AcademicFAcultyService.updateAcademicFacultyInDb(
    _id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update faculty is successfully',
    data: result,
  });
});

export const academicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicSemester,
  updateAcademicFaculty,
};
