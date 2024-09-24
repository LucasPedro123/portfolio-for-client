import { project1, project2, project3, quotesImage } from '../../../../assets/images';
import * as S from './style'
import Card from '../../../../components/Card';

const Project: React.FC = () => {
    const CardInfo = [
        {
            id: 1,
            labels: 'HTML SCSS Python Flask',
            title: 'ChertNodes',
            description: 'Minecraft servers hosting',
            image: project1
        },
        {
            id: 2,
            labels: 'React Express Discord.js Node.js FlaskNode.js Flask',
            title: 'ProtectX',
            description: 'Discord anti-crash bot',
            image: project2
        },
        {
            id: 3,
            labels: 'CSS Express Node.js',
            title: 'Kahoot Answers Viewer',
            description: 'Get answers to your kahoot quiz',
            image: project3
        },
    ]

    return (
        <S.Container>
            <S.Square />
            <S.QuoteWrapper>
                <S.QuoteBorder>
                    <S.QuoteImage1 src={quotesImage} />
                    <S.QuoteText>
                        With great power comes great electricity bill
                    </S.QuoteText>
                </S.QuoteBorder>
                <S.QuoteBorderAuthor>
                    <S.QuoteImage2 src={quotesImage} />
                    <S.QuoteText>
                        - Dr. Who
                    </S.QuoteText>
                </S.QuoteBorderAuthor>
            </S.QuoteWrapper>
            <S.Wrapper>
                <S.Content>
                    <S.Title>
                        <S.Span>#</S.Span>projects
                    </S.Title>
                    <S.Line />
                </S.Content>
                <S.LinkText to={'/'} target='_blank'>
                    {' View all ~~>'}
                </S.LinkText>
            </S.Wrapper>
            <S.CardContainer>
                {
                    CardInfo.map((item) => (
                        <Card key={item.id} title={item.title} description={item.description} image={item.image} labels={item.labels} />
                    ))
                }
            </S.CardContainer>
        </S.Container>
    )
}

export default Project;