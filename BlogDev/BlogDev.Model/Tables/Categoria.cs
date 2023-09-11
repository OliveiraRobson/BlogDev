using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Tables
{
    public class Categoria
    {
        public int CategoriaID { get; set; }
        public string Nome { get; set; }
        public List<Post> Posts { get; set; }
    }
}
