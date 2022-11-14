using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Tables
{
    public class Comment : BaseEntity
    {
        public string CommentContents { get; set; }
        public string PostedBy { get; set; }
        public Comment Parent { get; set; }
        public Post ParentPost { get; set; }
    }
}
