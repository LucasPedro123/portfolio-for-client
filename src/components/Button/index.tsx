import * as S from './style'

type ButtonProp = {
    content: string;
}

const Button : React.FC<ButtonProp> = ({content})=>{
    return (
        <S.Button>
            <S.Span>{content}</S.Span>
        </S.Button>
    )
}

export default Button