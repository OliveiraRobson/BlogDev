using Blog_WebApi_Dev.Model;
using Blog_WebApi_Dev.Model.Repository.interfaces;
using Blog_WebApi_Dev.Services.Interfaces;

namespace Blog_WebApi_Dev.Services.usuario
{
    public class InfoUsuario : IInfoUsuario
    {
        private readonly IUserRepository _userRepository;
   

        public InfoUsuario(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Usuario usuarioByID(int usuarioid)
        {
            if(usuarioid > 0) 
                return _userRepository.getUsuarioByID(usuarioid);


            return null;
        }
    }
}
