using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Department
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee Employee = new Employee()
            { DepartmentName = "Testing", NoOfDepartment = 1, EmployeeFirstName = "sanjib", EmployeeLastName = "sahu" };
            Console.WriteLine(Employee.GetDepartmentDetails());
        }
    }
}
