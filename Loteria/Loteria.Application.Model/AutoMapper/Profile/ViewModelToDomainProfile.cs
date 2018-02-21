using Loteria.Core.Domain.Entities;

namespace Loteria.Application.Model.AutoMapper.Profile
{
    public class ViewModelToDomainProfile : global::AutoMapper.Profile
    {
        public ViewModelToDomainProfile()
        {
            CreateMap<ApostaViewModel, Aposta>();
        }
    }
}
