using NPOI.SS.Formula.Functions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDev.Model.Inferfaces
{
    public interface IBaseRepository<T> where T : class
    {
        void Delete(object id);
        IQueryable<T> GetAll();
        T GetById(object id);
        void Insert(T obj);
        void Save();
        void Update(T obj);
    }
}
