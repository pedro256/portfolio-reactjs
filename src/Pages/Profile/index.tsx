import React from "react"
import Header from "../../Components/Header"
import { AreaOptions, ItemRelative } from "../../Styles/global"
import { Col, Row } from 'reactstrap'
import Lottie from "react-lottie"
import { ContainerAnimationCenter, ContainerData, ContainerHeaderApresentation, Description, FloatDiv, ImgProfile, Title, TitleApresentationName } from "./styles"
import getLottieConfig from "../../Extensions/Lottie/lottie.configs"
import imgprofile from '../../Assets/profile.png'
import { CardCertificate } from "../../Components/Cards/Certificates"
import imgEstacio from '../../Assets/logo-estacio.png'
import imgFmm from '../../Assets/logo-fmm.png'

const Profile: React.FC = () => {

    const animationLookin = require('../../Assets/looking.json')
    const cDate = new Date()


    function getLevel(yInit:number,yEnd:number):number{
        
        const gPercent = ((cDate.getFullYear()-yInit)/(yEnd-yInit))*100
        if(gPercent>100){
            return 100
        }
        return gPercent
    }

    

    return (
        <div>
            <Header />
            <AreaOptions>
                <ItemRelative left="70%" top="100px">
                    <FloatDiv>
                        <h1>Sobre Mim</h1>
                    </FloatDiv>
                </ItemRelative>
                <ItemRelative left="20%" top="20px">
                    <FloatDiv>
                        <h1>Trabalhos</h1>
                    </FloatDiv>
                </ItemRelative>
                <ItemRelative left="50%" top="80px">
                    <FloatDiv>
                        <h1>Habilidade</h1>
                    </FloatDiv>
                </ItemRelative>

                <ItemRelative left="5%" top="100px">

                    <FloatDiv>
                        <h1>Contatos</h1>
                    </FloatDiv>

                </ItemRelative>
            </AreaOptions>
            <ContainerAnimationCenter>
                <div>
                    <Lottie
                        options={getLottieConfig(animationLookin)}
                        width={200}
                        height={200}
                        isStopped={false}
                        isPaused={false}
                    />

                </div>
            </ContainerAnimationCenter>

            <ContainerHeaderApresentation>

                    <Row>
                        <Col sm={6}>
                            <h1>Ol?? eu sou </h1>
                            <TitleApresentationName>Pedro</TitleApresentationName>
                        </Col>
                        <Col sm={6}>
                            <ImgProfile src={imgprofile} alt="profile" />
                        </Col>

                    </Row>
            </ContainerHeaderApresentation>
            <div>
                <Description>
                    Uma pessoa que procura estar se desenvolvendo pessoalmente e profissionalmente,
                    focado e determinado para enfrentar qualquer desafio que a vida lhe propor.
                    <br></br>
                    <br></br>
                    Trabalho na ??rea de TI por volta de 2 anos e em poucas experi??ncias construo minha
                    carreira, procuro cada vez mais me aperfei??oar e me capacitar na ??rea de desenvolvimento. Possuo conhecimento em Programa????o Orientada a Objeto, Programa????o Funcional, Javascript, Typescript, Java, React. Tenho interesse no desenvolvimento back-end, mas isso n??o interfere em nada no meu desempenho em front-end, boas pr??ticas de programa????o eu considero essencial e um pilar para um um bom projeto.
                </Description>
            </div>

            <div>
                <Title align="right">Forma????o</Title>
            </div>
            <ContainerData borderRight>
                <CardCertificate
                logo={imgEstacio}
                title="Estacio"
                date="2020-2025"
                description="Baicharelado - Sistemas de informa????o "
                level={
                    getLevel(2020,2025)
                }
                />
                <CardCertificate
                logo={imgFmm}
                title="Funda????o Matias Machilne"
                date="2018-2020"
                description="Curso t??nico em Inform??tica"
                level={
                    getLevel(2018,2020)
                }
                />
                
                <CardCertificate
                logo={imgFmm}
                title="Funda????o Matias Machilne"
                date="2018-2020"
                description="Ensino M??dio"
                level={
                    getLevel(2018,2020)
                }
                />
            </ContainerData>

            <div>
                <Title align="left">Habilidades</Title>
            </div>
            <ContainerData borderLeft>
                
            </ContainerData>

        </div>
    )
}

export default Profile