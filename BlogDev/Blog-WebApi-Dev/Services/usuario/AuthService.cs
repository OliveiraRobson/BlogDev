using Blog_WebApi_Dev.Model;
using Blog_WebApi_Dev.Model.Repository;
using Blog_WebApi_Dev.Model.Repository.interfaces;
using Blog_WebApi_Dev.Services.Interfaces;

namespace Blog_WebApi_Dev.Services.usuario
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordService _passwordService;
        
        public AuthService(IUserRepository userRepository, IPasswordService passwordService)
        {
            _userRepository = userRepository;
            _passwordService = passwordService;
          
        }

        public Usuario Authenticate(string email, string password)
        {
            var user = VerificarEmail(email);
            if (user != null && _passwordService.CheckPassword(password, user.Senha))
            {
                return user;
            }
            return null;
        }
        public Usuario VerificarEmail(string email)
        {
            var userExiste = _userRepository.VerificarSeExiste(email);
            if (userExiste)
            {
                
                 var user =_userRepository.GetUserByEmail(email);

                return user;
            }
                return null;
        }

        public Usuario Register(Usuario user, string password)
        {
            user.Senha = _passwordService.HashPassword(password);
            return _userRepository.SaveUser(user);
        }

    }
}
