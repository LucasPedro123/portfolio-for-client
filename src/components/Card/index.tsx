import Button from '../Button/index';
import * as S from './style'

type CardProp = {
    title: string;
    description: string;
    image: string;
    labels: string;
}

const Card: React.FC<CardProp> = ({ title, description, image, labels }) => {

    const labelsArr = labels.split(' ')

    return (
        <S.Container>
            <S.CardImage src={image} />
            <S.CardLabel>
                {labelsArr.map(e => (<S.Label>{e}</S.Label>))}
            </S.CardLabel>
            <S.Wrapper>
                <S.CardTitle>{title}</S.CardTitle>
                <S.CardDescription>{description}</S.CardDescription>
                <S.ContentButtons>
                    <Button content='Live <~>' />
                </S.ContentButtons>
            </S.Wrapper>
        </S.Container>
    )
}

export default Card;