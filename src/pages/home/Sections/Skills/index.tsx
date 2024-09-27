import * as S from './style';

const Skills: React.FC = () => {
    const arrSkills = [
        {
            id: 1,
            header: 'Languages',
            data: ['TypeScript', 'Lua', 'Python', 'JavaScript'],
        },
        {
            id: 2,
            header: 'Databases',
            data: ['SQLite', 'PostgreSQL', 'Mongo'],
        },
        {
            id: 3,
            header: 'Other',
            data: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja'],
        },
        {
            id: 4,
            header: 'Tools',
            data: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome'],
        },
        {
            id: 5,
            header: 'Frameworks',
            data: ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js'],
        },
    ]

    return (
        <S.Container>
            <S.Wrapper>
                <S.Content>
                    <S.Title>
                        <S.Span>#</S.Span>skills
                    </S.Title>
                    <S.Line />
                </S.Content>
                <S.DotWrapper1>
                    {Array.from({ length: 25 }).map((_, index) => <S.Dot key={index} />)}
                </S.DotWrapper1>
                <S.Square1 />
                <S.Square2 />
                <S.LogoOutline />
                <S.DotWrapper2>
                    {Array.from({ length: 25 }).map((_, index) => <S.Dot key={index} />)}
                </S.DotWrapper2>
            </S.Wrapper>
            <S.TablesContainer>
                <S.TableGroup>
                    {
                        arrSkills.slice(0, 1).map((item) => (
                            <S.Table>
                                <S.TableHeader>
                                    <S.TableRow>
                                        <S.TableHeaderCell>{item.header}</S.TableHeaderCell>
                                    </S.TableRow>
                                </S.TableHeader>
                                <S.TableBody>
                                    <S.TableRow>
                                        {
                                            item.data.map((value) => (
                                                <S.TableBodyCell>{value}</S.TableBodyCell>
                                            ))
                                        }
                                    </S.TableRow>
                                </S.TableBody>
                            </S.Table>
                        ))
                    }
                </S.TableGroup>
                <S.TableGroup>
                    {
                        arrSkills.slice(1, 3).map((item) => (
                            <S.Table>
                                <S.TableHeader>
                                    <S.TableRow>
                                        <S.TableHeaderCell>{item.header}</S.TableHeaderCell>
                                    </S.TableRow>
                                </S.TableHeader>
                                <S.TableBody>
                                    <S.TableRow>
                                        {
                                            item.data.map((value) => (
                                                <S.TableBodyCell>{value}</S.TableBodyCell>
                                            ))
                                        }
                                    </S.TableRow>
                                </S.TableBody>
                            </S.Table>
                        ))
                    }
                </S.TableGroup>
                <S.TableGroup>
                    {
                        arrSkills.slice(3, 5).map((item) => (
                            <S.Table>
                                <S.TableHeader>
                                    <S.TableRow>
                                        <S.TableHeaderCell>{item.header}</S.TableHeaderCell>
                                    </S.TableRow>
                                </S.TableHeader>
                                <S.TableBody>
                                    <S.TableRow>
                                        {
                                            item.data.map((value) => (
                                                <S.TableBodyCell>{value}</S.TableBodyCell>
                                            ))
                                        }
                                    </S.TableRow>
                                </S.TableBody>
                            </S.Table>
                        ))
                    }
                </S.TableGroup>
            </S.TablesContainer>
        </S.Container>
    )
}

export default Skills;