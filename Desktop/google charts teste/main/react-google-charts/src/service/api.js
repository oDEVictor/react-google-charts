import axios from "axios";


const api = axios.create({
    // params: {
    //    token_acesso: "Nj1fpNjIjbqBEzhAg0mF0f0dZ0pYfFVts17ph0qE1kCCU4KbF6aedpSKc7z2ATcLLohwyqncMZLJKCqljX9G8h0oB54uRelAXtPF",
    //     servico: "BMC%23Relatorio_Sustentacao_Listagem_Tarefas_Abertas",
    // },
    // baseURL: 'https://apigatewayolinda.mec.gov.br/api/olinda/consultar-olinda-bi',
    baseURL: 'https://apigatewayolinda.mec.gov.br/api/olinda/consultar-olinda-bi?token_acesso=Nj1fpNjIjbqBEzhAg0mF0f0dZ0pYfFVts17ph0qE1kCCU4KbF6aedpSKc7z2ATcLLohwyqncMZLJKCqljX9G8h0oB54uRelAXtPF&servico=BMC%23Relatorio_Sustentacao_Listagem_Tarefas_Abertas',

});
 
export default api;

