import {Footer} from '../../components/Footer'
import HeaderTI from '../../components/Telaini/HeaderTelaini'
import { Titulo, Barra, HomeDiv , Categoria, LogoTI, Titulotext, TextoCateg, TextoPraVc, ProdutosPraVc, ProdutosDestaque, ProdutosMaisVendidos, Infos, LogosInferiores, CategoriaSecao} from './style'
import Produto from '../../components/Telaini/Produtos'
import Categorias from '../../components/Telaini/Categ'

import Celular from '../../assets/telaini/iphone1.png'
import Notebook from '../../assets/telaini/nootebook2.png'
import Tablet from '../../assets/telaini/tablet3.png'
import Acessórios from '../../assets/telaini/algo6.png'
import PC from '../../assets/telaini/pc7.png'
import Fone from '../../assets/telaini/fone.png'
import TV from '../../assets/telaini/tv5.png'
import Relogio from '../../assets/telaini/relogio8.png'

import Motorolacel from '../../assets/telaini/celular1.png'
import Iphonecel from '../../assets/telaini/celular2.png'
import TVS from '../../assets/telaini/smart1.png'
import Capinha from '../../assets/telaini/smart3.png'
import Tvmonitor from '../../assets/telaini/smart2.png'
import Relog from '../../assets/telaini/smart4.png'


import CarrosselTI from '../../components/Telaini/Carrossel'
import LogoElek from '../../assets/telaini/logo.png'
import RedesSociais from '../../assets/telaini/socials.png'




function Home() {

  return (
    <HomeDiv>
      <HeaderTI/>
      <Titulo>
      <LogoTI src={LogoElek}></LogoTI>
      <Titulotext>Bem-vindo à Elektro!</Titulotext>
      </Titulo>
      <CarrosselTI/>


      <Barra></Barra>
      <TextoCateg>Categorias Elektro</TextoCateg>

      <Categoria>
        <CategoriaSecao>
      <Categorias foto= {Celular} nome={'Celulares'}/>
      <Categorias foto= {TV} nome={'TVs'}/>
      </CategoriaSecao>
      <CategoriaSecao>
      <Categorias foto= {Notebook} nome={'Notebooks'}/>
      <Categorias foto= {Acessórios} nome={'Acessórios'}/>
      </CategoriaSecao>

      <CategoriaSecao>
      <Categorias foto= {Tablet} nome={'Tablets'}/>
      <Categorias foto= {PC} nome={'PCs'}/>
      </CategoriaSecao>
      <CategoriaSecao>
      <Categorias foto= {Fone} nome={'Periféricos'}/>
      <Categorias foto= {Relogio} nome={'Smartwatches'}/>
      </CategoriaSecao>
      </Categoria>


      <TextoPraVc>Para Você</TextoPraVc>
      <Barra></Barra>
      <ProdutosPraVc>
      <Produto nome='MotoG20' preço='R$800,00' imagem={Motorolacel}/>
      <Produto nome='Capa Celular' preço='R$20,00' imagem={Iphonecel}/>
      </ProdutosPraVc>

      <TextoPraVc>Produtos em Destaque</TextoPraVc>
      <Barra></Barra>
      <ProdutosDestaque>
      <Produto nome='SmartTV' preço='R$1400,00' imagem={Tvmonitor}/>
      <Produto nome='Monitor' preço='R$750,00' imagem={TVS}/>
      </ProdutosDestaque>
      
       
      <TextoPraVc>Mais Vendidos</TextoPraVc>
      <Barra></Barra>
      <ProdutosMaisVendidos>
      <Produto nome='iPhone X' preço='R$3200,00' imagem={Capinha}/>
      <Produto nome='Smartwatch' preço='R$900,00' imagem={Relog}/>
      </ProdutosMaisVendidos>

      <Infos>
        <p>Siga-nos nas redes sociais!</p>
        <LogosInferiores src={RedesSociais}></LogosInferiores>
      </Infos>
      <Footer/>
    </HomeDiv>
  )
}

export default Home