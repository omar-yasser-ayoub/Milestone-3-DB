using System;
using System.Collections.Generic;

namespace Milestone3Test.Models
{
    public partial class Payment
    {
        public Payment()
        {
            Installments = new HashSet<Installment>();
        }

        public int PaymentId { get; set; }
        public int? Amount { get; set; }
        public DateTime? Startdate { get; set; }
        public DateTime? Deadline { get; set; }
        public int? NInstallments { get; set; }
        public decimal? FundPercentage { get; set; }
        public string? Status { get; set; }
        public int? StudentId { get; set; }
        public string? SemesterCode { get; set; }

        public virtual Semester? SemesterCodeNavigation { get; set; }
        public virtual Student? Student { get; set; }
        public virtual ICollection<Installment> Installments { get; set; }
    }
}
