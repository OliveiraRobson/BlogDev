namespace Blog_WebApi_Dev.Services.Interfaces
{
    public interface IPasswordService
    {
        public string HashPassword(string password);
        public bool CheckPassword(string providedPassword, string storedHash);
    }
}
