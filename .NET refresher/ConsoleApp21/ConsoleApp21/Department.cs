namespace Assignment
{
    public class Department
    {
        public string GetDepartmentName()
        {
            return "MCA";
        }

        public int GetNumberOfDepartment()
        {
            return 6;
        }

        public virtual string GetDepartmentDetails()
        {
            return "MCA_1";
        }
    }
}