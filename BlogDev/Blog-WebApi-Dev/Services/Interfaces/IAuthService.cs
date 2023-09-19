using Blog_WebApi_Dev.Model;

namespace Blog_WebApi_Dev.Services.Interfaces
{
    public interface IAuthService
    {
        public Usuario Authenticate(string email, string password);
        public Usuario Register(Usuario user, string password);

    }
}
