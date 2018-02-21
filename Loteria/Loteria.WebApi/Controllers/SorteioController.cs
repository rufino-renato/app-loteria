using Loteria.Application.Model;
using Loteria.Core.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Loteria.WebApi.Controllers
{
    public class SorteioController : BaseController
    {
        private readonly ISorteioService _sorteioService;

        public SorteioController(ISorteioService sorteioService)
        {
            _sorteioService = sorteioService;
        }

        [HttpPost]
        public SorteioViewModel InserirSorteio()
        {
            return _sorteioService.IncluirSorteio();
        }
    }
}