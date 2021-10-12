// Declarando o tipo de adereços - consulte "Digitando componentes de adereços" para obter mais exemplos 
type AppProps = {
  message: string;
}; / * use `interface` se estiver exportando para que os consumidores possam estender * /

// Maneira mais fácil de declarar um componente de função; o tipo de retorno é inferido.
const App = ({ message }: AppProps) => <div>{message}</div>;

// você pode escolher anotar o tipo de retorno para que um erro seja gerado se você acidentalmente retornar algum outro tipo 
const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

// você também pode embutir a declaração de tipo; elimina nomear os tipos de prop, mas parece repetitivo 
const App = ({ message }: { message: string }) => <div>{message}</div>;
