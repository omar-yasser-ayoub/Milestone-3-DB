using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Milestone3Test.Models;

namespace Milestone3Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Template : ControllerBase
    {
        private readonly Advising_SystemContext _dbContext;

        public Template (Advising_SystemContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet]
        [Route("MyMethod")]
        public IActionResult MyMethod()
        {
            // TODO code here
            return null;
        }
    }
}
