import { Carrossel, FotoCarrossel } from "./style";

import carrofoto from '../../../assets/telaini/Rectangle 4.png';

export default function CarrosselTI(){
    return(

        <Carrossel>            
            <FotoCarrossel src={carrofoto}/>
        </Carrossel>


    )
}