import styled from "styled-components";

const Container = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 30px;
  box-shadow: 5px 5px 5px gray;
  border-radius: 7px;
`;

const ContainerL = styled(Container)`
    height: 600px;
    width: 600px;
`

const ContainerSm= styled(Container)`
    width: 300px;
`

const Title = styled.h3`
    font-size: 1.15rem;
    font-weight: 400;
    margin: 0 auto 0 0;
`

const OuterCircle = styled.div`
    height: 10px;
    width: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    box-shadow: 1px 1px lightgray;
`

const InnerCircle = styled.div`
    height: 7px;
    width: 7px;
    margin: auto;
    border-radius: 100%;
`
const SmallCircle = (props: {color:string}) => {
    return(
        <OuterCircle>
            <InnerCircle style={{backgroundColor: props.color}}/>
        </OuterCircle>
    )
}

export {Container, Title, SmallCircle}