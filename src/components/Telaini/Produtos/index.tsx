import { BaseProduto, Coracao, Detalhes, ImgProduto, Inferior, TextoPreco, TextoProduto } from "./style"
import Coraicon from '../../../assets/telaini/coracao.svg?react'


type Props = {
    imagem: string;
    nome: string;
    preço: string;

}

export default function Produto({imagem,nome,preço}: Props) {
    return (
        <BaseProduto>

            <ImgProduto src={imagem}/>
        
            <Inferior>
                <Detalhes>
                    <TextoProduto>{nome}</TextoProduto>
                    <TextoPreco>{preço}</TextoPreco>
                </Detalhes>
                <Coracao>
                    <Coraicon/>
                </Coracao>
            </Inferior>

        </BaseProduto>


    );
    
}