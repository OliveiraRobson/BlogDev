using Blog_WebApi_Dev.Model;
using Blog_WebApi_Dev.Model.DTOs;
using Blog_WebApi_Dev.Model.Repository.interfaces;
using Blog_WebApi_Dev.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Blog_WebApi_Dev.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly IInfoUsuario _infoUsuario;

        public UsuariosController(IInfoUsuario infoUsuario) 
        {
            _infoUsuario = infoUsuario;
        }

        [HttpGet]
        public ActionResult<UserResponseDTO> usuarioByID(int usuarioID) 
        {
      
                var userDto = new UserResponseDTO();

                var userbanco = _infoUsuario.usuarioByID(usuarioID);

                if (userbanco != null)
                {
                    userDto.Name = userbanco.Nome;
                    userDto.Email = userbanco.Email;
                    userDto.Id = userbanco.UsuarioID;

                    return userDto;
                }


                return null;
            
        }
    }
}
