using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Milestone3Test.Models;

namespace Milestone3Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvisorController : ControllerBase
    {
        private readonly Advising_SystemContext _dbContext;

        public AdvisorController(Advising_SystemContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("AddCourseGP")]
        public IActionResult AddCourseGP([FromHeader] string student_id, [FromHeader] string Semester_code, [FromHeader] string course_name)
        {
            try
            {
                _dbContext.Procedures_AdvisorAddCourseGP(student_id, Semester_code, course_name);

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }
        }

        [HttpPost]
        [Route("ApproveRejectCHRequest")]
        public IActionResult ApproveRejectCHRequest([FromHeader] string requestID, [FromHeader] string current_sem_code)
        {
            _dbContext.Procedures_AdvisorApproveRejectCHRequest(requestID, current_sem_code);

            return StatusCode(StatusCodes.Status200OK);
        }

        [HttpPost]
        [Route("ApproveRejectCourseRequest")]
        public IActionResult ApproveRejectCourseRequest([FromHeader] string requestID, [FromHeader] string current_semester_code)
        {
            _dbContext.Procedures_AdvisorApproveRejectCourseRequest(requestID, current_semester_code);

            return StatusCode(StatusCodes.Status200OK);
        }

        [HttpPost]
        [Route("CreateGP")]
        public IActionResult CreateGP([FromHeader] string Semester_code, [FromHeader] string expected_graduation_date, [FromHeader] string sem_credit_hours, [FromHeader] string advisor_id, [FromHeader] string student_id)
        {
            try
            {
                _dbContext.Procedures_AdvisorCreateGP(Semester_code, expected_graduation_date, sem_credit_hours, advisor_id, student_id);

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }
        }

        [HttpPost]
        [Route("DeleteFromGP")]
        public IActionResult DeleteFromGP([FromHeader] string studentID, [FromHeader] string Semester_code, [FromHeader] string courseID)
        {
            try
            {
                _dbContext.Procedures_AdvisorDeleteFromGP(studentID, Semester_code, courseID);

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }
        }

        [HttpPost]
        [Route("RegistrationAdvisor")]
        public IActionResult RegistrationAdvisor([FromHeader] string advisor_name, [FromHeader] string password, [FromHeader] string email, [FromHeader] string office)
        {
            int Advisor_id = _dbContext.Procedures_AdvisorRegistration(advisor_name, password, email, office);

            return StatusCode(StatusCodes.Status200OK, new { AdvisorId = Advisor_id });
        }

        [HttpPost]
        [Route("UpdateGP")]
        public IActionResult UpdateGP([FromHeader] string expected_grad_date, [FromHeader] string studentID)
        {
            try
            {
                _dbContext.Procedures_AdvisorUpdateGP(expected_grad_date, studentID);

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }
        }

        [HttpPost]
        [Route("ViewAssignedStudents")]
        public IActionResult ViewAssignedStudents([FromHeader] string AdvisorID, [FromHeader] string major)
        {
            var table = _dbContext.Procedures_AdvisorViewAssignedStudents(AdvisorID, major);

            return StatusCode(StatusCodes.Status200OK, table);
        }
        [HttpPost]
        [Route("ViewAllAssignedStudents")]
        public IActionResult ViewAllAssignedStudents([FromHeader] string AdvisorID)
        {
            var table = _dbContext.Procedures_AdvisorViewAllAssignedStudents(AdvisorID);

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("ViewPendingRequests")]
        public IActionResult ViewPendingRequests([FromHeader] string Advisor_ID)
        {
            var table = _dbContext.Procedures_AdvisorViewPendingRequests(Advisor_ID);

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("LoginRequest")]
        public IActionResult LoginRequest([FromHeader] string username, [FromHeader] string password)
        {
            int Success = _dbContext.AdvisorLogin(username, password);
            return StatusCode(StatusCodes.Status200OK, new { success = Success });
        }

        [HttpPost]
        [Route("ViewAllRequests")]
        public IActionResult ViewAllRequests([FromHeader] string advisor_id)
        {
            var table = _dbContext.FN_Advisors_Requests(advisor_id);

            return StatusCode(StatusCodes.Status200OK, table);
        }
    }
}
