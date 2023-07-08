export function ViewReturnedInBackPress (id: number){
  if (id === 1)
    return "ViewInicio";  

  else if (id > 1 && id < 4)
    return "ViewPrincipal";

  else if (id === 4 || id === 8 || id === 12)
    return "ViewTerapias";

  else if (id >= 5 && id <= 7)
    return "ViewQuimioterapia";

  else if (id >= 9 && id <= 11)
    return "ViewRadioterapia";

  else if (id >= 13 && id <= 28)
    return "ViewSinaisSintomas";
  
  else if (id >= 29 && id <= 31)
    return "ViewNutricao";

  else
    return "TelaInicial";
}