using Microsoft.EntityFrameworkCore;
using pa_backend.Model;

namespace pa_backend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<User> Users { get; set; }
    }
}