using System;
using System.Collections.Generic;

namespace Milestone3Test.Models
{
    public partial class GraduationPlan
    {
        public GraduationPlan()
        {
            Courses = new HashSet<Course>();
        }

        public int PlanId { get; set; }
        public string SemesterCode { get; set; } = null!;
        public int? SemesterCreditHours { get; set; }
        public DateTime? ExpectedGradDate { get; set; }
        public int? AdvisorId { get; set; }
        public int? StudentId { get; set; }

        public virtual Advisor? Advisor { get; set; }
        public virtual Student? Student { get; set; }

        public virtual ICollection<Course> Courses { get; set; }
    }
}
