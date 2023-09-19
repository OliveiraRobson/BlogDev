namespace Blog_WebApi_Dev.Model.Repository.interfaces
{
    public interface IUserRepository
    {
        public Usuario SaveUser(Usuario user);
        public Usuario GetUserByEmail(string email);
    }
}
