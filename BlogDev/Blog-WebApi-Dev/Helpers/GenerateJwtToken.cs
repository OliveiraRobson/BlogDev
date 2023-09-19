using Blog_WebApi_Dev.Helpers.Interfaces;
using Blog_WebApi_Dev.Model;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Blog_WebApi_Dev.Helpers
{
    public class GenerateJwtToken : IGenerateJwtToken
    {
        private readonly IConfiguration _config;
        public GenerateJwtToken(IConfiguration config)
        {
            _config = config;
        }
        public string GenerateJwtTokens(Usuario user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_config.GetSection("SecretKey").Value);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", "usuarioId") }), // Adicione seus próprios claims aqui
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);
            return tokenString;
        }
    }
}
