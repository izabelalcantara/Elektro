import { Headers, Menut, Carrinhot, Lupat, CaixaPesquisa, InputPesquisa} from "./style";
import Menu from '../../../assets/telaini/ponti.svg?react';
import Carrinho from "../../../assets/telaini/carrinho.svg?react";
import Lupa from "../../../assets/telaini/lupaa.svg?react";


export default function HeaderTI() {
    return (
        <Headers>
            <Menut>
            <Menu/>
            </Menut>
           <CaixaPesquisa>
            <Lupat>
            <Lupa/>
            </Lupat>
           <InputPesquisa placeholder="Encontrar na Elektro..."></InputPesquisa>
           </CaixaPesquisa>
           <Carrinhot>
           <Carrinho/>
           </Carrinhot>
           
        </Headers>
    );
}