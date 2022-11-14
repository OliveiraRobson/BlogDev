using BlogDev.Model.Inferfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using EntityState = System.Data.Entity.EntityState;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NPOI.SS.Formula.Functions;

namespace BlogDev.Model.Context
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly BlogDevContext _context;

        public BaseRepository(BlogDevContext context) 
        {
            _context = context;
        }
      
        public T GetById(object id)
        {
            return _context.Set<T>().Find(id);
        }
        public void Delete(object id)
        {
            T existing = _context.Set<T>().Find(id);
            _context.Set<T>().Remove(existing);
        }

        public IQueryable<T> GetAll()
        {
            return _context.Set<T>();
        }

        public void Insert(T obj)
        {
            _context.Set<T>().Add(obj);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(T obj)
        {
            _context.Set<T>().Attach(obj);
            _context.Entry(obj).State = (Microsoft.EntityFrameworkCore.EntityState)EntityState.Modified;
        }
    }
}
