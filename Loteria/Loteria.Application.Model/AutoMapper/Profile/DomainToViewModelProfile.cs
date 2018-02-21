using Loteria.Core.Domain.Entities;

namespace Loteria.Application.Model.AutoMapper.Profile
{
    public class DomainToViewModelProfile : global::AutoMapper.Profile
    {
        public DomainToViewModelProfile()
        {
            CreateMap<Aposta, ApostaViewModel>();
        }
    }
}
