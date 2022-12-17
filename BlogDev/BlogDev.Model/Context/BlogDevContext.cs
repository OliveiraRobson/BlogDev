using BlogDev.Model.Tables;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Context
{
    public class BlogDevContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public BlogDevContext(DbContextOptions options) : base(options)
        {
           
        }
        public Microsoft.EntityFrameworkCore.DbSet<Post> Posts { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Category> Categories { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<PostCategories> PostCategories { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Tag> Tags { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<PostTags> PostTags { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().ToTable("Categories").HasKey(x => x.Id);
            modelBuilder.Entity<Post>().ToTable("Posts").HasKey(x => x.Id);

        }
    }
}
