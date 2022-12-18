using BlogDev.Model.Inferfaces;
using BlogDev.Model.Repository;
using BlogDev.Model.Tables;
using BlogDev.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Service.PostService
{

    public class FindCategoryPostService : IFindCategoryPostService
    { 
        #region INTERFACES
        private readonly IRepositoryWrapper repository;
        #endregion

        public FindCategoryPostService(IRepositoryWrapper repository)
        {
            this.repository = repository;
        }
        public IEnumerable<Category> getAllCategories()
        {
            var category = repository.Category.getAllCategory();
            if (category.ToList().Count > 0)
            {
                return category;
            }
            return null;
        }


    }
}
