namespace Blog_WebApi_Dev.Model.Repository.interfaces
{
    public interface IPostRepository
    {
        public Post CriarPost(Post post) { throw new NotImplementedException(); }
        public List<Post> BuscarPostLista();
        public Post BuscaPostByID(int? id);
    }
}
