using BlogDev.Model.Tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Inferfaces
{
    public interface ICategoryRepository
    {
        public IQueryable<Category> getAllCategory();
        public Category getByIdCategory(int idCategory);
   
    }
}
