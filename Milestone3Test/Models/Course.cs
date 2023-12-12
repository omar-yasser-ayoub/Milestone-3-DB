using System;
using System.Collections.Generic;

namespace Milestone3Test.Models
{
    public partial class Course
    {
        public Course()
        {
            MakeUpExams = new HashSet<MakeUpExam>();
            Slots = new HashSet<Slot>();
            StudentInstructorCourseTakes = new HashSet<StudentInstructorCourseTake>();
            Courses = new HashSet<Course>();
            GraduationPlans = new HashSet<GraduationPlan>();
            Instructors = new HashSet<Instructor>();
            PrerequisiteCourses = new HashSet<Course>();
            SemesterCodes = new HashSet<Semester>();
        }

        public int CourseId { get; set; }
        public string? Name { get; set; }
        public string? Major { get; set; }
        public bool? IsOffered { get; set; }
        public int? CreditHours { get; set; }
        public int? Semester { get; set; }

        public virtual ICollection<MakeUpExam> MakeUpExams { get; set; }
        public virtual ICollection<Slot> Slots { get; set; }
        public virtual ICollection<StudentInstructorCourseTake> StudentInstructorCourseTakes { get; set; }

        public virtual ICollection<Course> Courses { get; set; }
        public virtual ICollection<GraduationPlan> GraduationPlans { get; set; }
        public virtual ICollection<Instructor> Instructors { get; set; }
        public virtual ICollection<Course> PrerequisiteCourses { get; set; }
        public virtual ICollection<Semester> SemesterCodes { get; set; }
    }
}
