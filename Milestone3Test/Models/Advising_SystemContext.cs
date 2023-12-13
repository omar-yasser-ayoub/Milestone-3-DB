using System;
using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

using System.Data;
using System.Data.SqlClient;

namespace Milestone3Test.Models
{
    public partial class Advising_SystemContext : DbContext
    {
        public Advising_SystemContext()
        {
        }

        public Advising_SystemContext(DbContextOptions<Advising_SystemContext> options)
            : base(options)
        {
        }
        
        public virtual DbSet<Advisor> Advisors { get; set; } = null!;
        public virtual DbSet<AdvisorsGraduationPlan> AdvisorsGraduationPlans { get; set; } = null!;
        public virtual DbSet<AllPendingRequest> AllPendingRequests { get; set; } = null!;
        public virtual DbSet<Course> Courses { get; set; } = null!;
        public virtual DbSet<CoursesMakeupExam> CoursesMakeupExams { get; set; } = null!;
        public virtual DbSet<CoursesSlotsInstructor> CoursesSlotsInstructors { get; set; } = null!;
        public virtual DbSet<ExamStudent> ExamStudents { get; set; } = null!;
        public virtual DbSet<GraduationPlan> GraduationPlans { get; set; } = null!;
        public virtual DbSet<Installment> Installments { get; set; } = null!;
        public virtual DbSet<Instructor> Instructors { get; set; } = null!;
        public virtual DbSet<InstructorsAssignedCourse> InstructorsAssignedCourses { get; set; } = null!;
        public virtual DbSet<MakeUpExam> MakeUpExams { get; set; } = null!;
        public virtual DbSet<Payment> Payments { get; set; } = null!;
        public virtual DbSet<Request> Requests { get; set; } = null!;
        public virtual DbSet<Semester> Semesters { get; set; } = null!;
        public virtual DbSet<SemsterOfferedCourse> SemsterOfferedCourses { get; set; } = null!;
        public virtual DbSet<Slot> Slots { get; set; } = null!;
        public virtual DbSet<Student> Students { get; set; } = null!;
        public virtual DbSet<StudentInstructorCourseTake> StudentInstructorCourseTakes { get; set; } = null!;
        public virtual DbSet<StudentPayment> StudentPayments { get; set; } = null!;
        public virtual DbSet<StudentPhone> StudentPhones { get; set; } = null!;
        public virtual DbSet<StudentsCoursesTranscript> StudentsCoursesTranscripts { get; set; } = null!;
        public virtual DbSet<ViewCoursePrerequisite> ViewCoursePrerequisites { get; set; } = null!;
        public virtual DbSet<ViewStudent> ViewStudents { get; set; } = null!;
        public virtual DbSet<AdvisorAssignedStudent> AdvisorAssignedStudents { get; set; } = null!;
        public virtual DbSet<AdvisorAssignedStudent> AdvisorAssignedStudents { get; set; } = null!;
        public virtual DbSet<StudentsWithAdvisor> StudentsWithAdvisors { get; set; } = null!;
        public virtual DbSet<StudentCourseFilters> StudentViewMSs { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\sqlexpress;Database=Advising_System;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Advisor>(entity =>
            {
                entity.ToTable("Advisor");

                entity.Property(e => e.AdvisorId).HasColumnName("advisor_id");

                entity.Property(e => e.AdvisorName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("advisor_name");

                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Office)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("office");

                entity.Property(e => e.Password)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("password");
            });

            modelBuilder.Entity<AdvisorsGraduationPlan>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Advisors_Graduation_Plan");

                entity.Property(e => e.AdvisorId).HasColumnName("advisor_id");

                entity.Property(e => e.AdvisorId1).HasColumnName("AdvisorID");

                entity.Property(e => e.AdvisorName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("advisor_name");

                entity.Property(e => e.ExpectedGradDate)
                    .HasColumnType("date")
                    .HasColumnName("expected_grad_date");

                entity.Property(e => e.PlanId).HasColumnName("plan_id");

                entity.Property(e => e.SemesterCode)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("semester_code");

                entity.Property(e => e.SemesterCreditHours).HasColumnName("semester_credit_hours");

                entity.Property(e => e.StudentId).HasColumnName("student_id");
            });

            modelBuilder.Entity<AllPendingRequest>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("all_Pending_Requests");

                entity.Property(e => e.AdvisorId).HasColumnName("advisor_id");

                entity.Property(e => e.Comment)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("comment");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.CreditHours).HasColumnName("credit_hours");

                entity.Property(e => e.RequestId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("request_id");

                entity.Property(e => e.Status)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("status");

                entity.Property(e => e.StudentId).HasColumnName("student_id");

                entity.Property(e => e.Type)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("type");
            });

            modelBuilder.Entity<Course>(entity =>
            {
                entity.ToTable("Course");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.CreditHours).HasColumnName("credit_hours");

                entity.Property(e => e.IsOffered).HasColumnName("is_offered");

                entity.Property(e => e.Major)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("major");

                entity.Property(e => e.Name)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Semester).HasColumnName("semester");

                entity.HasMany(d => d.Courses)
                    .WithMany(p => p.PrerequisiteCourses)
                    .UsingEntity<Dictionary<string, object>>(
                        "PreqCourseCourse",
                        l => l.HasOne<Course>().WithMany().HasForeignKey("CourseId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK__PreqCours__cours__46E78A0C"),
                        r => r.HasOne<Course>().WithMany().HasForeignKey("PrerequisiteCourseId").HasConstraintName("FK__PreqCours__prere__45F365D3"),
                        j =>
                        {
                            j.HasKey("PrerequisiteCourseId", "CourseId").HasName("PK__PreqCour__29975FB8AD7F5BE3");

                            j.ToTable("PreqCourse_course");

                            j.IndexerProperty<int>("PrerequisiteCourseId").HasColumnName("prerequisite_course_id");

                            j.IndexerProperty<int>("CourseId").HasColumnName("course_id");
                        });

                entity.HasMany(d => d.GraduationPlans)
                    .WithMany(p => p.Courses)
                    .UsingEntity<Dictionary<string, object>>(
                        "GradPlanCourse",
                        l => l.HasOne<GraduationPlan>().WithMany().HasForeignKey("PlanId", "SemesterCode").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_Grad"),
                        r => r.HasOne<Course>().WithMany().HasForeignKey("CourseId").HasConstraintName("FK__GradPlan___cours__5AEE82B9"),
                        j =>
                        {
                            j.HasKey("CourseId", "PlanId", "SemesterCode").HasName("PK__GradPlan__CE1B721EFFACD099");

                            j.ToTable("GradPlan_Course");

                            j.IndexerProperty<int>("CourseId").HasColumnName("course_id");

                            j.IndexerProperty<int>("PlanId").HasColumnName("plan_id");

                            j.IndexerProperty<string>("SemesterCode").HasMaxLength(40).IsUnicode(false).HasColumnName("semester_code");
                        });

                entity.HasMany(d => d.Instructors)
                    .WithMany(p => p.Courses)
                    .UsingEntity<Dictionary<string, object>>(
                        "InstructorCourse",
                        l => l.HasOne<Instructor>().WithMany().HasForeignKey("InstructorId").HasConstraintName("FK__Instructo__instr__4CA06362"),
                        r => r.HasOne<Course>().WithMany().HasForeignKey("CourseId").HasConstraintName("FK__Instructo__cours__4BAC3F29"),
                        j =>
                        {
                            j.HasKey("CourseId", "InstructorId").HasName("PK__Instruct__150002C09E88A821");

                            j.ToTable("Instructor_Course");

                            j.IndexerProperty<int>("CourseId").HasColumnName("course_id");

                            j.IndexerProperty<int>("InstructorId").HasColumnName("instructor_id");
                        });

                entity.HasMany(d => d.PrerequisiteCourses)
                    .WithMany(p => p.Courses)
                    .UsingEntity<Dictionary<string, object>>(
                        "PreqCourseCourse",
                        l => l.HasOne<Course>().WithMany().HasForeignKey("PrerequisiteCourseId").HasConstraintName("FK__PreqCours__prere__45F365D3"),
                        r => r.HasOne<Course>().WithMany().HasForeignKey("CourseId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK__PreqCours__cours__46E78A0C"),
                        j =>
                        {
                            j.HasKey("PrerequisiteCourseId", "CourseId").HasName("PK__PreqCour__29975FB8AD7F5BE3");

                            j.ToTable("PreqCourse_course");

                            j.IndexerProperty<int>("PrerequisiteCourseId").HasColumnName("prerequisite_course_id");

                            j.IndexerProperty<int>("CourseId").HasColumnName("course_id");
                        });

                entity.HasMany(d => d.SemesterCodes)
                    .WithMany(p => p.Courses)
                    .UsingEntity<Dictionary<string, object>>(
                        "CourseSemester",
                        l => l.HasOne<Semester>().WithMany().HasForeignKey("SemesterCode").HasConstraintName("FK__Course_Se__semes__5812160E"),
                        r => r.HasOne<Course>().WithMany().HasForeignKey("CourseId").HasConstraintName("FK__Course_Se__cours__571DF1D5"),
                        j =>
                        {
                            j.HasKey("CourseId", "SemesterCode").HasName("PK__Course_S__21D923B6165E3023");

                            j.ToTable("Course_Semester");

                            j.IndexerProperty<int>("CourseId").HasColumnName("course_id");

                            j.IndexerProperty<string>("SemesterCode").HasMaxLength(40).IsUnicode(false).HasColumnName("semester_code");
                        });
            });

            modelBuilder.Entity<CoursesMakeupExam>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Courses_MakeupExams");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("date");

                entity.Property(e => e.ExamId).HasColumnName("exam_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Semester).HasColumnName("semester");

                entity.Property(e => e.Type)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("type");
            });

            modelBuilder.Entity<CoursesSlotsInstructor>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Courses_Slots_Instructor");

                entity.Property(e => e.Course)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.CourseId).HasColumnName("CourseID");

                entity.Property(e => e.CourseId1).HasColumnName("course_id");

                entity.Property(e => e.Day)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("day");

                entity.Property(e => e.Instructor)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.InstructorId).HasColumnName("instructor_id");

                entity.Property(e => e.Location)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("location");

                entity.Property(e => e.SlotId).HasColumnName("slot_id");

                entity.Property(e => e.Time)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("time");
            });

            modelBuilder.Entity<ExamStudent>(entity =>
            {
                entity.HasKey(e => new { e.ExamId, e.StudentId })
                    .HasName("PK__Exam_Stu__2E2F4B80F5D3359E");

                entity.ToTable("Exam_Student");

                entity.Property(e => e.ExamId).HasColumnName("exam_id");

                entity.Property(e => e.StudentId).HasColumnName("student_id");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.HasOne(d => d.Exam)
                    .WithMany(p => p.ExamStudents)
                    .HasForeignKey(d => d.ExamId)
                    .HasConstraintName("FK__Exam_Stud__exam___6A30C649");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.ExamStudents)
                    .HasForeignKey(d => d.StudentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Exam_Stud__stude__6B24EA82");
            });

            modelBuilder.Entity<GraduationPlan>(entity =>
            {
                entity.HasKey(e => new { e.PlanId, e.SemesterCode })
                    .HasName("PK__Graduati__10585B051EDA519E");

                entity.ToTable("Graduation_Plan");

                entity.Property(e => e.PlanId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("plan_id");

                entity.Property(e => e.SemesterCode)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("semester_code");

                entity.Property(e => e.AdvisorId).HasColumnName("advisor_id");

                entity.Property(e => e.ExpectedGradDate)
                    .HasColumnType("date")
                    .HasColumnName("expected_grad_date");

                entity.Property(e => e.SemesterCreditHours).HasColumnName("semester_credit_hours");

                entity.Property(e => e.StudentId).HasColumnName("student_id");

                entity.HasOne(d => d.Advisor)
                    .WithMany(p => p.GraduationPlans)
                    .HasForeignKey(d => d.AdvisorId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Graduatio__advis__403A8C7D");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.GraduationPlans)
                    .HasForeignKey(d => d.StudentId)
                    .HasConstraintName("FK__Graduatio__stude__412EB0B6");
            });

            modelBuilder.Entity<Installment>(entity =>
            {
                entity.HasKey(e => new { e.PaymentId, e.Deadline })
                    .HasName("PK__Installm__3F60B5DBFA7E8CB4");

                entity.ToTable("Installment");

                entity.Property(e => e.PaymentId).HasColumnName("payment_id");

                entity.Property(e => e.Deadline)
                    .HasColumnType("datetime")
                    .HasColumnName("deadline");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.Startdate)
                    .HasColumnType("datetime")
                    .HasColumnName("startdate");

                entity.Property(e => e.Status)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("status")
                    .HasDefaultValueSql("('notPaid')");

                entity.HasOne(d => d.Payment)
                    .WithMany(p => p.Installments)
                    .HasForeignKey(d => d.PaymentId)
                    .HasConstraintName("FK__Installme__payme__72C60C4A");
            });

            modelBuilder.Entity<Instructor>(entity =>
            {
                entity.ToTable("Instructor");

                entity.Property(e => e.InstructorId)
                    .ValueGeneratedNever()
                    .HasColumnName("instructor_id");

                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Faculty)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("faculty");

                entity.Property(e => e.Name)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Office)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("office");
            });

            modelBuilder.Entity<InstructorsAssignedCourse>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Instructors_AssignedCourses");

                entity.Property(e => e.Course)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.Instructor)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.InstructorId).HasColumnName("instructor_id");
            });

            modelBuilder.Entity<MakeUpExam>(entity =>
            {
                entity.HasKey(e => e.ExamId)
                    .HasName("PK__MakeUp_E__9C8C7BE993FA627D");

                entity.ToTable("MakeUp_Exam");

                entity.Property(e => e.ExamId).HasColumnName("exam_id");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("date");

                entity.Property(e => e.Type)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("type");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.MakeUpExams)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__MakeUp_Ex__cours__6754599E");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.ToTable("Payment");

                entity.Property(e => e.PaymentId)
                    .ValueGeneratedNever()
                    .HasColumnName("payment_id");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.Deadline)
                    .HasColumnType("datetime")
                    .HasColumnName("deadline");

                entity.Property(e => e.FundPercentage)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("fund_percentage");

                entity.Property(e => e.NInstallments).HasColumnName("n_installments");

                entity.Property(e => e.SemesterCode)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("semester_code");

                entity.Property(e => e.Startdate)
                    .HasColumnType("datetime")
                    .HasColumnName("startdate");

                entity.Property(e => e.Status)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("status")
                    .HasDefaultValueSql("('notPaid')");

                entity.Property(e => e.StudentId).HasColumnName("student_id");

                entity.HasOne(d => d.SemesterCodeNavigation)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.SemesterCode)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Payment__semeste__6FE99F9F");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.StudentId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Payment__student__6EF57B66");
            });

            modelBuilder.Entity<Request>(entity =>
            {
                entity.ToTable("Request");

                entity.Property(e => e.RequestId).HasColumnName("request_id");

                entity.Property(e => e.AdvisorId).HasColumnName("advisor_id");

                entity.Property(e => e.Comment)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("comment");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.CreditHours).HasColumnName("credit_hours");

                entity.Property(e => e.Status)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("status")
                    .HasDefaultValueSql("('Pending')");

                entity.Property(e => e.StudentId).HasColumnName("student_id");

                entity.Property(e => e.Type)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("type");

                entity.HasOne(d => d.Advisor)
                    .WithMany(p => p.Requests)
                    .HasForeignKey(d => d.AdvisorId)
                    .HasConstraintName("FK__Request__advisor__6477ECF3");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.Requests)
                    .HasForeignKey(d => d.StudentId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Request__student__6383C8BA");
            });

            modelBuilder.Entity<Semester>(entity =>
            {
                entity.HasKey(e => e.SemesterCode)
                    .HasName("PK__Semester__EC7D418B691DCBBA");

                entity.ToTable("Semester");

                entity.Property(e => e.SemesterCode)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("semester_code");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("end_date");

                entity.Property(e => e.StartDate)
                    .HasColumnType("date")
                    .HasColumnName("start_date");
            });

            modelBuilder.Entity<SemsterOfferedCourse>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Semster_offered_Courses");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.SemesterCode)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("semester_code");
            });

            modelBuilder.Entity<Slot>(entity =>
            {
                entity.ToTable("Slot");

                entity.Property(e => e.SlotId)
                    .ValueGeneratedNever()
                    .HasColumnName("slot_id");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.Day)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("day");

                entity.Property(e => e.InstructorId).HasColumnName("instructor_id");

                entity.Property(e => e.Location)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("location");

                entity.Property(e => e.Time)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("time");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Slots)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Slot__course_id__5EBF139D");

                entity.HasOne(d => d.Instructor)
                    .WithMany(p => p.Slots)
                    .HasForeignKey(d => d.InstructorId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Slot__instructor__5FB337D6");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.ToTable("Student");

                entity.Property(e => e.StudentId).HasColumnName("student_id");

                entity.Property(e => e.AcquiredHours).HasColumnName("acquired_hours");

                entity.Property(e => e.AdvisorId).HasColumnName("advisor_id");

                entity.Property(e => e.AssignedHours).HasColumnName("assigned_hours");

                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.FName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("f_name");

                entity.Property(e => e.Faculty)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("faculty");

                entity.Property(e => e.FinancialStatus).HasColumnName("financial_status");

                entity.Property(e => e.Gpa)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("gpa");

                entity.Property(e => e.LName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("l_name");

                entity.Property(e => e.Major)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("major");

                entity.Property(e => e.Password)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.Semester).HasColumnName("semester");

                entity.HasOne(d => d.Advisor)
                    .WithMany(p => p.Students)
                    .HasForeignKey(d => d.AdvisorId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Student__advisor__3A81B327");
            });

            modelBuilder.Entity<StudentInstructorCourseTake>(entity =>
            {
                entity.HasKey(e => new { e.StudentId, e.CourseId, e.SemesterCode })
                    .HasName("PK__Student___582E94A14CA60085");

                entity.ToTable("Student_Instructor_Course_take");

                entity.Property(e => e.StudentId).HasColumnName("student_id");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.SemesterCode)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("semester_code");

                entity.Property(e => e.ExamType)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("exam_type")
                    .HasDefaultValueSql("('Normal')");

                entity.Property(e => e.Grade)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("grade");

                entity.Property(e => e.InstructorId).HasColumnName("instructor_id");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.StudentInstructorCourseTakes)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__Student_I__cours__5070F446");

                entity.HasOne(d => d.Instructor)
                    .WithMany(p => p.StudentInstructorCourseTakes)
                    .HasForeignKey(d => d.InstructorId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Student_I__instr__5165187F");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.StudentInstructorCourseTakes)
                    .HasForeignKey(d => d.StudentId)
                    .HasConstraintName("FK__Student_I__stude__4F7CD00D");
            });

            modelBuilder.Entity<StudentPayment>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Student_Payment");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.Deadline)
                    .HasColumnType("datetime")
                    .HasColumnName("deadline");

                entity.Property(e => e.FName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("f_name");

                entity.Property(e => e.FundPercentage)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("fund_percentage");

                entity.Property(e => e.LName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("l_name");

                entity.Property(e => e.NInstallments).HasColumnName("n_installments");

                entity.Property(e => e.PaymentId).HasColumnName("payment_id");

                entity.Property(e => e.SemesterCode)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("semester_code");

                entity.Property(e => e.Startdate)
                    .HasColumnType("datetime")
                    .HasColumnName("startdate");

                entity.Property(e => e.Status)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("status");

                entity.Property(e => e.StudentId).HasColumnName("studentID");

                entity.Property(e => e.StudentId1).HasColumnName("student_id");
            });

            modelBuilder.Entity<StudentPhone>(entity =>
            {
                entity.HasKey(e => new { e.StudentId, e.PhoneNumber })
                    .HasName("PK__Student___902A303CFC64103C");

                entity.ToTable("Student_Phone");

                entity.Property(e => e.StudentId).HasColumnName("student_id");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("phone_number");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.StudentPhones)
                    .HasForeignKey(d => d.StudentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Student_P__stude__3D5E1FD2");
            });

            modelBuilder.Entity<StudentsCoursesTranscript>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Students_Courses_transcript");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.ExamType)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("exam_type");

                entity.Property(e => e.FName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("f_name");

                entity.Property(e => e.Grade)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("grade");

                entity.Property(e => e.LName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("l_name");

                entity.Property(e => e.Name)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.SemesterCode)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("semester_code");

                entity.Property(e => e.StudentId).HasColumnName("student_id");
            });

            modelBuilder.Entity<ViewCoursePrerequisite>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("view_Course_prerequisites");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.CreditHours).HasColumnName("credit_hours");

                entity.Property(e => e.IsOffered).HasColumnName("is_offered");

                entity.Property(e => e.Major)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("major");

                entity.Property(e => e.Name)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.PreRequsiteCourseId).HasColumnName("preRequsite_course_id");

                entity.Property(e => e.PreRequsiteCourseName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("preRequsite_course_name");

                entity.Property(e => e.Semester).HasColumnName("semester");
            });

            modelBuilder.Entity<ViewStudent>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("view_Students");

                entity.Property(e => e.AcquiredHours).HasColumnName("acquired_hours");

                entity.Property(e => e.AdvisorId).HasColumnName("advisor_id");

                entity.Property(e => e.AssignedHours).HasColumnName("assigned_hours");

                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.FName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("f_name");

                entity.Property(e => e.Faculty)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("faculty");

                entity.Property(e => e.FinancialStatus).HasColumnName("financial_status");

                entity.Property(e => e.Gpa)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("gpa");

                entity.Property(e => e.LName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("l_name");

                entity.Property(e => e.Major)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("major");

                entity.Property(e => e.Password)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.Semester).HasColumnName("semester");

                entity.Property(e => e.StudentId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("student_id");
            });

            modelBuilder.Entity<AdvisorAssignedStudent>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.student_id).HasColumnName("student_id");

                entity.Property(e => e.Student_name)
                    .HasMaxLength(80)
                    .IsUnicode(false)
                    .HasColumnName("Student_name");

                entity.Property(e => e.major)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("major");

                entity.Property(e => e.Course_name)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("Course_name");
            });

            modelBuilder.Entity<StudentsWithAdvisor>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.StudentId).HasColumnName("student_id");

                entity.Property(e => e.FName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("f_name");

                entity.Property(e => e.LName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("l_name");

                entity.Property(e => e.AdvisorId).HasColumnName("advisor_id");

                entity.Property(e => e.AdvisorName)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("advisor_name");
            });
            modelBuilder.Entity<StudentCourseFilters>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        /* ---------------------------------- [ADMIN] ---------------------------------- */

        public void AdminAddingSemester(string startDate, string endDate, string semesterCode)
        {
            Database.ExecuteSqlRaw("EXEC dbo.AdminAddingSemester @start_date, @end_date, @semester_code",
                    new SqlParameter("@start_date", startDate),
                    new SqlParameter("@end_date", endDate),
                    new SqlParameter("@semester_code", semesterCode));
        }

        public List<StudentsWithAdvisor> AdminListStudentsWithAdvisors()
        {
            var table = Set<StudentsWithAdvisor>().FromSqlRaw("EXEC dbo.AdminListStudentsWithAdvisors").ToList();
            
            return table;
        }

        public void Procedure_AdminUpdateStudentStatus(string student_id)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedure_AdminUpdateStudentStatus @student_id",
                new SqlParameter("@student_id", student_id));
        }

        public void Procedures_AdminAddExam(string type_1, string date_1, string courseID_1)
        public void Procedures_AdminAddExam(string type_1, string date_1, string courseID_1)
        {
            Database.ExecuteSqlRaw("EXEC Procedures_AdminAddExam @Type, @date, @courseID",
                new SqlParameter("@Type", type_1),
                new SqlParameter("@date", date_1),
                new SqlParameter("@courseID", courseID_1));
            Database.ExecuteSqlRaw("EXEC Procedures_AdminAddExam @Type, @date, @courseID",
                new SqlParameter("@Type", type_1),
                new SqlParameter("@date", date_1),
                new SqlParameter("@courseID", courseID_1));
        }
        public async Task Procedures_AdminAddExamAsync(string type, DateTime date, int courseID)
        {
            try
            {
                await Database.ExecuteSqlInterpolatedAsync($@"
            EXEC dbo.Procedures_AdminAddExam
                @Type= Second Makeup,
                @date= 12/12/2029,
                @courseID = 4 ");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error executing stored procedure: {ex.Message}");
            }
        }

        public void Procedures_AdminAddingCourse(string major, string semester, string credit_hours, string name, string is_offered)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdminAddingCourse @major, @semester, @credit_hours, @name, @is_offered",
                    new SqlParameter("@major", major),
                    new SqlParameter("@semester", semester),
                    new SqlParameter("@credit_hours", credit_hours),
                    new SqlParameter("@name", name),
                    new SqlParameter("@is_offered", is_offered));
        }

        public void Procedures_AdminDeleteCourse(string courseID)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdminDeleteCourse @courseID",
                    new SqlParameter("@courseID", courseID));
        }

        public void Procedures_AdminDeleteSlots(string current_semester)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdminDeleteSlots @current_semester",
                    new SqlParameter("@current_semester", current_semester));
        }

        public void Procedures_AdminIssueInstallment(string payment_id)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdminIssueInstallment @payment_id",
                    new SqlParameter("@payment_id", payment_id));
        }

        public void Procedures_AdminLinkInstructor(string cours_id, string instructor_id, string slot_id)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdminLinkInstructor @cours_id, @instructor_id, @slot_id",
                    new SqlParameter("@cours_id", cours_id),
                    new SqlParameter("@instructor_id", instructor_id),
                    new SqlParameter("@slot_id", slot_id));
        }

        public void Procedures_AdminLinkStudent(string cours_id, string instructor_id, string studentID, string semester_code)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdminLinkStudent @cours_id, @instructor_id, @studentID, @semester_code",
                    new SqlParameter("@cours_id", cours_id),
                    new SqlParameter("@instructor_id", instructor_id),
                    new SqlParameter("@studentID", studentID),
                    new SqlParameter("@semester_code", semester_code));
        }

        public void Procedures_AdminLinkStudentToAdvisor(string studentID, string advisorID)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdminLinkStudentToAdvisor @studentID, @advisorID",
                    new SqlParameter("@studentID", studentID),
                    new SqlParameter("@advisorID", advisorID));
        }
        public List<Advisor> Procedures_AdminListAdvisors()
        {
            var table = Set<Advisor>().FromSqlRaw("EXEC dbo.Procedures_AdminListAdvisors").ToList();

            return table;
        }

        public List<Student> Procedures_AdminListStudents()
        {
            var table = Set<Student>().FromSqlRaw("EXEC dbo.Procedures_AdminListStudents").ToList();

            return table;
        }

        public List<Advisor> Procedures_AdminListAdvisors()
        {
            var table = Set<Advisor>().FromSqlRaw("EXEC dbo.Procedures_AdminListAdvisors").ToList();
            
            return table;
        }

        /* --------------------------------- [ADVISOR] --------------------------------- */

        public void Procedures_AdvisorAddCourseGP(string student_id, string Semester_code, string course_name)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdvisorAddCourseGP @student_id, @Semester_code, @course_name",
                    new SqlParameter("@student_id", student_id),
                    new SqlParameter("@Semester_code", Semester_code),
                    new SqlParameter("@course_name", course_name));
        }
        
        public void Procedures_AdvisorApproveRejectCHRequest(string requestID, string current_sem_code)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdvisorApproveRejectCHRequest @requestID, @current_sem_code",
                    new SqlParameter("@requestID", requestID),
                    new SqlParameter("@current_sem_code", current_sem_code));
        }

        public void Procedures_AdvisorApproveRejectCourseRequest(string requestID, string current_semester_code)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdvisorApproveRejectCourseRequest @requestID, @current_semester_code",
                    new SqlParameter("@requestID", requestID),
                    new SqlParameter("@current_semester_code", current_semester_code));
        }

        public void Procedures_AdvisorCreateGP(string Semester_code, string expected_graduation_date, string sem_credit_hours, string advisor_id, string student_id)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdvisorCreateGP @Semester_code, @expected_graduation_date, @sem_credit_hours, @advisor_id, @student_id",
                    new SqlParameter("@Semester_code", Semester_code),
                    new SqlParameter("@expected_graduation_date", expected_graduation_date),
                    new SqlParameter("@sem_credit_hours", sem_credit_hours),
                    new SqlParameter("@advisor_id", advisor_id),
                    new SqlParameter("@student_id", student_id));
        }

        public void Procedures_AdvisorDeleteFromGP(string studentID, string sem_code, string courseID)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdvisorDeleteFromGP @studentID, @sem_code, @courseID",
                    new SqlParameter("@studentID", studentID),
                    new SqlParameter("@sem_code", sem_code),
                    new SqlParameter("@courseID", courseID));
        }

        public int Procedures_AdvisorRegistration(string advisor_name, string password, string email, string office)
        {
            var Advisor_id = new SqlParameter("@Advisor_id", SqlDbType.Int)
            {
                Direction = ParameterDirection.Output
            };

            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdvisorRegistration @advisor_name, @password, @email, @office, @Advisor_id OUTPUT",
                    new SqlParameter("@advisor_name", advisor_name),
                    new SqlParameter("@password", password),
                    new SqlParameter("@email", email),
                    new SqlParameter("@office", office),
                    Advisor_id);

            return (int)Advisor_id.Value;
        }

        public void Procedures_AdvisorUpdateGP(string expected_grad_date, string studentID)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_AdvisorUpdateGP @expected_grad_date, @studentID",
                    new SqlParameter("@expected_grad_date", expected_grad_date),
                    new SqlParameter("@studentID", studentID));
        }

        public List<AdvisorAssignedStudent> Procedures_AdvisorViewAssignedStudents(string AdvisorID, string major)
        {
            var table = Set<AdvisorAssignedStudent>().FromSqlRaw("EXEC dbo.Procedures_AdvisorViewAssignedStudents @AdvisorID, @major",
                                    new SqlParameter("@AdvisorID", AdvisorID),
                                    new SqlParameter("@major", major)).ToList();
            return table;
        }

        public List<AllPendingRequest> Procedures_AdvisorViewPendingRequests(string Advisor_ID)
        {
            var table = Set<AllPendingRequest>().FromSqlRaw("EXEC dbo.Procedures_AdvisorViewPendingRequests @Advisor_ID",
                                    new SqlParameter("@Advisor_ID", Advisor_ID)).ToList();
            return table;
        }

        /* --------------------------------- [STUDENT] --------------------------------- */

        public void Procedures_StudentChooseInstructor(string StudentID, string instructorID, string CourseID, string current_semester_code)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_Chooseinstructor @StudentID, @instructorID, @CourseID, @current_semester_code",
                    new SqlParameter("@StudentID", StudentID),
                    new SqlParameter("@instructorID", instructorID),
                    new SqlParameter("@CourseID", CourseID),
                    new SqlParameter("@current_semester_code", current_semester_code));
        }
        public void Procedures_StudentAddMobile(string StudentID, string mobile_number)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_StudentaddMobile @StudentID, @mobile_number",
                    new SqlParameter("@StudentID", StudentID),
                    new SqlParameter("@mobile_number", mobile_number));
        }
        public void Procedures_StudentRegisterFirstMakeup(string StudentID, string courseID, string studentCurr_Sem)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_StudentRegisterFirstMakeup @StudentID, @courseID, @studentCurr_sem",
                    new SqlParameter("@StudentID", StudentID),
                    new SqlParameter("@courseID", courseID),
                    new SqlParameter("@studentCurr_sem", studentCurr_Sem));
        }

        public void Procedures_StudentRegisterSecondMakeup(string StudentID, string courseID, string studentCurr_Sem)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_StudentRegisterSecondMakeup @StudentID, @courseID, @studentCurr_sem",
                    new SqlParameter("@StudentID", StudentID),
                    new SqlParameter("@courseID", courseID),
                    new SqlParameter("@studentCurr_sem", studentCurr_Sem));
        }

        public int Procedures_StudentRegistration(string first_name, string last_name, string password, string faculty, string email, string major, string Semester)
        {
            var Student_id = new SqlParameter("@Student_id", SqlDbType.Int)
            {
                Direction = ParameterDirection.Output
            };

            Database.ExecuteSqlRaw("EXEC dbo.Procedures_StudentRegistration @first_name, @last_name, @password, @faculty, @email, @major, @Semester, @Student_id OUTPUT",
                    new SqlParameter("@first_name", first_name),
                    new SqlParameter("@last_name", last_name),
                    new SqlParameter("@password", password),
                    new SqlParameter("@faculty", faculty),
                    new SqlParameter("@email", email),
                    new SqlParameter("@major", major),
                    new SqlParameter("@Semester", Semester),
                    Student_id);

            return (int)Student_id.Value;
        }
        public void Procedures_StudentSendingCHRequest(string StudentID, string credit_hours, string type, string comment)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_StudentSendingCHRequest @StudentID, @credit_hours, @type, @comment",
                    new SqlParameter("@StudentID", StudentID),
                    new SqlParameter("@credit_hours", credit_hours),
                    new SqlParameter("@type", type),
                    new SqlParameter("@comment", comment));
        }
        public void Procedures_StudentSendingCourseRequest(string courseID, string StudentID, string type, string comment)
        {
            Database.ExecuteSqlRaw("EXEC dbo.Procedures_StudentSendingCourseRequest @courseID, @StudentID, @type, @comment",
                    new SqlParameter("@courseID", courseID),
                    new SqlParameter("@StudentID", StudentID),
                    new SqlParameter("@type", type),
                    new SqlParameter("@comment", comment));
        }
        public List<StudentCourseFilters> Procedures_ViewMS(string StudentID)
        {
            var table = Set<StudentCourseFilters>().FromSqlRaw("EXEC dbo.Procedures_ViewMS @StudentID",
                new SqlParameter("@StudentID", StudentID)).ToList();

            return table;
        }

        public List<StudentCourseFilters> Procedures_ViewOptionalCourse(string StudentID, string current_semester_code)
        {
            var table = Set<StudentCourseFilters>().FromSqlRaw("EXEC dbo.Procedures_ViewOptionalCourse @StudentID, @current_semester_code",
                new SqlParameter("@StudentID", StudentID),
                new SqlParameter("@current_semester_code", current_semester_code)).ToList();

            return table;
        }

        public List<StudentCourseFilters> Procedures_ViewRequiredCourses(string StudentID, string current_semester_code)
        {
            var table = Set<StudentCourseFilters>().FromSqlRaw("EXEC dbo.Procedures_ViewRequiredCourses @StudentID, @current_semester_code",
                new SqlParameter("@StudentID", StudentID),
                new SqlParameter("@current_semester_code", current_semester_code)).ToList();

            return table;
        }



        /*--Views--*/

        public List<AdvisorsGraduationPlan> Views_Advisors_Gradtuation_Plan()
        {
            var table = Set<AdvisorsGraduationPlan>().FromSqlRaw("SELECT * FROM dbo.Advisors_Graduation_Plan")
                                    .ToList();
            return table;
        }

        public List<AllPendingRequest> Views_all_Pending_Requests()
        {
            var table = Set<AllPendingRequest>().FromSqlRaw("SELECT * FROM dbo.all_Pending_Requests")
                                    .ToList();
            return table;
        }

        public List<CoursesMakeupExam> Views_Courses_MakeupExams()
        {
            var table = Set<CoursesMakeupExam>().FromSqlRaw("SELECT * FROM dbo.Courses_MakeupExams")
                                    .ToList();
            return table;
        }
        public List<InstructorsAssignedCourse> Views_Instructors_AssignedCourses()
        {
            var table = Set<InstructorsAssignedCourse>().FromSqlRaw("SELECT * FROM dbo.Instructors_AssignedCourses")
                                    .ToList();
            return table;
        }
        public List<SemsterOfferedCourse> Views_Semster_offered_Courses()
        {
            var table = Set<SemsterOfferedCourse>().FromSqlRaw("SELECT * FROM dbo.Semster_offered_Courses")
                                    .ToList();
            return table;
        }
        public List<StudentPayment> Views_Student_Payment()
        {
            var table = Set<StudentPayment>().FromSqlRaw("SELECT * FROM dbo.Student_Payment")
                                    .ToList();
            return table;
        }
        public List<StudentsCoursesTranscript> Views_Students_Courses_transcript()
        {
            var table = Set<StudentsCoursesTranscript>().FromSqlRaw("SELECT * FROM dbo.Students_Courses_transcript")
                                    .ToList();
            return table;
        }
        public List<ViewCoursePrerequisite> Views_view_Course_prerequisites()
        {
            var table = Set<ViewCoursePrerequisite>().FromSqlRaw("SELECT * FROM dbo.view_Course_prerequisites")
                                    .ToList();
            return table;
        }
        public List<ViewStudent> Views_view_Students()
        {
            var table = Set<ViewStudent>().FromSqlRaw("SELECT * FROM dbo.view_Students")
                                    .ToList();
            return table;
        }
        /*--Functions--*/
        public int StudentLogin(string username, string password)
        {
            var success = new SqlParameter("@success", SqlDbType.Int)
            {
                Direction = ParameterDirection.Output
            };

            Database.ExecuteSqlRaw("EXEC @success = dbo.FN_StudentLogin @Student_id, @password",
                    new SqlParameter("@Student_id", username),
                    new SqlParameter("@password", password),
                    success);

            return (int)success.Value;
        }
        public int AdvisorLogin(string username, string password)
        {
            var success = new SqlParameter("@success", SqlDbType.Int)
            {
                Direction = ParameterDirection.Output
            };

            Database.ExecuteSqlRaw("EXEC @success = dbo.FN_AdvisorLogin @Student_id, @password",
                    new SqlParameter("@Student_id", username),
                    new SqlParameter("@password", password),
                    success);

            return (int)success.Value;
        }



        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
