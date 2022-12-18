using BlogDev.Model.Context;
using BlogDev.Model.Inferfaces;
using BlogDev.Model.Repository;
using BlogDev.Service.Interfaces;
using BlogDev.Service.PostService;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<BlogDevContext>(options => options.UseSqlServer("Server=DESKTOP-E4RADFI;Database=BlogDev;integrated security=True;Encrypt=False"));

builder.Services.AddTransient<IRepositoryWrapper, RepositoryWrapper>();
builder.Services.AddTransient<IFindCategoryPostService, FindCategoryPostService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
