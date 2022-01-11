using System;

namespace Assignment
{
    public class Employee : Department
    {
        public string GetEmployeeFirstName()
        {
            return "Athisii";
        }

        public string GetEmployeeLastName()
        {
            return "Lohrii";
        }

        public override string GetDepartmentDetails()
        {
            return "MCA_2";
        }
        public static void Main(string[] args)
        {
            Department department = new Department();
            Department employee = new Employee();
            Console.WriteLine(department.GetDepartmentDetails()); //calling method of base class
            Console.WriteLine(employee.GetDepartmentDetails()); //calling method of child class, example of polymorphism 
            Console.ReadKey();
        }
    }
}
