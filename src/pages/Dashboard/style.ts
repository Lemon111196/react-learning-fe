import styled from "styled-components";

export const DashboardContainer = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .main{
        font-family: 'Courier New', Courier, monospace;
        display: flex;
        justify-content: center;
    }
    p{
        font-family: 'Courier New', Courier, monospace;
    }
    .link{
        display: flex;
        margin-top: 100px;
    }
    .createNote{
        display:flex;
        flex-direction: column;
        font-weight: 800;
        align-items: center;
        margin-right: 40px;
    }
    .createLinkcard{
        display:flex;
        flex-direction: column;
        font-weight: 800;
        align-items: center;
    }
    img{
        width: 300px;
        height: 300px;
    }

`;