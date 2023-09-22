using Blog_WebApi_Dev.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Blog_WebApi_Dev.Controllers;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Blog_WebApi_Dev.Helpers.Interfaces;
using Blog_WebApi_Dev.Helpers;
using Blog_WebApi_Dev.Services.Interfaces;
using Blog_WebApi_Dev.Services.usuario;
using Blog_WebApi_Dev.Services;
using Blog_WebApi_Dev.Model.Repository.interfaces;
using Blog_WebApi_Dev.Model.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<BlogContext>(options =>
    options.UseSqlServer("Server=sql8006.site4now.net;Database=db_a9f252_blogdev;User Id=db_a9f252_blogdev_admin;Password=R@bson510932;"));
builder.Services.AddTransient<IUserRepository, UserRepository>();
builder.Services.AddTransient<IPasswordService, PasswordService>();

builder.Services.AddTransient<IGenerateJwtToken, GenerateJwtToken>();
builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddTransient<IAuthService, AuthService>();


var key = Encoding.ASCII.GetBytes("sua-chave-secreta-aqui"); // Mantenha esta chave em segredo e n�o a exponha!

    builder.Services.AddAuthentication(x =>
    {
        x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(x =>
    {
        x.RequireHttpsMetadata = false;
        x.SaveToken = true;
        x.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });




builder.Services.AddCors(options =>
{
    //options.AddPolicy("AllowLocalhost3000",
    //   builder => builder.WithOrigins("http://localhost:3000")
    //                     .AllowAnyMethod()
    //                     .AllowAnyHeader());

    options.AddPolicy("AllowSpecificOrigin",
       builder =>
       {
           builder.WithOrigins("https://vidaembits.com.br/")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
       });
    options.AddPolicy("Producao",
       builder => builder.WithOrigins("https://vidaembits.com.br/")
                         .AllowAnyMethod()
                         .AllowAnyHeader());
});
var app = builder.Build();
//app.UseCors("AllowLocalhost3000");
app.UseCors("AllowSpecificOrigin");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseRouting();
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapUsuarioEndpoints();
app.Run();
