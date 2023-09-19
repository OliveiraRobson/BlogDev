using System.ComponentModel.DataAnnotations;

namespace Blog_WebApi_Dev.Model.DTOs
{
    public class UserDTO
    {

        [Required]
        [StringLength(50, MinimumLength = 5)]
        public string PrimeiroNome { get; set; }

  
        [StringLength(50, MinimumLength = 5)]
        public string UltimoNome { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 5)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 3)]
        public string Password { get; set; }
    }
    public class UserResponseDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
