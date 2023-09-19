using Blog_WebApi_Dev.Model.Repository.interfaces;

namespace Blog_WebApi_Dev.Model.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly BlogContext _context;

        public UserRepository(BlogContext context)
        {
            _context = context;
        }

        public Usuario SaveUser(Usuario user)
        {
            _context.Usuario.Add(user);
            _context.SaveChanges();
            return user;
        }

        public bool VerificarSeExiste(string? email)
        {
            var emailExists = _context.Usuario.Any(u => u.Email == email);

            return emailExists;
        }
        public Usuario GetUserByEmail(string? email)
        {
            var usuario = _context.Usuario.FirstOrDefault(u => u.Email == email);

            return usuario;
        }
    }
}
