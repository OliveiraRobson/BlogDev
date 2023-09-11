using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Tables
{
    public class Post
    {
        public int PostID { get; set; }
        public string Titulo { get; set; }
        public string Conteudo { get; set; }
        public DateTime DataPublicacao { get; set; }

        public int UsuarioID { get; set; }
        public Usuario Usuario { get; set; }

        public int CategoriaID { get; set; }
        public Categoria Categoria { get; set; }

        public List<PostTag> PostTags { get; set; }
        public List<Comentario> Comentarios { get; set; }
        public List<LikePost> LikesPosts { get; set; }
        public List<Compartilhamento> Compartilhamentos { get; set; }
    }
}
