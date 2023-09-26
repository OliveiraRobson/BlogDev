using Blog_WebApi_Dev.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NuGet.Protocol.Plugins;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Blog_WebApi_Dev.Services;
using Blog_WebApi_Dev.Model.DTOs;
using Blog_WebApi_Dev.Services.Interfaces;
using Blog_WebApi_Dev.Extensions;
using Blog_WebApi_Dev.Services.usuario;
using Blog_WebApi_Dev.Helpers.Interfaces;

namespace Blog_WebApi_Dev.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly BlogContext _context;
        private readonly IUserService _userService;
        private readonly IAuthService _authService;

        private readonly IGenerateJwtToken _generateJwtToken;
        


        public LoginController(IConfiguration config, 
                                BlogContext context, 
                                IUserService userService, 
                                IAuthService authService, 
                                IGenerateJwtToken generateJwtToken)
        {
            _config = config;
            _context = context;
            _userService = userService;
            _authService = authService;
            _generateJwtToken = generateJwtToken;
        }
        [HttpPost]
        public ActionResult Login([FromForm] string email, [FromForm] string senha)
        {
            var user = _authService.Authenticate(email, senha);

            if (user == null)
            {
                return Unauthorized();
            }

            // Aqui você também geraria um token JWT para enviar ao cliente.
            var token = _generateJwtToken.GenerateJwtTokens(user);

            var usuarioinfo = new UserResponseDTO();
            usuarioinfo.Id = user.UsuarioID;
            usuarioinfo.Email = user.Email;
            usuarioinfo.Name = user.Nome;
            usuarioinfo.token = token;

            return Ok(new { usuarioinfo });
        }
      
        [HttpPost("register")]
        public ActionResult Register([FromBody] UserDTO userDto)
        {
            if (ModelState.IsValid)
            {
                var existingUser = _authService.VerificarEmail(userDto.Email);
                if (existingUser != null)
                {
                    return BadRequest("Email já está em uso.");
                }
             
                var user = userDto.ToUser();
                var newUser = _authService.Register(user, userDto.Password);

                CreatedAtAction(nameof(Register), newUser.ToDTO());
                var token = _generateJwtToken.GenerateJwtTokens(user);

                return Ok(new { token = token });
            }

            return BadRequest(ModelState);
        }
    }
 
}
