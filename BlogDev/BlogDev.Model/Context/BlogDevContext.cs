using BlogDev.Model.Tables;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace BlogDev.Model.Context
{
    public class BlogDevContext : DbContext
    {
        public BlogDevContext(DbContextOptions options) : base(options)
        {
           
        }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Post> Post { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<PostTag> PostTags { get; set; }
        public DbSet<Comentario> Comentarios { get; set; }
        public DbSet<LikePost> LikesPosts { get; set; }
        public DbSet<Compartilhamento> Compartilhamentos { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PostTag>()
            .HasKey(pt => new { pt.PostID, pt.TagID });

            modelBuilder.Entity<PostTag>()
                .HasOne(pt => pt.Post)
                .WithMany(p => p.PostTags)
                .HasForeignKey(pt => pt.PostID);

            modelBuilder.Entity<PostTag>()
                .HasOne(pt => pt.Tag)
                .WithMany(t => t.PostTags)
                .HasForeignKey(pt => pt.TagID);
        }

    }
}
