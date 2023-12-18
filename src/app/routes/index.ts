import { Router } from 'express';
import { userRoute } from '../modules/user/user.router';
import { studentRoute } from '../modules/student/student.router';
import { academicSemesterRoute } from '../modules/academicSemester/academicSemester.router';
import { academicFacultyRoute } from '../modules/academicFaculty/academicFaculty.router';
import { academicDepartmentRoute } from '../modules/academicDepartment/academicDepartment.router';
import { CourseRoutes } from '../modules/Course/course.route';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/student',
    route: studentRoute,
  },
  {
    path: '/academic-semester',
    route: academicSemesterRoute,
  },
  {
    path: '/academic-faculty',
    route: academicFacultyRoute,
  },
  {
    path: '/academic-department',
    route: academicDepartmentRoute,
  },
  {
    path: '/courses',
    route: CourseRoutes,
  },
  {
    path: '/semester-registrations',
    route: semesterRegistrationRoutes,
  },
  // {
  //   path: '/offered-courses',
  //   route: offeredCourseRoutes,
  // },
  // {
  //   path: '/auth',
  //   route: AuthRoutes,
  // },
];

moduleRoutes.forEach((rout) => router.use(rout.path, rout.route));

export default router;
