using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Tables
{
    public class Usuario
    {
        public int UsuarioID { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public DateTime DataCadastro { get; set; }
        public string Localizacao { get; set; }

        public List<Post> Posts { get; set; }
        public List<Comentario> Comentarios { get; set; }
        public List<LikePost> LikesPosts { get; set; }
        public List<Compartilhamento> Compartilhamentos { get; set; }
    }
}
