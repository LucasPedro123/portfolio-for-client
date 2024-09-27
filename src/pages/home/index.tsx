import * as S from './style'
import { SectionAboutMe, SectionHero, SectionProject, SectionSkills } from './Sections';
import { Header } from '../../components/index';

const Home : React.FC = ()=>{

    return(
        <S.Container>
            <Header/>
            <SectionHero />
            <SectionProject />
            <SectionSkills />
            <SectionAboutMe/>
        </S.Container>
    )
}

export default Home;