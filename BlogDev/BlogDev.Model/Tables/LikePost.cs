using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Tables
{
    public class LikePost
    {
        public int LikeID { get; set; }
        public DateTime DataLike { get; set; }

        public int UsuarioID { get; set; }
        public Usuario Usuario { get; set; }

        public int PostID { get; set; }
        public Post Post { get; set; }
    }
}
