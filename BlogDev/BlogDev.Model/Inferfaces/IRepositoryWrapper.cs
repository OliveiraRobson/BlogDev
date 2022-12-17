using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Inferfaces
{
    public interface IRepositoryWrapper
    {
        public IPostRepository Post { get;}
        public ICategoryRepository Category { get;}
    }
}
