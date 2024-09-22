import * as S from './style'

type ButtonProp = {
    content: string;
}

const Button = ({content} : ButtonProp)=>{
    return (
        <S.Button>
            <S.Span>{content}</S.Span>
        </S.Button>
    )
}

export default Button