import { RequestHandler } from 'express';
import { studentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getAllStudentController = catchAsync(async (req, res) => {
  const result = await studentService.getAllStudentInDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Student get successfully',
    data: result,
  });
});

const getStudentController: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.getStudentInDb(studentId);

  res.status(200).json({
    success: true,
    message: 'Get single student successfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await studentService.updateStudentInDB(studentId, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is updated succesfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.deleteStudentInDb(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});

export const studentController = {
  getAllStudentController,
  getStudentController,
  updateStudent,
  deleteStudent
};
