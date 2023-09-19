using Blog_WebApi_Dev.Model;

namespace Blog_WebApi_Dev.Helpers.Interfaces
{
    public interface IGenerateJwtToken
    {
        public string GenerateJwtTokens(Usuario user);
    }
}
