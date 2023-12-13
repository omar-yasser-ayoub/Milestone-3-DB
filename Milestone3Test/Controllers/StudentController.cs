﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Milestone3Test.Models;

namespace Milestone3Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly Advising_SystemContext _dbContext;

        public StudentController (Advising_SystemContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpPost]
        [Route("ChooseInstructor")]
        public IActionResult ChooseInstructor([FromHeader] string StudentID, [FromHeader] string instructorID, [FromHeader] string CourseID, [FromHeader] string current_semester_code)
        {
            _dbContext.Procedures_StudentChooseInstructor(StudentID, instructorID, CourseID, current_semester_code);

            return StatusCode(StatusCodes.Status200OK);
        }
        [HttpPost]
        [Route("AddMobile")]
        public IActionResult AddMobile([FromHeader] string StudentID, [FromHeader] string mobile_number)
        {
            _dbContext.Procedures_StudentAddMobile(StudentID, mobile_number);
            return StatusCode(StatusCodes.Status200OK);
        }
        [HttpPost]
        [Route("RegisterFirstMakeup")]
        public IActionResult RegisterFirstMakeup([FromHeader] string StudentID, [FromHeader] string courseID, [FromHeader] string studentCurr_sem)
        {
            _dbContext.Procedures_StudentRegisterFirstMakeup(StudentID, courseID, studentCurr_sem);
            return StatusCode(StatusCodes.Status200OK);
        }
        [HttpPost]
        [Route("RegisterSecondMakeup")]
        public IActionResult RegisterSecondMakeup([FromHeader] string StudentID, [FromHeader] string courseID, [FromHeader] string studentCurr_sem)
        {
            _dbContext.Procedures_StudentRegisterSecondMakeup(StudentID, courseID, studentCurr_sem);
            return StatusCode(StatusCodes.Status200OK);
        }
        [HttpPost]
        [Route("Registration")]
        public IActionResult Registration([FromHeader] string first_name, [FromHeader] string last_name, [FromHeader] string password, [FromHeader] string faculty, [FromHeader] string email, [FromHeader] string major, [FromHeader] string Semester)
        {
            int Student_id = _dbContext.Procedures_StudentRegistration(first_name, last_name, password, faculty, email, major, Semester);
            return StatusCode(StatusCodes.Status200OK, new { StudentId = Student_id });
        }
        [HttpPost]
        [Route("SendingCHRequest")]
        public IActionResult SendingCHRequest([FromHeader] string StudentID, [FromHeader] string credit_hours, [FromHeader] string type, [FromHeader] string comment)
        {
            _dbContext.Procedures_StudentSendingCHRequest(StudentID, credit_hours, type, comment);
            return StatusCode(StatusCodes.Status200OK);
        }
        [HttpPost]
        [Route("SendingCourseRequest")]
        public IActionResult SendingCourseRequest([FromHeader] string courseID, [FromHeader] string StudentID, [FromHeader] string type, [FromHeader] string comment)
        {
            _dbContext.Procedures_StudentSendingCourseRequest(courseID, StudentID, type, comment);
            return StatusCode(StatusCodes.Status200OK);
        }
        [HttpPost]
        [Route("ViewMS")]
        public IActionResult ViewMS()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("ViewOptionalCourse")]
        public IActionResult ViewOptionalCourse()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("ViewRequiredCourse")]
        public IActionResult ViewRequiredCourse()
        {
            // TODO code here
            return null;
        }
    }
}
