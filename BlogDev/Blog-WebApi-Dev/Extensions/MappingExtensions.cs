using Blog_WebApi_Dev.Model;
using Blog_WebApi_Dev.Model.DTOs;
using Blog_WebApi_Dev.Services;
using System.Security.Cryptography;
using System.Text;

namespace Blog_WebApi_Dev.Extensions
{
    public static class MappingExtensions
    {
        public static Usuario ToUser(this UserDTO dto)
        {
            return new Usuario
            {
                Nome = dto.PrimeiroNome,
                Email = dto.Email,

                // A senha precisa ser hashed antes de ser armazenada
                Senha = ComputeHash(dto.Password)
            };
           
        }
        public static UserResponseDTO ToDTO(this Usuario user)
        {
            return new UserResponseDTO
            {
                Id = user.UsuarioID,
                Name = user.Nome,
                Email = user.Email,
                CreatedAt = user.DataCadastro
            };
        }
        private static string ComputeHash(string input)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(input));
                StringBuilder builder = new StringBuilder();
                foreach (byte byteValue in bytes)
                {
                    builder.Append(byteValue.ToString("x2"));
                }
                return builder.ToString();
            }
        }
    }
}
