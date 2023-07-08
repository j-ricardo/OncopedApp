import React, {useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { PaginaAtual, alterarPagina, paginaSelector } from "../pagina_atual/paginaAtualSlice";

export default function Navegacao(idPag: number, nmPag: string){    
    const pag: PaginaAtual = {
        id: idPag,
        nome: nmPag
    }
    const dispatch = useAppDispatch();
    dispatch(alterarPagina(pag));
    console.log('pagina alterada para: ', idPag, ', ', nmPag);
}