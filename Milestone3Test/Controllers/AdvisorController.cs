using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Milestone3Test.Models;

namespace Milestone3Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvisorController : ControllerBase
    {
        private readonly Advising_SystemContext _Advising_SystemContext;

        public AdvisorController(Advising_SystemContext dbContext)
        {
            _Advising_SystemContext = dbContext;
        }

        [HttpGet]
        [Route("AddCourseGP")]
        public IActionResult AddCourseGP()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("ApproveRejectCHRequest")]
        public IActionResult ApproveRejectCHRequest()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("ApproveRejectCHRequest")]
        public IActionResult ApproveRejectCourseRequest()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("CreateGP")]
        public IActionResult CreateGP()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("DeleteFromGP")]
        public IActionResult DeleteFromGP()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("RegistrationAdvisor")]
        public IActionResult RegistrationAdvisor()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("UpdateGP")]
        public IActionResult UpdateGP()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("ViewAssignedStudents")]
        public IActionResult ViewAssignedStudents()
        {
            // TODO code here
            return null;
        }
        [HttpGet]
        [Route("ViewPendingRequests")]
        public IActionResult ViewPendingRequests()
        {
            // TODO code here
            return null;
        }
    }
}
