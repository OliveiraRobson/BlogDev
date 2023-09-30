using Microsoft.EntityFrameworkCore;

namespace Blog_WebApi_Dev.Model
{

    public class BlogContext : DbContext
    {
        public BlogContext(DbContextOptions<BlogContext> options) : base(options)
        {
        }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Categoria> Categoria { get; set; }
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
            modelBuilder.Entity<LikePost>()
               .HasKey(pt => new { pt.LikeID});

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

    public class Usuario
    {
        public int UsuarioID { get; set; }
        public string? Nome { get; set; }
        public string? Email { get; set; }
        public string Senha { get; set; }
        public DateTime DataCadastro { get; set; }
        public string? Localizacao { get; set; }

        public List<Post> Posts { get; set; }
        public List<Comentario> Comentarios { get; set; }
        public List<LikePost> LikesPosts { get; set; }
        public List<Compartilhamento> Compartilhamentos { get; set; }
    }

    public class Categoria
    {
        public int CategoriaID { get; set; }
        public string Nome { get; set; }
        public List<Post> Posts { get; set; }
    }

    public class Post
    {
        public int PostID { get; set; }
        public string Titulo { get; set; }
        public string Conteudo { get; set; }
        public DateTime DataPublicacao { get; set; }

        public int UsuarioID { get; set; }
        public string? urlImg { get; set; }
        public Usuario Usuario { get; set; }

        public int CategoriaID { get; set; }
        public Categoria Categoria { get; set; }

        public List<PostTag> PostTags { get; set; }
        public List<Comentario> Comentarios { get; set; }
        public List<LikePost> LikesPosts { get; set; }
        public List<Compartilhamento> Compartilhamentos { get; set; }
    }

    public class Tag
    {
        public int TagID { get; set; }
        public string Nome { get; set; }
        public List<PostTag> PostTags { get; set; }
    }

    public class PostTag
    {
        public int PostID { get; set; }
        public Post Post { get; set; }

        public int TagID { get; set; }
        public Tag Tag { get; set; }
    }

    public class Comentario
    {
        public int ComentarioID { get; set; }
        public string Conteudo { get; set; }
        public DateTime DataComentario { get; set; }

        public int UsuarioID { get; set; }
        public Usuario Usuario { get; set; }

        public int PostID { get; set; }
        public Post Post { get; set; }
    }

    public class LikePost
    {
        public int LikeID { get; set; }
        public DateTime DataLike { get; set; }

        public int UsuarioID { get; set; }
        public Usuario Usuario { get; set; }

        public int PostID { get; set; }
        public Post Post { get; set; }
    }

    public class Compartilhamento
    {
        public int CompartilhamentoID { get; set; }
        public DateTime DataCompartilhamento { get; set; }

        public int UsuarioID { get; set; }
        public Usuario Usuario { get; set; }

        public int PostID { get; set; }
        public Post Post { get; set; }
    }


public static class UsuarioEndpoints
{
	public static void MapUsuarioEndpoints (this IEndpointRouteBuilder routes)
    {
        routes.MapGet("/api/Usuario", () =>
        {
            return new [] { new Usuario() };
        })
        .WithName("GetAllUsuarios")
        .Produces<Usuario[]>(StatusCodes.Status200OK);

        routes.MapGet("/api/Usuario/{id}", (int id) =>
        {
            //return new Usuario { ID = id };
        })
        .WithName("GetUsuarioById")
        .Produces<Usuario>(StatusCodes.Status200OK);

        routes.MapPut("/api/Usuario/{id}", (int id, Usuario input) =>
        {
            return Results.NoContent();
        })
        .WithName("UpdateUsuario")
        .Produces(StatusCodes.Status204NoContent);

        routes.MapPost("/api/Usuario/", (Usuario model) =>
        {
            //return Results.Created($"//api/Usuarios/{model.ID}", model);
        })
        .WithName("CreateUsuario")
        .Produces<Usuario>(StatusCodes.Status201Created);

        routes.MapDelete("/api/Usuario/{id}", (int id) =>
        {
            //return Results.Ok(new Usuario { ID = id });
        })
        .WithName("DeleteUsuario")
        .Produces<Usuario>(StatusCodes.Status200OK);
    }
}}