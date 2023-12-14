using Microsoft.AspNetCore.Http;
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

        public StudentController(Advising_SystemContext dbContext)
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
        public IActionResult SendingCHRequest([FromHeader] string StudentID, [FromHeader] string creditCourse, [FromHeader] string type, [FromHeader] string comment)
        {
            _dbContext.Procedures_StudentSendingCHRequest(StudentID, creditCourse, type, comment);
            return StatusCode(StatusCodes.Status200OK);
        }

        [HttpPost]
        [Route("SendingCourseRequest")]
        public IActionResult SendingCourseRequest([FromHeader] string StudentID, [FromHeader] string creditCourse, [FromHeader] string type, [FromHeader] string comment)
        {
            _dbContext.Procedures_StudentSendingCourseRequest(creditCourse, StudentID, type, comment);
            return StatusCode(StatusCodes.Status200OK);
        }

        [HttpPost]
        [Route("ViewMS")]
        public IActionResult ViewMS([FromHeader] string StudentID)
        {
            var table = _dbContext.Procedures_ViewMS(StudentID);

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("ViewOptionalCourse")]
        public IActionResult ViewOptionalCourse([FromHeader] string StudentID, [FromHeader] string current_semester_code)
        {
            var table = _dbContext.Procedures_ViewOptionalCourse(StudentID, current_semester_code);

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("ViewRequiredCourse")]
        public IActionResult ViewRequiredCourse([FromHeader] string StudentID, [FromHeader] string current_semester_code)
        public IActionResult ViewRequiredCourse([FromHeader] string StudentID, [FromHeader] string current_semester_code)
        {
            var table = _dbContext.Procedures_ViewRequiredCourses(StudentID, current_semester_code);

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("LoginRequest")]
        public IActionResult LoginRequest([FromHeader] string username, [FromHeader] string password)
        {
            int Success = _dbContext.StudentLogin(username, password);
            return StatusCode(StatusCodes.Status200OK, new { success = Success });
        }

        [HttpPost]
        [Route("ViewAvailableCourses")]
        public IActionResult ViewAvailableCourses([FromHeader] string semstercode)
        {
            var table = _dbContext.FN_SemesterAvailableCourses(semstercode);
            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("ViewUnattendedCourses")]
        public IActionResult ViewUnattendedCourses([FromHeader] string StudentID, [FromHeader] string current_semester_code, [FromHeader] string student_semester)
        {
            var table = _dbContext.FN_StudentUnattendedCourses(StudentID, current_semester_code, student_semester);
            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("ViewUpcomingInstallment")]
        public IActionResult ViewUpcomingInstallment([FromHeader] string student_ID)
        {
            DateTime installdate = _dbContext.FN_StudentUpcoming_installment(student_ID);
            return StatusCode(StatusCodes.Status200OK, installdate);
        }
    }
}
