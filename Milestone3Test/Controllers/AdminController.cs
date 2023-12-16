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
            try
            {
                _dbContext.AdminAddingSemester(startDate, endDate, semesterCode);

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status400BadRequest);
            }
        }

        [HttpPost]
        [Route("ListStudentsWithAdvisors")]
        public IActionResult ListStudentsWithAdvisors()
        {
            var table = _dbContext.AdminListStudentsWithAdvisors();

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("UpdateStudentStatus")]
        public IActionResult UpdateStudentStatus([FromHeader] string student_id)
        {
            _dbContext.Procedure_AdminUpdateStudentStatus(student_id);

            return StatusCode(StatusCodes.Status200OK);
        }

        [HttpPost]
        [Route("AddExam")]
        public IActionResult AddExam([FromHeader] string type_1, [FromHeader] string date_1, [FromHeader] string courseID_1)
        {

            // Ensure proper quoting for string and date values
            _dbContext.Procedures_AdminAddExam(type_1, date_1, courseID_1);
            /*_dbContext.Database.ExecuteSqlRaw($"INSERT INTO MakeUp_Exam VALUES('{date_1}', '{type_1}', {courseID_1})");*/

            return StatusCode(StatusCodes.Status200OK);
        }

        [HttpPost]
        [Route("AddCourse")]
        public IActionResult AddCourse([FromHeader] string major, [FromHeader] string semester, [FromHeader] string credit_hours, [FromHeader] string name, [FromHeader] string is_offered)
        {
            try
            {
                _dbContext.Procedures_AdminAddingCourse(major, semester, credit_hours, name, is_offered);

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }
        }

        [HttpPost]
        [Route("DeleteCourse")]
        public IActionResult DeleteCourse([FromHeader] string courseID)
        {
            _dbContext.Procedures_AdminDeleteCourse(courseID);

            return StatusCode(StatusCodes.Status200OK);
        }

        [HttpPost]
        [Route("DeleteSlot")]
        public IActionResult DeleteSlot([FromHeader] string current_semester)
        {
            _dbContext.Procedures_AdminDeleteSlots(current_semester);

            return StatusCode(StatusCodes.Status200OK);
        }

        [HttpPost]
        [Route("IssueInstallment")]
        public IActionResult IssueInstallment([FromHeader] string payment_id)
        {
            _dbContext.Procedures_AdminIssueInstallment(payment_id);

            return StatusCode(StatusCodes.Status200OK);
        }

        [HttpPost]
        [Route("LinkInstructor")]
        public IActionResult LinkInstructor([FromHeader] string cours_id, [FromHeader] string instructor_id, [FromHeader] string slot_id)
        {
            _dbContext.Procedures_AdminLinkInstructor(cours_id, instructor_id, slot_id);

            return StatusCode(StatusCodes.Status200OK);
        }

        [HttpPost]
        [Route("LinkStudent")]
        public IActionResult LinkStudent([FromHeader] string cours_id, [FromHeader] string instructor_id, [FromHeader] string studentID, [FromHeader] string semester_code)
        {
            try
            {
                _dbContext.Procedures_AdminLinkStudent(cours_id, instructor_id, studentID, semester_code);

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }
        }


        [HttpPost]
        [Route("LinkStudentToAdvisor")]
        public IActionResult LinkStudentToAdvisor([FromHeader] string studentID, [FromHeader] string advisorID)
        {
            try
            {
                _dbContext.Procedures_AdminLinkStudentToAdvisor(studentID, advisorID);

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }
        }

        [HttpPost]
        [Route("ListAdvisors")]
        public IActionResult ListAdvisors()
        {
            var table = _dbContext.Procedures_AdminListAdvisors();

            return StatusCode(StatusCodes.Status200OK, table);
        }

        [HttpPost]
        [Route("ListStudents")]
        public IActionResult ListStudents()
        {
            var table = _dbContext.Procedures_AdminListStudents();

            return StatusCode(StatusCodes.Status200OK, table);
        }
    }
}
