using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace BlogDev.Model.Context
{
    public class BlogDevContextFactory : IDesignTimeDbContextFactory<BlogDevContext>
    {
        public BlogDevContext CreateDbContext(string[] args)
        {
            var dbContextBuilder = new DbContextOptionsBuilder<BlogDevContext>();
            var connectionString = "Data Source =DESKTOP-E4RADFI; Initial Catalog=BlogDev; Integrated Security = True";
            dbContextBuilder.UseSqlServer("Server=DESKTOP-E4RADFI;Database=BlogDev;Trusted_Connection=True;MultipleActiveResultSets=true");
            return new BlogDevContext(dbContextBuilder.Options);
        }
    }
}
