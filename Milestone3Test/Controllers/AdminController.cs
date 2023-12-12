﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Milestone3Test.Models;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text.Json;

namespace Milestone3Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly Advising_SystemContext _dbContext;

        public AdminController(Advising_SystemContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("AddSemester")]
        public IActionResult AddSemester([FromHeader] string startDate, [FromHeader] string endDate, [FromHeader] string semesterCode)
        {  
            _dbContext.AdminAddingSemester(startDate,endDate,semesterCode);
            List<SemsterOfferedCourse> courses = _dbContext.SemsterOfferedCourses.ToList();

            return StatusCode(StatusCodes.Status200OK, courses);
        }

        [HttpPost]
        [Route("ListStudentsWithAdvisors")]
        public IActionResult ListStudentsWithAdvisors()
        {
            // TODO code here
            return null;
        }

        [HttpPost]
        [Route("UpdateStudentStatus")]
        public IActionResult UpdateStudentStatus()
        {
            // TODO code here
            return null;
        }

        [HttpPost]
        [Route("AddExam")]
        public IActionResult AddExam()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("AddCourse")]
        public IActionResult AddCourse()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("DeleteCourse")]
        public IActionResult DeleteCourse()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("DeleteSlot")]
        public IActionResult DeleteSlot()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("IssueInstallment")]
        public IActionResult IssueInstallment()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("LinkInstructor")]
        public IActionResult LinkInstructor()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("LinkStudent")]
        public IActionResult LinkStudent()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("LinkStudentToAdvisor")]
        public IActionResult LinkStudentToAdvisor()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("ListAdvisors")]
        public IActionResult ListAdvisors()
        {
            // TODO code here
            return null;
        }
        [HttpPost]
        [Route("ListStudents")]
        public IActionResult ListStudents()
        {
            // TODO code here
            return null;
        }
    }
}
