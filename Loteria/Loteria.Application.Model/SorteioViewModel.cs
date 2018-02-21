using System;
using System.Collections.Generic;

namespace Loteria.Application.Model
{
    public class SorteioViewModel
    {
        public int Id { get; set; }
        public int[] Dezenas { get; set; }
        public DateTime DataSorteio { get; set; }

        public IList<ApostaViewModel> Apostas { get; set; }
    }
}
