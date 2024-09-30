import * as S from './style';

const Contacts: React.FC = () => {


    return (
        <S.Container>
            <S.Wrapper>
                <S.Content>
                    <S.Title>
                        <S.Span>#</S.Span>contacts
                    </S.Title>
                    <S.Line />
                </S.Content>
                <S.Description>
                    I’m interested in freelance opportunities. However, <br /> if you have other request or question, don’t<br /> hesitate to contact me
                </S.Description>
            </S.Wrapper>
            <S.ContactsGroup>
                <S.ContactsTitle>Message me here</S.ContactsTitle>
                <S.ContactsWrapper>
                    <S.ContactContent>
                        <S.Icon className="fa-brands fa-discord" />
                        <S.Description>!Elias#3519</S.Description>
                    </S.ContactContent>
                    <S.ContactContent>
                        <S.Icon className="fa-solid fa-envelope" />
                        <S.Description>elias@elias.me</S.Description>
                    </S.ContactContent>
                </S.ContactsWrapper>
            </S.ContactsGroup>
            <S.DotTable>
                {
                    Array.from({ length: 25 }).map((_, index) => (
                        <S.Dot key={index} />
                    ))
                }
            </S.DotTable>
        </S.Container>
    )
}

export default Contacts;