using BlogDev.Model.Context;
using BlogDev.Model.Inferfaces;
using BlogDev.Model.Tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Repository
{
    public class CategoryRepository : BaseRepository<Category> , ICategoryRepository
    {
        public CategoryRepository(BlogDevContext context) : base(context)
        {

        }
        public IQueryable<Category> getAllCategory()
        {
            return this.GetAll();
        }
        public Category getByIdCategory(int idCategory)
        {
            return this.GetById(idCategory);
        }
    }
}
