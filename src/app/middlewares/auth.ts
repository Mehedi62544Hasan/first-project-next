import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/user/user.interface';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }

    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        if (err) {
          throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
        }

        const role = (decoded as JwtPayload).role;

        if (requiredRoles && !requiredRoles.includes(role)) {
          throw new AppError(
            httpStatus.UNAUTHORIZED,
            'You are not authorized!',
          );
        }

        req.user = decoded as JwtPayload;
        next();
      },
    );
  });
};

export default auth;

// import { NextFunction, Request, Response } from 'express';
// import httpStatus from 'http-status';
// import jwt, { JwtPayload } from 'jsonwebtoken';
// import config from '../config';
// import AppError from '../errors/AppError';

// const USER_ROLE = {
//   STUDENT: 'STUDENT',
//   ADMIN: 'ADMIN',
//   FACULTY: 'FACULTY',
// } as const;

// type TUSER_ROLE = keyof typeof USER_ROLE;

// // interface CustomRequest extends Request {
// //   user: JwtPayload;
// // }

// const auth = (...requiredRoles: TUSER_ROLE[]) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       // get authorization token
//       const token = req.headers.authorization;

//       if (!token) {
//         throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
//       }

//       let verifiedUser = null;

//       verifiedUser = jwt.verify(
//         token,
//         config.jwt_secret as string,
//       ) as JwtPayload;

//       if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
//         throw new AppError(httpStatus.FORBIDDEN, 'Forbidden');
//       }

//       req.user = verifiedUser;
//       next();
//     } catch (err) {
//       next(err);
//     }
//   };
// };

// export default auth;

// auth(USER_ROLE.ADMIN);
