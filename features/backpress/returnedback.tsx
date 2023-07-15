import { PaginaAtual } from "../pagina_atual/paginaAtualSlice";

export function ViewReturnedInBackPress (id: number){
  if (id === 1)
    return { id : 0, nome : "TelaInicial" } as PaginaAtual;  

  else if ((id > 1 && id < 4) || id === 32)
    return { id : 1, nome : "ViewInicio" } as PaginaAtual;

  else if (id === 4 || id === 8 || id === 12)
    return { id : 2, nome : "ViewTerapias" } as PaginaAtual;

  else if (id >= 5 && id <= 7)
    return { id : 4, nome : "ViewQuimioterapia" } as PaginaAtual;

  else if (id >= 9 && id <= 11)
    return { id : 8, nome : "ViewRadioterapia" } as PaginaAtual;

  else if (id >= 13 && id <= 28)
    return { id : 12, nome : "ViewSinaisSintomas" } as PaginaAtual;
  
  else if (id >= 29 && id <= 31)
    return { id : 3, nome : "ViewNutricao" } as PaginaAtual;

  else
    return { id : -1, nome : "exit" } as PaginaAtual;
}