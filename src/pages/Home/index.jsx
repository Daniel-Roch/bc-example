import React, {useEffect,useState} from 'react'
/* import history from '../../services/history' */
import { useHistory } from 'react-router-dom'

//Api
import KuppiApi from '../../services/api'

//Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import Load from '../../components/Load'


//styled
import {DivHome,CardContainer} from './styled'

export default function Home(){
    const [produtos, setProdutos] = useState([])

    let history = useHistory()
    
    useEffect(()=>{
        apiReq()
    },[])
    
    async function apiReq(){
        const dados = await KuppiApi.getAll()
        setProdutos([...dados.data])
    }

    function handleClick(id) {
        history.push(`produto/${id}`)
    }

    if(produtos.length > 0){
        return (
        <DivHome>
            <Header/>
                    <CardContainer>
                    {produtos.map(produto =>{
                        return <Card
                        key={produto.id}
                        onClick={()=>{handleClick(produto.id)}}
                        src={produto.photo_url} 
                        name={produto.name}
                        category={produto.category}
                        >{produto.description}
                        </Card>
                    })}
                    </CardContainer>
            <Footer/>
        </DivHome>
        )
    }else{
        return(
        <DivHome>
            <Header/>
            <Load/>
            <Footer/>
        </DivHome>
        )
    }
}
