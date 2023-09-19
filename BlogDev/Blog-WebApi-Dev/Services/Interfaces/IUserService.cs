using Blog_WebApi_Dev.Model;

namespace Blog_WebApi_Dev.Services.Interfaces
{
    public interface IUserService
    {
        Usuario Register(Usuario user);
        Usuario FindByEmail(string email);
    }
}
