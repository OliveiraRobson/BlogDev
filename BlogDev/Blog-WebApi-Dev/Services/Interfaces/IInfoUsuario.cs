using Blog_WebApi_Dev.Model;
using Blog_WebApi_Dev.Model.Repository.interfaces;

namespace Blog_WebApi_Dev.Services.Interfaces
{
    public interface IInfoUsuario
    {

        public Usuario usuarioByID(int usuarioid);
      
    }
}
