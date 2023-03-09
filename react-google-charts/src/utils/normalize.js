

export default function normalize(value) {

  if(value.toLowerCase() == 'criticidade') {
    return 'TIPO DE SOLUÇÃO';
  }

  return  value.split('_').join(' ');
}