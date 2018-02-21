using Microsoft.AspNetCore.Mvc;

namespace Loteria.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("loteria/api/v1/[controller]")]
    public class BaseController : Controller
    {
    }
}