using Blog_WebApi_Dev.Extensions;
using Blog_WebApi_Dev.Model;
using Blog_WebApi_Dev.Services.Interfaces;
using System;

namespace Blog_WebApi_Dev.Services
{
    public class UserService : IUserService
    {
        private readonly BlogContext _dbContext;
        public UserService(BlogContext dbContext) 
        {
            _dbContext = dbContext;
        }

        public Usuario FindByEmail(string email)
        {
            return _dbContext.Usuario.FirstOrDefault(u => u.Email == email);
        }
        public Usuario Authenticate(string email, string password)
        {
            var user = _dbContext.Usuario.FirstOrDefault(u => u.Email == email);

            if (user == null)
                return null;

            //var passwordHash = this.ComputeHash(password);

            //if (user.PasswordHash == passwordHash)
            //    return user;

            return null;
        }

        public Usuario Register(Usuario user)
        {
            _dbContext.Usuario.Add(user);
            _dbContext.SaveChanges();
            return user;
        }
    }
}
