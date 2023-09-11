using Blog_WebApi_Dev.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<BlogContext>(options =>
    options.UseSqlServer("Server=DESKTOP-B4GLFC2;Database=BlogDev;integrated security=True;Encrypt=False"));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost3000",
       builder => builder.WithOrigins("http://localhost:3000")
                         .AllowAnyMethod()
                         .AllowAnyHeader());
});
var app = builder.Build();
app.UseCors("AllowLocalhost3000");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseRouting();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.Run();
