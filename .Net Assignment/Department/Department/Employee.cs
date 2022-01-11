using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Department
{
    class Employee : Department
    {
        public string EmployeeFirstName { get; set; }
        public string EmployeeLastName { get; set; }

        public override string GetDepartmentDetails() => $"{DepartmentName} of NoOfDepartment {NoOfDepartment}, " +
            $"EmployeeFirstName = {EmployeeFirstName}, EmployeeLastName = {EmployeeLastName}";
    }
}
