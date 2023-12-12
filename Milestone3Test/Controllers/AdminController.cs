using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Milestone3Test.Models;

namespace Milestone3Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly Advising_SystemContext _dbContext;

        public AdminController (Advising_SystemContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("AddSemester")]
        public IActionResult AddSemester()
        {
            // TODO code here
            return null;
        }

        [HttpGet]
        [Route("ListStudentsWithAdvisors")]
        public IActionResult ListStudentsWithAdvisors()
        {
            // TODO code here
            return null;
        }

        [HttpGet]
        [Route("UpdateStudentStatus")]
        public IActionResult UpdateStudentStatus()
        {
            // TODO code here
            return null;
        }

        [HttpGet]
        [Route("AddExam")]
        public IActionResult AddExam()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("AddCourse")]
        public IActionResult AddCourse()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("DeleteCourse")]
        public IActionResult DeleteCourse()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("DeleteSlot")]
        public IActionResult DeleteSlot()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("IssueInstallment")]
        public IActionResult IssueInstallment()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("LinkInstructor")]
        public IActionResult LinkInstructor()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("LinkStudent")]
        public IActionResult LinkStudent()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("LinkStudentToAdvisor")]
        public IActionResult LinkStudentToAdvisor()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("ListAdvisors")]
        public IActionResult ListAdvisors()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("ListStudents")]
        public IActionResult ListStudents()
        {
            // TODO code here
            return null;
        }
    }
}
