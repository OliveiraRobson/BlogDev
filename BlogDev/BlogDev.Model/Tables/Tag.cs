using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Tables
{
    public class Tag
    {
        public int TagID { get; set; }
        public string Nome { get; set; }
        public List<PostTag> PostTags { get; set; }
    }
}
