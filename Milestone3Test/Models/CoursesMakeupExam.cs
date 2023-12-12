using System;
using System.Collections.Generic;

namespace Milestone3Test.Models
{
    public partial class CoursesMakeupExam
    {
        public int ExamId { get; set; }
        public DateTime? Date { get; set; }
        public string? Type { get; set; }
        public int? CourseId { get; set; }
        public string? Name { get; set; }
        public int? Semester { get; set; }
    }
}
