using BlogDev.Model.Context;

using BlogDev.Model.Tables;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Data.Entity;

namespace DataBase
{
    public class Tests
    {
        private ServiceProvider serviceProvider { get; set; }
   
        [SetUp]
        public void Setup()
        {
            var services = new ServiceCollection();
            services.AddDbContext<BlogDevContext>(options => options.UseSqlServer("Server=DESKTOP-E4RADFI;Database=BlogDev;integrated security=True;Encrypt=False"));
            // services.AddTransient<IRepositoryWrapper, RepositoryWrapper>();
            // //services.AddTransient<IBlogDevContextFactory, IBlogDevContextFactory>();
            // services.AddTransient<IPostRepository, PostRepository> ();

            serviceProvider = services.BuildServiceProvider();

        }

        [Test]
        public void ConectionWithDataBase()
         {

        //     var b = serviceProvider.GetService<IRepositoryWrapper>();

     

        //    var a = b.Post.GetAllUsers();


            Assert.Pass();
        }

        [Test]
        public void GetAllCategory()
        {
            // var a = serviceProvider.GetService<IRepositoryWrapper>();

            // var b  = a.Category.getAllCategory().ToList();


            Assert.Pass();

        }
    }
}