using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Tables
{
    public class Compartilhamento
    {
        public int CompartilhamentoID { get; set; }
        public DateTime DataCompartilhamento { get; set; }

        public int UsuarioID { get; set; }
        public Usuario Usuario { get; set; }

        public int PostID { get; set; }
        public Post Post { get; set; }
    }
}
