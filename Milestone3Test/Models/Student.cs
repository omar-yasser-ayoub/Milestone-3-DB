using System;
using System.Collections.Generic;

namespace Milestone3Test.Models
{
    public partial class Student
    {
        public Student()
        {
            ExamStudents = new HashSet<ExamStudent>();
            GraduationPlans = new HashSet<GraduationPlan>();
            Payments = new HashSet<Payment>();
            Requests = new HashSet<Request>();
            StudentInstructorCourseTakes = new HashSet<StudentInstructorCourseTake>();
            StudentPhones = new HashSet<StudentPhone>();
        }

        public int StudentId { get; set; }
        public string? FName { get; set; }
        public string? LName { get; set; }
        public string? Password { get; set; }
        public decimal? Gpa { get; set; }
        public string? Faculty { get; set; }
        public string? Email { get; set; }
        public string? Major { get; set; }
        public bool? FinancialStatus { get; set; }
        public int? Semester { get; set; }
        public int? AcquiredHours { get; set; }
        public int? AssignedHours { get; set; }
        public int? AdvisorId { get; set; }

        public virtual Advisor? Advisor { get; set; }
        public virtual ICollection<ExamStudent> ExamStudents { get; set; }
        public virtual ICollection<GraduationPlan> GraduationPlans { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<Request> Requests { get; set; }
        public virtual ICollection<StudentInstructorCourseTake> StudentInstructorCourseTakes { get; set; }
        public virtual ICollection<StudentPhone> StudentPhones { get; set; }
    }
}
