namespace Blog_WebApi_Dev.Model.DTOs
{
    public class PostDTO
    {
        public string Titulo { get; set; }
        public string Conteudo { get; set; }
        public DateTime DataPublicacao { get; set;}
        public int UsuarioID { get; set;}
        public int CategoriaID {  get; set;}
        public string urlImg { get; set;}
    }
}
