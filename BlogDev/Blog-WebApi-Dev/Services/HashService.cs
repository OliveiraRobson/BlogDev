using Blog_WebApi_Dev.Model;
using Microsoft.AspNetCore.Identity;

namespace Blog_WebApi_Dev.Services
{
    public class HashService
    {
        private readonly PasswordHasher<Usuario> _hasher;

        public HashService()
        {
            _hasher = new PasswordHasher<Usuario>();
        }

        public string ComputeHash(string password)
        {
            return _hasher.HashPassword(null, password); // O primeiro parâmetro (user) é opcional aqui.
        }

        public bool VerifyHash(string password, string storedHash)
        {
            var result = _hasher.VerifyHashedPassword(null, storedHash, password);
            return result == PasswordVerificationResult.Success;
        }
    }

}
