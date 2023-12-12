using System;
using System.Collections.Generic;

namespace Milestone3Test.Models
{
    public partial class SemsterOfferedCourse
    {
        public int CourseId { get; set; }
        public string? Name { get; set; }
        public string SemesterCode { get; set; } = null!;
    }
}
