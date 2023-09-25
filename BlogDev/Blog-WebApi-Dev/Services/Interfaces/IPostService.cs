using Blog_WebApi_Dev.Model;

namespace Blog_WebApi_Dev.Services.Interfaces
{
    public interface IPostService
    {
        public Post criarPosts(Post postDTO);
    }
}
