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

        public StudentController (Advising_SystemContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpPost]
        [Route("ChooseInstructor")]
        public IActionResult ChooseInstructor()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("AddMobile")]
        public IActionResult AddMobile()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("RegisterFirstMakeup")]
        public IActionResult RegisterFirstMakeup()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("RegisterSecondMakeup")]
        public IActionResult RegisterSecondMakeup()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("Registration")]
        public IActionResult Registration()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("SendingCHRequest")]
        public IActionResult SendingCHRequest()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("SendingCourseRequest")]
        public IActionResult SendingCourseRequest()
        {
            // TODO code here
            return null;
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
