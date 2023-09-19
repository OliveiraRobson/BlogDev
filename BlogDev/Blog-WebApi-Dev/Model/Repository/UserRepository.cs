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

        public Usuario GetUserByEmail(string? email)
        {
            var user = _context.Usuario.FirstOrDefault(u => u.Email == email.ToString());
            if (user != null)
            {
                string? nome = user.Nome;
                email = user.Email;
                //... inspect other properties similarly ...
            }

            return user;
        }
    }
}
