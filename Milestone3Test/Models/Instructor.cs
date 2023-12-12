using System;
using System.Collections.Generic;

namespace Milestone3Test.Models
{
    public partial class Instructor
    {
        public Instructor()
        {
            Slots = new HashSet<Slot>();
            StudentInstructorCourseTakes = new HashSet<StudentInstructorCourseTake>();
            Courses = new HashSet<Course>();
        }

        public int InstructorId { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Faculty { get; set; }
        public string? Office { get; set; }

        public virtual ICollection<Slot> Slots { get; set; }
        public virtual ICollection<StudentInstructorCourseTake> StudentInstructorCourseTakes { get; set; }

        public virtual ICollection<Course> Courses { get; set; }
    }
}
