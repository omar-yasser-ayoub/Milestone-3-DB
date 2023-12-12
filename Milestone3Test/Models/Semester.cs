using System;
using System.Collections.Generic;

namespace Milestone3Test.Models
{
    public partial class Semester
    {
        public Semester()
        {
            Payments = new HashSet<Payment>();
            Courses = new HashSet<Course>();
        }

        public string SemesterCode { get; set; } = null!;
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        public virtual ICollection<Payment> Payments { get; set; }

        public virtual ICollection<Course> Courses { get; set; }
    }
}
