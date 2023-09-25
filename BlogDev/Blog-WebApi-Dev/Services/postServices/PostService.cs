using Blog_WebApi_Dev.Model;
using Blog_WebApi_Dev.Model.DTOs;

using Blog_WebApi_Dev.Model.Repository.interfaces;
using Blog_WebApi_Dev.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Blog_WebApi_Dev.Services.postServices
{
    public class PostService : IPostService
    {
        private readonly IPostRepository _post;
        public PostService(IPostRepository post)
        {           
            _post = post;
        }


        public Post criarPosts(Post postDTO)
        {
          if(postDTO != null)
            {
                return _post.CriarPost(postDTO);

            }
            return null;
        }

    }
}
