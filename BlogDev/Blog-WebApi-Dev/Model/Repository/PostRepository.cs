using Blog_WebApi_Dev.Model.Repository.interfaces;

namespace Blog_WebApi_Dev.Model.Repository
{
    public class PostRepository : IPostRepository
    {
        private readonly BlogContext _context;

        public PostRepository(BlogContext context)
        {
            _context = context;
        }

        public Post CriarPost(Post post) 
        {
            _context.Post.Add(post);
            _context.SaveChanges();
            return post;
        }
        public List<Post> BuscarPostLista()
        {
            return _context.Post.ToList();
        }
        public Post BuscaPostByID(int? id)
        {
            var post = _context.Post.Find(id);
            if (post != null)
            {
                return post;
            }
            return null;
        }


    }
}
