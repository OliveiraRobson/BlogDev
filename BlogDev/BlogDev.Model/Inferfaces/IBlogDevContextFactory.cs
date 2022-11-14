using BlogDev.Model.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Inferfaces
{
    public interface IBlogDevContextFactory
    {
        public BlogDevContext CreateDbContext(string[] args);
    }
}
