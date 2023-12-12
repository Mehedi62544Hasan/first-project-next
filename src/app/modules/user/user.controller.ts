import { RequestHandler } from 'express';
import { userServer } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const { password, student } = req.body;

  const result = await userServer.studentCreateInDb(password, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created',
    data: result,
  });
});

export const userController = {
  createUser,
};
