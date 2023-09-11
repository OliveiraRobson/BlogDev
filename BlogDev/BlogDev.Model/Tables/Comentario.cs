using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Tables
{
    public class Comentario
    {
        public int ComentarioID { get; set; }
        public string Conteudo { get; set; }
        public DateTime DataComentario { get; set; }

        public int UsuarioID { get; set; }
        public Usuario Usuario { get; set; }

        public int PostID { get; set; }
        public Post Post { get; set; }
    }
}
