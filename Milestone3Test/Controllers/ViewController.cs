using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Milestone3Test.Models;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text.Json;
using System.Xml.Linq;

namespace Milestone3Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ViewController : ControllerBase
    {
        private readonly Advising_SystemContext _dbContext;

        public ViewController(Advising_SystemContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("AdvisorGraduationPlan")]
        public IActionResult AdvisorGraduationPlan()
        {
            var table = _dbContext.Views_Advisors_Gradtuation_Plan();

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("AllPendingRequest")]
        public IActionResult AllPendingRequest()
        {
            var table = _dbContext.Views_all_Pending_Requests();

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("CoursesMakeupExam")]
        public IActionResult CoursesMakeupExam()
        {
            var table = _dbContext.Views_Courses_MakeupExams();

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("InstructorAssignedCourses")]
        public IActionResult InstructorAssignedCourses()
        {
            var table = _dbContext.Views_Instructors_AssignedCourses();

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("SemesterOfferedCourses")]
        public IActionResult SemesterOfferedCourses()
        {
            var table = _dbContext.Views_Semster_offered_Courses();

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("StudentPayment")]
        public IActionResult StudentPayment()
        {
            var table = _dbContext.Views_Student_Payment();

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("StudentCoursesTranscript")]
        public IActionResult StudentCoursesTranscript()
        {
            var table = _dbContext.Views_Students_Courses_transcript();

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("ViewCoursePrerequisites")]
        public IActionResult ViewCoursePrerequisites()
        {
            var table = _dbContext.Views_view_Course_prerequisites();

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("ViewStudents")]
        public IActionResult ViewStudents()
        {
            var table = _dbContext.Views_view_Students();

            return StatusCode(StatusCodes.Status200OK, table);
        }
    }
}
