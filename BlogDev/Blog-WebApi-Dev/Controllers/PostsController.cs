using Blog_WebApi_Dev.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Blog_WebApi_Dev.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostsController : ControllerBase
    {
        private readonly BlogContext _context;

        public PostsController(BlogContext context)
        {
            _context = context;
        }

        [HttpGet]
        public  IEnumerable<Post> GetPosts()
        {
            return  _context.Post.ToList();
        }


    }
}

