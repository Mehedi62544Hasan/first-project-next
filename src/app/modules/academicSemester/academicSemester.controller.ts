import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.academicSemesterCreateInDb(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is created successfully',
    data: result,
  });
});

const getAllAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.AllAcademicSemesterGetInDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is created successfully',
    data: result,
  });
});

const getSingleAcademicSemester: RequestHandler = catchAsync(
  async (req, res) => {
    const { semesterId } = req.params;
    const result =
      await AcademicSemesterServices.singleAcademicSemesterGetInDb(semesterId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester is created successfully',
      data: result,
    });
  },
);

const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved successfully',
    data: result,
  });
});

export const academicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
