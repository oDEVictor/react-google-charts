import axios from "axios";


const apiWO = axios.create({

    baseURL: 'https://apigatewayolinda.mec.gov.br/api/olinda/consultar-olinda-bi?token_acesso=Nj1fpNjIjbqBEzhAg0mF0f0dZ0pYfFVts17ph0qE1kCCU4KbF6aedpSKc7z2ATcLLohwyqncMZLJKCqljX9G8h0oB54uRelAXtPF&servico=BMC%23Relatorio_Sustentacao_BMC_WO',

});

export default apiWO;