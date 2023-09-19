using Microsoft.EntityFrameworkCore;

namespace Blog_WebApi_Dev.Model.Repository.interfaces
{
    public interface IUserRepository
    {
        public Usuario SaveUser(Usuario user);
        public bool VerificarSeExiste(string? email);
        public Usuario GetUserByEmail(string? email);
    }
}
