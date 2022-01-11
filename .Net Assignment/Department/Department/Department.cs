using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Department
{
    class Department
    {
        public string DepartmentName { get; set; }
        public int NoOfDepartment { get; set; }

        public virtual string GetDepartmentDetails() => $"{DepartmentName} of NoOfDepartment {NoOfDepartment}";
        
    }
}
