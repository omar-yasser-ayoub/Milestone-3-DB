using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Milestone3Test.Models;

namespace Milestone3Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstructorController : ControllerBase
    {
        private readonly Advising_SystemContext _dbContext;

        public InstructorController (Advising_SystemContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet]
        [Route("GetInstructors")]
        public IActionResult GetInstructors()
        {
            //_dbContext.AdminAddingSemester("2026-10-01", "2027-12-15", "Fall2026");

            List<Semester> list = _dbContext.Semesters.ToList();
            return StatusCode(StatusCodes.Status200OK, list);
        }
    }
}
