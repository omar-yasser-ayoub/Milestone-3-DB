using System;
using System.Collections.Generic;

namespace Milestone3Test.Models
{
    public partial class Advisor
    {
        public Advisor()
        {
            GraduationPlans = new HashSet<GraduationPlan>();
            Requests = new HashSet<Request>();
            Students = new HashSet<Student>();
        }

        public int AdvisorId { get; set; }
        public string? AdvisorName { get; set; }
        public string? Email { get; set; }
        public string? Office { get; set; }
        public string Password { get; set; } = null!;

        public virtual ICollection<GraduationPlan> GraduationPlans { get; set; }
        public virtual ICollection<Request> Requests { get; set; }
        public virtual ICollection<Student> Students { get; set; }
    }
}
