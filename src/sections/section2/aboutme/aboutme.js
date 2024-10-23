import '../aboutme/aboutme.css'

function AboutMe() {
    return (
        <div className='aboutme-main' data-aos="flip-left" data-aos-duration="2000">
            <pre>
                <span style={{color: '#ffe00a'}}>{`function AboutMe() {`}</span>
    {`
    `}
    <span style={{color: '#9a4a8c'}}>return (</span> 
        {`
        `}
        <span style={{color: '#1d73b8'}}>{`<h1>`}</span>Sobre mim<span style={{color: '#1d73b8'}}>{`<h1>`}</span>
        {`
        `}
        <span style={{color: '#1d73b8'}}>{`<textarea>`}</span>
            {`
            Olá, meu nome é Clebson Barbosa dos Santos, tenho 29 anos e sou 
            desenvolvedor front-end júnior, com paixão por criar interfaces 
            modernas e funcionais. Tenho conhecimento em HTML, CSS, JavaScript, 
            MySQL, TypeScript e React.js, e estou sempre buscando aprimorar 
            minhas habilidades em tecnologias e frameworks voltados ao 
            front-end. Também tenho como objetivo me tornar um desenvolvedor 
            full-stack, focando principalmente em banco de dados. Sou dedicado à 
            pontualidade e comprometido com a qualidade em cada etapa do 
            desenvolvimento. Estou animado para contribuir em projetos
            desafiadores e continuar crescendo na área de desenvolvimento.`}
            {`
        `}
        <span style={{color: '#1d73b8'}}>{`</textarea>`}</span>
    {`
    `}
    <span style={{color: '#9a4a8c'}}>{`)`}</span>
{`
`}
<span style={{color: 'yellow'}}>{`}`}</span>
            </pre>
        </div>
    )
}

export default AboutMe