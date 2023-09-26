﻿using Blog_WebApi_Dev.Extensions;
using Blog_WebApi_Dev.Model;
using Blog_WebApi_Dev.Model.DTOs;
using Blog_WebApi_Dev.Model.Repository.interfaces;
using Blog_WebApi_Dev.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Blog_WebApi_Dev.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostsController : ControllerBase
    {
        private readonly IPostService _post;

        private readonly BlogContext _context;

        public PostsController(BlogContext context, IPostService post)
        {
            _context = context;
            _post = post;
        }

        [HttpGet]
        public  IEnumerable<Post> GetPosts()
        {
            return  _context.Post.ToList();
        }
        [HttpGet("GetPostByID")]
        public ActionResult<Post> GetPostByID(int id)
        {
            var post = _context.Post.Find(id);

            if (post == null)
            {
                return NotFound(new { error = "Artigo nao encontrado" });
            }
            return post;
        }
        //[Authorize]
        [HttpPost]
        public ActionResult CriarPost([FromBody] PostDTO post)
        {
            if(post.UsuarioID > 0)
            {
                _post.criarPosts(post.ToPost());
                return Ok(post);
            }
            return NotFound(new { error = "Nao pode criar o artigo." }); ; 
        }

        [HttpGet("Categoria")]
        public IEnumerable<Categoria> GetCategorias()
        {
            return _context.Categoria.ToList();
        }


    }
}

