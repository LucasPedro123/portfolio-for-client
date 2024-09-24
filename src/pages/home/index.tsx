import Hero from './Elements/Hero';
import Header from '../../components/header';
import * as S from './style'

const Home : React.FC = ()=>{

    return(
        <S.Container>
            <Header/>
            <Hero/>
        </S.Container>
    )
}

export default Home;