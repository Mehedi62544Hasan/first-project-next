import { RequestHandler } from 'express';
import { semesterRegistrationServices } from './semesterRegistration.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createSemesterRegistration: RequestHandler = async (req, res) => {
  const result =
    await semesterRegistrationServices.createSemesterRegistrationInDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration is created successfully',
    data: result,
  });
};

const getAllSemesterRegistration: RequestHandler = async (req, res) => {
  const result = await semesterRegistrationServices.getAllSemesterRegistrationFromDb(
    req.query,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration is retrieved successfully',
    data: result,
  });
};

const getSingleSemesterRegistrations: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const result =
    await semesterRegistrationServices.getSingleSemesterRegistrationsFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration is retrieved successfully',
    data: result,
  });
};

const updateSemesterRegistration: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const result =
    await semesterRegistrationServices.updateSemesterRegistrationFromDb(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration is updated successfully',
    data: result,
  });
};

export const semesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistration,
  getSingleSemesterRegistrations,
  updateSemesterRegistration,
};
