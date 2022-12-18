using BlogDev.Model.Tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Service.Interfaces
{
    public interface IFindCategoryPostService 
    {
        public IEnumerable<Category> getAllCategories();
    }
}
