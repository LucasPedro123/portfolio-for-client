import * as S from './style'
import { SectionAboutMe, SectionContacts, SectionHero, SectionProject, SectionSkills } from './Sections';
import { Header } from '../../components/index';

const Home : React.FC = ()=>{

    return(
        <S.Container>
            <Header/>
            <SectionHero />
            <SectionProject />
            <SectionSkills />
            <SectionAboutMe/>
            <SectionContacts/>
        </S.Container>
    )
}

export default Home;