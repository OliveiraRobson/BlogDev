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
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private IPostRepository _postRepository;
        private ICategoryRepository _categoryRepository;

        private BlogDevContext _context;


        #region [CONSTRUTOR]
        public RepositoryWrapper(BlogDevContext context)
        {
            _context = context;
        }
        #endregion

        public IPostRepository Post
        {
            get
            {
                if (_postRepository == null)
                {
                    _postRepository = new PostRepository(_context);
                }

                return _postRepository;
            }
        }
        public ICategoryRepository Category
        {
            get
            {
                if (_categoryRepository == null)
                {
                    _categoryRepository = new CategoryRepository(_context);
                }

                return _categoryRepository;
            }
        }

    }
}
