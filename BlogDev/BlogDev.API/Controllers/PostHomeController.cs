using BlogDev.Model.Tables;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;
using BlogDev.Model.Context;
using System.Data.Entity;

namespace BlogDev.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostHomeController : ControllerBase
    {
       
        private readonly BlogDevContext _context;

        public PostHomeController(BlogDevContext context)
        {
            _context = context;
        }

        [HttpGet]
        public  IEnumerable<Post> GetPosts()
        {
            return  _context.Posts.ToList();
        }
    }
    
}
