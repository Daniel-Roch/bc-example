import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'

//Api
import KuppiApi from '../../services/api'

//Components
import Header from'../../components/Header'
import Footer from '../../components/Footer'
import CardProduto from '../../components/CardProduto'
import Load from '../../components/Load'

export default function Produto() {
    const [produto, setProduto] = useState("")
    let { id } = useParams();
    
    useEffect(()=>{
        dadosProdutos()
    },[])

    async function dadosProdutos(){
        const dados = await KuppiApi.getOne(id)
        if(dados.data != "") setProduto(dados.data)
    }
    if(produto == ""){
        return(<>
        <Header/>
            <Load/>
        <Footer/>
        </>)
    }else{
        return (<>
            <Header/>
                <div>
                    <CardProduto
                    name={produto.name}
                    src={produto.photo_url}
                    description={produto.description}
                    price={produto.price}
                    />
                </div>
            <Footer/>
        </>)
    }
}
