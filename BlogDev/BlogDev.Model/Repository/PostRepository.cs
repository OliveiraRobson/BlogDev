using BlogDev.Model.Context;
using BlogDev.Model.Inferfaces;
using BlogDev.Model.Tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Repository
{
    public class PostRepository : BaseRepository<Post> , IPostRepository
    {
        public PostRepository(BlogDevContext context) : base(context)
        {

        }
        public IQueryable<Post> GetAllUsers()
        {
            return GetAll();
        }

    }
}
