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
        [Route("GetAdvisors")]
        public IActionResult GetAdvisors()
        {
            List<Advisor> list = _Advising_SystemContext.Advisors.ToList();
            return StatusCode(StatusCodes.Status200OK, list);
        }
    }
}
