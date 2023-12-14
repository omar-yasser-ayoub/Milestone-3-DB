namespace Milestone3Test.Models
{
    public class StudentViewGradPlan
    {
        public string? Name { get; set; }
        public int PlanId { get; set; }
        public string SemesterCode { get; set; } = null!;
        public int? SemesterCreditHours { get; set; }
        public DateTime? ExpectedGradDate { get; set; }
        public int? AdvisorId { get; set; }
        public int? StudentId { get; set; }
        public int? CourseId { get; set; }
        public string? CourseName { get; set; }
    }
}
