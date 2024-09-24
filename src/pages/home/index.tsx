import * as S from './style'
import { SectionHero, SectionProject } from './Sections';
import { Header } from '../../components/index';

const Home : React.FC = ()=>{

    return(
        <S.Container>
            <Header/>
            <SectionHero />
            <SectionProject/>
        </S.Container>
    )
}

export default Home;