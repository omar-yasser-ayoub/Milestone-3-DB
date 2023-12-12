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
            _dbContext.Procedures_AdvisorAddCourseGP(student_id, Semester_code, course_name);

            return StatusCode(StatusCodes.Status200OK);
        }

        [HttpPost]
        [Route("ApproveRejectCHRequest")]
        public IActionResult ApproveRejectCHRequest()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("ApproveRejectCHRequest")]
        public IActionResult ApproveRejectCourseRequest()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("CreateGP")]
        public IActionResult CreateGP()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("DeleteFromGP")]
        public IActionResult DeleteFromGP()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("RegistrationAdvisor")]
        public IActionResult RegistrationAdvisor()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("UpdateGP")]
        public IActionResult UpdateGP()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("ViewAssignedStudents")]
        public IActionResult ViewAssignedStudents()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("ViewPendingRequests")]
        public IActionResult ViewPendingRequests()
        {
            // TODO code here
            return null;
        }
    }
}
