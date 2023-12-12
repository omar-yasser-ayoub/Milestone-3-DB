using System;
using System.Collections.Generic;

namespace Milestone3Test.Models
{
    public partial class MakeUpExam
    {
        public MakeUpExam()
        {
            ExamStudents = new HashSet<ExamStudent>();
        }

        public int ExamId { get; set; }
        public DateTime? Date { get; set; }
        public string? Type { get; set; }
        public int? CourseId { get; set; }

        public virtual Course? Course { get; set; }
        public virtual ICollection<ExamStudent> ExamStudents { get; set; }
    }
}
