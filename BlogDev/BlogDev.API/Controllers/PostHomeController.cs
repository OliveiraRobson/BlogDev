using BlogDev.Model.Tables;
using BlogDev.Service.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;

namespace BlogDev.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostHomeController : ControllerBase
    {
        private readonly IFindCategoryPostService _filter;

        public PostHomeController(IFindCategoryPostService filter)
        {
            _filter = filter;
           
        }
        [HttpGet(Name = "GetCategoryPost")]
        [Route("/[controller]/[action]")]
        public List<Category> AllPostCategory()
        {
            var a =  this._filter.getAllCategories();
            return a.ToList();
        }
        //[HttpGet(Name = "GetCategoryPostById")]
        //public IEnumerable<Category> PostCategorybyId()
        //{
        //    return null;
        //}
    }
    
}
