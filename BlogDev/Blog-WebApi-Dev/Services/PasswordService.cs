using Blog_WebApi_Dev.Services.Interfaces;
using System.Text;

namespace Blog_WebApi_Dev.Services
{
    public class PasswordService : IPasswordService
    {
        public string HashPassword(string password)
        {
            // Aqui você pode usar um algoritmo como BCrypt ou Argon2 para criar o hash da senha
            // Este é apenas um exemplo, na prática, você deve usar bibliotecas robustas
            return Convert.ToBase64String(Encoding.UTF8.GetBytes(password));
        }

        public bool CheckPassword(string providedPassword, string storedHash)
        {
            return HashPassword(providedPassword) == storedHash;
        }
    }

}
