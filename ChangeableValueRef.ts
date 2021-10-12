function  Foo ( )  { 
  // Tecnicamente, retorna MutableRefObject <número | null> 
  const  intervalRef  =  useRef < número  |  nulo > ( nulo ) ; 

  // Você mesmo gerencia o ref (por isso é chamado MutableRefObject!) 
  UseEffect ( ( )  =>  { 
    intervalRef . Current  =  setInterval ( ... ) ; 
    return  ( )  =>  clearInterval ( intervalRef . Current) ; 
  } ,  [ ] ) ; 

  // O ref não é passado para nenhum prop "ref" do elemento 
  return  < button  onClick = { / * clearInterval the ref * / } > Cancelar cronômetro < / button > ; 
}
